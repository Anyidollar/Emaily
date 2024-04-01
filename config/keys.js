// figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys
  module.exports = require('./dev');
}

// mongouri: "mongodb+srv://ifeanyionyekwere123:I3ODoRJsiOI9rbGl@cluster1.hvrxjsf.mongodb.net/emailyprod?retryWrites=true&w=majority";

// "mongodb+srv://ifeanyionyekwere247:<password>@emailyprod.zmkgddz.mongodb.net/?retryWrites=true&w=majority&appName=Emailyprod"
