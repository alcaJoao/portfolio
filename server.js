const express = require('express');
const app = express();

// Define a porta
const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
