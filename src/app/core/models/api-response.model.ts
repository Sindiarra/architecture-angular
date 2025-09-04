export interface ApiResponseModel<T = any> {
  data?: T
  statusCode: number
  total?: number
}
