const express = require('express')
const { json } = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const cors = require ('cors')
const config = require('./config.js')

const auth_controller = require('./controller/auth_controller')
const prop_controller = require('./controller/prop_controller')

const app= express();

const port = 5432;

app.use( json() )

massive(config.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(console.log)

    
app.use( session({
    secret: 'so secret',
    resave: false,
    saveUninitialized: false
}))



// Auth endpoints



// Properties endpoints




app.listen(port, () => {console.log(`We are live on port: ${port}`)})