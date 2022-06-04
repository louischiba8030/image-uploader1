const mongoose = require('mongoose');

// setup EJS

const imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img: {
		data: Buffer,
		contentType: String
	}
}, {
	timestamps: true,
});

module.exports = mongoose.model('Image', imageSchema);
