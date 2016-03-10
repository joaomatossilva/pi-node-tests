var gpioPin = 18;
var GPIO = require('onoff').Gpio,
    led = new GPIO(gpioPin, 'out');

var intervalId;
var durationId;
 
var on = 1;
console.log('GPIO pin '+gpioPin+' is open. toggling LED every 100 mS for 10s');


intervalId = setInterval( function(){
  led.write(on, function() { // toggle pin between high (1) and low (0)
    on = (on + 1) % 2;
    });
  }, 100);


durationId = setTimeout( function(){
  clearInterval(intervalId);
  clearTimeout(durationId);
  console.log('10 seconds blinking completed');
  led.write(0, function() { 
    process.exit(0); // and terminate the program
  });
}, 10000); // duration in mS