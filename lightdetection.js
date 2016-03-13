var GPIO = require('onoff').Gpio,
    sensor = new GPIO(23, 'out');
    
var sense = function(callback){
    var reading = 0;
    sensor.setDirection('out');
    sensor.writeSync(0);
     
    sensor.setDirection('in');
    var read = function(callback){
        setTimeout(function () {
            var value = sensor.readSync();
            if(value == 0){
                reading++;
                read(callback);
            } else {
                callback(reading);
            }
        }, 10)
    };
    read(callback);
};

var interval = setInterval(function(){
    sense(function(value) {
        console.log(value);
    })
}, 1000);