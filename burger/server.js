const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 8080

const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Set Handlebars.
const exphbs = require("express-handlebars")

app.engine("hbs", exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/'
}))
app.set("view engine", "hbs")



// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller")

app.use(routes)

app.listen(PORT, () =>{
  console.log(`Now listening on ${PORT}`)
})