import { configureStore } from '@reduxjs/toolkit';
import ReviewReducer from './ReviewSlice';
import ServiceReducer from './ServiceSlice';
import TeamReducer from './TeamSlice';

export const store = configureStore({
  reducer: {
    feedbacks: ReviewReducer,
    service: ServiceReducer,
    team: TeamReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch