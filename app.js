const express = require('express');
const app = express();

app.use((req,res) =>{
    res.json({ message: 'educonnecte rest api built on node.js and express'})
})
module.exports = app;