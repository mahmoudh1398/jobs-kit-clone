export interface IBaseResponse {
  status: number;
  message: string;
}

export interface IResponse<T> extends IBaseResponse {
  data: T;
  metadata?: { total: number; total_page: number };
}
