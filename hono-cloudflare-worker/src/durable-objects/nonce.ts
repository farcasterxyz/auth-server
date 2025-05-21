import { DurableObject } from "cloudflare:workers";

export class Nonce extends DurableObject<Cloudflare.Env> {
  constructor(ctx: DurableObjectState, env: Cloudflare.Env) {
    super(ctx, env)
  }

  async initialize(): Promise<boolean> {
    this.initialized
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5m from now

    await this.ctx.storage.put<number>('expiresAt', expiresAt);

    this.ctx.storage.setAlarm(expiresAt);

    return true;
  }

  // Consume the nonce if it's valid
  async consume(): Promise<boolean> {
    const expiresAt = await this.ctx.storage.get<number>('expiresAt');
    if (!expiresAt || Date.now() > expiresAt) {
      return false;
    }

    await this.cleanup();

    return true;
  }

  async alarm() {
    await this.cleanup();
  }

  // Clean up by deleting all storage
  private async cleanup(): Promise<void> {
    await this.ctx.storage.deleteAll();
  }
}
