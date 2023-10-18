import axios from "axios";

const config = {
  withCredentials: true,
  credentials: "include",
  headers: {
    "Origin-Allow-Credentials": true,
    "Access-Control-Allow-Credentials": true,
  },
};

// // const endpoint = "https://backendauth-6b5a3j5lyq-uc.a.run.app/login";
const endpoint = "http://localhost:3001/login";

export default async function Login(username: string, password: string) {
  return axios.post(endpoint, { username, password }, config);
}
