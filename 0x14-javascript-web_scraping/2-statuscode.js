#!/usr/bin/node
/* Write a script that display the status code of a GET request. */

const request = require('request');
const url = process.argv[2];
request.get(url).on('response', response => {
  const status = `${response.statusCode}`;
  console.log('code:', status);
});
