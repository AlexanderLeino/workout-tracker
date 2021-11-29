require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://AlexanderLeino:Alienware7@fitnesstracker.jmfby.mongodb.net/fitnessTracker?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("fitnessTracker").collection("workOuts");
  // perform actions on the collection object
  client.close();
});