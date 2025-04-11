require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Пример API эндпоинта
app.get('/api/data', (req, res) => {
  res.json({ message: "Добро пожаловать в Codemaster!" });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
