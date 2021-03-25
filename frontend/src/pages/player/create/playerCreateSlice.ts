import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export type playerCreateState = {
    fio: string;
    city: string;
}

const initialState: playerCreateState = {
    fio: '',
    city: '',
}

const slice = createSlice({
    name: 'playerCreate',
    initialState,
    reducers: {
        setFio(state, action: PayloadAction<string>) {
            state.fio = action.payload;
        },
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        }
    }
})


export const {setFio, setCity} = slice.actions;

export const selectPlayerCreateState = (state: RootState) => state.playerCreate;

export const playerCreateReducer = slice.reducer;