const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
dotenv.config();

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
