var Sprite = function(pathSheet = new String(), x = new Number(), y = new Number(), w = new Number(), h = new Number()) {
    this.x = y;
    this.y = x;
    this.w = w;
    this.h = h;

    this.px = 0;
    this.py = 0;
    this.pw = 0;
    this.ph = 0;

    this.img = new Image();
    this.img.src = pathSheet;

}

Sprite.prototype.setSize = function(w = new Number(), h = new Number()) {
    this.w = w;
    this.h = h;
}

Sprite.prototype.setPosition = function(x = new Number(), y = new Number()) {
    this.x = x;
    this.y = y;
}

Sprite.prototype.setSubSprite = function(px = new Number(), py = new Number(), pw = new Number(), ph = new Number()) {
    this.px = px;
    this.py = py;
    this.pw = pw;
    this.ph = ph;
}

Sprite.prototype.draw = function() {
    Canvas.drawImage(this.img, this.x, this.y, this.w, this.h, this.px, this.py, this.pw, this.ph);
}

var SpriteSheet = function(pathSheet = new String(), rows = new Number(), columns = new Number(), wt = new Number(), ht = new Number()) {
    this.pathSheet = pathSheet;
    this.rows = rows;
    this.columns = columns;
    this.widthTiles = wt;
    this.heightTiles = ht;
    this.widthSheet = rows * wt;
    this.heightSheet = columns * ht;
}

SpriteSheet.prototype.getSpriteXY = function(xT, yT) {
    var sprite = new Sprite(this.pathSheet, 0, 0, this.widthTiles,  this.heightTiles);

    sprite.setSubSprite(xT * this.widthTiles, yT * this.heightTiles, this.widthTiles, this.heightTiles);

    return sprite;
}

SpriteSheet.prototype.getSpriteI = function(index) {
    var sprite = new Sprite(this.pathSheet, 0, 0, this.widthTiles,  this.heightTiles);
    var xT = 0;
    var yT = 0;

    for (var i = 0; i < index; i++) {
        xT++;
        if (xT == 8) {
            xT = 0;
            yT++;
        }
    }
 
    sprite.setSubSprite(xT * 16, yT * 16, 16, 16);

    return sprite;
}