import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer  from "./cartSlice"
 
const persistConfig = {
    key: "currentUser",
    versions: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, useReducer)
const persistedCart = persistReducer(persistConfig, cartReducer)

const store = configureStore({
    reducer: {
        user:  persistedReducer,
        cart: persistedCart
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

export default store;
