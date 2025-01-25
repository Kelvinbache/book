import axios from "axios";

// export const apiGet = async function api(books) {
//   return await axios.get("http://localhost:3000/", books);
// };

export const apiPost = async function api(books) {
  return axios.post("http://localhost:3000/AddBook", books);
};
