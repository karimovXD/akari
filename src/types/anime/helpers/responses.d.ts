import type { Pagination } from "./shared";

export interface ApiResponse<T> {
    data: T;
    pagination?: Pagination
}

export interface ApiResponseWithoutPagination<T> {
    data: T;
}