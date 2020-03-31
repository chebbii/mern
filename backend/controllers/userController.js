import mongoose from 'mongoose';
import userSchema from '../models/userModel';

const User = mongoose.model('User', userSchema);

export const getAll = async (req, result) => {
    const users = await User.find().populate('messages');

    result.send(users);
};