var Cylon = require('cylon');

var antispam1=0,antispam2=0,antispam3=0;
Cylon.robot({
  connections: {
    leapmotion: { 
		adaptor: 'leapmotion'
		//,host: '192.168.141.33' 
	}
	
  },

  devices: {
    leapmotion: { driver: 'leapmotion' }
  },

  work: function(my) {
	my.leapmotion.on('hand', function(payload) {
		if(antispam1 % 40 == 0) 
			console.log(payload.toString());
		antispam1++;
	});
	
	my.leapmotion.on('gesture', function(gesture) {
		if(antispam2 % 20 == 0) 
			console.log(gesture.toString());
		antispam2++;
    });
	
	my.leapmotion.on('frame', function(frame) {
		if(antispam3 % 60 == 0) 
			console.log(frame.toString());
		antispam3++;
    });
  }
}).start();