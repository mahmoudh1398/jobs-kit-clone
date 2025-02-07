import { ILoginResponse, ILoginValues } from "@/lib/types/api/user";
import axios from "@/lib/services/api/base";
import { UsersRoute } from "../../routes/apiRoutes";

class Requests {
  login(values: ILoginValues) {
    return axios.post<ILoginResponse>(UsersRoute.auth.login(), values);
  }
}

export const AuthServices = new Requests();
