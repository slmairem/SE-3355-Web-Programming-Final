const express = require("express");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const app = express();
const userRoutes = require("./routes/users");

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());
app.use(userRoutes);

app.use(passport.initialize());
app.use(passport.session());


//passport
passport.use(new GoogleStrategy({
    clientID: "899102746902-2dncmirk0dbcp0cnuocmvpdbic28krus.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//Start server
app.listen(3000, () => {
    console.log("listening on port 3000");
});



// Routes


/*

app.post("/login", async function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    
    if (email && password) {
        try {
            const [results] = await db.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.email = email;
                res.redirect('/');
            } else {
                res.send('Incorrect Email and/or Password!');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    } else {
        res.send('Please enter Email and Password!');
    }
});

app.post('/register', async (req, res) => {
    const { name, surname, email, password, country, city } = req.body;

    try {
        const [duplicate] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (duplicate.length > 0) {
            res.status(400).json({ success: false, message: 'Email already in use' });
        } else {
            const query = 'INSERT INTO users (name, surname, email, password, country, city) VALUES (?, ?, ?, ?, ?, ?)';
            await db.execute(query, [name, surname, email, password, country, city]);
            res.status(200).json({ success: true });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post("/watchlist/add", function(req, res){
    if (!req.session.user) {
        res.redirect("/login");
    } else {
        res.send("<script>alert('Movie added to watchlist'); window.location='/';</script>");
    }
});


// Search route
app.get("/search", async function(req, res) {
    const query = req.query.query || "";
    const category = req.query.category || "All";

    try {
        let results = [];

        if (category === "Titles") {
            const [movies] = await db.execute("SELECT id, name, year, rate, imgurl FROM movies WHERE name LIKE ?", [`%${query}%`]);
            results = movies.map(movies => ({ ...movies, type: 'movies' }));
            
        } else if (category === "Celebs") {
            const [people] = await db.execute("SELECT id, name, title, imgurl FROM people WHERE name LIKE ? OR title LIKE ?", [`%${query}%`, `%${query}%`]);
            results = people.map(people => ({ ...people, type: 'people' }));

        } else if (category === "Summaries") {
            const [movies] = await db.execute("SELECT id, name, year, rate, imgurl FROM movies WHERE description LIKE ?", [`%${query}%`]);
            results = movies.map(movies => ({ ...movies, type: 'movies' }));

        } else if (category === "All") {
            const [movies] = await db.execute("SELECT id, name, year, rate, imgurl FROM movies WHERE name LIKE ?", [`%${query}%`]);
            const [people] = await db.execute("SELECT id, name, title, imgurl FROM people WHERE name LIKE ? OR title LIKE ?", [`%${query}%`, `%${query}%`]);

            results = [
                ...movies.map(movies => ({ ...movies, type: 'movies' })),
                ...people.map(people => ({ ...people, type: 'people' }))
            ];
        }

        res.render("searchresults", {
            results: results,
            category: category,
            query: query // Pass the query to the searchresults page
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});*/



