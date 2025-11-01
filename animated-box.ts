import {LitElement, html, css} from 'lit';
import {customElement, query} from 'lit/decorators.js';

@customElement("animated-box")
class AnimatedBox extends LitElement {

  static styles = css`
    #box {
      width: 100px;
      height: 100px;
      background-color: blue;
      position: relative;
    }
  `;

  @query('#box')
  private box: HTMLCanvasElement | undefined;

  firstUpdated() {
    this.box?.animate(
      [
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, 100px)' },
        { transform: 'translate(300px, 100px)' },
        { transform: 'translate(300px, 0px)' },
        { transform: 'translate(0px, 0px)' },
      ],
      {
        duration: 3000,
        iterations: Infinity,
        direction: 'normal',
        easing: 'ease-in-out'
      }
    );
  }

  render() {
    return html`
      <div id="box"></div>
    `;
  }
}

customElements.define('animated-box', AnimatedBox);
