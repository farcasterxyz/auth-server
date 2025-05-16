import { VerifySiwf } from "../endpoints/index.js";
export declare namespace verifySiwf {
    type Options = VerifySiwf.RequestBody;
    type ReturnValue = {
        token: string;
    };
    type ReturnType = Promise<ReturnValue>;
}
export declare function verifySiwf(options: verifySiwf.Options): Promise<verifySiwf.ReturnType>;
