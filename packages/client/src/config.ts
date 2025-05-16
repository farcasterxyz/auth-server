export type Config = {
  origin: string;
}

export declare namespace createConfig {
  type Options = { origin?: string; }
}

export function createConfig(options: createConfig.Options) {
  return {
    origin: options.origin ?? 'https://auth.farcaster.xyz'
  }
}
