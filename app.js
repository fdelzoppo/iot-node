var Cylon = require('cylon');

"use strict";

var Cylon = require("cylon");

var TURN_TRESHOLD = 0.2,
    TURN_SPEED_FACTOR = 2.0;

var DIRECTION_THRESHOLD = 0.25,
    DIRECTION_SPEED_FACTOR = 0.05;

var UP_CONTROL_THRESHOLD = 50,
    UP_SPEED_FACTOR = 0.01,
    CIRCLE_THRESHOLD = 1.5;

var handStartPosition = [],
    handStartDirection = [];

var handWasClosedInLastFrame = false;

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
		
			//console.log(payload.toString());
		
	});
	
 my.leapmotion.on('gesture', function(gesture) {

   
		//On rentre si on fait plus de 0.5 cercle et que l'on stop (en vue)
        if (gesture.type=='circle' && gesture.state=='stop' && gesture.progress > 0.5 ){
		//sens horaire => selection
            if (gesture.normal[2] < 0) {
                console.log("b"+gesture.toString());
            };
		//sens anti horaire => retour
            if (gesture.normal[2] > 0) {
                console.log("a"+gesture.toString());
            }
        }
		//Si swipe 
        if (gesture.type=='swipe' && gesture.state=='stop' ){
		
		
		//Position[0] => axe x (Longueur LeapMotion)
		//Position[1] => axe z (Hauteur  LeapMotion)
		//Position[2] => axe y (Largeur du LeapMotion)
		
		
		//Pour swipe droit startposition[x] - position[x]
		 console.log(gesture);
		
          if(gesture.position[0] - gesture.startPosition[0] > 0)
		  {
		  console.log("droite");
		  
		  }
		  
		  if(gesture.position[0] - gesture.startPosition[0] < 0)
		  {
		  console.log("gauche");
		  }
        }
            
        
		
    });
	
	my.leapmotion.on('frame', function(frame) {
		
			//console.log(frame.toString());
		
    });
  }
}).start();