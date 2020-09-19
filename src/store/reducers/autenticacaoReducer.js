import { LOGIN, LOGOUT, LOGIN_SUCCESS } from "store/actions/autenticacaoActions";

const initialState = {
  tipoConta: "",
  login: "",
  token: ""
}

export function login (state = initialState, action) {
  switch(action.type) {
    case LOGIN: return state
    case LOGIN_SUCCESS: {
      return {...state, ...action.payload}
    }
    case LOGOUT: return initialState
    default: return state
  }
}