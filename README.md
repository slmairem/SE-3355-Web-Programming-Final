# SE-3355 Web Programming Final Project

## Project Overview

This project is a responsive website that offers various features such as searching, user authentication (login/register and Google authentication), adding movies to a watchlist, viewing movie details, and watching trailers.

You can watch a video demonstration of the website [here](https://youtu.be/CtEgFNBhBas).

I have 3 deployment issues, I add them under the read.me file.

You can see images in read.me's end. I screenshotted them into a different monitor to prove the website is responsive.

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

## Images

### Deployement Errors
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/5ce15ff9-ccd0-44ef-9990-5214c61951bb" alt="deployerr1" width="500"> <br>
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/ebf1e297-3f2a-4af9-9b0b-7d4f2b43eb58" alt="deployerr2" width="500">
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/6ddb6e3a-d566-4bb8-85de-51c0c177ab85" alt="deployerr3" width="500">

### Website Overview 

#### Homepage
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/131c87ae-e07b-469d-9ee0-3ed492166a2e" alt="homepage" width="500">

#### Trailer PopUp
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/f0b96414-98ce-4c9f-ab66-4616cf3edf5b" alt="trailerpopup" width="500">

#### AutoFill Search and Displaying Recommendations
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/65db7212-3e01-4de2-bdb5-ddc181b27292" alt="autofillAndDisplaying" width="500">

#### SearchDetails (All, Specific All, Specific People, Specific Movie)
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/5028d1f1-f32b-4ffe-b283-165b7e55ab23" alt="allDatabaseSearch" width="500"> 
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/4f933a83-ca7c-4064-ad86-6cf8c47da3a6" alt="Screenshot 2024-06-10 213650" width="500"> <br>
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/c58fd494-2f7f-4ae9-83b6-c425f79deb5b" alt="Screenshot 2024-06-10 213702" width="500"> 
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/042535d4-df86-4a32-8d71-1fc265a788ee" alt="Screenshot 2024-06-10 213721" width="500"> <br>


#### Details Page
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/8b231e26-ca8b-4f27-a806-6b4194b5b56d" alt="detailsPage" width="500">

#### Register Page / Login Page
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/beaaddbd-cccb-406f-89bf-9e9ebcb9d925" alt="register" width="500"> 

<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/8f4c7d39-56de-4b19-9442-781e32e3ce70" alt="login" width="500">

#### After Login Display
<img src="https://github.com/slmairem/SE-3355-Web-Programming-Midterm/assets/129744557/431e1048-53cf-415f-8246-f90a399ff8aa" alt="afterLoginDisplay" width="500">
