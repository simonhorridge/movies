import { DataSource } from "src/DataAccess/DataSource";

export class JsonDataSource<TResult> implements DataSource<TResult> {    
    public getData(rawData: string): Promise<TResult> {    
        return new Promise<TResult>((resolve, error) => {
            if(!rawData)           {
                error("Data source not defined");
            }
            try {
                const rtn = JSON.parse(rawData);
                resolve(rtn as TResult);           
            }
            catch (ex) {
                error(ex)
            }
        })
    }
}