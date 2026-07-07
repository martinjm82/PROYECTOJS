import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.API_BASE_URL || 'https://proyectojs-yzzk.vercel.app';
const email = process.env.AUTH_USER_EMAIL;
const password = process.env.AUTH_USER_PASSWORD;

export const login = async () => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'No se pudo iniciar sesión');
  }

  return response.json();
};

export const getAuthHeaders = async () => {
  const { token } = await login();

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

export { baseUrl };
