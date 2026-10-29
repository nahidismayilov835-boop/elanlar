const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON və məlumatları oxumaq üçün
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public qovluğunu hər kəsə açıq etmək
app.use(express.static(path.join(__dirname, 'public')));

// Əsas səhifə (index.html-i açır)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Admin səhifəsi (admin.html-i açır)
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.listen(PORT, () => {
    console.log(`Server işləyir: http://localhost:${PORT}`);
});
