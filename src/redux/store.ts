import { configureStore } from '@reduxjs/toolkit'
import casesSlice from "./slices/casesSlice";

export const store = configureStore({
    reducer: {
        cases: casesSlice,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch