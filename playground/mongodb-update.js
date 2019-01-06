// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    //findOneAndUpdate
    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5c316790e4f0109932c731ae") },
    //     {
    //       $set: {
    //         completed: false
    //       }
    //     },
    //     { returnOriginal: false }
    //   )
    //   .then(res => console.log(res));

    // db.collection("Users")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5c31681ce4f0109932c731dc") },
    //     {
    //       $set: {
    //         name: "Holden"
    //       },
    //       $inc: {
    //         age: 1
    //       }
    //     },
    //     { returnOriginal: false }
    //   )
    //   .then(res => console.log(res));

    // client.close();
  }
);
