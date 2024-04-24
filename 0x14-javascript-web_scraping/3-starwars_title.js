#!/usr/bin/node
/* Write a script that prints the title of a Star Wars movie where the episode number matches a given integer. */

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
const episode = process.argv[2];

request(url + episode, function (err, response, body) {
  if (err) {
    throw err;
  } else if (response.statusCode === 200) {
    const load = JSON.parse(body);
    console.log(load.title);
  } else {
    console.log('error:', response.statusCode);
  }
});
