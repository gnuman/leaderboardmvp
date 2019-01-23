#!/usr/bin/env bash

docker exec -i --user postgres leaderboard_db_1 createdb leaderboard

docker exec -i --user postgres leaderboard_db_1 psql leaderboard -a  <<__END

create user leaderboard_role password 'PG_PASSWORD=leaderboard';

docker exec -i leaderboard_db_1 psql -Uleaderboard_role leaderboard -a <<__END
drop table if exists auths;
drop table if exists loginsessions;
drop table if exists Referees;
drop table if exists Subscribers;
drop table if exists Competitions;
drop table if exists Games;
drop table if exists Players;
drop table if exists Rounds;
drop table if exists Leaderboards;

CREATE TABLE auths (
    id serial primary key,
    "passwordHash" TEXT NOT NULL,
    email TEXT NOT NULL,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    constraint auth_group UNIQUE  (email)
);


CREATE TABLE loginsessions (
    id serial primary key,
    "secretKey" TEXT NOT NULL,
    "userId" integer NOT NULL references users(id),
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    "expiryTime" INTEGER
);

CREATE TABLE Referees (
    id serial primary key,
    "authId" integer NOT NULL references auths(id),
    
    "profileName" TEXT NOT NULL,
    "profilePic" TEXT,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

CREATE TABLE Subscribers (
    id serial primary key,    
    "profileName" TEXT NOT NULL,
    "profilePic" TEXT,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

CREATE TABLE Competitions (
    id serial primary key,
    "competitionName" TEXT NOT NULL,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

CREATE TABLE Games (
    id serial primary key,
    "gameName" TEXT NOT NULL,
    "competitionId" integer NOT NULL references Competitions(id),
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

CREATE TABLE Players (
    id serial primary key,
    "gameId" integer NOT NULL references Games(id),
    "profileName" TEXT NOT NULL,
    "profilePic" TEXT,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

CREATE TABLE Rounds (
    id serial primary key,
    "roundName" TEXT NOT NULL,
    "gameId" integer NOT NULL references Games(id),
    "playerId" integer NOT NULL references Players(id),
    "roundOneScore" integer,
    "roundTwoScore" integer,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

CREATE TABLE Leaderboards (
    id serial primary key,
    "gameId" integer NOT NULL references Games(id),
    "winningPlayerId" integer NOT NULL references Players(id),
    "loosingPlayerId" integer NOT NULL references Players(id),
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);

__END
