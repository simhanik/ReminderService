const TicketService = require('../services/email-service.js')

const create = async (req,res) => {
    try {
        const response = await TicketService.createNotification(req.body)
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully registered an email'
        })
    } catch (error) {
        return res.status(500).json({
            data:response,
            success:false,
            err:error,
            message:'unable to register an email'
        })
    }
}

module.exports = {
    create
}