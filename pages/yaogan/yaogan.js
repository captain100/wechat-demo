Page({
  data: {
    x: "50",
    y: "50"
  },
  touchmove(e) {
    console.log(e);
  },
  touchend() {
    this.setData({
      x: 50,
      y: 50
    });
  }
});
