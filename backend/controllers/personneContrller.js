import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import Personne from '../models/personneModel';

export const signUp = async (req, res) => {

let personnes = await Personne.findOne({ email: req.body.email });

if (personnes) {
 return res.send('valid mail');
}
 let nouveauPersonne = new Personnes(req.body);
 let createdPersonnes = await nouveauPersonnes.save();

res.json(createdPersonne);
};

export const login = async (req, res) => {
let personne = await Personne.findOne({ email: req.body.email });

if (!personne) {
return res.send('introuvable');
}

let token = jwt.encode(payload, process.env.TOKEN_SECRET);

return res.json({
firstName: personne.firstName,
lastName: personne.lastName,
token: ``,
});}

    res.send(' introuvable');
  });
};
