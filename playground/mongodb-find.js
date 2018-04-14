// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	// db.collection('Users').find({
	// 	age: 27
	// }).toArray().then((docs) => {
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch Users', err);
	// });

	// db.collection('Users').find().count().then((count) => {
	// 	console.log(`Users count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch Users', err);
	// });

	db.collection('Users').find({name: 'Joseph'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 4));
	});

	// client.close();
});