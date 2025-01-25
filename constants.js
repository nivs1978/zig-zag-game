const blockSize = 100;
const acceleration = 0.005;

let rnd = (function () {
    let a = 1, b = 1;
    return {
      nextInt: function () {
        a = (a * 67307) & 0xffff;
        b = (b * 67427) & 0xffff;
        return a ^ (b << 15);
      },
      nextFloat: function () {
        return this.nextInt() / 0x100000000;
      },
      reset(seed) {
        a = b = seed | 0;
      }
    };
  })();
