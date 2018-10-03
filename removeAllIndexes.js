const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const options = {useNewUrlParser: true};

console.log('Attempting to connect to MongoDB...');
MongoClient.connect(url, options, (err, client)=>{
  if( err ) {
		console.log('An error occurred! ', err);
		return;
	}

  const db = client.db('store');
  const collection = db.collection('products');

  console.log(`Connected. Attempting remove all indexes from database collection`);
  collection.dropIndexes(err => {
    if (err) {
      console.log('An error occured ', err);
      client.close();
      return;
    }
    console.log("Removed all indexes from the database");
    client.close();
  });
});
