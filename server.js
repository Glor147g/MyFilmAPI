//create the server framework
//import express,  the app and the flim api 
const express = require('express')

// import swaggerUi from 'swagger-ui-express';
const  swaggerUi = require ('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

//my app file, were importing it
const app = express()
// const api = require('./filmsapi')

//define our app
app.get('/users', (req,res) => {
	res.send ([
		{
			id:1,
			title: "King Richard",
		},
		{

			id:2,
			title: "Mae Jemison",
		},
		{
			id:3,
			title:"Muhammed Ali",
		},
		{
			id:4,
			title:" Nerfetiti",
		},
		{
			id:5,
			title:"The Fresh Prince of Bel Air"
		}
		  ])


		  });

// app.use(express.json())
//handle json responses



//here is what I want the user to type to get the information
//when the client sends a get request to the '/' route :film json appears

// app.use('/', filmsapi)

// app.use('/', api)
//app.use('/devices', api) error  tell server to use routes from my app


//swagger ui

app.use('/swagger-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(apiSpec));


app.listen(3000, () => {
	console.log('server started on port 3000')

});