
exports.errorHandler = (er,req,res,next) => {
    console.log("error Handler : ",er);

    const erStatus = er.statusCode || 500;
    const erMsg = er.message || "Something went wrong";
 
    res.status(erStatus).json({
      statusCode: erStatus,
      message: erMsg,
    });
    
}