export const LISTAR = "LISTAR";
export const LISTAR_SUCCESS = "LISTAR_SUCCESS";
export const LISTAR_ERROR = "LISTAR_ERROR";
export const VISUALIZAR = "VISUALIZAR";
export const VISUALIZAR_SUCCESS = "VISUALIZAR_SUCCESS";
export const VISUALIZAR_ERROR = "VISUALIZAR_ERROR";

export const listarVagas = () => ({
  type: LISTAR,
  payload: {
    request: {
      method: "GET",
      url: "/vaga"
    }
  }
});

export const visualizarVaga = (id) => ({
  type: VISUALIZAR,
  payload: {
    request: {
      method: "GET",
      url: `/vaga/${id}`
    }
  }
})