const axios = require("axios");
const cheerio = require("cheerio");
const captcha = require('./getCaptcha')
const functionGet = async () => {
  const response = await axios.get("https://eaadhaar.uidai.gov.in/");
  const cookie = response.headers["set-cookie"];
  const mainCookie = cookie[0]
  const $ = cheerio.load(response.data);
  const token = $('input[name="CSRFToken"]').val();
  captcha(token, mainCookie);
    console.log(token, mainCookie)
};

functionGet();

