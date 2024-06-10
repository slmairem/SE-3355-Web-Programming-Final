# SE-3355 Web Programming Final Project

## Project Overview

This project is a responsive website that offers various features such as searching, user authentication (login/register and Google authentication), adding movies to a watchlist, viewing movie details, and watching trailers.

You can watch a video demonstration of the website [here](https://youtu.be/CtEgFNBhBas).

I have 3 deployment issues, I add them under the read.me file.

The backend of the project is built using Node.js and MySQL. This project marks my first experience with Node.js.

## Features

### General Features
- **Fixed Navbar**: The navigation bar remains fixed at the top of the page, providing easy access to other sections.
- **Search Functionality**: The search feature includes filtering and auto-fill suggestions after typing three letters. Clicking on these suggestions will take you to the respective detail pages.
- **Search Button**: Pressing the search button without entering any text displays all entries from the database (both people and movies). You can filter results by selecting "Celebs" to see only celebrities or "Title" to see only movies.
- **Movie Details**: Clicking on a movie displays its details. The popularity of movies is calculated as `ratenum * rate`.

### Homepage
- **Popular Movies**: Movies are listed in descending order based on their popularity. ( popularity = `ratenum * rate` )
- **Trailer Button**: Opens the trailer screen for the selected movie.
- **Watchlist Button**: Adds the movie to the watchlist if the user is logged in; otherwise, redirects to the login page.
- **Language Options**: The homepage supports both Turkish (TR) and English (EN). In English, it shows "Top 10 on IMDb this Week" and in Turkish, it shows "Bu Hafta IMDb'de En İyi 10".

### User Authentication
- **Register and Login**: Users can register on the website or log in using their credentials. Google Authentication is also supported.
- **Post-Login Experience**: After logging in, users can add movies to their watchlist and see their name displayed in place of the login button.

### Additional Features
- **Home Redirection**: Clicking on the "IMDb" logo redirects users to the homepage.


