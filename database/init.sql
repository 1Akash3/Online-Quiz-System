

CREATE DATABASE IF NOT EXISTS quizdb;
USE quizdb;




CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO categories (name) VALUES
('Programming'),
('OOP'),
('DSA');


CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    question TEXT,
    option1 VARCHAR(100),
    option2 VARCHAR(100),
    option3 VARCHAR(100),
    option4 VARCHAR(100),
    answer VARCHAR(100),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);



INSERT INTO questions (category_id, question, option1, option2, option3, option4, answer) VALUES
(1,'Which language runs in browser?','Java','C','Python','JavaScript','JavaScript'),
(1,'Which symbol is used for comments in JavaScript?','//','#','<!-- -->','**','//'),
(1,'Which is a backend runtime?','HTML','CSS','Node.js','Bootstrap','Node.js'),
(1,'Which company developed Java?','Microsoft','Sun Microsystems','Google','IBM','Sun Microsystems'),
(1,'Which keyword declares a variable in JS?','var','int','string','define','var'),
(1,'Which is not a programming language?','Python','HTML','Java','C++','HTML'),
(1,'Which loop is used for fixed iterations?','for','while','switch','if','for'),
(1,'Which is used for styling?','CSS','Java','Node','SQL','CSS'),
(1,'Which operator checks value and type?','==','===','!=','<=','==='),
(1,'Which prints in console?','print()','console.log()','echo()','write()','console.log()');



INSERT INTO questions VALUES
(NULL,2,'OOP stands for?','Object Oriented Programming','Only Object Program','Open Object Programming','None','Object Oriented Programming'),
(NULL,2,'Which is a pillar of OOP?','Encapsulation','Compilation','Execution','Linking','Encapsulation'),
(NULL,2,'Inheritance means?','Code reuse','Delete code','Compile code','Run code','Code reuse'),
(NULL,2,'Polymorphism means?','Many forms','One form','No form','Compile form','Many forms'),
(NULL,2,'Abstraction hides?','Implementation','Data','Memory','CPU','Implementation'),
(NULL,2,'Class is a?','Blueprint','Object','Function','Variable','Blueprint'),
(NULL,2,'Object is instance of?','Class','Function','Array','Loop','Class'),
(NULL,2,'Encapsulation improves?','Security','Speed','Memory','UI','Security'),
(NULL,2,'Constructor is used for?','Initialization','Deletion','Compilation','Linking','Initialization'),
(NULL,2,'Which language supports OOP?','Java','HTML','CSS','SQL','Java');



INSERT INTO questions VALUES
(NULL,3,'Which structure uses FIFO?','Stack','Queue','Tree','Graph','Queue'),
(NULL,3,'Which structure uses LIFO?','Queue','Stack','Array','Tree','Stack'),
(NULL,3,'Binary tree max children?','2','3','4','5','2'),
(NULL,3,'Which structure uses indexing?','Array','Stack','Queue','Tree','Array'),
(NULL,3,'Best search for sorted array?','Binary search','Linear','DFS','BFS','Binary search'),
(NULL,3,'Which is linear data structure?','Array','Tree','Graph','Heap','Array'),
(NULL,3,'Which traversal uses queue?','BFS','DFS','Inorder','Postorder','BFS'),
(NULL,3,'Which traversal uses stack?','DFS','BFS','Level','Heap','DFS'),
(NULL,3,'Best case binary search?','O(1)','O(n)','O(log n)','O(n log n)','O(1)'),
(NULL,3,'Worst case linear search?','O(n)','O(1)','O(log n)','O(n log n)','O(n)');



CREATE TABLE results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    score INT,
    total INT,
    test_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);