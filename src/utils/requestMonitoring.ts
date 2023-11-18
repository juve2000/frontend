import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { ENV } from "./constants";
function refreshToken() {
  return instance.post("/auth/refreshtoken", {
    refreshToken: getLocalRefreshToken(),
  });
}

function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");
  return accessToken;
}

function getLocalRefreshToken() {
  const refreshToken = window.localStorage.getItem("refreshToken");
  return refreshToken;
}

export const instance = axios.create({
  baseURL: `${ENV}/api/support/monitoring/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getLocalAccessToken()}`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    //   if (token && config?.headers) {
    //     config.headers["x-access-token"] = token;
    //     config.headers["Authorization"] = token;

    //   }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err: any) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig?._retry) {
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();
          const { accessToken } = rs.data;
          window.localStorage.setItem("accessToken", accessToken);
          instance.defaults.headers.common["x-access-token"] = accessToken;

          return instance(originalConfig);
        } catch (_error: any) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
