import { PlayerModel } from "app/models/PlayerModel";
import { IBaseRequest, IBASE_REQUEST_NAME } from "../IBaseRequest";
import { IPlayerRequest } from "./IPlayerRequest";
import { injectable, inject } from "inversify";

@injectable()
export class PlayerRequest implements IPlayerRequest{
    private path = '/api/players';
    private readonly request: IBaseRequest;
    
    public constructor(@inject(IBASE_REQUEST_NAME) request: IBaseRequest) {
        this.request = request;
    }

    index(): Promise<{ items: PlayerModel[]; }> {
        return this.request.run(this.path, {});
    }
}