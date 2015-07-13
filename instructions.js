// Basic Mongo CLI challenges
1. Step one, enter 'mongod' into one terminal window and use 'mongo' in the second terminal window
2. Type help is good for finding commands
3. Typing 'use <blank>' creates and names the db in mongo terminal.
4. The return will be <blankm>.show (the use command will also switch between dbs).
5. Type db.show --> should return <blank>.show
6. db.<blank>.insert --> adds an object to the database
	--> db.<blank>.find(); --> should show you the object that you entered.

	// example of inserting something into a collection.
9. db.fun.insert({
		book:
		{
			title: 'fun',
			published_on_year: 1994
		},
	
		users:
		{
			name: 'George',
			email: 'george@gmail.com'
		}
	});

	// returns the entry its saved in
	1. db.fun.find({ 'users.name': 'George'});	
	
	//returns all entries with published_on_year greater than 1990
	//$gt --> greater than
	//$lt --> less than
	2. db.fun.fund({
		'book.published_on_year': 
			{
				$gt:1990
			}
		});

// Basic Mongo/Express Challenges

// This one is tricky, there are several things that can go wrong.
// In index.js --> they need this line in their boilerplate
	/* 
	<require>('./<directory_that_contains_schema_file>/<file_name_for_schema>')
	*/
//Also, in index.js they need to include lines 23-26... when I used mongoose.connect I wasn't able to connect and an error was thrown. 
3. Check out index.js and books.js
//mongoose.model(<blank>,schema) --> first argument is singular, name for collection model is for

### If you enter the wrong information when doing a query the return will be blank.
### 'show dbs' will show all of your databases in MongoDB.
### 'show collections' will show all of your collections in MongoDB.


## Move step three of the beginning of the basic challenges to the beginning of the notes


# With npm install issues I need to use 'npm cache clean'