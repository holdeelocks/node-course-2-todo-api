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

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Eat lunch" })
    //   .then(res => console.log(res));

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(res => console.log(res));

    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(res => console.log(res));

    //PRACTICE PROBBLEMS

    // db.collection("Users")
    //   .deleteMany({ name: "Holden" })
    //   .then(res => console.log(res));

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5c314ac994b174b6efb8fb73") })
      .then(res => console.log(JSON.stringify(res, undefined, 2)));

    // client.close();
  }
);
