class Users {
  private readonly base: string;
  auth = {
    login: () => {
      return this.base + "login/";
    },
  };

  constructor() {
    this.base = "users/";
  }

  getMe() {
    return this.base + "get-me/";
  }
}

export const UsersRoute = new Users();
