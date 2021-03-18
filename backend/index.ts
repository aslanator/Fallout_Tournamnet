import express from 'express';
import "reflect-metadata";
import 'diProvider/index';
import {container} from 'tsyringe';
import {IConfig, ICONFIG_NAME} from 'config/config.types';
const config: IConfig = container.resolve(ICONFIG_NAME);
// rest of the code remains same
const app = express();
const PORT = config.getPort();
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});