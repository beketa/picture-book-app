import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { FaceDetector } from './face-detector';
import { BookPage } from './book-page';

@customElement('main-element')
export class Main extends LitElement {

  static styles = css`
    div#main div {
      display: flex;
    }

    book-page {
      height: 480px;
      overflow: hidden;
    }

    .button-group {
      display: flex;
      align-item: center;
      gap: 16px;
      margin: 8px;
    }

    .button-group div {
      height: 48px;
      line-height: 48px;
    }

    select {
      width: 48px;
    }

    button {
      border: 2px solid;
      border-radius: 5px;
      min-height: 48px;
      min-width: 48px;
    }

    button#recording {
      border: 2px solid black;
      color: red;
      font-size: 40px;
    }
  `;

  @query("select#num_faces")
  numFacesSelect!: HTMLSelectElement;

  @query("button#recording")
  recordingToggle!: HTMLButtonElement;

  @query("button#export")
  exportButton!: HTMLButtonElement;

  @query("button#toggle_camera")
  cameraToggle!: HTMLButtonElement;

  @query("face-detector")
  faceDetector!: FaceDetector;

  @query("book-page")
  bookPage!: BookPage;

  private isRecording = false;
  private showCamera = true;

  toggleRecording() {
    if (this.isRecording) {
      this.faceDetector.stopRecording();
      this.recordingToggle.innerText = '●';
      this.exportButton.disabled = false;
    } else {
      this.faceDetector.startRecording();
      this.recordingToggle.innerText = '■';
    }
    this.isRecording = !this.isRecording;
  }

  exportVideo() {
    this.faceDetector.exportRecording();
  }

  changeNumFaces(e: InputEvent) {
    const numFaces = Number(this.numFacesSelect.options[this.numFacesSelect.selectedIndex].value);
    this.bookPage.setNumFaces(numFaces);
  }

  toggleCamera() {
    if (this.showCamera) {
      this.faceDetector.style.position = "absolute";
      this.faceDetector.style.visibility = "hidden";
      this.cameraToggle.innerHTML = "カメラ画面を見せる";
    } else {
      this.faceDetector.style.position = "static";
      this.faceDetector.style.visibility = "";
      this.cameraToggle.innerHTML = "カメラ画像を隠す";
    }
    this.showCamera = !this.showCamera;
  }

  render() {
    return html`
      <div id="main">
        <div>
          <face-detector></face-detector>
          <book-page></book-page>
        </div>
        <div class="button-group">
          <div>検出する顔の数</div>
          <select id="num_faces" @input=${(e: InputEvent) => this.changeNumFaces(e)}>
            <option value="1" selected>1</option>
            <option value="2">2</option>
          </select>
          <button id="recording" @click=${() => this.toggleRecording()}>●</button>
          <button id="export" @click=${() => this.exportVideo()} disabled>ビデオのエクスポート</button>
          <button id="toggle_camera" @click=${() => this.toggleCamera()}>カメラ画像を隠す</button> 
        </div>
      </div>`;
  }
}

