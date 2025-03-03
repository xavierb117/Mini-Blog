import express from 'express';

import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'blog'
});

async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database!');
        return conn;
    } catch (err) {
        console.log(`Error connecting to the database ${err}`);
    }
}

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use (express.static('public'));

app.set('view engine', 'ejs');

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/submit', async (req, res) => {
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    };

    console.log(newPost);

    const conn = await connect();

    const insertQuery = await conn.query(`INSERT INTO posts 
        (author, title, content) VALUES (?, ?, ?)`, 
        [newPost.author, newPost.title, newPost.content]);

    res.render('confirmation', {newPost});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

