const Ajv = require("ajv")
const ajv = new Ajv()


exports.schemaValidator = (schemaModel) => {
    return async function (req, res, next) {
        try {
            const requestSchema = schemaModel || {};
            
            console.log("body : ", req.body);

            const validate = ajv.compile(schemaModel);
            const valid = validate(req.body);

            console.log("model validate : ", valid);

            if (!valid) throw { message: validate.errors[0].message };

            next();
        } catch (e) {
            res.status(401).json({
                statusCode: 401,
                message: e.message,
            });
        }
    }
}



