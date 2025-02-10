import { IJobsParams } from "@/lib/types/api/job";
import { JobsRoute } from "../../routes/apiRoutes";
import { BaseService } from "../base";

class JobService extends BaseService {
  getAllJobs(params?: IJobsParams) {
    return this.axiosInstanceWithoutToken.get(JobsRoute.getAll(params), {
      params,
    });
  }
}

export const JobServices = new JobService();
