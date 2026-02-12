import { test } from '@playwright/test';
import { BaseApiClient } from '../../api/BaseApiClient';

test('Products API should be reachable', async ({ request }) => {
  const apiClient = new BaseApiClient(request);
  const products = await apiClient.get('/products');
  console.log(`Total products: ${products.total}`);
});
