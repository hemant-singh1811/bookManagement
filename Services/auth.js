const jwt = require("jsonwebtoken");
require("dotenv").config();

const defaultUserName = process.env.defaultUserName
const defaultUserPassword = process.env.defaultUserPassword


const webLoginService = async (userName, password) => {
    try {

        if (userName === defaultUserName && password === defaultUserPassword) {

            let USER = {
                userId: userName,
                userName: userName,
            };

            USER.userToken = getJWTToken({ userId: userName, userName: userName});
            USER.message = "succeed"

            return USER;
        }
        else {
            throw { message: "Incorrect" };
        } 
    } catch (e) {
        console.log("error1 : ", e);
        throw { message: e.message };
    }
};

const getJWTToken = (data) => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
};

async function authToken(req, res, next) {
    try {
        const token = req.query.userToken;

        if (token == null) {
            return res.sendStatus(401);
        }
        req.user = await verify(token);;
        next();

    } catch (e) {
        console.log("error :", e);
        return res.status(403).send({ error: e.message });
    }

}

async function verify(token) {
    try {
        const user = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, user) => {
                if (err) {
                    console.log("auth error :", err.message);
                    throw { message: err.message };
                }
                return user;
            }
        );
        return user;
    } catch (e) {
        throw { message: e.message, statusCode: 403 };
    }
}

module.exports = {
    authToken,
    verify,
    webLoginService
}