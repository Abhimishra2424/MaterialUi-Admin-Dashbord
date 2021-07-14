import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers["app-id"] = "60eea35698864018a0b8b4e4";
  return config;
});

// get req 60eea35698864018a0b8b4e4
export const request = {
  get: axios.get,
};

