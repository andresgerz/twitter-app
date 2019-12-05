/*

CREATE TABLE tweets (
	id PRIMARY KEY NOT NULL,
	tweet text()
)

ALTER TABLE tweets
DROP COLUMN date_time;
ADD COLUMN date_time date;

ALTER TABLE tweets
ADD COLUMN d4 time default NOW();

ALTER TABLE tweets

ADD COLUMN date_time varchar(20) default to_char (current_timestamp, 'DD/MM/YYYY HH24:MI');

DELETE FROM tweets;


SELECT LOCALTIMESTAMP;}

*/

SELECT * FROM tweets;