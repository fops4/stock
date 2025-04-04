require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connecté à MongoDB');
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Serveur lancé sur http://localhost:${process.env.PORT}`)
  );
}).catch(err => console.error('❌ Erreur MongoDB :', err));
