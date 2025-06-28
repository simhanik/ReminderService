const transporter= require('../config/emailConfig.js')

const setBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await transporter.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

module.exports = {
    setBasicEmail
}

/**
 * SMTP -> a@b.com
 * receiver -> d@e.com
 * 
 * from:support@noti.com
 */