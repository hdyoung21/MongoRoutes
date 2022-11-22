const { Thought, User } = require('../models');

module.exports = {
    collectAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    collectOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought associated with that ID." })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //  creat new thoughts //
    createNewThought(req, res) {
        Thought.create(req.body)
            .then((newThought) => {
                res.json(newThought)
            })
            .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) => {
                !thought
                    ? res.status(404).json({ message: "oops" })
                    : res.json(thought)
            })
    }
};

