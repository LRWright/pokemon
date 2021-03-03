const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const getPokemon = require('./lib/pokemon');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', async (req, res) => {
    let data = await getPokemon();
    res.render('index', {data});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});