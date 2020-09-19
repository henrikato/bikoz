import axios from 'axios';

export const Api = axios.create({ baseURL: "http://localhost:5001/api" });

const defaultOptions = {
  validateStatus: status => status < 400
}

export const Fetch = (options) => api.request({...options, ...defaultOptions});

export const AddDefaultHeader = (key, value) => Api.defaults.headers[key] = value;

export const RemoveDefaultHeader = key => delete Api.defaults.headers[key];