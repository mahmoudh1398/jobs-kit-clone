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

class Jobs {
  private readonly base: string;

  constructor() {
    this.base = "job/all";
  }

  getJobs() {
    return this.base;
  }

  getUserJobs() {
    return this.base + "/detailed";
  }
}

export const UsersRoute = new Users();
export const JobsRoute = new Jobs();
