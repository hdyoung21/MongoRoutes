const { Schema, Model } = require('mongoose');
const { moveMessagePortToContext } = require('worker_threads');


const thoughtSchema = mew Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            max_length: 280,
            min_length: 1,
        },
    },

username: [
    {
        type: String,
        required: true
    }
],

