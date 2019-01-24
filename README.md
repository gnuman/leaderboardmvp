# Leaderboard MVP


## Architecture

It' devided into three parts, db layer, server, client.

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

### Client

I have used https://github.com/faceyspacey/redux-first-router for client, it also uses server side rendering.

One of my focus on client was getting its architecture right.

To-Do

Use eslint rules, integrate it with server.

Most of UI have not implemented. But it would be relatively easy to integrate with server.


### Notes -

Problem desc has three three things, workable solution, extensible solution (other people can work on it), time frame ( don't loose your sleep).
With limited time that I have, i decided to work on focus on overall Architecture as from my persoanl experience it really hard to change/modify Architecture as it grows(specially front end). 
Then it terms of features, i decided their priority i.e absolutely necessary for MVP and other features are dependant on them.
So anyone who want to pick it up, they can look into my existing code and develop on top of it.







