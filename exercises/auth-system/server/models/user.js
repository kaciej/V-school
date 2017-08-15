let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(10);

let userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password + this.username, salt);
    next();
});

userSchema.methods.auth = function(passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt + this.username, this.password, (error, result) => {
        if(error) {
            console.log(error);
            cb(false);
        } else if(result) {
            cb(true);
        } else {
            cb(false)
        }
    });
};

module.exports = mongoose.model("users", userSchema);