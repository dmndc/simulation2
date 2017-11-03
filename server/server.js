const express = require('express')
const { json } = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const cors = require ('cors')
const config = require('./../config')

const authCtrl = require('./controller/authCtrl');
const propCtrl = require('./controller/propCtrl');

const app= express();

const port = 3005;

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

app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/register', authCtrl.register);
app.get('/api/auth/logout', authCtrl.logout);


// Properties endpoints
app.get('/api/properties', propCtrl.getProperties);

// GET - /api/properties - Returns all properties associated with the logged in user.


app.listen(port, () => {console.log(`We are live on port: ${port}`)})