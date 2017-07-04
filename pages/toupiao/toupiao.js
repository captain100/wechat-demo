const url = 'ws://6h3wsg.natappfree.cc/socket'

Page({
  data: {
    connect: false
  },
  onUnload() {
    const { connect } = this.data;
    if (connect) {
      wx.closeSocket();
    }
  },
  onLoad() {
    console.log(1111, url)
    let that = this;
    wx.connectSocket({
      url,
      success: result => console.log(result),
      fail: error => console.log(error)
    });
    wx.onSocketOpen(function(res) {
      console.log("WebSocket连接已打开！");
      that.setData({
        connect: true
      });
    });

    wx.onSocketMessage(res => {
      console.log("收到服务器内容：" + res.data);
      let result = JSON.parse(res.data);
      delete result.connect
      let oldData = that.data;
      console.log(oldData)
      result = Object.assign(oldData, result);
      console.log(result)
      that.setData(result);
    });

    wx.onSocketError(function(res) {
      console.log("WebSocket连接打开失败，请检查！");
      that.setData({
        connect: false
      });
    });
  },
  changeNum(e) {
    const { type } = e.target.dataset;
    const { connect } = this.data;
    console.log(type);
    var data = this.data;
    console.log(111111, data);

    data[type]++;

    this.setData(data);
    if (connect) {
      console.log(2222, data);
      wx.sendSocketMessage({
        data: JSON.stringify({ type: "add", data }),
        success: result => console.log(result),
        fail: error => console.log(error)
      });
    } else {
      console.log("WebSocket连接打开失败????");
    }
  }
});
