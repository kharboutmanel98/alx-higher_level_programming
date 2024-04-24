#!/usr/bin/node
/*
Write a script that prints all characters of a Star Wars movie:

The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line
You must use the Star wars API
You must use the module request
*/

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const movieId = process.argv[2];

request(url + movieId, (err, response, body) => {
  if (!err) {
    const characters = JSON.parse(body).characters;
    /* running a loop */
    characters.forEach((character) => {
      request(character, (err, reponse, body) => {
        if (!err) {
          console.log(JSON.parse(body).name);
        }
      });
    });
  }
});
