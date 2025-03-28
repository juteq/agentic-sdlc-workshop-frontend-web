import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Default export to ensure TypeScript recognizes this as a module
export default store;
