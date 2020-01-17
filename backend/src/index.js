const express = require('express');
const routes = require('./routes')
const mongoose = require("mongoose");

const PORT = 3000
const app = express()

app.use(express.json())
app.use(routes)

const mongodbUri = "mongodb+srv://eris:Er1sl@ndio@cluster0-ecwcd.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.listen(PORT, () => {
    console.log('server online on http://localhost:3000')
})