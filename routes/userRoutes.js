const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Update User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);

module.exports = router;
