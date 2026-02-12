import { BaseApiClient } from './BaseApiClient';

export class AuthApi extends BaseApiClient {
  private token: string | null = null;

  async login(username: string, password: string) {
    const response = await this.post('/auth/login', {
      username,
      password,
    });

    this.token = response.token;
  }

  getToken(): string | null {
    return this.token;
  }
}
