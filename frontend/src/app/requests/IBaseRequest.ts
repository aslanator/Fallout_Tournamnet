import { Model } from "app/models/Model";

export interface IBaseRequest {
    run(path: string, params: Record<string, any>): Promise<any>
}

export const IBASE_REQUEST_NAME = Symbol('IBaseRequest');