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
  showResult() {
    this.setData({
      isShow: true
    });
  },
  closePanel() {
    this.setData({
      isShow: false
    });
  }
});
