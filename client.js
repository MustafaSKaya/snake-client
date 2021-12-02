const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server"); // code that does something when the connection is first established
    conn.write(`Name: MSK`);
    //conn.write(`Move: up`);
    //conn.write(`Move: down`);
    //conn.write(`Move: left`);
    //conn.write(`Move: right`);
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
});
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect