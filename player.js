class Player {
   constructor(x, y, radius, speed = 2) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.direction = Direction.RIGHT;
      this.speed = speed;
      this.distance = 0;
      this.image = new Image();
      this.image.src = "graphics/car.png";
      this.particles = [];
      this.particleTick = 0;
   }

   move() {
      this.particles.push(new SmokeParticle(this.x, this.y, this.direction));
      if (this.direction == Direction.RIGHT) {
         this.x += this.speed;
      } else {
         this.y += this.speed;
      }
      this.distance += this.speed / 10.0;
   }

   changeDirection() {
      this.direction = this.direction == Direction.RIGHT ? Direction.DOWN : Direction.RIGHT;
   }

   draw(ctx) {
      ctx.save()
      ctx.translate(this.x ,this.y)
      if (this.direction == Direction.RIGHT) {
         ctx.rotate(Math.PI / 180 * 90)
      } else {
         ctx.rotate(Math.PI / 180 * 180)
      }
      ctx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2, this.image.width, this.image.height);
      ctx.restore();
      this.particles.forEach(p => {
        p.draw(ctx);
        p.update(); 
      });
      if (this.particles.length > 20) {
         this.particles.shift();
      }

   }
}