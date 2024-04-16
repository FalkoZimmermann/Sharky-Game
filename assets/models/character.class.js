class Character extends MovableObject {

    x = 100;

    height = 150;
    width = 150;
    energy = 5;



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
    ]

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
        super().loadImage('assets/img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png',);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
       /* Jumping with gravity
       
       this.applyGravity(); */


        this.animate();
    }

    animate() {
        let isRightKeyPressed = false;

        setInterval(() => {
            this.swim_sounds.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                if (this.world.level.level_end_x) {
                    this.moveRight();
                }
            }
            
            if (this.world.keyboard.UP && this.y > -50) {
                this.moveUp();
            }            
            
            if (this.world.keyboard.DOWN && this.y < 550) {
                this.moveDown();
            }

            if (this.world.keyboard.LEFT && this.x > 100) {
                this.moveLeft();
                if (this.x - this.world.camera_x <= 200 && !isRightKeyPressed) {
                    this.world.camera_x = Math.max(this.x - 200, 0);
                }
            }

            /*Jumping with gravity

            if(this.world.keyboard.SPACE && !this.isAboveGround() ) { 
                this.jump();
            }
                */


            if ((this.x - this.world.camera_x) <= 100) {
                this.world.camera_x = Math.max(this.x - 100, 0);
            } else if ((this.x - this.world.camera_x) >= this.world.canvas.width - 600) {
                this.world.camera_x = Math.min(this.x - this.world.canvas.width + 600, this.world.level.level_end_x - this.world.canvas.width) * -1;
            }



        }, 1000 / 60);

    
        setInterval(() => {

            /* Jumping with gravity

            if(this.isAboveGround()) {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
             } else {
                */


            if (this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }else {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }
        , 150);

    } 

}