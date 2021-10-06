const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const sendOtp = require("./getOtp");
const captcha = async (token, cookie) => {
  const form = new FormData();
  form.append("CSRFToken", token);
  var config = {
    headers: {
      accept: "*/*",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua":
        '"Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": '"Android"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      Cookie: cookie,
    },
  };
  await axios({
    method: "get",
    url: "https://eaadhaar.uidai.gov.in/captcha-image",
    data: form,
    headers: {
      // ...form.getHeaders(),
      Connection: "keep-alive",
      "sec-ch-ua":
        '"Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"',
      Accept: "*/*",
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "sec-ch-ua-mobile": "?1",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
      "sec-ch-ua-platform": "Android",
      Origin: "https://eaadhaar.uidai.gov.in",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://eaadhaar.uidai.gov.in/",
      "Accept-Language": "en-US,en;q=0.9",
      Cookie: `${cookie}`,
    },
  }).then(function (response) {
    const imageBuffer = Buffer.from(response.data, "base64");
    const qr = fs.writeFileSync("otp.png", imageBuffer);
    console.log("Captcha Generated.");
  });
  sendOtp(token, cookie);
};

module.exports = captcha;
