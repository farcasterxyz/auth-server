import { createConfig } from "./config.js";
import { generateNonce, verifySiwf, verifyJwt } from "./actions/index.js";

export declare namespace createClient {
  type Options = createConfig.Options;
}

export type Client = {
  generateNonce: () => generateNonce.ReturnType;
  verifyJwt: (options: verifyJwt.Options) => verifyJwt.ReturnType;
  verifySiwf: (options: verifySiwf.Options) => verifySiwf.ReturnType;
}

export function createClient(options: createClient.Options): Client {
  const config = createConfig(options);

  return {
    generateNonce: () => generateNonce(config),
    verifyJwt: (options: verifyJwt.Options) => verifyJwt(config, options),
    verifySiwf: (options: verifySiwf.Options) => verifySiwf(config, options),
  }
}
