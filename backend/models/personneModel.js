import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const personneSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

personneSchema.pre('save', function (next) {
    let personne = this;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(personne.password, salt, (err, hash) => {
            personne.password = hash;
            next();
        });
    });
});

export default mongoose.model('Personne', personnesSchema);