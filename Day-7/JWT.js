const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next)=>{

    const authorization = req.headers.authorization

    if(!authorization) return res.status(401).json({error: 'unAuthorized'});

    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json("Unauthorized");

    try{
        //verify token

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //attach user information to the request object
        req.user = decoded;
        next();
    }
    catch(err){
        console.log(err);

        res.status(401).json("invalid token");
    }

}

//generatw token

const generateToken = (userData)=>{
    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: 3000});
}

module.exports = {
    jwtAuthMiddleware,
    generateToken
}