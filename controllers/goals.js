const { log } = require('mercedlogger');

////////////////////////
//! Import Models
////////////////////////
const User = require('../models/User');
///////////////////////////
//! Controller Functions
///////////////////////////

const index = async (req, res) => {
    const user = await User.findOne({ username: req.session.user });
    res.render('goals/all', {
        goals: user.goals,
    });
};

const newGoal = async (req, res) => {
    // fetch up to date user
    const user = await User.findOne({ username: req.session.user });
    // push the goal into the user
    user.goals.push(req.body);
    await user.save();
    // redirect back to goals
    res.redirect('/goals');
};

//////////////////////////////
//! Export Controller
//////////////////////////////
module.exports = {
    index,
    newGoal,
};
