require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { mongoURI, jwtSecret, port } = require('./config');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => { console.error('MongoDB connection error:', err.message); process.exit(1); });


app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ status: 'error', message: 'Missing fields' });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ status: 'error', message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();
    return res.json({ status: 'ok', message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 'error', message: 'Server error' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ status: 'error', message: 'Missing fields' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ status: 'error', message: 'User not found' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ status: 'error', message: 'Invalid password' });

    const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, { expiresIn: '7d' });
    return res.json({ status: 'ok', message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 'error', message: 'Server error' });
  }
});


function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ status: 'error', message: 'No token' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ status: 'error', message: 'Invalid token' });
  }
}

app.get('/protected', authMiddleware, (req, res) => {
  res.json({ status: 'ok', message: 'This is protected data', user: req.user });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
