import { BASE_URL } from "../constants.js";
import { Nonce } from "../endpoints/index.js";
export async function generateNonce() {
    const response = await fetch(`${BASE_URL}${Nonce.path}`, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error(`Request failed (status ${response.status})`);
    }
    return await response.json();
}
