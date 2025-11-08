import { Actor } from './actor.js';

export class Motion {

  private isMoving: boolean = false;

  constructor(
    private actor: Actor,
    private motion: () => Promise<void>,
    private delay: () => number
  ) {}

  async start() {
    if (!this.actor.isAnimated() || this.isMoving) {
      return;
    }
    this.isMoving = true;
    await this.motion();
    setTimeout(() => {
      this.isMoving = false;
      this.start();
    }, this.delay())
  }
}
