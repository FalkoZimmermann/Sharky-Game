class Endboss extends MovableObject {

   
    height = 200;
    width = 200;

    IMAGES_WALKING = [
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];

    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 800;
        this.y = 200;
        this.animate();
    }

    animate() {
        setInterval ( () => {
        
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 150);
    }
    
}