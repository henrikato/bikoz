import { combineReducers } from "redux";
import { login } from './autenticacaoReducer';
import { cadastro } from './usuarioReducer';
import { vagas } from './vagaReducer';

export default combineReducers({
  login,
  cadastro,
  vagas
})