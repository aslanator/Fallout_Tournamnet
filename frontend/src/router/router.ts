import {PlayerIndex, PlayerIndexProps} from 'pages/player/index/PlayerIndex';
import {PlayerCreate, PlayerCreateProps} from 'pages/player/create/PlayerCreate';
import {TournamentIndex} from 'pages/tournament/index/TournamentIndex';
import { Counter } from 'features/counter/Counter';
import { Container } from 'inversify';
import { IPLAYER_REQUEST_NAME } from 'app/requests/players/IPlayerRequest';

export type route<T> = {
    to: string,
    title: string;
    page: (props: T) => JSX.Element;
    props(container: Container): T
}

export type routeModel<I, C> = {
    index: route<I>,
    create?: route<C>,
}

const players: routeModel<PlayerIndexProps, PlayerCreateProps> = {
    index: {
        to: "/players",
        title: 'Игроки',
        page: PlayerIndex,
        props: (container: Container) => ({
           services: {
                playerRequest: container.get(IPLAYER_REQUEST_NAME)
           } 
        }),
    },
    create: {
        to: "/players/create",
        title: 'Создание игрока',
        page: PlayerCreate,
        props: () => ({}),
    }
}

const tournaments: routeModel<{}, {}> = {
    index: {
        to: "/tournaments",
        title: 'Туриниры',
        page: TournamentIndex,
        props: () => ({}),
    }
}

const counter: routeModel<{}, {}> = {
    index: {
        to: "/couter",
        title: 'Счётчик',
        page: Counter,
        props: () => ({}),
    }
};

export const routes: routeModel<any, any>[] = [
    players,
    tournaments,
    counter,
];