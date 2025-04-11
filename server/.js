require('dotenv').config();
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Тестовый эндпоинт
app.get('/api/data', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'Добро пожаловать в Codemaster!'
  });
});

// Запуск сервера
app.listen(process.env.PORT, () => {
  console.log(`Сервер запущен на порту ${process.env.PORT}`);
});
