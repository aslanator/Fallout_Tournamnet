import {LocationDescriptor} from 'history';

export type route = {
    to: LocationDescriptor,
    title: string;
}

export type routeModel = {
    index: route
}

const players: routeModel = {
    index: {
        to: "players",
        title: 'Игроки'
    }
}

const tournaments: routeModel = {
    index: {
        to: "tournaments",
        title: 'Туриниры'
    }
}


export const routes: routeModel[] = [
    players,
    tournaments
];