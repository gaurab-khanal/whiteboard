import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './features/menuSlice'
import toolboxReducer from './features/toolboxSlice'
import roomIdRecucer from './features/roomIdSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        toolbox: toolboxReducer,
        roomId: roomIdRecucer
    }
})