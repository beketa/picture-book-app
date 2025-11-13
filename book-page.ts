import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { SignalWatcher } from '@lit-labs/signals';
import { faceDetection } from './signals.js';
import { Kezaruu } from './kezaruu.js';

@customElement('book-page')
export class BookPage extends SignalWatcher(LitElement) {

  static styles = css`
    kezaruu-element {
      max-height: 480px;
    }
  `;

  @query("kezaruu-element")
  private kezaruu!: Kezaruu;

  private numFaces = 1;

  setNumFaces(numFaces: number) {
    this.numFaces = numFaces;
    this.requestUpdate();
  }

  render() {
    const detection = faceDetection.get();
    this.kezaruu?.setAnimated(detection.numFaces >= this.numFaces);
    return html`
      <div>
        <kezaruu-element></kezaruu-element>
      </div>
    `;
  }
}
