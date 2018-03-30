var Cylon = require('cylon');


Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.141.31:1883' }
  },

  devices: {
    hello: { driver: 'mqtt', topic: 'greetings' }
  },

  work: function(my) {

    my.hello.on('message', function (data) {
      console.log(data.toString());
      
    });



    //every((1).seconds(), function() {
    //  console.log("Saying hello...");
    //  my.hello.publish('hi there');
    //});
  }
}).start();