CREATE DATABASE Blog;

USE Blog;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
	id INT auto_increment,
    author VARCHAR(255),
    title VARCHAR(255),
    content VARCHAR(255),
    create_at DATETIME DEFAULT NOW(),
    
    PRIMARY KEY(id)
);