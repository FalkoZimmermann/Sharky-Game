class level {
    enemies;
    barrieres;
    coins;
    backgroundObjects;
    endboss;
    level_end_x = 3150;
    level_begin_x = 0;

    constructor(enemies, barrieres, coins, backgroundObjects, endboss) {
        this.enemies = enemies;
        this.barrieres = barrieres;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
    }
}