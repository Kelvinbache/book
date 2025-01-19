import axios from "axios";

export const api = async function api(books) {
  return await axios.get("http://localhost:3000/", books);
};
