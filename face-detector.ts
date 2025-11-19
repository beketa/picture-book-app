import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import * as faceapi from 'face-api.js';
import { faceDetection } from './signals.js';

@customElement('face-detector')
export class FaceDetector extends LitElement {

  static styles = css`
    div#container {
      display: grid;
    }

    canvas#canvas {
      grid-area: 1 / 1;
    }

    video {
      grid-area: 1 / 1;
    }
  `;

  @query('#canvas')
  private canvas!: HTMLCanvasElement;
  private detectionBuffer = document.createElement('canvas');
  private canvasBuffer = document.createElement('canvas');

  @query('#video')
  private video!: HTMLVideoElement;

  private mediaRecorder: MediaRecorder | null = null;
  private writableStream: FileSystemWritableFileStream | null = null;

  async firstUpdated() {
    await this.loadModels();

    this.canvas.width = this.detectionBuffer.width = this.canvasBuffer.width = this.video.width;
    this.canvas.height = this.detectionBuffer.height = this.canvasBuffer.height = this.video.height;

    this.startVideoStream();
  }

  async loadModels() {
    const MODEL_URL = './models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
  }

  async startVideoStream() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    this.video.srcObject = stream;
    this.video.addEventListener('play', () => {
      this.startFaceDetection();
    });
  }

  startFaceDetection() {
    setInterval(() => this.updateCanvas(), 1000 / 30);
    this.detectFaces();
  }

  private frameTimes: number[] = [];
  private frameRate = 0;

  private detections: faceapi.WithAge<faceapi.WithGender<{detection: faceapi.FaceDetection}>>[] | null = null;

  async updateCanvas() {
    const bufferContext = this.canvasBuffer.getContext('2d', { alpha: false });
    const canvasContext = this.canvas.getContext('2d', { alpha: false });

    if (!bufferContext || !canvasContext) {
      return;
    }

    bufferContext.drawImage(this.video, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height);

    if (this.detections) {
      faceapi.draw.drawDetections(this.canvasBuffer, this.detections);

      const textLabel = `${(new Date()).toLocaleString()}\ndetected faces: ${this.detections.length}\nframe rate: ${this.frameRate.toFixed(1)}`;
      (new faceapi.draw.DrawTextField(textLabel.split('\n'), new faceapi.Point(0, 0))).draw(this.canvasBuffer);
    }

    canvasContext.drawImage(this.canvasBuffer, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height);
  }

  async detectFaces() {
    const bufferContext = this.detectionBuffer.getContext('2d', { alpha: false, willReadFrequently: true });

    if (!bufferContext) {
      setTimeout(() => this.detectFaces(), 100);
      return;
    }

    bufferContext.drawImage(this.video, 0, 0, this.detectionBuffer.width, this.detectionBuffer.height);

    this.detections = await faceapi.detectAllFaces(this.detectionBuffer, new faceapi.TinyFaceDetectorOptions()).withAgeAndGender();

    const newFaceDetection = {
      numFaces: this.detections.length,
      faces: this.detections.map(detection => ({ age: detection.age })),
    };
    faceDetection.set(newFaceDetection);

    this.frameTimes.push(Date.now());
    if (this.frameTimes.length > 5) {
      this.frameTimes.shift();
    }
    if (this.frameTimes.length == 5) {
      this.frameRate = 5000 / (this.frameTimes[4] - this.frameTimes[0]);
    }
    setTimeout(() => this.detectFaces(), 100);
  }

  async startRecording() {
    try {
      const opfsRoot = await navigator.storage.getDirectory();
      const handle = await opfsRoot.getFileHandle("test.mp4", {create: true});
      this.writableStream = await handle.createWritable();
    } catch (e) {
      console.log('Open file failed: ', e);
      return;
    }

    if (this.canvas) {
      const stream = this.canvas.captureStream(30);  // 30 FPS
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/mp4;codecs=avc1'
      });

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0 && this.writableStream) {
          this.writableStream.write(event.data);
        }
      };

      this.mediaRecorder.onstop = async () => {
        if (this.writableStream) {
          await this.writableStream.close();
          this.writableStream = null;
          console.log('File saved successfully');
        }
      }

      this.mediaRecorder.start(1000);
      console.log('Recording started');
    }
  }

  stopRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      console.log('Recording stopped');
    }
  }

  async exportRecording() {
    try {
      const opfsRoot = await navigator.storage.getDirectory();
      const handle = await opfsRoot.getFileHandle("test.mp4");
      const file = await handle.getFile();
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.download = 'test.mp4';
      a.href = url;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.log("OPFS Read Error:", e);
    }
  }

  render() {
    return html`
      <div id="container">
        <video id="video" muted=true autoplay=true width="640" height="480"></video>
        <canvas id="canvas"></canvas>
      <div>
    `;
  }
}
