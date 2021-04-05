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
    res.render('images/all', {
        images: user.images,
        loggedIn: req.session.user,
    });
};

const newImage = async (req, res) => {
    // fetch up to date user
    const user = await User.findOne({ username: req.session.user });
    // push the image into the user
    user.images.push(req.body);
    await user.save();
    // redirect back to images
    res.redirect('/images');
};

//////////////////////////////
//! Export Controller
//////////////////////////////
module.exports = {
    index,
    newImage,
};
