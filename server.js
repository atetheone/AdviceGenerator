const express = require('express');
const path = require('path')

const app = express();


app.use(express.static(path.join(__dirname, 'dist', 'advice-generator')));

app.get('/*', async (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'advice-generator', 'index.html'));
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on *: ${port}`)
})