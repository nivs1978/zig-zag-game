class Rectangle {
   constructor(x, y, blockLength, direction) {
      this.x = x * blockSize;
      this.y = y * blockSize;
      this.houses = [];
      this.trees = [];
      if (direction === Direction.RIGHT) {
         this.width = blockLength * blockSize;
         this.height = blockSize;
      } else {
         this.width = blockSize;
         this.height = blockLength * blockSize;
      }
      this.createHouses(x, y, 1, blockLength, direction);
      this.createHouses(x, y, -1, blockLength, direction);
   }

   createHouses(x, y, sideOffset, blockLength, direction) {
      let remainingLength = blockLength;
      let currentX = x;
      let currentY = y;

      if (sideOffset<0) { // if sideOffset is negative, we need to adjust the starting position
         if (direction === Direction.RIGHT) {
            currentX = x + 2;
         } else {
            currentY = y + 2;
         }
         remainingLength -= 1;
      }
      while (remainingLength > 0) {
         let houseLength = Math.min(remainingLength, Math.floor(Math.random() * 2) + 2);
         if (remainingLength < houseLength + 1) {
            if (remainingLength >= 3) {
               houseLength = 2;
            } else {
               break;
            }
         }
         if (direction === Direction.RIGHT) {
            this.houses.push(new House(currentX, y + sideOffset, houseLength, Direction.RIGHT));
            currentX += houseLength + 1;
            this.trees.push(new Tree(currentX-1, y + sideOffset));
         } else {
            this.houses.push(new House(x + sideOffset, currentY, houseLength, Direction.DOWN));
            currentY += houseLength + 1;
            this.trees.push(new Tree(x + sideOffset, currentY-1));
         }
         remainingLength -= houseLength + 1;
      }
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
      this.houses.forEach(house => house.draw(ctx));
      this.trees.forEach(tree => tree.draw(ctx));
   }
}