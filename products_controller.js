
module.exports = {
	create: (req,res,next) => {
		req.app.get('db')
			.create_product([req.body.name,req.body.description, req.body.price, req.body.image_url])
			.then(res.status(200))
			.catch(res.send("Something went wrong").status(500))
	 },
	getOne: (req,res,next) => { 
		req.app.get("db")
			.read_product([req.params.id])
			.then(response=>res.send(response).status(200))
			.catch(err => console.log(err) || res.send("Something went wrong").status(500))
	}, 
	getAll: (req,res,next) => { 
		req.app.get("db")
			.read_products()
			.then(response=>res.send(response).status(200))
			.catch(err => console.log(err) || res.send("Something went wrong").status(500))
	}, 
	update: (req,res,next) => { 
		req.app
			.get("db")
			.update_product([req.query.desc, req.params.id])
			.then(res.status(200))
			.catch(res.send("Something went wrong").status(500));
	}, 
	delete: (req,res,next) => { 
		req.app
			.get("db")
			.delete_product([req.params.id])
			.then(res.status(200))
			.catch(res.send("Something went wrong").status(500));
	}
};