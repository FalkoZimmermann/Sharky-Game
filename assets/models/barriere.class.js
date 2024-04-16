class Barriere1 extends MovableObject {
    
    height = 200;
    width = 100;


    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/3. Background/Barrier/3.png');
        
        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 400;

        this.animate();
    }
    
    animate() {
        setInterval( () => {
            this.x -= 0.5;
        }, 1000 / 60);
    } 
}

class Barriere2 extends MovableObject {

    height = 150;
    width = 100;

    constructor() {
    super().loadImage('assets/img/Alternative Grafiken - Sharkie/3. Background/Barrier/2.png');

        this.x = 300 + Math.random() * 3000;
        this.y = 550;

        
    }

    
}

class Barriere3 extends MovableObject {
    
    height = 200;
    width = 100;


    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/3. Background/Barrier/1.png');
        
        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 400;

        this.animate(); 
    }

    
    animate() {
        setInterval( () => {
            this.x -= 1;
        }, 50);
    } 
}
