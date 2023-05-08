# The Final Stretch
An App by Chase Key, James Lindley, and Andrew Rink
Submitted 5/7/2023

ABOUT:
The Final Stretch is a personal health and fitness app.

This app is designed to let users find workouts they enjoy and add them to a personal workout routine.  It also allows users to access BMI information and look up recipes.  Admins would be able to add new workouts when needed.  

TO USE:
To navigate the site, simply point and click.  Once a user is logged in, they will be able to see their preferred workouts on their account page, as well as personal information such as their name, height, weight, etc.  New users can fill out the form and submit their data, then login and navigate the site. 

SITE LAYOUT:
|       Path          |        Component            |       Purpose       | 
| ------------- | ---------------------- | ---------------  | 
|        /                | NewLoginForm.js         |   Login Page      | 
| /home            |  Home.js                          |   Home Page     |
| /workoutlist |  NewWorkoutForm.js  | WorkoutList      |
| /myaccount |         MyAccount.js         | My Account      | 
| /newuser      |        NewUserForm.js    | NewLoginForm |

TECHNOLOGIES USED:
We used postgreSQL as our database, with Sequelize and Express to tie it together on the backend.  We used React to create the frontend of the app, along with React-Bootstrap to style.  

KNOWN ISSUES/MISSING FEATURES
1. After logging in, user does not remain logged in after navigating off of the home page.  This results in data not being reflected on the My Account Page.  
2. Currently, the backend database is not deployed. The information from the workout table will not display on the deployed website. It does work on the local machine. 
### See backend README.  


