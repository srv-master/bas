/* global use, db */
// MongoDB Playground

const database = "prov";
const collection = "cats";

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Create a new document in the collection.
db.getCollection("cats").insertMany([
  {
    name: "Iggy",
    age: 7,
    race: "Street corner",
  },
  {
    name: "Jiro",
    age: 2,
    race: "Japanese Demon",
  },
  {
    name: "Aisha",
    age: 17,
    race: "Demigodess",
  },
  {
    name: "Majsan",
    age: 4,
    race: "Bondkatt",
  },
]);
