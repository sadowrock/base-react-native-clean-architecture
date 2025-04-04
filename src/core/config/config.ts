export const API_CONFIG: {
  BASE_URL: string;
  ENDPOINTS: {
    PRODUCTS: string;
  };
} = {
  BASE_URL: 'https://fakestoreapi.in/api',
  ENDPOINTS: {
    PRODUCTS: '/products',
  },
};



export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
