const express = require('express');
const app = express('view engine', 'ejs');
app.listen(3000, () => {
    console.log('server rodando na porta 3000')
})