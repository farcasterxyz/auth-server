import { BASE_URL } from "../constants.js";
import { VerifySiwf } from "../endpoints/index.js";
export async function verifySiwf(options) {
    const response = await fetch(`${BASE_URL}${VerifySiwf.path}`, {
        method: 'POST',
        body: JSON.stringify(options)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get nonce');
    }
    const data = await response.json();
    if (data.valid === false) {
        throw new Error("Invalid: " + (data.message ?? 'unknown'));
    }
    return { token: data.token };
}
