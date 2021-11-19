# Initializing Stuff: 

* think through table structure 
* make new Git branch for "initializing" stuff

* add files and folders to project diretory 
    * don't for get .gitignore

    ### Front-End:
    * mock up basic HTML 
    * source CSS and JS files 

    ### Back-End: 
    * use Postico to make a database
        * don't forget 'is-complete' 
    * use Postico to make 'todos' table 
    * run npm init
    * npm install the stuff we need
        * express
        * pg
    * make sure 'start' script exists in package.json 
    * implement minimum code for working express server in server.js
    * wire up database connection in pool.js file

# Building Stuff: 

* create a task
    * store in db
    * re-render DOM 

* delete a task 
    * delete task in db
    * re-render DOM 

* complete a task 
    * update task in db
    * should be 'checked off' 
    * CSS to differentiate
    * re-render DOM 

* CSS styling 