const MongoClient = require('mongodb').MongoClient;

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

	console.log(`Connected. Attempting to show the eight first docs in collection products`);
	collection.find().limit(8).toArray((err, data) => {
		if( err ) {
			console.log('Failed to find 8 docs. ', err);
			client.close();
			return;
		}
    console.log('Display data: ', data);
		console.log('Found all 8 docs. Closing client...');
		client.close();
	})
})
