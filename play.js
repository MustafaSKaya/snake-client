const net = require("net");

const connect = require('./client')

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function () {
    process.exit();
};


console.log("Connecting ...");
//console.log(client);
connect();
setupInput();