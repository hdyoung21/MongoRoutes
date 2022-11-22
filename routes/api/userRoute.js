const router = require('express').Router();

const {
    collectAllUsers,
    collectOneUser,
    createNewUser,
    deleteUser,
} = require('../../controllers/userController');
const { deleteMany } = require('../../models/User');

router.route("/").get(collectAllUsers).post(createNewUser);

router.route("/:userId").get(collectOneUser).delete(deleteUser)

module.exports = router;