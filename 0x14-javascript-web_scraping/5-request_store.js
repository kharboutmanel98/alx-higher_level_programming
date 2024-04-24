#!/usr/bin/node
/* Write a script that gets the contents of a webpage and stores it in a file. */
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const script = process.argv[3];

/* request(url).pipe(fs.createWriteStream(script), (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Done');
  }
}); */

request(url).pipe(fs.createWriteStream(script));
