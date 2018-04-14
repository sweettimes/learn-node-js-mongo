// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	db.collection('Todos').findOneAndUpdate({
		_id : new ObjectID("5ad1496533fb1b1a19dae24d")
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false,
	}).then((result) => {
		console.log(result);
	})

	// client.close();
});