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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M",
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
