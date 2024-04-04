const jwt = require("jsonwebtoken")
exp = {}

exp.getToken = async (email,user)=>{

    const tokken = jwt.sign({identifier:user._id},process.env.key)

    return tokken

}

module.exports = exp