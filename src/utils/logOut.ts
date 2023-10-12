import axios from "axios";

const config = {
  withCredentials: true,
  credentials: "include",
  headers: {
    "Origin-Allow-Credentials": true,
    "Access-Control-Allow-Credentials": true,
  },
};

const endpoint = "http://localhost:3001/logout";

export default async function LogOut() {
  return axios.post(endpoint, {}, config);
}
