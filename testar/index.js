const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port= 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.set('view engine','pug');
app.set('views','./views');

const uri = `mongodb://localhost:27017/prov`;
mongoose.connect(uri);
mongoose.connection
  .on("open", () => console.log("mongoose is connected"))
  .on("error", (error) => console.log(error));
const Thing = require('./models/Thing.js');

const findThing = async ()=>{
    let things = await Thing.find();
    console.log(things);
};
findThing();