const transporter= require('../config/emailConfig.js')
const TicketRepository = require('../repository/ticket-repository.js')
const repo = new TicketRepository()
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

const fetchPedingEmails = async () => {
    try {
        const response = await repo.get({status:"PENDING"})
        return response
    } catch (error) {
        console.log(error);
        
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data)
        return response
    } catch (error) {
        console.log(error);
        
    }
}

const updateTicket = async (ticketId,data) => {
    try {
        const response = await repo.update(ticketId,data)
        return response
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    setBasicEmail,
    fetchPedingEmails,
    createNotification,
    updateTicket
}

/**
 * SMTP -> a@b.com
 * receiver -> d@e.com
 * 
 * from:support@noti.com
 */