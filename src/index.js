const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig.js')

const {setBasicEmail} = require('./services/email-service.js')
const sender = require('./config/emailConfig.js')

const app = express()

const setupAndStartServer = () => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, () => {
        console.log(`Server started on Port : ${PORT}`);
        // console.log(sender);
        setBasicEmail(
            'support@admin.com',
            'sahudupesh431@gmail.com',
            'This is a testing email',
            'Hey, how are you. I hope you got it'
        )

        
        
    })
}

setupAndStartServer()