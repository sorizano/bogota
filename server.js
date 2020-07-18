const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/bogota'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/bogota/index.html');
});

app.listen(PORT, () => {
    console.log('Servior está iniciado ' + PORT);
});