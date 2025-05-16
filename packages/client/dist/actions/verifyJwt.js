import { BASE_URL } from "../constants.js";
import { VerifyJwt } from "../endpoints/index.js";
export async function verifyJwt(options) {
    const url = new URL(`${BASE_URL}${VerifyJwt.path}`);
    url.searchParams.set('token', options.token);
    url.searchParams.set('domain', options.domain);
    const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    }
    if (response.status === 400) {
        const { error, error_message } = await response.json();
        if (error === 'invalid_token') {
            throw new Error("Invalid token: " + error_message);
        }
        if (error === 'invalid_params') {
            throw new Error("Invalid params: " + error_message);
        }
        throw new Error('Bad request');
    }
    throw new Error(`Request failed (status ${response.status})`);
}
