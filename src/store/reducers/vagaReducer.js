import { LISTAR, LISTAR_SUCCESS, LISTAR_ERROR, VISUALIZAR, VISUALIZAR_SUCCESS, VISUALIZAR_ERROR } from 'store/actions/vagaActions';

const initialState = {
  vagas: []
}

export function vagas(state = initialState, action) {
  switch(action.type){
    case VISUALIZAR: 
    case VISUALIZAR_SUCCESS: return { ...state, ...action.payload }
    case VISUALIZAR_ERROR: return { ...state, error: action.error }
    case LISTAR:
    case LISTAR_SUCCESS: return {...state, data: action.payload.data };
    case LISTAR_ERROR: return { ...state, error: action.error };
    default: return initialState;
  }
}