import { environment } from 'src/environments/environment';

const API_BASE = environment.api.base;

export const ApiCalls = {
  register: {
    calculatePrice: `${API_BASE}/price-details`,
  },
};
