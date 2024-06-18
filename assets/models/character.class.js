class Character extends MovableObject {
    x = 100;
    height = 150;
    width = 150;
    energy = 100;
    isDeadState = false;
    

    IMAGES_DEAD = [
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_HURT = [
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_IDLE = [
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i1.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i2.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i3.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i4.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i5.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i6.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i7.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i8.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i9.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i10.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i11.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i12.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i13.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i14.png'
    ];

    IMAGES_SWIM = [
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/2.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/3.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/4.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/5.png',
        'assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/6.png'
    ];

    world;
    swim_sounds = new Audio('/assets/audio/swim_sound.mp3');

    constructor() {
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDeadState) {
                this.y -= 1; // Lässt den Charakter langsam nach oben schwimmen
                return; // Beendet die Funktion frühzeitig, damit keine weitere Bewegung möglich ist
            }

            this.swim_sounds.pause();
            
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.lastKeyPressTime = Date.now();
            }
            if (this.world.keyboard.UP && this.y > -50) {
                this.moveUp();
                this.lastKeyPressTime = Date.now();
            }
            if (this.world.keyboard.DOWN && this.y < 550) {
                this.moveDown();
                this.lastKeyPressTime = Date.now();
            }
            if (this.world.keyboard.LEFT && this.x > 100) {
                this.moveLeft();
                this.lastKeyPressTime = Date.now();
            }

            if ((this.x - this.world.camera_x) <= 100) {
                this.world.camera_x = Math.max(this.x - 100, 0);
            } else if ((this.x - this.world.camera_x) >= this.world.canvas.width - 600) {
                this.world.camera_x = Math.min(this.x - this.world.canvas.width + 600, this.world.level.level_end_x - this.world.canvas.width) * -1;
            }

            /*Jumping with gravity

            if(this.world.keyboard.SPACE && !this.isAboveGround() ) { 
                this.jump();
            }
                */

        }, 1000 / 60);

        setInterval(() => {
            if (this.isDeadState) {
                // Abspielen der Todesanimation
                if (this.currentImage < this.IMAGES_DEAD.length) {
                    let i = this.currentImage;
                    let path = this.IMAGES_DEAD[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                } else {
                    // Bleib beim letzten Bild, wenn die Animation fertig ist
                    let path = this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1];
                    this.img = this.imageCache[path];
                }
                return; // Beendet die Funktion frühzeitig, damit keine weitere Animation möglich ist
            }

            /* Jumping with gravity

        if(this.isAboveGround()) {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
         } else {
            */

            if (this.isDead()) {
                this.isDeadState = true; // Zustand setzen
            } else if (this.isHurt()) {
                let i = this.currentImage % this.IMAGES_HURT.length;
                let path = this.IMAGES_HURT[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                if (Date.now() - this.hurtStartTime > 3000) {
                    this.isHurtState = false;
                }
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);
    }


}

 