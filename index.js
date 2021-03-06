require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./products_controller')

massive(process.env.CONNECTION_STRING).then(db=>{
	app.set('db',db);
	console.log('database connected')
}).catch(err=>console.log(err))

app.use(json());

app.get('/api/products', controller.getAll)
app.get('/api/products/:id', controller.getOne)
app.put('/api/products/:id', controller.update)
app.post('/api/products/', controller.create)
app.delete('/api/products/:id', controller.delete)


app.listen(process.env.PORT,console.log(`listening on ${process.env.PORT}`))
