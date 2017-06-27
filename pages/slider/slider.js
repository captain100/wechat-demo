Page({
  data: {
    sliderValue: 0
  },
  changeValue(event) {
    const { value } = event.detail;
    this.setData({
      sliderValue: value
    });
  }
});

function getColor(value) {
  return "#cc463d";
}
