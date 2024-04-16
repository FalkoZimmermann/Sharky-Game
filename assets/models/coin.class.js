class Coin extends MovableObject {

    width = 30;
    height = 30;


    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png');

        this.x = 300 + Math.random() * 3000;
        this.y = 20 + Math.random() * 500;
    }

}
