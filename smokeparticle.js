class SmokeParticle {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        if (direction == "right") {
            this.x -= 20;
            this.y += Math.random() * 10;
        } else
        {
            this.y -= 20;
            this.x -= Math.random() * 10;
        }
        this.size = 5;
        this.alpha = 1;
    }
    
    update() {
        this.size += 0.2;
        this.alpha -= 0.04;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}