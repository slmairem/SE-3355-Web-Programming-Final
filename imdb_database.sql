CREATE DATABASE IF NOT EXISTS imdb_db;

USE imdb_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    rate DECIMAL(3,1),
    ratenum int,
    popularity DECIMAL(6,2),
    year INT,
    duration text,
    description text,
    imgurl VARCHAR(255),
    clipurl VARCHAR(255)
);

CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    title VARCHAR(255),
    imgurl VARCHAR(255)
);

use imdb_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password text,
    country varchar(100),
    city varchar(100)
);

select*from users;




INSERT INTO movies (name, year, duration, rate, ratenum, description,imgurl, clipurl)
VALUES
('The Shawshank Redemption', 1994, '2h 22m', 9.3, 2900000, 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', '1.jpg', '1.mp4'),
('Fight Club', 1999, '2h 19m', 8.8, 2300000, 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', '2.jpg', '2.mp4'),
('The Godfather', 1972, '2h 55m', 9.2, 2000000, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', '3.jpg', '3.mp4'),
('The Silence of the Lambs', 1991, '1h 58m', 8.6, 1600000, 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', '4.jpg', '4.mp4'),
('The Green Mile', 1999, '3h 9m', 8.6, 1400000, 'A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people\'s ailments. When the lead guard, Paul Edgecombe, recognizes John\'s gift, he tries to help stave off the condemned man\'s execution.', '5.jpg', '5.mp4'),
('Spirited Away', 2001, '2h 5m', 8.6, 855000, 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.', '6.jpg', '6.mp4'),
('Parasite', 2019, '2h 12m', 8.5, 968000, 'Greed and class discrimination threaten the newly-formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', '7.jpg', '7.mp4'),
('Spider-Man: Across the Spider-Verse', 2023, '2h 20m', 8.6, 377000, 'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.', '8.jpg', '8.mp4'),
('The Lion King', 1994, '1h 28m', 8.5, 1100000, 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', '9.jpg', '9.mp4'),
('Whiplash', 2014, '1h 46m', 8.5, 997000, 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.', '10.jpg', '10.mp4'),
('The Prestige', 2006, '2h 10m', 8.5, 1400000, 'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.', '11.jpg', '11.mp4'),
('John Wick', 2014, '1h 41m', 7.4, 743000, 'An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.', '12.jpg', '12.mp4');

INSERT INTO people (name, title, imgurl)
VALUES
('Hayao Miyazaki', 'the Japanese Walt Disney', 'people1.jpg'),
('Quentin Tarantino','QT ','people2.jpg'),
('Leonardo DiCaprio', 'Lenny D' ,'people3.jpg' ),
('Samuel L. Jackson', 'King of Cool' , 'people4.jpg' ),
( 'John Cena' ,'The Face of the WWE' , 'people5.jpg' ),
( 'Christopher Nolan','Chris','people6.jpg');














