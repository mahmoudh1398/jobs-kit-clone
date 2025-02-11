import { IJobsParams } from "@/lib/types/api/job";
import { JobsRoute } from "../../routes/apiRoutes";
import { BaseService } from "../base";

class JobService extends BaseService {
  getJobs(params?: Partial<IJobsParams>) {
    return this.axiosInstanceWithoutToken.get(JobsRoute.getJobs(), {
      params,
    });
  }

  getUserJobs(params?: Partial<IJobsParams>) {
    return this.axiosInstanceWithToken.get(JobsRoute.getUserJobs(), {
      params,
    });
  }
}

export const JobServices = new JobService();
