import { createSlice } from "@reduxjs/toolkit"

export const createWorkoutSlice = createSlice({
    name: 'createWorkout', 
    initialState: {
        value: 0,
    }, 
    reducers: {
        add: (state) => {
            state.value += 1
        }, 
        remove: (state) => {
            state.value -= 1
        }, 
        addByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { add, remove, addByAmount } = createWorkoutSlice.actions

export default createWorkoutSlice.reducer