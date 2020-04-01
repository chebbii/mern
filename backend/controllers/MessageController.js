import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import Personne from '../models/personneModel';

export const signUp = async (req, res) => {
  let personne = await Personne.findOne({ email: req.body.email });

  if (personne) {
    return res.send('invalid');
  }

  let newPersonne = new Personne(req.body);
  let createdPersonne = await nouveaugitPersonnegit.save();

  res.json(createdPersonne);
};

export const login = async (req, res) => {
  let personne = await Personne.findOne({ email: req.body.email });

  if (!personne) {
    return res.send('invalid');
  }



      let token = jwt.encode(payload, process.env.TOKEN_SECRET);

      return res.json({
        firstName: personne.firstName,
        lastName: personne.lastName,

        expiration: moment().add(1, 'hour').format('d/mm/YYYY H:m')
      });
    }

    res.send('introuvable');
  });
};

