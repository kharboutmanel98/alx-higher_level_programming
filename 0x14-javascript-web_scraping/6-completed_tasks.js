#!/usr/bin/node
/* Write a script that computes the number of tasks completed by user id. */
/* The first argument is the API URL: https://jsonplaceholder.typicode.com/todos */

const request = require('request');
const url = process.argv[2];
request(url, (error, response, body) => {
  if (!error) {
    const todos = JSON.parse(body);
    const completed = {};
    todos.forEach((todo) => {
      if (todo.completed && completed[todo.userId] === undefined) {
        completed[todo.userId] = 1;
      } else if (todo.completed) {
        completed[todo.userId] += 1;
      }
    });
    console.log(completed);
  }
});
