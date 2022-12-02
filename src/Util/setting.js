import axios from "axios";
export const domain = "https://elearningnew.cybersoft.edu.vn";

export const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn",
  timeout: 30000,
});
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
    };
    const getToken = () => {
      let credentials = localStorage.getItem("credentials");
      credentials = JSON.parse(credentials);
      return credentials && credentials.accessToken;
    };
    const token = getToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
