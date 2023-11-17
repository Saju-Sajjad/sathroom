// controllers/userController.js
const User = require('../Modals/user')
const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error.message);
    res.status(500).json({ message: 'Registration failed' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login failed:', error.message);
    res.status(500).json({ message: 'Login failed' });
  }
};


module.exports = { registerUser, loginUser };
