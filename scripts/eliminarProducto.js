import { baseUrl, getAuthHeaders } from './api-client.js';

const response = await fetch(`${baseUrl}/api/products/${process.argv[2]}`, {
  method: 'DELETE',
  headers: await getAuthHeaders(),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || 'No se pudo eliminar el producto');
}

console.log(JSON.stringify(data, null, 2));
