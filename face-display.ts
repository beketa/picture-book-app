import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {faceDetection} from './signals.js';
import {SignalWatcher} from '@lit-labs/signals';

@customElement('face-display')
export class FaceDisplay extends SignalWatcher(LitElement) {
  render() {
    return html`
      <h2>detected faces: ${faceDetection.get().numFaces}</h2>
      <ul>
        ${faceDetection.get().faces.map(face => html`
          <li>
            Age: ${Math.round(face.age)}, 
            Type: ${face.age > 18 ? 'Adult' : 'Child'}
          </li>
        `)}
      </ul>
    `;
  }
}
