import { IPLAYER_REQUEST_SERVICE } from 'app/requests/players/IPlayerRequest';
import React from 'react';
export type PlayerIndexProps = {
    services: IPLAYER_REQUEST_SERVICE
}

export const PlayerIndex = ({services}: PlayerIndexProps) => {

    return (
        <div>Player</div>
    );
}