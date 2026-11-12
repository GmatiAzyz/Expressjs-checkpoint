
const express = require('express')

const app = express()

const PORT = 5000 || 5001

// set public folder as static
app.use(express.static("public"))

app.set("view engine", "pug")
app.set("views", "./views")


//router home 
app.get('/', (req, res) => {
    res.render("home")
})

//router services
app.get('/services', (req, res) => {
    res.render("services")
})

//router contact
app.get('/contact', (req, res) => {
    res.render("contact")
})

app.listen(PORT, (error)=> {
    error ? console.log(error)
    : console.log(`Server is Runing on http://localhost:${PORT}`)
})

app.get("/test", (req, res) => {
    res.send("Welcome To ExpressJS")
}) 


const checkDate = require("./middelwares/checkDate")
app.use(checkDate)

