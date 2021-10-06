const init = require('./init')
const getCaptcha = require('./getCaptcha')
const getOtp = require('./getOtp')
const { question } = require('readline-sync')

async function main () {
    const { cookie, csrf } = await init()
    await getCaptcha(csrf, cookie)
    const uid = question('Enter your UID:\n')
    const captcha = question('Enter captcha:\n')
    const res = await getOtp(uid, captcha, csrf, cookie)
    console.log(res)
}

main()
