import { login } from './api-client.js';

const data = await login();

console.log(JSON.stringify(data, null, 2));
