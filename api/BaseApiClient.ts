import { APIRequestContext } from '@playwright/test';

export class BaseApiClient {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(url: string) {
    const response = await this.request.get(url);
    this.validateResponse(response);
    return await response.json();
  }

  async post(url: string, body: object) {
    const response = await this.request.post(url, {
      data: body,
    });
    this.validateResponse(response);
    return await response.json();
  }

  private validateResponse(response: any) {
    if (response.status() < 200 || response.status() >= 300) {
      throw new Error(
        `API call failed with status ${response.status()}`
      );
    }
  }
}
