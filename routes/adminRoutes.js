const express = require('express');
const {
    getAdminAssignments,
    acceptAssignment,
    rejectAssignment
} = require('../controllers/assignmentController');
const { adminProtect } = require('../middlewares/auth');

const router = express.Router();

router.get('/assignments', adminProtect, getAdminAssignments);
router.post('/assignments/:id/accept', adminProtect, acceptAssignment);
router.post('/assignments/:id/reject', adminProtect, rejectAssignment);

module.exports = router;
