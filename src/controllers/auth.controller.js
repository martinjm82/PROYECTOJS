import * as authService from '../services/auth.service.js';

export const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json({ token: result.token });
  } catch (error) {
    next(error);
  }
};
