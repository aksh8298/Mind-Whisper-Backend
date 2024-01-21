const express = require("express")
const mongoose = require("mongoose")
const Users = require("./src/models/users")
const { register, login, findUser } = require("./src/Controllers/users")
const server = express()
const cors = require("cors")
const { verifyToken} = require("./src/Middlewares")
const {validateForm,isValidated} = require("./src/Middlewares/index")
const {addForm} = require("./src/Controllers/Form")
server.use(express.json())
server.use(cors())
server.get("/", (req, res) => {

    res.status(200).json({
        uname: "akanksha",
        uphone: "8298213333"
    })

})
server.post("/register",register)
server.post("/login",login) 
server.get("/get-user",verifyToken,findUser)
server.post("/addForm",validateForm,isValidated,addForm)
    
    server.listen("3000", () => {
        console.log("server started")
    })
    mongoose.connect("mongodb://localhost:27017")
        .then(data => console.log("Database Connected"))
        .catch(errore => console.log("Error"))