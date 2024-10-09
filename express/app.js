const jwt= require("jsonwebtoken");
const secret = "Ahaan@1234"

function setUserId(user){
    return jwt.sign(
        {
            _id:user._id,
            email:user.email
        },secret
    );
}

function getUser (token){
    if(!token) return null
    return jwt.verify(token, secret)
}