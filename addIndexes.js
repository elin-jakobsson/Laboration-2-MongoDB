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

  console.log(`Connected. Attempting add indexes to database collection`);
  // const indexOne = [['kategory', 1]]; //orelevant index som inte gjorde någon skillnad
  const indexTwo = [['kategory', 1],[ 'price', -1]];
  const indexThree = {name: 1};

  let indexList = [indexTwo, indexThree];
  for (let i = 0; i < indexList.length; i++) {
    collection.createIndex( indexList[i], (err, result) => {
      if (err) {
        console.log('Error', err);
        client.close();
        return;
      }
      console.log( `added index to database collection` );
      client.close();
    });
  }
});
