class Users {
  private readonly base: string;
  auth = {
    login: () => {
      return this.base + "login";
    },
  };

  constructor() {
    this.base = "user/";
  }

  whoAmI() {
    return this.base + "whoami";
  }
}

export const UsersRoute = new Users();
