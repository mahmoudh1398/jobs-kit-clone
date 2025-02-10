import { IJobsParams } from "@/lib/types/api/job";

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

  getJobs(searchParams?: IJobsParams) {
    return searchParams ? `${this.base}?${searchParams}` : this.base;
  }
}

export const UsersRoute = new Users();
export const JobsRoute = new Jobs();
