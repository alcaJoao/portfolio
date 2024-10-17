const express = require('express');
const app = require('path');
const app = express();

// Define a porta
//const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Define o diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve o arquivo 'index.html'
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});