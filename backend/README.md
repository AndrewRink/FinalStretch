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
sequelize db:migrate
"Refresh the database to make sure models and migrations performed properly." 

### Adding Migration to a existing table
In the terminal: 
sequelize migrations:generate --name 

### DEPENDENCIES
1. bcrypt
2. body-parser
3. connect-session-sequelize
4. cookie-parser
5. cookie-session
6. cors
7. dotenv
8. express
9. express-session
10. json-web-token
11. pg
12. sequelize


