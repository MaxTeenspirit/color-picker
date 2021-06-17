import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: '#000000',
  },
  reducers: {
    setColor: (state, { payload }) => {
      state.color = payload;
    },
  },
});

export const { setColor } = colorSlice.actions;

export const colorSelector = (state: RootState) => state.color;

export default colorSlice.reducer;
