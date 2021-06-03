module.exports = {
  server: "https://api.kidskriya.com",
  // server: "http://localhost:8000",
  config: {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  },
};
