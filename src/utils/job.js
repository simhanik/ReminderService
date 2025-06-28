const cron = require('node-cron')
const emailService = require('../services/email-service.js')
const transporter= require('../config/emailConfig.js')

/**
 * 10:00 am
 * Every 5 minutes
 * we will check are their any pending emails which was expected to be sent by now and is pending
 */

const setupJobs = () => {
    
    // cron.schedule('*/2 * * * *', async () => {
    //   const response = await emailService.fetchPedingEmails()
    //   response.forEach((email) => {
    //     emailService.setBasicEmail(
    //         'reminderservice@airline.com',
    //         email.recepientEmail,
    //         email.subject,
    //         email.content
    //     )
    //   })
    //   console.log(response);
      
    //   return response
    // });

    cron.schedule('*/2 * * * *', async () => {
        const response = await emailService.fetchPedingEmails()
        response.forEach((email) => {
            transporter.sendMail({
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            }, async(err, data) => {
                if(err) {
                    console.log(err);
                    
                } else {
                    console.log(data);
                    await emailService.updateTicket(email.id,{status:"SUCCESS"})
                    
                }
            })
        })
    })
}

module.exports = setupJobs