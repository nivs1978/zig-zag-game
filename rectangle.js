class Rectangle {
   constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
   }

   contains(player) {
      const left = this.x + player.radius;
      const right = this.x + this.width - player.radius;
      const top = this.y + player.radius;
      const bottom = this.y + this.height - player.radius;
      return (
         player.x >= left &&
         player.x <= right &&
         player.y >= top &&
         player.y <= bottom
      );
   }

   draw(ctx) {
      ctx.fillStyle = "darkgrey";
      ctx.fillRect(this.x, this.y, this.width, this.height);
   }
}