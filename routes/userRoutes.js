const express = require('express');
const { register, login, getAdmins } = require('../controllers/userController');
const { uploadAssignment } = require('../controllers/assignmentController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/upload', protect, uploadAssignment);
router.get('/admins', protect, getAdmins);

module.exports = router;
