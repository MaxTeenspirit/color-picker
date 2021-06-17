import { configureStore } from '@reduxjs/toolkit';
import ColorSliceReducer from './slices/colorSlice';

const store = configureStore({
  reducer: {
    color: ColorSliceReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
