import { baseUrl, getAuthHeaders } from './api-client.js';

const product = {
  name: process.argv[2],
  price: Number(process.argv[3]),
  description: process.argv[4],
  stock: Number(process.argv[5]),
};

const response = await fetch(`${baseUrl}/api/products/create`, {
  method: 'POST',
  headers: await getAuthHeaders(),
  body: JSON.stringify(product),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || 'No se pudo crear el producto');
}

console.log(JSON.stringify(data, null, 2));
