import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Actor } from './actor.js';
import { Motion } from './motion.js';

@customElement("kezaruu-element")
export class Kezaruu extends LitElement implements Actor {

  static styles = css`
    div#container {
      display: grid;
      transform: scale(calc(480 / 1536), calc(480 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }

    div#eyes {
      background-color:transparent;
      background-image:url(./img/eyes.png);
      background-repeat:no-repeat;
      grid-area: 1 / 1;
    }
  `;

  @query('img#head')
  private head!: HTMLElement;

  @query('img#face')
  private face!: HTMLElement;

  @query('img#ears')
  private ears!: HTMLElement;

  @query('img#mouth')
  private mouth!: HTMLElement;

  @query('img#nose')
  private nose!: HTMLElement;

  @query('div#eyes')
  private eyes!: HTMLElement;

  @query('img#hand')
  private hand!: HTMLElement;

  private isAnimatedInternal: boolean = false;

  private blink: Motion | undefined;
  private faceMotion: Motion | undefined;
  private handMotion: Motion | undefined;

  firstUpdated() {
    this.setAnimated(false);

    this.blink = new Motion(this, async () => {
      await this.eyes?.animate(
        [
          { backgroundPosition: '0 0' },
          { backgroundPosition: '0 -1536px' },
          { backgroundPosition: '0 -3072px' },
          { backgroundPosition: '0 -1536px' },
          { backgroundPosition: '0 0' },
        ],
        {
          duration: 200,
          direction: 'normal',
          easing: 'steps(4)'
        }
      ).finished;
    }, () => Math.random() * 10000 + 200);

    this.faceMotion = new Motion(this, async () => {
      const moveFrames = (length: number) => [
        { transform: 'translate(0, 0)', easing: 'ease-in-out' },
        { transform: `translate(${length}px, 0)`, easing: 'ease-in-out', offset: 0.1 },
        { transform: `translate(${length}px, 0)`, easing: 'ease-in-out', offset: 0.9 },
        { transform: 'translate(0, 0)' },
      ];
      const options = {
        duration: 2000,
        direction: 'normal' as PlaybackDirection,
      };

      await Promise.all([
        this.head.animate(moveFrames(-10), options).finished,
        this.ears.animate(
          [
            { transform: 'translate(0, 0)', easing: 'ease-in-out' },
            { transform: `translate(-10px, 0)`, easing: 'ease-in-out', offset: 0.1 },
            { transform: `translate(-10px, 0) scaleY(0.95)`, easing: 'ease-in-out', offset: 0.3 },
            { transform: `translate(-10px, 0)`, easing: 'ease-in-out', offset: 0.5 },
            { transform: `translate(-10px, 0) scaleY(0.95)`, easing: 'ease-in-out', offset: 0.7 },
            { transform: `translate(-10px, 0)`, easing: 'ease-in-out', offset: 0.9 },
            { transform: 'translate(0, 0)' },
          ],
          options
        ).finished,
        this.face.animate(moveFrames(-20), options).finished,
        this.mouth.animate(moveFrames(-20), options).finished,
        this.nose.animate(moveFrames(-30), options).finished,
        this.eyes.animate(moveFrames(-20), options).finished]);
    }, () => Math.random() * 10000 + 5000)

    this.handMotion = new Motion(this, async () => {
      await this.hand?.animate(
        [
          { transform: 'translate(0, 0)', easing: 'ease-in-out' },
          { transform: `translate(-10px, 30px)`, easing: 'ease-in-out' },
          { transform: 'translate(0, 0)' },
        ],
        {
          duration: 2000,
          direction: 'normal',
        }
      ).finished;
    }, () => 3000);
  }

  isAnimated() {
    return this.isAnimatedInternal;
  }

  setAnimated(animated: boolean) {
    this.isAnimatedInternal = animated;
    if (this.isAnimated()) {
      this.blink?.start();
      this.faceMotion?.start();
      this.handMotion?.start();
    }
  }

  render() {
    return html`
      <div id="container">
        <img id="body" src="./img/body.png"></img>
        <img id="hand" src="./img/hand.png"></img>
        <img id="head" src="./img/head.png"></img>
        <img id="face" src="./img/face.png"></img>
        <div id="eyes"></div>
        <img id="nose" src="./img/nose.png"></img>
        <img id="ears" src="./img/ears.png"></img>
        <img id="mouth" src="./img/mouth.png"></img>
      </div>
    `;
  }
}
