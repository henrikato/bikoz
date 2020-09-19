import { combineReducers } from "redux";
import { login } from './autenticacaoReducer';
import { cadastro } from './usuarioReducer';

export default combineReducers({
  login,
  cadastro
})