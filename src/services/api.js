const API_PREFIX = "/api";

const api = {
  async get(url) {
    return await fetch(API_PREFIX + url).then((res) => res.json());
  },
};

export default api;
