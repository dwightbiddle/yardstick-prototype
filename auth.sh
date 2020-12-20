#!/bin/bash
curl -X POST \
   -H 'Content-Type: application/json' \
   -d '{ "username":"dwight.biddle@gmail.com", "password":"xxxxxxxx", "rememberMe":"true" }' \
   'https://api.withleaf.io/api/authenticate'