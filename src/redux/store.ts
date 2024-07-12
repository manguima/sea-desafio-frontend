import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeesReducer from "./slices/employeesSlice";
import menuReducer from "./slices/menuSlice";

const rootReducer = combineReducers({
  employees: employeesReducer,
  menu: menuReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["menu"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
