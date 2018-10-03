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

	console.log(`Connected. Attempting to Delete all docs in collection products`);
	collection.deleteMany( err => {
		if( err ) {
			console.log('Failed to delete docs. ', err);
			client.close();
			return;
		}
		console.log('Deleted all docs in collection. Closing client...');
		client.close();
	})
})
