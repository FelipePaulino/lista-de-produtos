export interface Paginator {
  metadata: {
    totalElements: number;
    totalPages: number;
    limit: number;
    page: number;
    isDisabledPrevious: boolean;
    isDisabledNext: boolean;
  };
}
