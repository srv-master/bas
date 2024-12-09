/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'demodb';
const collection = 'products';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Create a new document in the collection.
db.getCollection('products').insertOne({
  name: "Chocolate",
  price: 19,
  category: "candy"
});

