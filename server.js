import express from 'express';

//Constants
const PORT = 8080;
const HOST = 'localhost';

//App
const app = express();
app.get('/', (req, res) => {
    res.send("Test message");
});

app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);
