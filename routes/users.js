const express = require("express");
const router = express.Router();
const db = require("../data/db");
const bcrypt = require('bcryptjs'); // For hashing passwords
const cookieParser = require('cookie-parser');
const session = require('express-session');

router.use(cookieParser());
router.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/moviedetail/:id", async function(req, res) {
    try {
        const [movies] = await db.execute("SELECT *, (SELECT COUNT(*) FROM movies AS m WHERE m.rate * m.ratenum > movies.rate * movies.ratenum) + 1 AS popularity_rank FROM movies ORDER BY rate * ratenum DESC");
        if (movies.length > 0) {
            const movie = movies.find(movie => movie.id === parseInt(req.params.id));
            if (movie) {
                res.render("moviedetail", { movie: movie });
            } else {
                res.status(404).send("Movie not found");
            }
        } else {
            res.status(404).send("No movies found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});

router.use("/login", function(req, res){
    res.render("login");
});

router.use("/register", function(req, res){
    res.render("register");
});

router.post('/register', async (req, res) => {
    const { name, surname, email, password, country, city } = req.body;
    console.log("Received form data:", req.body);

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a user object
        const user = { name, surname, email, password: hashedPassword, country, city };

        // Insert the user into the database
        const [result] = await db.query('INSERT INTO users SET ?', user);
        console.log('Register Applied', result);

        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/login');
    } catch (err) {
        console.error('Register Error', err);

        if (err.code === 'ER_DUP_ENTRY') {
            req.flash('error_msg', 'Email already exists');
            res.redirect('/register');
        } else {
            res.status(500).json({ error: 'Register Error' });
        }
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

        if (users.length > 0) {
            const user = users[0];

            // Compare the hashed password
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                req.session.loggedInUser = user;
                res.redirect("/");
            } else {
                res.status(401).send("Email or Password didn't match.");
            }
        } else {
            res.status(401).send("Email or Password didn't match.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

router.post("/search", async function(req, res) {
    const query = req.body.query || "";
    const category = req.body.category || "All";

    try {
        let results = [];

        if (category === "Titles") {
            const [movies] = await db.execute("SELECT id, name, year, rate, description, imgurl FROM movies WHERE name LIKE ?", [`%${query}%`]);
            results = movies.map(movie => ({ ...movie, type: 'movies' }));
        } else if (category === "Celebs") {
            const [people] = await db.execute("SELECT id, name, title, imgurl FROM people WHERE name LIKE ? OR title LIKE ?", [`%${query}%`, `%${query}%`]);
            results = people.map(person => ({ ...person, type: 'people' }));
        } else if (category === "Summaries") {
            const [movies] = await db.execute("SELECT id, name, year, rate, description, imgurl FROM movies WHERE description LIKE ?", [`%${query}%`]);
            results = movies.map(movie => ({ ...movie, type: 'movies' }));
        } else if (category === "All") {
            const [movies] = await db.execute("SELECT id, name, year, rate, description, imgurl FROM movies WHERE name LIKE ?", [`%${query}%`]);
            const [people] = await db.execute("SELECT id, name, title, imgurl FROM people WHERE name LIKE ? OR title LIKE ?", [`%${query}%`, `%${query}%`]);

            results = [
                ...movies.map(movie => ({ ...movie, type: 'movies' })),
                ...people.map(person => ({ ...person, type: 'people' }))
            ];
        }

        res.render("searchresults", {
            results: results,
            category: category
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/autocomplete", async function(req, res) {
    const query = req.query.query || "";
    if (query.length < 3) {
        return res.json([]);
    }

    try {
        const [movies] = await db.execute("SELECT id, name, imgurl, year FROM movies WHERE name LIKE ?", [`%${query}%`]);
        const [people] = await db.execute("SELECT id, name, imgurl, title FROM people WHERE name LIKE ?", [`%${query}%`]);

        const suggestions = [
            ...movies.map(movie => ({
                name: movie.name,
                url: `/moviedetail/${movie.id}`,
                image: `/images/${movie.imgurl}`,
                year: movie.year,
                category: 'Movie'
            })),
            ...people.map(person => ({
                name: person.name,
                title: person.title,
                image: `/images/${person.imgurl}`,
                category: 'Person'
            }))
        ].slice(0, 3);

        res.json(suggestions);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});

router.use("/", async function(req, res) {
    try {
        const [movies] = await db.execute("SELECT *, rate * ratenum AS popularity FROM movies ORDER BY popularity DESC LIMIT 10");

        // Read language preference from cookies
        const language = req.cookies.language || 'en';  // Default to 'en' if no language cookie is set

        res.render("index", {
            movies: movies,
            language: language,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});

module.exports = router;
