import * as sdk from 'matrix-js-sdk';
import type { MatrixClient } from 'matrix-js-sdk';

let matrixClient: MatrixClient | null = null;

export function createMatrixClient(homeserver: string) {
  matrixClient = sdk.createClient({ baseUrl: homeserver });
}

export async function login(username: string, password: string) {
  if (!matrixClient) throw new Error('Matrix client не инициализирован');

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
