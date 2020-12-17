  
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducer"
// const persistConfig = {
//   key: "root",
//   storage,
// };


// //  const store = configureStore({
// //   reducer: rootReducer
// //  });

// // const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore ({reducer: rootReducer});
// export const persistor = persistStore(store);


