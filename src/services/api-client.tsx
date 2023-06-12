import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe76b7ed64994ac79b2e140c23b976df",
  },
});
