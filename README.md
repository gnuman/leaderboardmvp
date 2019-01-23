# Leaderboard MVP


## architecture

It' divived into three parts, db layer, server, client

### Database

I have used postgressql in docker so that it would be easy to test

To start postgresql,

./bin/docker-up.sh

Once you start it, initialise it 

./bin/setup-db.sh

DB models can be found on https://github.com/gnuman/leaderboardmvp/blob/master/db/bin/setup-db.sh

### Server 

I have used webpack for compilation of Express.
Server has three parts view i.e api, controller and model.
I have implemented Login, Leaderboard Api's, Leadeboard API is more of mock API.
Things to do:
Error handling of API's , unit tests

### Clinet 

I have used https://github.com/faceyspacey/redux-first-router for client, it also uses server side rendering.
One of my focus on client was getting its architecture right.
To-Do
Use eslint rules, integrate it with server.
Most of UI have not implemented. But it would be relatively easy to integrate with server.







