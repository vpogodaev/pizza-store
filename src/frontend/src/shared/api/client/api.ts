import { getBaseApiUrl } from '@shared/config/env';
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: getBaseApiUrl(),
});

type Headers = Record<string, string | number | boolean>;

interface Response<T> {
  data: T;
  status: number;
  statusText: string;
}

const get = <R>(url: string, params?: any): Promise<Response<R>> =>
  axiosApi.get(url, { params });

const post = <D, R>(
  url: string,
  data: D,
  headers: Headers = { 'content-type': 'application/json' },
): Promise<Response<R>> => axiosApi.post(url, data, headers);

export const api = {
  get,
  post,
};
