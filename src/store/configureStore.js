import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import axiosMiddleware from "redux-axios-middleware";
import { Api } from "services/ApiService";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistedReducer = persistReducer({
  key: "PERSISTED_STORE",
  storage: AsyncStorage
}, reducers);

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(
      axiosMiddleware(Api, middlewareConfig)
    )
  );
  let persistor = persistStore(store);
  return { store, persistor }
}

const middlewareConfig = {
  errorSuffix: "_ERROR",
  returnRejectedPromiseOnError: true
}