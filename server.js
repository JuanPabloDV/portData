const express = require('express');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API CRUD de Contatos' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});