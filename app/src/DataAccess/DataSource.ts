export interface DataSource<TResult> {
    getData(rawData: string): Promise<TResult>;
}