import {LitElement, html, css} from 'lit';
import {customElement, query} from 'lit/decorators.js';

@customElement("animated-box")
export class AnimatedBox extends LitElement {

  static styles = css`
    #box {
      width: 100px;
      height: 100px;
      background-color: blue;
      position: relative;
    }
  `;

  @query('#box')
  private box: HTMLElement | undefined;

  private isAnimated: boolean = false;
  private shouldBeAnimated: boolean = false;

  firstUpdated() {
    this.setAnimated(true);
  }

  setAnimated(animated: boolean) {
    this.shouldBeAnimated = animated;
    if (this.shouldBeAnimated && !this.isAnimated) {
      this.startAnimation();
    }
  }

  startAnimation() {
    this.isAnimated = true;
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
        direction: 'normal',
        easing: 'ease-in-out'
      }
    ).finished.then(() => {
      if (this.shouldBeAnimated) {
        this.startAnimation();
      } else {
        this.isAnimated = false;
      }
    });
  }

  render() {
    return html`
      <div id="box"></div>
    `;
  }
}
