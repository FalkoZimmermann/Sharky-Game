class Jellyfish extends MovableObject {

    
    width = 50;
    height = 50;

    IMAGES_WALKING = [
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 500;
        this.animate();
    }

    
    animate() {
        setInterval ( () => {
        this.y += 1 + Math.random() * 5;
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 150);
    }
}



class Pufferfish extends MovableObject {

    
    width = 50;
    height = 50;

    IMAGES_WALKING = [
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 500;
       this.animate();
    }

    animate() {
        
        setInterval ( () => {
            this.x -= 0.3 + Math.random() * 15;
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 150);

       
        
    }
}

class Jellyfish_Yellow extends MovableObject {

    
    width = 50;
    height = 50;

    IMAGES_WALKING = [
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];

    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 500;
       this.animate();
    }

    animate() {
        
        setInterval ( () => {
            this.x -= 0.3 + Math.random() * 15;
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 150);

       
        
    }
}

class Pufferfish_Red extends MovableObject {

    
    width = 50;
    height = 50;

    IMAGES_WALKING = [
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];

    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 500;
        this.animate();
    }

    
    animate() {
        setInterval ( () => {
           
        this.y += 1 + Math.random() * 5;
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
            
        }, 150);
    }

       
        
    
}