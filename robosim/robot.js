var gamejs = require('gamejs');
var draw = require('gamejs/draw');

var Robot = function(rect, img) {

   Robot.superConstructor.apply(this, arguments);
   this.angle = 0;
   this.delay = 0;
   this.speed = 0;
   this.dragging = false;

   this.originalImage = gamejs.image.load(img);
   var dims = this.originalImage.getSize();

   this.radius = dims[0]/2;
   
   this.image = this.originalImage;
   
   this.rect = new gamejs.Rect(rect);


   return this;

};

// inherit (actually: set prototype)
gamejs.utils.objects.extend(Robot, gamejs.sprite.Sprite);
Robot.prototype.update = function(msDuration) {
   // moveIp = move in place
    this.rect.moveIp(0, -this.speed * (msDuration/1000));
///   this.image = gamejs.transform.rotate(this.originalImage, this.rotation);
}

Robot.prototype.mouseOver = function(pos) {
    var dx = this.rect.left - pos[0];
    var dy = this.rect.top - pos[1];
    //console.log(this.radius, Math.sqrt(dx*dx+dy*dy));
    
    return Math.sqrt(dx*dx+dy*dy) < this.radius;
}

Robot.prototype.stayIn = function(dims){
    var x = this.rect.left;
    var y = this.rect.top;

    if (x - this.radius < 0) this.rect.left = 0 + this.radius;
    else if (x + this.radius > dims[0]) this.rect.left = dims[0] - this.radius;

    if (y - this.radius < 0) this.rect.top = 0 + this.radius;
    else if (y + this.radius > dims[1]) this.rect.top = dims[1] - this.radius;
}  

Robot.prototype.draw = function(surface) {
    var rect = new gamejs.Rect([this.rect.left-this.radius, this.rect.top-this.radius]);
    surface.blit(this.image, rect);
}

Robot.prototype.eventResponse = function(event) {
    if (event.type == gamejs.event.MOUSE_DOWN) {
        var pos = event.pos;
        if (this.mouseOver(pos)) {
            this.dragging = !this.dragging;
        }

    } else if (event.type === gamejs.event.MOUSE_UP) {
        var pos = event.pos;
    } else if (event.type === gamejs.event.MOUSE_MOTION) {
        var pos = event.pos;
        if (this.dragging) {
            this.rect.left = pos[0];
            this.rect.top = pos[1];
        }
    }
}

Robot.prototype.moveForward = function(steps) {
    this.rect.top -= steps;
    this.speed = 0;
}

Robot.prototype.moveBackward = function(steps) {
    this.rect.top += steps;
    this.speed = 0;
}

Robot.prototype.onFwd = function(speed) {
    this.speed = speed;
}

Robot.prototype.onRev = function(speed) {
    this.speed = -speed;
}

Robot.prototype.stop = function() {
    this.speed = 0;
}

exports.Robot = Robot;
