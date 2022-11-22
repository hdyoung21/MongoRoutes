const router = require('express').Router();
const {
    collectAllThoughts,
    collectOneThought,
    createNewThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route("/").get(collectAllThoughts).post(createNewThought);

router.route("/:thoughtId").get(collectOneThought).delete(deleteThought)

module.exports = router;
