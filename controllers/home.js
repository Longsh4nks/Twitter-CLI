var post = require("../post/post.js");
var stream = require("../stream/stream.js");


//This is the controller method.
module.exports = (meth, args) => {
    if (args == null || meth == null){
        console.log("Incorrect format")
    }
    if(meth == "post"){
        post(args)
    }
    if (meth == "stream"){
        stream(args)
    }
}