import { configureStore } from '@reduxjs/toolkit';
import ReviewReducer from './ReviewSlice';
import ServiceReducer from './ServiceSlice';

export const store = configureStore({
  reducer: {
    feedbacks: ReviewReducer,
    service: ServiceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch