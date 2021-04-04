//! create our new router
const router = require('express').Router();
const { index, newImage } = require('../controllers/images');
const { isAuthenticated } = require('../utils/auth');

///////////////////////////////
//! Router Specific Middleware
////////////////////////////////

////////////////////////////////
//! Router Specific Routes
////////////////////////////////

//* SHOW ALL IMAGES
router.get('/', isAuthenticated, index);

router.post('/', isAuthenticated, newImage);

//! CATCHALL
router.get('/*', (req, res) => {
    res.redirect('/images');
});
////////////////////////////////
//! Export the Router
////////////////////////////////

module.exports = router;
