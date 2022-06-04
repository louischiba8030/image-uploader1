const Image = require('../models/image');
const fs = require('fs');
const path = require('path');
const { Buffer } = require('buffer');

module.exports = class API {
	static fetchAllPosts = async (req, res) => {
		try {
			const images = await Image.find();
//			res.status(200).json(images);
			res.render("pages/indexx", { blogPosts: images} );
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}

	static fetchPostById = async (req, res) => {
		res.send('Hello from API!');
	}

	static createPost = async (req, res) => {
		// delete req.file.buffer;
		// +++++ for debug use only !!! +++++
		await Image.deleteMany({});
		// +++++ for debug use only !!! +++++
		const img_b64binary = fs.readFileSync(req.files.image.path, {encoding: 'base64'});
		console.log("img_b64: ", img_b64binary);
		console.log("req.files: ", req.files);

		const newPost = Image({
			name: req.body.name,
			desc: req.body.desc,
			img: {
				data: img_b64binary,
				contentType: req.files.image.type
			}
		});
//		newPost.img = Buffer.from(newPost.img.data).toString('base64');
//		console.log("newPost: ", newPost.img);

		try {
			const result = await newPost.save();
//			res.render("pages/blog", { blogPosts: result });
			res.redirect("/api/images");
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
		//		const obj = {
//			name: req.body.name,
//			desc: req.body.desc,
//			img: {
//				data: fs.readFileSync(path.resolve(__dirname, '..') + '/uploads/' + req.body.image),
//				contentType: req.files.image.type
//			}
//		}
//		Image.create(obj, (err, item) => {
//			if (err)
//				console.error(err);
//			else {
//				// item.save();
//				delete req.file.buffer;
//				console.log("file uploaded!");
//				res.send(req.file);
				// res.redirect('/api/images/');
//			}
//		}
	}

	static updatePostById = async (req, res) => {
		res.send('Hello from API!');
	}

	static deletePostById = async (req, res) => {
		res.send('Hello from API!');
	}

}