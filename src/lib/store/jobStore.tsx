import { create } from "zustand";
import { IJob } from "../types/api/job";

type TStoreModel = {
  jobs: IJob[];
  setJobs: (jobs: IJob[]) => void;
};

const useJobStore = create<TStoreModel>((set) => ({
  jobs: [],
  setJobs: (jobs: IJob[]) => set({ jobs }),
}));

export default useJobStore;
