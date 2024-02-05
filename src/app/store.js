import { configureStore } from '@reduxjs/toolkit';
import listSlice from '../features/slice';

const Store = configureStore({
  reducer: {
    list: listSlice,
  },
});

export { Store };
