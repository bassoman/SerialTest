var SerialPort = require("serialport").SerialPort

var serialPort = new SerialPort("COM4", {
  baudrate: 115200
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    process.stdout.write(data);
  });
  serialPort.write("ls\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});
