import { createStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);