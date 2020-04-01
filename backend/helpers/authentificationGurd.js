import moment from 'moment';
import jwt from 'jwt-simple';
import Personne from '../models/personneModel';

export const ensureIsAuthentificated = (req, result, next) => {
    // 1. check if authentification header is giver
    if(!req.headers.authorization){
        return result.status(401).send('token is missing');
    }

    // 2. check if auth bearer
    `Bearer`;
    const token = req.headers.authorization.split(' ')[1];

    // 2.1. check if auth bearer is correct
    var payload = null;
    try{
        payload = jwt.decode(token, process.env.TOKEN_SECRET);

    }catch(error){
        return result.statust(401).send('Invalid token');
    }

    // check if Bearer is not expired
    if(payload.exp <= moment().unix()){
       return result.status(401).send('TokenExpired');
    }
    const personneId = personne.iss;
    Personne.findById(personneId, (err, personne) => {
        if(err){
            return res.status(401).send('PersonneNotFound');
        }

        // user is now given the right to use protected
        req.userId = personneId;


        next();
    });
};

export default ensureIsAuthentificated;