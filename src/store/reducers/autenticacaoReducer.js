import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR } from "store/actions/autenticacaoActions";

const initialState = {
  tipoConta: "",
  login: "",
  token: "",
  usuario: {
    tipoConta: 0,
    email: "",
    nome: "",
    dataNascimento: new Date(),
    telefone: "",
    cpfCnpj: "",
    perfil: {
      servicoOferecido: "",
      experienciaAnterior: "",
      tipoEstabelecimento: "",
      observacao: ""
    },
    endereco: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  }
}

export function login (state = initialState, action) {
  switch(action.type) {
    case LOGIN: return state;
    case LOGIN_ERROR: return { ...state, error: action.error };
    case LOGIN_SUCCESS: return action.payload.data;
    case LOGOUT: return initialState;
    default: return state;
  }
}