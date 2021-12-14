const express = require('express');
const connectDB = require('./config/db');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

// Connect database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('server running');
});

// Define routes
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
