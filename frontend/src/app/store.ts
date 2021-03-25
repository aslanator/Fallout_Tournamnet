import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { playerCreateReducer } from 'pages/player/create/playerCreateSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    playerCreate: playerCreateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
