const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://microservice-discipline-2.herokuapp.com/countries",
});
