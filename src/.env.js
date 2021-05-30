module.exports = {
  // server: "http://localhost:8000",
  server: "https://api.kidskriya.com",
  config: {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  },
};
