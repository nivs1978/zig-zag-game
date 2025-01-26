class Track {
   constructor(num, minLength, maxLength) {
      this.left = 0;
      this.top = 0;
      this.minLength = minLength;
      this.length = maxLength - minLength;

      this.rectangles = [];
      this.index = 0;
      while(this.index < num) {
         this.enqueueRectangle();
      }
   }

   enqueueRectangle() {
      let thisLength = Math.floor(Math.random() * this.length) + this.minLength;
      if (this.rectangles.length == 0) {
         thisLength = this.length;
      }
      if (this.index % 2 == 0) {
         this.rectangles.push(new Rectangle(this.left, this.top, thisLength, Direction.RIGHT));
         this.left += thisLength - 1;
      } else {
         this.rectangles.push(new Rectangle(this.left, this.top, thisLength, Direction.DOWN));
         this.top += thisLength - 1;
      }
      this.index ++;
   }

   dequeueRectangle() {
      this.rectangles.shift();
   }

   adjustFor(player) {
      for (let i = 0; i < this.rectangles.length; i++) {
         const rect = this.rectangles[i];
         if (rect.contains(player)) {
            if (i > this.rectangles.length / 2) {
               this.dequeueRectangle();
               this.enqueueRectangle();
               return;
            }
         }
      }
   }

   contains(player) {
      let isOnTrack = false;
      for (const rect of this.rectangles) {
         if (rect.contains(player)) {
            isOnTrack = true;
         }
      }
      return isOnTrack;
   }

   draw(ctx) {
      for (const rect of this.rectangles) {
         rect.draw(ctx);
      }
   }
}