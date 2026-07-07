import { baseUrl, getAuthHeaders } from './api-client.js';

const product = {
  price: Number(process.argv[3]),
  stock: Number(process.argv[4]),
};

const response = await fetch(`${baseUrl}/api/products/${process.argv[2]}`, {
  method: 'PUT',
  headers: await getAuthHeaders(),
  body: JSON.stringify(product),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || 'No se pudo actualizar el producto');
}

console.log(JSON.stringify(data, null, 2));
