import "reflect-metadata";
import {requestsContainer} from './requests';

export const container = requestsContainer // Когда контейнера будет хотя бы два надо сделать Container.merge(...)