function Brick(posx, posy, type) {
    this.BRICK_SIDE = 50;
    this.pos = new Vector(posx, posy);
    this.hitpoints = 1;
    this.type = type;
    this.alive = true;

    //TODO - make this a function
    switch (type) {
        case 0:
            this.col = "DimGray";
            this.hitpoints = 3;
            break;

        case 1:
            this.col = "Red";
            this.hitpoints = 2;
            break;

        case 2:
            this.col = "DarkTurquoise";
            this.hitpoints = 1;
            break;

        default:
            this.col = "White"
            this.hitpoints = 1;
    }

    this.takeDamage = function() {
        this.hitpoints -= 1;
    }

    //gets brick's side length
    this.getSize = function() {
        return this.BRICK_SIDE;
    }

    //draws brick on the screen
    this.render = function() {
        const GAP = 1
        if (this.alive) {
            drawRectangle(this.pos.X, this.pos.Y, this.BRICK_SIDE - GAP, this.BRICK_SIDE - GAP, this.col);
            showText(this.hitpoints, this.pos.X + 6, this.pos.Y + 6, "white");
        }
    }

    //refactored from collisionCheck for clarity
    this.collisionY = function(collider) {
        if (collider.pos.Y > this.pos.Y &&
            collider.pos.Y < this.pos.Y + this.BRICK_SIDE) {
            return true;
        } else {
            return false;
        }
    }

    //refactored from collisionCheck for clarity
    this.collisionX = function(collider) {
        if (collider.pos.X > this.pos.X &&
            collider.pos.X < this.pos.X + this.BRICK_SIDE) {
            return true;
        } else {
            return false;
        }
    }

    //checks if objects is colliding with self
    this.collisionCheck = function(collider) {
        if (this.alive) {
            if (this.collisionX(collider) && this.collisionY(collider)) {
                return true;
            } else {
                return false;
            }
        }
    }
}