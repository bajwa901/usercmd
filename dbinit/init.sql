CREATE DATABASE IF NOT EXISTS usercmd_db;

USE usercmd_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) DEFAULT NULL,
    last_name  VARCHAR(255) DEFAULT NULL,
    email      VARCHAR(255) DEFAULT NULL,
    address    VARCHAR(255) DEFAULT NULL,
    phone      VARCHAR(30)  DEFAULT NULL,
    status     tinyint(4)  DEFAULT '1',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_Users_Email UNIQUE (email)
) AUTO_INCREMENT = 1;

INSERT INTO users (first_name, last_name, email, address, phone) VALUES
    ('john', 'doe', 'john@example.com',  '123test', '12345'),
    ('jane', 'smith', 'jane@example.com', '456test', '6789');