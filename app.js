import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use (express.static('public'));

app.set('view engine', 'ejs');

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/thankyou', (req, res) =>
{
    console.log(req.body);

    const order = 
    {
        fname: req.body.fname,
        email: req.body.email,
        flavor: req.body.flavor,
        method: req.body.method,
        userInput: req.body.userInput
    };

    res.render('thank-you', {order});
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})