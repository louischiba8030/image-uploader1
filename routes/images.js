const router = require('express').Router();
const API = require('../controllers/imageController');

// setup multer for storing uploaded files
// https://ichi-bit.hateblo.jp/entry/2017/11/11/React%28create-react-app%29%E3%81%A8Express%28REST_API%29%E3%81%A7%E7%94%BB%E5%83%8F%E3%82%A2%E3%83%83%E3%83%97%E6%8E%B2%E7%A4%BA%E6%9D%BF%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B%282%29
/*
const multer = require('multer');
const { path } = require('express/lib/application');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/uploads');
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + '_' + file.originalname);
	}
});
const upload = multer({ storage: storage});
*/
router.get('/', API.fetchAllPosts);
router.get('/:id', API.fetchPostById);
router.post('/', API.createPost); //upload.single('image')
router.patch('/:id', API.updatePostById);
router.delete('/:id', API.deletePostById);

module.exports = router;
