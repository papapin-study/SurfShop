const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    email: String,
    image: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Story'
        }
    ]

});

UserSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model('User', UserSchema);

