Page({
  data: {
    sliderValue: 0,
    score: 0,
    isShow: false
  },
  onLoad(options) {
    const { score } = options;
    this.setData({
      score
    });
  },
  changeValue(event) {
    const { value } = event.detail;
    this.setData({
      sliderValue: value
    });
  },
  finishHandle() {
      wx.showToast({
      title: "恭喜完成EQ5D",
      icon: "success",
      duration: 2000
    });
  }
});
