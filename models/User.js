//! Destructure Schema and model from our connected mongoose
const { Schema, model } = require('../db/connection');

///////////////////////////////////
//! DEFINE OUR SCHEMA
///////////////////////////////////

//* the goal schema
const Goal = new Schema({
    text: String,
});

const UserSchema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        admin: { type: Boolean, required: true },
        goals: [Goal],
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
