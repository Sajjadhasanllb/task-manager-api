
// 1. IMPORT ALL YOUR TOOLS (REQUIRE STATEMENTS)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');


// 2. CREATE YOUR EXPRESS APP
const app = express();
const PORT = process.env.PORT || 5000;



// 3. SET UP MIDDLEWARE (app.use)
app.use(cors());
app.use(express.json()); // Body parser


// 4. CONNECT TO YOUR DATABASE
const uri = process.env.MONGO_URI; 
mongoose.connect(uri).then(() => {
  console.log('MongoDB connection established successfully!');
}).catch(err => console.error('MongoDB connection error:', err));


// 5. DEFINE YOUR ROUTES (app.use)
// Basic Route
app.get('/', (req, res) => {
  res.send('Task Manager API is running!');
});

// Auth Routes
app.use('/api/auth', authRoutes);

// Task Routes
app.use('/api/tasks', taskRoutes);

// --- TEMPORARY DEBUG ROUTE ---
app.get('/debug-env', (req, res) => {
  res.json({
    message: "Debugging Environment Variables",
    mongo_uri_is_set: !!process.env.MONGO_URI,
    jwt_secret_is_set: !!process.env.JWT_SECRET,
  });
});
// -----------------------------


// 6. START THE SERVER (app.listen)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});