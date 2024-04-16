class MovableObject {
    
    y = 80;
    img;    
    imageCache =[];
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0 ) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 500; 
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    drawframe(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "green";
        ctx.rect( this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementByID('image') <img id="image">
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {        
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
    });
    }
    
    moveRight() {
        this.x += 5;
        this.otherDirection = false;
        this.swim_sounds.play();
    }

    moveUp() {
        this.y -= 5;
        this.swim_sounds.play();
    }

    moveDown() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
        this.y += 5;
        this.swim_sounds.play();
    }

    moveLeft() {
        this.x -= 5;
        this.otherDirection = true;
        this.swim_sounds.play();

                // Überprüfen, ob der Charakter sich am linken Rand des Canvas befindet
        if (this.x - this.world.camera_x <= 200 && !isRightKeyPressed) {
            this.world.camera_x = Math.max(this.x - 200, 0);
        }
    }

    jump(){
        this.speedY = 40; 
    }

    
}