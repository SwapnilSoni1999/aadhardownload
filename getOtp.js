const axios = require('axios');
const question = require('readline-sync')
const FormData = require("form-data")


const sendOtp = async (token, cookie) => {

  const form = new FormData()
  const uid = question.question("Enter your UID: \n");
  form.append("uid", uid);
  form.append('enrollno', "")
  form.append("dateTime", "");
  form.append("vid", "");
  const captcha = question.question("Enter the captcha: \n");
  form.append("captcha", captcha);
  form.append("imgText", "undefined");
  form.append("sendOtpId", "");
  form.append("CSRFToken", token);
  var config = {
    headers: {
        "Connection": "keep-alive",
        "sec-ch-ua": '"Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"',
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?1",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
        "sec-ch-ua-platform": "Android",
        "Origin": "https://eaadhaar.uidai.gov.in",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://eaadhaar.uidai.gov.in/",
        "Accept-Language": "en-US,en;q=0.9",
        "Cookie":`arp_scroll_position=328.79998779296875; arp_scroll_position=335.20001220703125; ${cookie.split(';')[0]}`  
    },
  };
  await axios({
    method: "post",
    url: "https://eaadhaar.uidai.gov.in/sendOtp",
    data: form,
    headers: {
        ...form.getHeaders(),
        "Connection": "keep-alive",
        "sec-ch-ua": '"Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"',
        "Accept": "*/*",
        // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?1",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
        "sec-ch-ua-platform": "Android",
        "Origin": "https://eaadhaar.uidai.gov.in",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://eaadhaar.uidai.gov.in/",
        "Accept-Language": "en-US,en;q=0.9",
        "Cookie":`${cookie}`  
    },
  }).then(function (response) {
    console.log(response)
  });

}


module.exports = sendOtp