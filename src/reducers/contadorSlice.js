import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    contador: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incrementar: (state) => {
            state.contador += 1
        },
        incrementar5: (state, action) => {
            state.contador += action.payload
        },
        decrementar: (state) => {
            state.contador -= 1
        },
        decrementar5: (state,action) => {
            state.contador -= action.payload
        },
        resetSlice: (state) => {
            state.contador = 0
        }
    }
})

export const { incrementar, incrementar5, decrementar, decrementar5, resetSlice } = counterSlice.actions