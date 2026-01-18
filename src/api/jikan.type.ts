export interface DefaultJikanParams {
    page?: number;
    limit?: number;
    type?: "tv" | "movie";
    order_by?: "members" | "score" | "start_date";
    sort?: "asc" | "desc";
    min_score?: number;
    min_members?: number;
    sfw?: boolean;
}