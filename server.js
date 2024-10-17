const express = require('express');
const path = require('path');
const app = express();

// Define o diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o arquivo 'about_me.html'
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'about_me.html'));
});

// Rota principal para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a porta
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
