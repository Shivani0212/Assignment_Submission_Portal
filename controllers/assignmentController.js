const Assignment = require('../models/Assignment');

exports.uploadAssignment = async (req, res) => {
    const { task, admin } = req.body;
    if (!task || !admin) {
        return res.status(400).json({ message: 'Task and Admin are required' });
    }

    try {
        const assignment = await Assignment.create({
            userId: req.user._id,
            task,
            admin
        });
        res.status(201).json(assignment);
    } catch (err) {
        res.status(400).json({ message: 'Failed to upload assignment' });
    }
};

exports.getAdminAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ admin: req.user._id });
        res.status(200).json(assignments);
    } catch (err) {
        res.status(400).json({ message: 'Failed to retrieve assignments' });
    }
};

exports.acceptAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(
            req.params.id,
            { status: 'accepted' },
            { new: true }
        );
        res.status(200).json(assignment);
    } catch (err) {
        res.status(400).json({ message: 'Failed to accept assignment' });
    }
};

exports.rejectAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(
            req.params.id,
            { status: 'rejected' },
            { new: true }
        );
        res.status(200).json(assignment);
    } catch (err) {
        res.status(400).json({ message: 'Failed to reject assignment' });
    }
};
