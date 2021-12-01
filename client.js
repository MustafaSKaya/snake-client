const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server"); // code that does something when the connection is first established
    conn.write(`Name: meh`);
    conn.write(`Move: up`);
    conn.write(`Move: down`);
    conn.write(`Move: left`);
    conn.write(`Move: right`);
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
});
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect