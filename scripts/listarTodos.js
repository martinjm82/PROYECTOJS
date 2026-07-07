import { baseUrl, getAuthHeaders } from './api-client.js';

const response = await fetch(`${baseUrl}/api/products`, {
  headers: await getAuthHeaders(),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || 'No se pudieron listar los productos');
}

console.log(JSON.stringify(data, null, 2));
