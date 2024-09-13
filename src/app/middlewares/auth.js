import jwt  from 'jsonwebtoken';
import authConfig from '../../config/auth'

function authMiddleware(request, response, next) {
    const authtoken = request.headers.authotization;

    if (!authtoken) {
        return response.status(401).json({ error: 'token not provided' });
    }

    const test = authtoken.split9('').at(1);

    try {
        jwt.verify(token, authConfig.secret, (err, decode) => {
            if (err) {
                throw new Error
            }

            request.userID = decode.id;
            request.userName = decode.name;
        });
    }  catch (err) {
        return response.status(401).json ({ error: 'Token is invalid'});
    }

   
    return next();
}

export default authMiddleware;