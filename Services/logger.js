const fs = require("fs");

const logger = (req, res, next) => {
  
    const LOG = `Req :  ${new Date().toISOString()} ${req.method} ${req.url}\n`;
    console.log(LOG);
    fs.appendFile("logs.txt", LOG, function (err) {});
  
    next();
  
  };
  
  
  module.exports = logger;
  