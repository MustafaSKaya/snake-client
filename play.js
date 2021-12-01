const net = require("net");

const connect = require('./client')
const setupInput = require('./input')



console.log("Connecting ...");
//console.log(client);
connect();
setupInput();