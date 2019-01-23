#!/usr/bin/env bash

docker exec -ti --user postgres leaderboard_db_1 psql -Uleaderboard_role postgres
