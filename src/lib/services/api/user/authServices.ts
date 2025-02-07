import { ILoginResponse, ILoginValues, IWhoAmI } from "@/lib/types/api/user";
import { BaseService } from "../base";
import { UsersRoute } from "../../routes/apiRoutes";
import { IResponse } from "@/lib/types/api/base";

class UserService extends BaseService {
  login(values: ILoginValues) {
    return this.axiosInstanceWithoutToken.post<ILoginResponse>(
      UsersRoute.auth.login(),
      values
    );
  }
  whoAmI() {
    return this.axiosInstanceWithToken.get<IResponse<IWhoAmI>>(
      UsersRoute.whoAmI()
    );
  }
}

export const AuthServices = new UserService();
