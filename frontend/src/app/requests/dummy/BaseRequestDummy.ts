import { IBaseRequest } from "../IBaseRequest";

import { injectable } from "inversify";

@injectable()
export class BaseRequestDummy implements IBaseRequest {
    constructor(private dummyData: any) {}

    async run(path: string, params: Record<string, any>): Promise<any> {
        console.log('dummy request');
        return await new Promise(resolve => setTimeout(() => resolve(this.dummyData), 2000));
    }
}