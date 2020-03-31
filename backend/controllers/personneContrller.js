import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import Personne from '../models/personModel';

export const signUp = async (req, res) => {

let personne = await Person.findOne({ email: req.body.email });

if (personne) {
 return res.send('This email is already used !');
}
 let newPersonne = new Personne(req.body);
 let createdPersonne = await nouveauPersonne.save();

res.json(createdPerson);
};

export const login = async (req, res) => {
let personne = await Personne.findOne({ email: req.body.email });

if (!personne) {
return result.send('introuvable');
}

let token = jwt.encode(payload, process.env.TOKEN_SECRET);

return res.json({
firstName: personne.firstName,
lastName: personne.lastName,
token: ``,
});}

    result.send(' introuvable');
  });
};
