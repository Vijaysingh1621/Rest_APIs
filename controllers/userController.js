const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });

        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' }),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' }),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update User
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { registerUser, loginUser, updateUser, deleteUser };
