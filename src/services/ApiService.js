import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MockData from './MockData';

const _apiUrl = "http://localhost:5000/api";

export const Api = axios.create({ baseURL: _apiUrl });

const mock = new MockAdapter(Api);

const defaultOptions = {
  validateStatus: status => status < 400
}

export const Fetch = (options) => api.request({...options, ...defaultOptions});

export const AddDefaultHeader = (key, value) => Api.defaults.headers[key] = value;

export const RemoveDefaultHeader = key => delete Api.defaults.headers[key];

mock.onPost("/usuario/login").reply(({data}) => {
  let { login } = JSON.parse(data);

  if (login.includes("candidato")) {
    let { token, tipoConta, ...usuario } = MockData.candidato;
    return [ 200, { usuario, token, tipoConta } ]
  }
  
  if (login.includes("anunciante")) {
    let { token, tipoConta, ...usuario } = MockData.anunciante;
    return [ 200, { usuario, token, tipoConta } ]
  }

  return [ 422, {} ]
})
    .onPost("/usuario").reply(({data}) => {
      MockData.usuarios.push(data);
      return [201, data];
    })
    .onGet("/usuario").reply(200, MockData.usuarios)
    .onGet(/\/usuario\/\d+/).reply(({url}) => {
      let { id } = url;
      let data = MockData.usuarios.find(x => x.id === id);
      return [ 200, data ]
    });

mock.onPost("/vaga").reply(({data}) => {
  MockData.vagas.push(data);
  return [201, data];
})
    .onPut(/\/vaga\/\d+/).reply(201)
    .onGet("/vaga").reply(200, MockData.vagas)
    .onGet(/\/vaga\/\d+/).reply(({url}) => {
      let { id } = url;
      let data = MockData.vagas.find(x => x.id === id);
      return [ 200, data ]
    });