import { configureStore } from '@reduxjs/toolkit'
import createWorkoutReducer from './reducers/createWorkoutSlice'

export const store = configureStore({
    reducer: {
        createWorkout: createWorkoutReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
