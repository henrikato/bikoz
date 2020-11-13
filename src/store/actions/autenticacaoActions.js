export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT = "LOGOUT";

export const loginRequest = (login) => ({
  type: LOGIN,
  payload: {
    request: {
      method: "POST",
      url: "/usuario/login",
      data: login
    },
  }
})

export const logout = () => ({ type: LOGOUT, payload: {} })