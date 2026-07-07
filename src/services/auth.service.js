import jwt from 'jsonwebtoken';

export const login = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error('Credenciales incompletas');
    error.status = 400;
    throw error;
  }

  if (
    email !== process.env.AUTH_USER_EMAIL ||
    password !== process.env.AUTH_USER_PASSWORD
  ) {
    const error = new Error('Credenciales inválidas');
    error.status = 401;
    throw error;
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token };
};
