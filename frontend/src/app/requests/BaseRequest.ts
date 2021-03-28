import { IBaseRequest } from "./IBaseRequest";
import { injectable } from "inversify";

@injectable()
export class BaseRequest implements IBaseRequest {
    async run(path: string, params: Record<string, any>): Promise<any> {
        console.log('normal request');
        return await new Promise(resolve => setTimeout(() => resolve('test'), 2000));
    }
}