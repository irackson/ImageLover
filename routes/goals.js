//! create our new router
const router = require('express').Router();
const { index, newGoal } = require('../controllers/goals');
const { isAuthenticated } = require('../utils/auth');

///////////////////////////////
//! Router Specific Middleware
////////////////////////////////

////////////////////////////////
//! Router Specific Routes
////////////////////////////////

//* SHOW ALL GOALS
router.get('/', isAuthenticated, index);

router.post('/', isAuthenticated, newGoal);

//! CATCHALL
router.get('/*', (req, res) => {
    res.redirect('/goals');
});
////////////////////////////////
//! Export the Router
////////////////////////////////

module.exports = router;
