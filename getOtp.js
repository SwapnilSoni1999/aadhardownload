const axios = require('axios');
const FormData = require("form-data")

const sendOtp = async (uid, captcha, csrf, cookie) => {
  const form = new FormData()
  form.append("uid", uid);
  form.append('enrollno', "")
  form.append("dateTime", "");
  form.append("vid", "");
  form.append("captcha", captcha);
  form.append("imgText", "undefined");
  form.append("sendOtpId", "");
  form.append("CSRFToken", csrf);
  const response = await axios({
    method: "post",
    url: "https://eaadhaar.uidai.gov.in/sendOtp",
    data: form,
    headers: {
      ...form.getHeaders(),
      "Connection": "keep-alive",
      "sec-ch-ua": '"Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"',
      "Accept": "*/*",
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua-mobile": "?1",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
      "sec-ch-ua-platform": "Android",
      "Origin": "https://eaadhaar.uidai.gov.in",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://eaadhaar.uidai.gov.in/",
      "Accept-Language": "en-US,en;q=0.9",
      "Cookie": `${cookie}`
    },
  })
  return response
}

module.exports = sendOtp
