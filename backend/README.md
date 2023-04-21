# FinalStretch 

## Backend Setup

*** cd into backend *** 
from there run 
```
 npm i express 
 npm i sequelize 
 npm i pg pg-hstore 
 npm i -g sequelize-cli 
```
in the terminal. 

## To locally run the application 
The database configuration is already in place. 
Create a .env file and add the following
```
PORT=5000 
DB_USERNAME= your postgres username 
DB_PASSWORD= your postgres password 
DB_DATABASE=FinalStretch (Name of the database) 
```

run npm start in terminal 
go to http://localhost:5000/ 

{"message": "Welcome to FinalStretch"}

### Generating models
In the terminal run: 
sequelize model:generate --name "name" --attributes "id:integer, name:string" ect.. --force true

### Running migration (adding to database)
In the terminal run: 
db:migrate
"Check database to make sure models and migrations performed properly." 

