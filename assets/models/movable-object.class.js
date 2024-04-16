class MovableObject {
    
    y = 80;
    img;    
    imageCache =[];
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;

    /* Jumping with gravity 


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

    */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawframe(ctx) {

        /* Zeigt nur ein Kollissionsrahmen um ein bestimmtes Object */

        if(this instanceof Character || this instanceof Jellyfish || this instanceof Jellyfish_Yellow ||
             this instanceof Pufferfish || this instanceof Endboss || this instanceof Pufferfish_Red || 
             this instanceof Barriere1 || this instanceof Barriere2 || this instanceof Barriere3 || this instanceof Coin) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "green";
        ctx.rect( this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
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

        /* Jumping with gravity
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); */
        this.y += 5;
        this.swim_sounds.play();
    }

    moveLeft() {
        
        this.x -= 5;
        this.otherDirection = true;
        this.swim_sounds.play();

                // Überprüfen, ob der Charakter sich am linken Rand des Canvas befindet
        
    }

    jump(){
        this.speedY = 40; 
    }


    isColliding (obj) {
        return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
                (this.Y + this.offsetY + this.height) >= obj.Y &&
                (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
                obj.onCollisionCourse; 
                
        // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

}

    
}