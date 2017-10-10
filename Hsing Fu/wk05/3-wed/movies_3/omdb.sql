#SCHEMA FOR OMDB DATABASE
CREATE TABLE movies (
	id SERIAL4 PRIMARY KEY,
	title VARCHAR (200),
	plot VARCHAR (2000),
	year VARCHAR (50),
	poster VARCHAR (2000),
	rating VARCHAR (50),
	created_at TIMESTAMP
);

-- title
-- plot
-- year
-- poster
-- rating