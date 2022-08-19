# MERN-app
MERN Stack application:
frontend : react .
middle : express & node .
backend : mongoDB .

steps :
         
         i will provide info about what i did in each step of development .
step 1 : initial Express app to power the backend api .
          
          we will use Postman.
                    what is Postman?
                    Postman is an API platform for developers to design, build, test and iterate their APIs.
    
          
          
          
          
step 2 : Express Router & API Routes




           creating all of the workout routes we need for the api and test them out using POSTMAN.
                         API Endpoints
           GET    /workouts --> Gets all the workouts documents
           POST   /workouts --> Creates a new workout document 
           GET    /workouts/:id --> Gets a single workout document
           DELETE /workouts/:id --> Deletes a single workout document
           PATCH  /workouts/:id --> Updates a single workout document
           
step 3 : MongoDB Atlas & Mongoose
                               
          set up a database using MongoDB Atlas, and then connect to it from our application using a package called Mongoose.

step 4 : Models & Schemas

          create a new model & schema for the dtabase collection we'll be using (workouts)
          
commit 5 : Controllers 

          make some controller functions for the workout routes.
          
step 6 : Controllers

          finish off the controller functions that we started in the last commit(6)

step 7 : Making a React App 

          start our React application and set up a homepage route.
    
step 8 : Fetching Data
          
          we'll make a request to the backend api to fetch workouts data and output it in the React template.

step 9 : New Workout Form

          we'll make a form to add new workouts.

step 10 : Adding React Context

           we'll create a React Context to provide some global workouts state to the entire React application.
           
step 11 : Deleting Data
          
          Deleting Data.
          
step 12: Handling Error Responses

          Handling Error Responses.

step 13: Finishing Touches
         
         Finishing Touches (npm install date-fns).


                  #############Authentication#############
                  
step 14 & Authentication step 1:

         implement authentication (using JSON web tokens), within the MERN stack.
         
step 15 & Authentication step 2:

         make a user controller & model, and set up some routes for authentication.

step 16 & Authentication step 3:

         Signing Up & Hashing Passwords

step 17 & Authentication step 4:

         Email & Password Validation

step 18 & Authentication step 6:

         Signing Tokens

step 19 & Authentication step 7:

         Logging Users In

step 20 & Authentication step 8:

         React Auth Context

step 21 & Authentication step 9:

         Login & Signup Forms

step 22 & Authentication step 10:

         Making a useSignup Hook