import * as sdk from 'matrix-js-sdk';
let matrixClient = null;
export function createMatrixClient(homeserver) {
    matrixClient = sdk.createClient({ baseUrl: homeserver });
}
export async function login(username, password) {
    if (!matrixClient)
        throw new Error('Matrix client не инициализирован');
    const response = await matrixClient.login('m.login.password', {
        user: username,
        password: password,
    });
    return response;
}
export function logout() {
    localStorage.removeItem('matrix_access_token');
    localStorage.removeItem('matrix_homeserver');
    matrixClient = null;
}
