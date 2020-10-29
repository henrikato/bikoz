import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import axiosMiddleware from "redux-axios-middleware";
import { Api } from "services/ApiService";

export default (initialState = {}) => createStore(
  reducers,
  initialState,
  applyMiddleware(
    axiosMiddleware(Api, middlewareConfig)
  )
)

const middlewareConfig = {
  errorSuffix: "_ERROR",
  returnRejectedPromiseOnError: true
}