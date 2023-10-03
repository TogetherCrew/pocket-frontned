import { apiConfig } from '@/utils/constants';
import { ApiError, ApiResponse } from '@/utils/types';

export const httpClient = {
  async get<T = unknown>(url: string): Promise<ApiResponse<T> | ApiError> {
    const res = await fetch(`${apiConfig.BASE_API_URL}${url}`);

    return await res.json();
  },
};
