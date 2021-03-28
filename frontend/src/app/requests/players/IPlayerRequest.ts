import { PlayerModel } from "app/models/PlayerModel";

export interface IPlayerRequest {
    index(): Promise<{items: PlayerModel[]}>
}

export const IPLAYER_REQUEST_NAME = Symbol('IPlayerRequest');

export type IPLAYER_REQUEST_SERVICE = {playerRequest: IPlayerRequest};