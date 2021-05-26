const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://root:Y7xU7CCvVmbUkNa4@cluster0.aa4ya.mongodb.net/test?authSource=admin&replicaSet=atlas-w2qdkc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3030);