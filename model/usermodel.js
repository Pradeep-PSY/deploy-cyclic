const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    gender:{  },
    name:{ },
    location:{ },
    email: {  },
    dob: { }
})

const userModel = model('user', userSchema);

module.exports = userModel;