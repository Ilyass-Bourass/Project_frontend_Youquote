import api from './api';

export const login = async (email, password) => {
  await api.get('/sanctum/csrf-cookie'); 
  const response = await api.post('/login', { email, password });
  return response.data;
};
