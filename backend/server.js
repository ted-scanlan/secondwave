const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connect establihsed successfully!");
})


const boards = require('./routes/boards')
const users = require('./routes/users')


app.use('./boards', boardsRouter)
app.use('./users', usersRouter)// similar to 'routes config' in rails.
//when someone goes to /boards it will load everything in the boards router




app.listen(port, () => {
  console.log(`Seerver is running on port: ${port}`);
});
