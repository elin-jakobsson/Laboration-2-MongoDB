const MongoClient = require('mongodb').MongoClient;

const {getProductList} = require('./productGenerator.js')

const url = 'mongodb://127.0.0.1:27017';
const options = { useNewUrlParser: true };

console.log('Attempting to connect to MongoDB...');
MongoClient.connect(url, options, (err, client) => {
	if( err ) {
		console.log('An error occurred! ', err);
		return;
	}
	const db = client.db('store');
	const collection = db.collection('products');
	let numDocs = 1000;
	let data = getProductList(numDocs);
	console.log(`Connected. Attempting to insert data (${numDocs} docs)`);
	collection.insertMany(data, (err) => {
		if( err ) {
			console.log('Failed to insert data. ', err);
			client.close();
			return;
		}
		console.log('Inserted data. Closing client...');
		client.close();
	})
})
