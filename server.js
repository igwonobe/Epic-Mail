const express = require('express')
const server = express()

server.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello From Server Side")
})
server.listen(3000, () =>{
    console.log("Sever is running on 3000...")
})