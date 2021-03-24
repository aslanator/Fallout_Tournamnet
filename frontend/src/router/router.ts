import {PlayerIndex} from 'pages/player/index/PlayerIndex';
import {PlayerCreate} from 'pages/player/create/PlayerCreate';
import {TournamentIndex} from 'pages/tournament/index/TournamentIndex';
import { Counter } from 'features/counter/Counter';
import _ from 'lodash';

export type route = {
    to: string,
    title: string;
    page: () => JSX.Element;
}

export type routeModel = {
    index: route,
    create?: route,
}

const players: routeModel = {
    index: {
        to: "/players",
        title: 'Игроки',
        page: PlayerIndex,
    },
    create: {
        to: "/players/create",
        title: 'Создание игрока',
        page: PlayerCreate,
    }
}

const tournaments: routeModel = {
    index: {
        to: "/tournaments",
        title: 'Туриниры',
        page: TournamentIndex,
    }
}

const counter: routeModel = {
    index: {
        to: "/couter",
        title: 'Счётчик',
        page: Counter,
    }
}

export const routes: routeModel[] = [
    players,
    tournaments,
    counter
];