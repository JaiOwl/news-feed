import axios, { AxiosRequestConfig } from 'axios';

export function get (url: string, request?: AxiosRequestConfig) {
  return axios.get(url, request);
}

export function put (url: string, data: any, request?: AxiosRequestConfig) {
  return axios.put(url, data, request);
}

export function post (url: string, data: any, request?: AxiosRequestConfig) {
  return axios.post(url, data, request);
}

export function patch (url: string, data: any, request?: AxiosRequestConfig) {
  return axios.patch(url, data, request);
}

export function remove (url: string, request?: AxiosRequestConfig) {
  return axios.delete(url, request);
}
