import { createSlice } from '@reduxjs/toolkit'

const initState = {
    counter: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        }
    }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer