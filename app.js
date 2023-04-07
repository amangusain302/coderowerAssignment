const express = require('express')
const app = express();
const cors = require('cors');
const countriesTagRoute = require('./src/router/CountriesRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', countriesTagRoute);

app.get("/", (req, res) => {
    res.send("<H1>ASSIGNMENT TASK</H1>")
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})