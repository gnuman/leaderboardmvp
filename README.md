# Leaderboard MVP


## Architecture

It' devided into three parts, db layer, server, client.

### Database

I have used docker for postgres, so that we don't need to install it locally 

Instructions to install docker on Mac

https://docs.docker.com/docker-for-mac/install/

Once you install docker, go to leaderboardmvp/db dir

To start postgres service  `./bin/docker-up.sh`

To create initial tables and insert data into it run `./bin/setup-db.sh`

To Login for db run `./bin/psql.sh`

DB models can be found on https://github.com/gnuman/leaderboardmvp/blob/master/db/bin/setup-db.sh

If you choose to run docker as root process, run above commands as sudo user

### Server 

I have used webpack for compilation of Express.

Server has three parts view i.e api, controller and model.

I have implemented Login, Leaderboard Api's, Leadeboard API is more of mock API.

Things to do:

Error handling of API's , unit tests

*How to run server*:

Go to leaderboardmvp/server

run yarn

Start `yarn watch ` in one tab

`yarn start` in another 

Server will get started on http://localhost:5000/ 


### Client

I have used https://github.com/faceyspacey/redux-first-router for client, it also uses server side rendering.

One of my focus on client was getting its architecture right.

To-Do

Use eslint rules, integrate it with server.

Most of UI have not implemented. But it would be relatively easy to integrate with server.

*How to run Client*:
Go to leaderboardmvp/client
yarn
yarn start

### Notes -

Problem desc has three three things, workable solution, extensible solution (other people can work on it), time frame ( don't loose your sleep).

With limited time that I have, I have decided to work on focus on overall Architecture as from my personal experience, it's really hard to change/modify Architecture when it grows(specially front end). 
  
Then it terms of features, it's based on their priority i.e absolutely necessary for MVP and dependency on other features.
So anyone who want to pick it up, they can look into my existing code and develop on top of it.







