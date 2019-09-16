# Back-end and database

Back end is build with Mongodb and node.js

`app.js` is entry point for the backend

# How to run
run `npm install` in the folder containing package.json

run `node app.js` in the directory where app.js is. 

# Details
port is set to 1234 for backend server to avoid running front end and back end servers on same port.

This creates well known CORS issue and will need browser to allow CORS. CORS plugin can be installed in browser's extensions.

This issue is solved when the application is deployed on server so need not be solved while developing locally .

