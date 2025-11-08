import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { SignalWatcher } from '@lit-labs/signals';
import { faceDetection } from './signals.js';
import { Kezaruu } from './kezaruu.js';

@customElement('book-page')
export class BookPage extends SignalWatcher(LitElement) {
  @property({ type: String })
  backgroundImage = '';

  @query("kezaruu-element")
  private kezaruu: Kezaruu | undefined;

  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .background {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    kezaruu {
      max-height: 480px;
    }
  `;

  render() {
    const detection = faceDetection.get();
    this.kezaruu?.setAnimated(detection.numFaces > 0);
    return html`
      <div class="background" style="background-image: url(${this.backgroundImage})">
        <kezaruu-element></kezaruu-element>
      </div>
    `;
  }
}
