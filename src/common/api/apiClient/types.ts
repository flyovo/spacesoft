import type {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface ApiResponseData<TData = any> {
  data: TData;
  code: number;
  message: string;
  sendTime: string;
}

export interface ApiClient
  extends Pick<AxiosInstance, 'interceptors' | 'getUri' | 'head' | 'options'> {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<ApiResponseData>>;
  };
  get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponseData<T>>;
  request<T>(config: AxiosRequestConfig): Promise<ApiResponseData<T>>;
  delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponseData<T>>;
  post<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponseData<T>>;
  put<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponseData<T>>;
  patch<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponseData<T>>;
}
