import { IConfig } from "./config.types";
import {singleton} from "tsyringe";

@singleton()
export class Config implements IConfig {

    getPort(): number {
        return 3000;
    }
}