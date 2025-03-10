CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telegram_id BIGINT UNIQUE,
    name VARCHAR(255),
    avatar TEXT
);

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    full_name VARCHAR(255),
    subject VARCHAR(255),
    price DECIMAL(10, 2),
    phone VARCHAR(20),
    color VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE schedule (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    date DATE,
    time TIME,
    FOREIGN KEY (student_id) REFERENCES students(id)
);
