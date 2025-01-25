class House {
    constructor(x, y, length, direction) {
        this.x = x * blockSize;
        this.y = y * blockSize;
        this.length = length;
        this.direction = direction;
        if (direction === Direction.RIGHT) {            
            this.width = length * blockSize;
            this.height = blockSize;
        } else {
            this.width = blockSize;
            this.height = length * blockSize;
        }
    }
    
    draw(ctx) {
        let colorLeftTriangle = "#FD4509";
        let colorTrapezoidTop = "#FF5D2F";
        let colorRightTriangle = "#D82B00";
        let colorTrapezoidBottom = "#C32A00";

        if (this.direction === Direction.RIGHT) {
            const x1 = this.x + this.height / 3;
            const x2 = this.x + this.width - this.height / 3;
            const centerY = this.y + this.height / 2;

            // Left triangle
            ctx.fillStyle = colorLeftTriangle;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(x1, centerY);
            ctx.lineTo(this.x, this.y + this.height);
            ctx.closePath();
            ctx.fill();

            // Right triangle
            ctx.fillStyle = colorRightTriangle;
            ctx.beginPath();
            ctx.moveTo(this.x + this.width, this.y);
            ctx.lineTo(x2, centerY);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.closePath();
            ctx.fill();

            // Top trapezoid
            ctx.fillStyle = colorTrapezoidTop;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.width, this.y);
            ctx.lineTo(x2, centerY);
            ctx.lineTo(x1, centerY);
            ctx.closePath();
            ctx.fill();

            // Bottom trapezoid
            ctx.fillStyle = colorTrapezoidBottom;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.height);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.lineTo(x2, centerY);
            ctx.lineTo(x1, centerY);
            ctx.closePath();
            ctx.fill();
        } else {
            const y1 = this.y + this.width / 3;
            const y2 = this.y + this.height - this.width / 3;
            const centerX = this.x + this.width / 2;

            // Top triangle
            ctx.fillStyle = colorLeftTriangle;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(centerX, y1);
            ctx.lineTo(this.x + this.width, this.y);
            ctx.closePath();
            ctx.fill();

            // Bottom triangle
            ctx.fillStyle = colorRightTriangle;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.height);
            ctx.lineTo(centerX, y2);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.closePath();
            ctx.fill();

            // Left trapezoid
            ctx.fillStyle = colorTrapezoidTop;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(centerX, y1);
            ctx.lineTo(centerX, y2);
            ctx.lineTo(this.x, this.y + this.height);
            ctx.closePath();
            ctx.fill();

            // Right trapezoid
            ctx.fillStyle = colorTrapezoidBottom;
            ctx.beginPath();
            ctx.moveTo(this.x + this.width, this.y);
            ctx.lineTo(centerX, y1);
            ctx.lineTo(centerX, y2);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.closePath();
            ctx.fill();
        }
    }
}