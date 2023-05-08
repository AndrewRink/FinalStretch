const { sign, verify } = require('jsonwebtoken')

const createTokens = (user) => {
    const accessToken = sign({ email: user.email, id: user.user_id },
        process.env.DB_SECRET)

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['accessToken'];

    if (!accessToken) return res.status(400).json({error: "Invalid User"})

    try {
        const validToken = verify(accessToken, process.env.DB_SECRET);
        if (validToken) {
            req.authenticated = true;
            return next()
        }

    } catch (error) {
        return res.status(400).json({error: error});
    }

}


module.exports = { createTokens, validateToken }; 