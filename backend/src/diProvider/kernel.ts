import {container} from "tsyringe";
import {ICONFIG_NAME} from 'config/config.types';
import { Config } from "config/Config";

container.register(ICONFIG_NAME, {
  useClass: Config
});
