import { configuration } from "./appConfig";

export function RequestPayload(data = {}, headers = {}) {
    this.data = data;
    this.headers = headers;
}
export const baseAPIConfig={
    baseUrl:configuration.apiBaseUrl
}
export const userAPIConfig={
    userlist:'/users'
}