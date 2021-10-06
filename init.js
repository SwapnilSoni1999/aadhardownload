const axios = require("axios");
const cheerio = require("cheerio");

const init = async () => {
  const response = await axios.get("https://eaadhaar.uidai.gov.in/");
  const cookie = response.headers["set-cookie"];
  const mainCookie = cookie[0]
  const $ = cheerio.load(response.data);
  const token = $('input[name="CSRFToken"]').val();
  return {
    csrf: token,
    cookie: mainCookie
  }
}

module.exports = init
