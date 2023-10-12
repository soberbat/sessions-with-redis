import axios from "axios";

export default async function Auth() {
  const response = await axios.get("http://localhost:3001/dashboard", {
    withCredentials: true,
    headers: {
      "Origin-Allow-Credentials": true,
      "Access-Control-Allow-Credentials": true,
    },
  });

  return response.data;
}
