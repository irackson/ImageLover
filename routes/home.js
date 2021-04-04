//! import router
const router = require('express').Router();
const UsersRouter = require('./users');
const GoalsRouter = require('./goals');

///////////////////////////////
//! Router Specific Middleware
////////////////////////////////

router.use('/users', UsersRouter);
router.use('/goals', GoalsRouter);

////////////////////////////////
//! Router Specific Routes
////////////////////////////////

router.get('/', (req, res) => {
    res.render('home', { loggedIn: req.session.user });
});

////////////////////////////////
//! Export the Router
////////////////////////////////

module.exports = router;
