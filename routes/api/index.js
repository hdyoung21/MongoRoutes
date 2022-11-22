const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtsRoute');

router.use('/thoughts', thoughtRoutes);
// Make a route for your userRoutes

module.exports = router;