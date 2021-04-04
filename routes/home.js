//! import router
const router = require('express').Router();
const UsersRouter = require('./users');
const ImagesRouter = require('./images');

///////////////////////////////
//! Router Specific Middleware
////////////////////////////////

router.use('/users', UsersRouter);
router.use('/images', ImagesRouter);

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
