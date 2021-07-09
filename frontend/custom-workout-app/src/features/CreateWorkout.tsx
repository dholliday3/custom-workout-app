import { useState } from "react"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { add, remove } from '../state/reducers/createWorkoutSlice'
import { Button } from '@material-ui/core'

export const CreateWorkout = () => {

    const workouts: number = useSelector((state: RootState) => state.createWorkout.value)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div>
            <Button onClick={() => dispatch(add())}>Add Workout</Button>
            <div>{workouts}</div>
            <Button onClick={() => dispatch(remove())}>Remove Workout</Button>
        </div>
    )

}