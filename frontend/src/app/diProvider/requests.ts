import { BaseRequest } from 'app/requests/BaseRequest';

import {IBaseRequest, IBASE_REQUEST_NAME} from 'app/requests/IBaseRequest';
import {IPlayerRequest, IPLAYER_REQUEST_NAME} from 'app/requests/players/IPlayerRequest';
import { PlayerRequest } from 'app/requests/players/PlayerRequest';
import { Container } from "inversify";

export const requestsContainer = new Container;
console.log("HEREW!");
requestsContainer.bind<IBaseRequest>(IBASE_REQUEST_NAME).to(BaseRequest);
requestsContainer.bind<IPlayerRequest>(IPLAYER_REQUEST_NAME).to(PlayerRequest);