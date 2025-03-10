const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

// Маршрут для авторизации через Telegram
app.post('/api/login', (req, res) => {
    const { id, first_name, photo_url } = req.body;
    // Сохраняем пользователя в базе данных
    db.query('INSERT INTO users (telegram_id, name, avatar) VALUES (?, ?, ?)', [id, first_name, photo_url], (err) => {
        if (err) return res.status(500).send('Ошибка сервера');
        res.json({ success: true });
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
