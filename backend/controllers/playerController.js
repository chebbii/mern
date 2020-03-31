import mongoose from 'mongoose';
import playerSchema from '../models/playerModel';

const Player = mongoose.model('Player', playerSchema);

export const add = (req, result) => {
    let newPlayer = new Player(req.body);
    newPlayer.save((err, createdPlayer) => {
        if (err) {
            res.send(err);
        }

        res.json(createdPlayer);
    });
};

export const getAll = (req, result) => {
    Player.find({}, (err, players) => {
        if (err) {
            res.send('an error occured while trying to get players');
        }

        res.send(players);
    });
};

export const getOneById = (req, result) => {
    Player.findById(req.params.id, (err, players) => {
        if (err) {
            result.send('an error occured while trying to get players');
        }

        result.send(players);
    });
};