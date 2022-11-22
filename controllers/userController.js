const { User, Thought } = require('../models');

module.exports = {
    collectAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    collectOneUser(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought associated with that ID." })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    createNewUser(req, res) {
        User.create(req.body)
            .then((newUser) => {
                res.json(newUser)
            })
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.thoughtId })
            .then((User) => {
                !user
                    ? res.status(404).json({ message: "oops" })
                    : res.json(user)
            })
    }
};
