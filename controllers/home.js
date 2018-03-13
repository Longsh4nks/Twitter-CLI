var post = require("../post/post.js");

module.exports = (meth, args) => {
    if(meth == "post"){
        post(args)
    }
    if(meth == ""){
        console.log("No method supplied.")
    }
}