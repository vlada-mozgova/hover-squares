import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import levelReducer from "./slices/levelSlice";

const rootReducer = combineReducers({
  level: levelReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
