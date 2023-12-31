const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const colors = require('colors');
const port =  process.env.PORT ||2012
const cors = require('cors');
app.use(express.json());
app.use(cors())

app.use('/', (req, res) => {
    res.send({message: "Welcome to our ecomerce api!"});
})

app.listen(port, () => {
    console.log(`Your server is running in port ${ port }`.cyan.bgGreen.bold)
})