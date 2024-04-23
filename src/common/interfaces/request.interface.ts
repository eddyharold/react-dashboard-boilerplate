export interface IRequestQueryParams {
  limit?: number;
  page?: number;
  [key: string]: string | number | undefined;
}
