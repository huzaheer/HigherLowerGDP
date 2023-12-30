# HigherLowerGDP

Nodemon --> We're using nodemon so that it allows us to see changes we made just by saving instead of saving and then having to rerun the file

.env --> Since this is probably something we're going to make public, we want to store certain sensitive constants in an environment variable. This makes it so these variables remain hidden even when we push to git by adding it to our git ignore. 

middleware --> Middleware is code that executes between us getting a request from a server and us sending a respone

POSTMAN --> We use postman to circumvent the need to create a frontend to try out different types of requests. Lets us simulate different types of requests

npm install -g nodemon --> installs nodemon, note that the -g means to install globally so u can use it anywhere

MongoDB:
mongoose package allows you to do cool shit with mongodb such as create schemas
you have to add specific database into connection string to connect with that database
if document you create is incompatible with the collection then mongo will create new collection and add it there