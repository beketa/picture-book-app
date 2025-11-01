import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { SignalWatcher } from '@lit-labs/signals';
import { faceDetection } from './signals.js';
import { AnimatedBox } from './animated-box.js';

@customElement('book-page')
export class BookPage extends SignalWatcher(LitElement) {
  @property({ type: String })
  backgroundImage = '';

  @query("animated-box")
  private box: AnimatedBox | undefined;

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
  `;

  render() {
    const detection = faceDetection.get();
    this.box?.setAnimated(detection.numFaces > 0);
    return html`
      <div class="background" style="background-image: url(${this.backgroundImage})">
        <animated-box></animated-box>
      </div>
    `;
  }
}
