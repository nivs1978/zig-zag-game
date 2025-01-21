class Track {
   constructor(left, top, num, shortSide, minLongSide, maxLongSide) {
      this.left = left;
      this.top = top;
      this.shortSide = shortSide;
      this.minLongSide = minLongSide;
      this.length = maxLongSide - minLongSide;

      this.rectangles = [];
      this.index = 0;
      while(this.index < num) {
         this.enqueueRectangle();
      }
   }

   enqueueRectangle() {
      let longSide = Math.floor(Math.random() * this.length) + this.minLongSide;
      console.log(longSide);
      if (this.index % 2 == 0) {
         const [width, height] = [longSide, this.shortSide];
         this.rectangles.push(new Rectangle(this.left, this.top, width, height));
         this.left += width - this.shortSide;
      } else {
         const [width, height] = [this.shortSide, longSide];
         this.rectangles.push(new Rectangle(this.left, this.top, width, height));
         this.top += height - this.shortSide;
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