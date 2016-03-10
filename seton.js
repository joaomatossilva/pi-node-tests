var gpio = require("pi-gpio");

gpio.open(18, "output", function(err) {     // Open pin 18 for output
    gpio.write(18, 1, function() {          // Set pin 18 high (1)
        gpio.close(18);                     // Close pin 18
    });
});