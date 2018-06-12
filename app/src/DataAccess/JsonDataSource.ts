import { DataSource } from "src/DataAccess/DataSource";

export class JsonDataSource<TResult> implements DataSource<TResult> {   
    private rawData: string;
    private data: TResult;

    constructor(rawData: string) {
        this.rawData = rawData;
        if (rawData) {
            this.data = JSON.parse(this.rawData) as TResult;
        }
    }
    public getData(): Promise<TResult> {    
        return new Promise<TResult>((resolve, error) => {
            if(!this.rawData)           {
                error("Data source not defined");
            }
            try {
                resolve(this.data );           
            }
            catch (ex) {
                error(ex)
            }
        })
    }
}