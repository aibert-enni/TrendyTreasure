import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { appApi } from "../services/ApiService";

const rootReducer = combineSlices(appApi)

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch