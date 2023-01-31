
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;


CREATE TABLE Users (
	userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(128) NOT NULL,
	lastName VARCHAR(128) NOT NULL,
    email VARCHAR(128) UNIQUE NOT NULL,
	telephone VARCHAR(128) NOT NULL,
	username VARCHAR(64) UNIQUE NOT NULL,
	password VARCHAR(256) NOT NULL,
	avatarUrl VARCHAR(512)
);

CREATE TABLE Photos (
    photoId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128) NOT NULL,
    description VARCHAR(512) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP ,
    url VARCHAR(4000) NOT NULL,
    visibility VARCHAR(16) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users (userId),
    CONSTRAINT ValidVisibility CHECK (visibility in ("Public","Private"))
);

CREATE TABLE PhotosValoration (
    valorationsId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    value INT NOT NULL,
    userId INT NOT NULL,
    photoId INT NOT NULL,
    UNIQUE(userId,photoId),
    FOREIGN KEY (photoId) REFERENCES Photos (photoId) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users (userId)
    
    
    
);

CREATE TABLE Badwords(
    badwordId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    wordname VARCHAR(32) NOT NULL
);

