// MongoDB image upload test
//
// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formData = require('express-form-data');

const os = require('os');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set("view engine", "ejs");

const formDataOptions = {
  uploadDir: os.tmpdir(),
  autoClean: true
};
app.use(formData.parse(formDataOptions));
app.use(formData.format());
// ? app.use(formData.stream());
//app.use(formData.union());

//
const port = process.env.PORT;

mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => {
	console.log('connected!');
});

// Load the mongoose model for Image
//const imgModel = require('./models/image');
app.use('/api/images', require('./routes/images'));

app.listen(port, () => {
	console.log(`Server listening at port: ${port}`);
});
