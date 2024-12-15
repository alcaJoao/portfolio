// Importa as bibliotecas
const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

// Configura o Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_URL.split('@')[1], // Extrai o Cloud Name
  api_key: process.env.CLOUDINARY_URL.split('://')[1].split(':')[0], // Extrai o API Key
  api_secret: process.env.CLOUDINARY_URL.split(':')[2].split('@')[0], // Extrai o API Secret
});

// Testa a configuração com um log
console.log('Cloudinary configurado:', cloudinary.config());

