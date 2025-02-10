import { ILoginValues } from "@/lib/types/api/user";
import { BaseService } from "../base";
import { UsersRoute } from "../../routes/apiRoutes";

class UserService extends BaseService {
  login(values: ILoginValues) {
    return this.axiosInstanceWithoutToken.post(UsersRoute.auth.login(), values);
  }
  whoAmI() {
    return this.axiosInstanceWithToken.get(UsersRoute.whoAmI());
  }
}

export const AuthServices = new UserService();
