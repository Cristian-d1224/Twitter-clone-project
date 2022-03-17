const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const port = 5000
const users = require('./routes/api/users')
const tweets = require('./routes/api/tweets')
const User = require('./models/User')
const bodyParser = require('body-parser')


mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    const user = new User({
        handle: "Cris",
        email: "Cris@mail.com",
        password: "12345"
    })
    user.save()
    res.send("Hello Cristian!")
})

app.use("/api/users", users)
app.use("/api/tweets", tweets)

app.listen(port, () => {
    console.log(`Listen on: http://localhost:${port}`)
})
