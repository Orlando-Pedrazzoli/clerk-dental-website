import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(
  async (config) => {
    // Aqui você pode adicionar o token do Clerk se necessário
    // const token = await getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro da API
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.error || 'Erro ao processar requisição');
    } else if (error.request) {
      // Erro de rede
      console.error('Network Error:', error.request);
      throw new Error('Erro de conexão com o servidor');
    } else {
      // Outro erro
      console.error('Error:', error.message);
      throw new Error(error.message);
    }
  }
);

export default api;