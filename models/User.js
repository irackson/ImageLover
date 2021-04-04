//! Destructure Schema and model from our connected mongoose
const { Schema, model } = require('../db/connection');

///////////////////////////////////
//! DEFINE OUR SCHEMA
///////////////////////////////////

//* the image schema
const Image = new Schema({
    text: String,
});

const UserSchema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        admin: { type: Boolean, required: true },
        images: [Image],
    },
    { timestamps: true }
);

///////////////////////////////////
//! DEFINE OUR MODEL
///////////////////////////////////

const User = model('User', UserSchema);

///////////////////////////////////
//! Export Our Model
///////////////////////////////////

module.exports = User;
