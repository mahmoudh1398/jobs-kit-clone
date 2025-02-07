import { IBaseResponse } from "./base";

export interface ILoginValues {
  identifier: string;
  password: string;
}

export interface ILoginResponse extends IBaseResponse {
  token: string;
}