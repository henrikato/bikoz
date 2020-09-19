export const CADASTRO_PARCIAL = "CADASTRO_PARCIAL";
export const CADASTRO = "CADASTRO";

export const cadastroParcial = (dados) => ({
  type: CADASTRO_PARCIAL,
  payload: dados
});

export const cadastrar = dados => ({
  type: CADASTRO,
  payload: {
    request: {
      method: "POST",
      url: "/usuario",
      data: dados
    },
  }
})