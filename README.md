# mernApp

A template for MERN applications. It comes with basic Create, Read, and Delete functionality. Updating coming soon. Check out the deployed code on [Heroku](https://scaevius-mern-app.herokuapp.com/).

## Setup

1. run `git clone https://github.com/scaevius/mernApp.git`
2. `cd mernApp`
3. `npm install`

### Database configuration

Enter your database username, password, hostname, database name in config/db.js.
For development, I used [MLab](https://mlab.com/home) which is great for creating sandbox databases for testing. The rest of the API is designed to work with Mongoose.
Just replace the dummy model in the models folder with your own models.

### Client

The React front-end was built from scratch without **create-react-app** to allow for more freedom extending Webpack. I also have run into problems trying to get ESLint to work with **create-react-app**.

## Developing

Run `npm start` to start the Express and Webpack(front-end) servers. The Express server runs on port 5000 by default and the Webpack-Dev-Server on 8080. If you need to change the Express server's port, remember to update the port number in App.js.
Here's a list of the different NPM scripts:

1. `npm run dev`: Starts the servers for development
2. `npm run client`: Starts the Webpack-Dev-Server for the client
3. `npm run client:build`: Creates a build for the client
4. `npm start`: Starts the Express server
5. `npm run server`: Starts the Express server with Nodemon

## Build (Heroku)

Before deploying there are a few changes you need to make. Up to now, the app has been running on two servers (2 different ports on localhost). But when its deployed, it'll only run on the Express server which will also serve up the React front-end. So you need to change the url for any API calls(Fetch, xmlHTTPRequest, Axios, e.c.t) on the front-end to only include the route, i.e. 'http://localhost:5000/api/info' becomes '/api/info'

1. Sign up for a Heroku account
2. Download the [Heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
3. Navigate to root folder for you app in your terminal
4. Run `git init` if you haven't already
5. Commit all changes
6. Run `heroku login` and enter your account information
7. Run `heroku create` (make sure you are in the root directory of your project). This creates a new app
8. Run `heroku git:remote -a your-apps-name`. This adds **heroku** as a new remote for git.
9. Run `git push heroku master`. If all goes well, this will deploy your app
10. To make any changes, commit the changes to the **master** branch and push to **heroku**
