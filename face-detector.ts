import {LitElement, html, css} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import * as faceapi from 'face-api.js';
import {faceDetection} from './signals.js';

@customElement('face-detector')
export class FaceDetector extends LitElement {

  static styles = css`
    video#video {
      position: absolute;
      visibility: hidden;
    }
  `;

  @query('#canvas')
  private canvas: HTMLCanvasElement | undefined;
  private buffer = document.createElement('canvas');

  @query('#video')
  private video: HTMLVideoElement | undefined;

  private mediaRecorder: MediaRecorder | null = null;
  private writableStream: any = null;

  async firstUpdated() {
    await this.loadModels();

    this.canvas!.width = this.buffer.width = this.video!.width;
    this.canvas!.height = this.buffer.height = this.video!.height;

    this.startVideoStream();
  }

  async loadModels() {
    const MODEL_URL = '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
  }

  async startVideoStream() {
    if (this.video) {
      const stream = await navigator.mediaDevices.getUserMedia({video: {}});
      this.video.srcObject = stream;
      this.video.addEventListener('play', () => {
        this.detectFaces();
        this.startRecording();
      });
    }
  }

  async detectFaces() {
    if (this.canvas) {
      const bufferContext = this.buffer.getContext('2d');
      const canvasContext = this.canvas.getContext('2d');
      setInterval(async () => {
        if (this.video && this.canvas && bufferContext && canvasContext) {

          bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
          bufferContext.drawImage(this.video, 0, 0, this.buffer.width, this.buffer.height);

          const detections = await faceapi.detectAllFaces(this.buffer, new faceapi.TinyFaceDetectorOptions()).withAgeAndGender();
          faceapi.draw.drawDetections(this.buffer, detections);

          const newFaceDetection = {
            numFaces: detections.length,
            faces: detections.map(detection => ({age: detection.age})),
          };
          faceDetection.set(newFaceDetection);

          const textLabel = `${(new Date()).toLocaleString()}\ndetected faces: ${detections.length}`;
          (new faceapi.draw.DrawTextField(textLabel.split('\n'), new faceapi.Point(0, 0))).draw(this.buffer);

          canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
          canvasContext.drawImage(this.buffer, 0, 0, this.buffer.width, this.buffer.height);
        }
      }, 100);
    }
  }

  async startRecording() {
    try {
      const opfsRoot = await navigator.storage.getDirectory();
      const handle = await opfsRoot.getFileHandle("test.webm", {create: true});
      this.writableStream = await handle.createWritable();
    } catch (e) {
      console.log('Open file failed: ', e);
      return;
    }

    if (this.canvas) {
      const stream = this.canvas.captureStream(30);  // 30 FPS
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm; codecs=vp9'
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
      const handle = await opfsRoot.getFileHandle("test.webm");
      const file = await handle.getFile();
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.download = 'test.webm';
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
      <div>
        <button @click=${this.stopRecording}>Stop Recording</button>
        <button @click=${this.exportRecording}>Export Recording</button>
      </div>
      <video id="video" muted=true autoplay=true width="640" height="480"></video>
      <canvas id="canvas"></canvas>
    `;
  }
}
