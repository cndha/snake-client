const { IP, PORT } = require('./constants');

const net = require("net");

const connect = function () {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //receiving data from server
  conn.on('data', (data) => {
    console.log(data);
  })

  //when connection established
  conn.on('connect', () => {
    conn.write('Name: CIN');
    conn.write('Say: -HA');
    console.log('I\'M HERE');
  })

  return conn;
};

module.exports = connect;