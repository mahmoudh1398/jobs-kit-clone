import axios from "axios";
import { getSession } from "@/lib/actions/authActions";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

instance.interceptors.request.use(async (request) => {
  if (!request.headers.Authorization) {
    const session = await getSession();

    if (session?.token) {
      request.headers.Authorization = `Bearer ${session.token}`;
    }
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
