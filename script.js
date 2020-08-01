'use strict';

function trackRobot(...steps) {
	if(!steps.length) return [0, 0];
    let [x, y] = [0, 0];


	for(let i = 0; i < steps.length; i++) {
        console.log(i, i % 2 == 0)
        if(i % 4 == 0) {
            x += steps[i];
        } else if(i % 2 == 0) {
            y += steps[i]
        } else if(i % 3 == 0) {
            x -= steps[i];
        } else {
            y -= steps[i]
        }
        
    }

    return [x, y]
	
}


trackRobot(20, 30, 10, 40)
trackRobot()
trackRobot(-10, 20, 10)
