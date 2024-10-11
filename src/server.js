const express = require('express')
const dbConnection = require("./database/config")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 4000;
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(require("./routes/links"))
    }
    
    execute() {
        dbConnection()
        
        this.middlewares()        

        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`)
        })
    }
}

module.exports = Server