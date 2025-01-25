class Tree {
    constructor(x, y) {
        this.x = x * blockSize + blockSize / 2;
        this.y = y * blockSize + blockSize / 2;
        this.seed = Math.floor(Math.random() * 0xffff); // Initialize a random seed
        this.treeResolution = 20;
        this.angleStep = Math.PI * 2 / this.treeResolution;
    }

    getRandomRadius(outer, inner) {
        if (rnd.nextFloat() < 0.2) { // Use the seed to determine the radius
            return inner;
        } else {
            return outer;
        }
    }
    
    draw(ctx) {
        // Draw tree seen from top view with different green colors
        // Draw a n-gon with n = 20, radius 40, and center at (this.x, this.y)
        // if Math.random is < 0.1 the radius should be 30
        rnd.reset(this.seed); 
        ctx.beginPath();
        ctx.fillStyle = "#006600";
        ctx.moveTo(this.x + this.getRandomRadius(40, 35), this.y);
        for (let i = 1; i < this.treeResolution; i++) {
            let angle = i * this.angleStep;
            let radius = this.getRandomRadius(40, 35);
            ctx.lineTo(this.x + radius * Math.cos(angle), this.y + radius * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#007700";
        ctx.moveTo(this.x + this.getRandomRadius(30,25), this.y);
        for (let i = 1; i < this.treeResolution; i++) {
            let angle = i * this.angleStep;
            let radius = this.getRandomRadius(30,25);
            ctx.lineTo(this.x + radius * Math.cos(angle), this.y + radius * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#008800";
        ctx.moveTo(this.x + this.getRandomRadius(20,15), this.y);
        for (let i = 1; i < 20; i++) {
            let angle = i * Math.PI / 10;
            let radius = this.getRandomRadius(20,15);
            ctx.lineTo(this.x + radius * Math.cos(angle), this.y + radius * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();
    }
}