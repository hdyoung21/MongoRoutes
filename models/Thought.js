const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            max_length: 280,
            min_length: 1,

        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;