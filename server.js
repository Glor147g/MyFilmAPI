//create the server framework
//import express,  the app and the flim api 
const express = require('express')
const app = express()
const api = require('./filmsapi')

// import swaggerUi from 'swagger-ui-express';
const  swaggerUi = require ('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

//my app file, were importing it


app.use(express.json())
//handle json responses



//here is what I want the user to type to get the information
//when the client sends a get request to the '/' route :film json appears

app.use('/', api)
//app.use('/devices', api) error  tell server to use routes from my app


//swagger ui

app.use('/swagger-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(apiSpec));


app.listen(3000, () => {
	console.log('server started on port 3000')

});