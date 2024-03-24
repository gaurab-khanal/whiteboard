import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './features/menuSlice'
import toolboxReducer from './features/toolboxSlice'


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        toolbox: toolboxReducer
    }
})