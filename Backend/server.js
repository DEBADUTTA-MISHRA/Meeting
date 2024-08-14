require('dotenv').config(); 
const express = require('express');
const connectDB = require('./database/connection');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/v1', routes);

// Error Handling
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
