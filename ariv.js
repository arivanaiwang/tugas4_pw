const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('ariv1.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('ariv2.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jenis.html'));
});

app.get('ariv3.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'teknologi.html'));
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
