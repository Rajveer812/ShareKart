const { MongoClient } = require('mongodb');

// Possible replica set names
const possibleReplicaSets = [
  'atlas-eawsvzm-shard-0',
  'ShareKart-shard-0',
  'Cluster0-shard-0',
  'atlas-shard-0'
];

const baseUri =
  'mongodb://ShareKart-rvj:Sharekart812@ac-eawsvzm-shard-00-00.ynkctyu.mongodb.net:27017,' +
  'ac-eawsvzm-shard-00-01.ynkctyu.mongodb.net:27017,' +
  'ac-eawsvzm-shard-00-02.ynkctyu.mongodb.net:27017/' +
  'ShareKart?ssl=true&authSource=admin&retryWrites=true&w=majority';

async function testReplicaSet(replicaSet) {
  const uri = `${baseUri}&replicaSet=${replicaSet}`;

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
  });

  try {
    console.log(`\nTesting replica set: ${replicaSet}`);
    await client.connect();

    console.log(`✅ SUCCESS! Replica set name is: ${replicaSet}`);

    const db = client.db('ShareKart');
    const collections = await db.listCollections().toArray();
    console.log(`Found ${collections.length} collections`);

    return replicaSet;
  } catch (error) {
    console.log(`❌ Failed with ${replicaSet}: ${error.message}`);
    return null;
  } finally {
    await client.close();
  }
}

async function findReplicaSet() {
  console.log('Testing possible replica set names...\n');

  for (const replicaSet of possibleReplicaSets) {
    const result = await testReplicaSet(replicaSet);
    if (result) {
      console.log('\n🎉 Found the correct replica set name!');
      console.log('\nYour connection string should be:\n');
      console.log(`MONGO_URL=${baseUri}&replicaSet=${result}`);
      return;
    }
  }

  console.log('\n❌ None of the common replica set names worked.');
}

findReplicaSet();
