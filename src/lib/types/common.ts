export interface MessageResponse {
  message: string;
}

export interface DataResponse<T> extends MessageResponse {
  data: T;
}
