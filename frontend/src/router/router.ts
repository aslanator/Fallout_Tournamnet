import {PlayerIndex} from 'pages/player/index/PlayerIndex';
import {TournamentIndex} from 'pages/tournament/index/TournamentIndex';

export type route = {
    to: string,
    title: string;
    page: () => JSX.Element;
}

export type routeModel = {
    index: route
}

const players: routeModel = {
    index: {
        to: "/players",
        title: 'Игроки',
        page: PlayerIndex,
    }
}

const tournaments: routeModel = {
    index: {
        to: "/tournaments",
        title: 'Туриниры',
        page: TournamentIndex,
    }
}


export const routes: routeModel[] = [
    players,
    tournaments
];