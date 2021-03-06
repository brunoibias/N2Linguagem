const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://admin:<password>@cluster0.bk36w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3030);