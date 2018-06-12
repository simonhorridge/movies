export interface DataSource<TResult> {
    getData(): Promise<TResult>;
}