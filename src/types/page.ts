export interface Page<T> {
	page: number;
	total_pages: number;
	total_results: number;
	results: Array<T>;
}
