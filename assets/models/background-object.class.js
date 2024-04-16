class BackgroundObject1 extends MovableObject {

    width = 1500;
    height = 400;

constructor(imagePath, x ) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 768 - this.height;
    
}

}

class BackgroundObject2 extends MovableObject {

    width = 2048;
    height = 768;

constructor(imagePath, x ) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 768 - this.height;
    
}

}

class BackgroundObject3 extends MovableObject {

    width = 2048;
    height = 768;

constructor(imagePath, x ) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 768 - this.height;
    
}

}

class BackgroundObject4 extends MovableObject {

    width = 1024;
    height = 350;

constructor(imagePath, x, y ) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
    
}

} 