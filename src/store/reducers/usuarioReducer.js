import { CADASTRO_PARCIAL, CADASTRO, CADASTRO_ERROR } from "store/actions/usuarioActions";

const initialState = {
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

export function cadastro(state = initialState, action) {
  switch (action.type) {
    case CADASTRO_ERROR: return { ...state, error: action.error }
    case CADASTRO_PARCIAL: return {...state, ...action.payload}
    case CADASTRO: return state;
    default: return state;
  }
}