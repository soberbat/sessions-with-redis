import axios from "axios";

const config = {
  withCredentials: true,
  credentials: "include",
  headers: {
    "Origin-Allow-Credentials": true,
    "Access-Control-Allow-Credentials": true,
  },
};

const endpoint = "http://localhost:3001/signup";

export default async function SignUp(
  username: string,
  password: string,
  email: string
) {
  return axios.post(
    endpoint,
    {
      username,
      password,
      email,
    },
    {
      withCredentials: true,
    }
  );
}
