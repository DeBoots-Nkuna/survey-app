CREATE DATABASE IF NOT EXISTS survey_db;

USE survey_db;

CREATE TABLE survey (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    favorite_foods TEXT NOT NULL,
    rate_movie TINYINT NOT NULL,
    rate_radio TINYINT NOT NULL,
    rate_eat_out TINYINT NOT NULL,
    rate_tv TINYINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);