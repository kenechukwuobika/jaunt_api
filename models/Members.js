const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Please provide a group id'],
        ref: 'Group'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Please provide a user id'],
        ref: 'User'
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;