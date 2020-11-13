import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR } from "store/actions/autenticacaoActions";

const initialState = {
  tipoConta: "",
  login: "",
  token: ""
}

export function login (state = initialState, action) {
  switch(action.type) {
    case LOGIN: return state;
    case LOGIN_ERROR: return { ...state, error: action.error }
    case LOGIN_SUCCESS: return {...state, ...action.payload};
    case LOGOUT: return initialState;
    default: return state;
  }
}