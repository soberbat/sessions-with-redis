import axios from "axios";

const config = {
  withCredentials: true,
  credentials: "include",
  headers: {
    "Origin-Allow-Credentials": true,
    "Access-Control-Allow-Credentials": true,
  },
};

const endpoint = "https://backendauth-6b5a3j5lyq-uc.a.run.app/signup";

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
