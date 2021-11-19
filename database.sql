CREATE TABLE "checklist" (
	"id" serial PRIMARY KEY,
	"task" varchar(100) NOT NULL,
	"details" varchar (300),
	"status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "checklist" 
	("task", "details", "status")
VALUES
	('do laundry', 'green blouse is dry clean only!', false);