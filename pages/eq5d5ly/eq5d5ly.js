Page({
  data: {
    score: 0,
    isShow: false,
    userInfo: {},
    questions: [
      {
        title: "走动",
        padColor: "#cf3e36",
        name: "mo",
        items: [
          { name: "mo1", value: "我四处走动没有困难" },
          { name: "mo2", value: "我四处走动有一点点困难" },
          { name: "mo3", value: "我四处走动有一些困难" },
          { name: "mo4", value: "我四处走动有很多困难" },
          { name: "mo5", value: "我不能四处走动" }
        ]
      },
      {
        title: "洗澡或穿衣",
        padColor: "#dd6549",
        name: "sc",
        items: [
          { name: "sc1", value: "我自己洗澡或穿衣没有困难" },
          { name: "sc2", value: "我自己洗澡或穿衣有一点点困难" },
          { name: "sc3", value: "我自己洗澡或穿衣有一些困难" },
          { name: "sc4", value: "我自己洗澡或穿衣有很多困难" },
          { name: "sc5", value: "我不能自己洗澡或穿衣" }
        ]
      },
      {
        title: "经常做的事（比如：上学、兴趣与活动、运动、玩耍、和家人或朋友一起做事）",
        padColor: "#63b359",
        name: "ua",
        items: [
          { name: "ua1", value: "我做经常做的事没有困难" },
          { name: "ua2", value: "我做经常做的事有一点点困难" },
          { name: "ua3", value: "我做经常做的事有一些困难" },
          { name: "ua4", value: "我做经常做的事有很多困难" },
          { name: "ua5", value: "我不能做经常做的事" }
        ]
      },
      {
        title: "疼痛或不舒服",
        padColor: "#d09a45",
        name: "pd",
        items: [
          { name: "pd1", value: "我没有疼痛或不舒服" },
          { name: "pd2", value: "我有一点点疼痛或不舒服" },
          { name: "pd3", value: "我有一些疼痛或不舒服" },
          { name: "pd4", value: "我非常疼痛或不舒服" },
          { name: "pd5", value: "我疼痛或不舒服极了" }
        ]
      },
      {
        title: "担心、伤心或不高兴",
        padColor: "#509fc9",
        name: "ad",
        items: [
          { name: "ad1", value: "我没有担心、伤心或不高兴" },
          { name: "ad2", value: "我有一点点担心、伤心或不高兴" },
          { name: "ad3", value: "我有一些担心、伤心或不高兴" },
          { name: "ad4", value: "我非常担心、伤心或不高兴" },
          { name: "ad5", value: "我担心、伤心或不高兴极了" }
        ]
      }
    ]
  },
  onLoad: function() {
    let that = this;
    wx.getUserInfo({
      success: function(res) {
        that.setData({ userInfo: JSON.parse(res.rawData) });
      }
    });
  },
  nextStep: function() {
    wx.navigateTo({
      url: `/pages/slider/slider?score=${this.data.score}`
    });
  },
  formSubmit: function(e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value);
    const result = e.detail.value;
    let data = {
      mo2: 0,
      mo3: 0,
      mo4: 0,
      mo5: 0,
      sc2: 0,
      sc3: 0,
      sc4: 0,
      sc5: 0,
      ad2: 0,
      ad3: 0,
      ad4: 0,
      ad5: 0,
      pd2: 0,
      pd3: 0,
      pd4: 0,
      pd5: 0,
      ua2: 0,
      ua3: 0,
      ua4: 0,
      ua5: 0
    };
    for (let key in result) {
      if (result[key]) {
        if (key === "mo") {
          data[result[key]] = 0.345;
        }
        if (key === "sc") {
          data[result[key]] = 0.253;
        }
        if (key === "ua") {
          data[result[key]] = 0.233;
        }
        if (key === "pd") {
          data[result[key]] = 0.302;
        }
        if (key === "ad") {
          data[result[key]] = 0.258;
        }
      } else {
        return this.showToast("请完成问卷", "/images/error.png");
      }
    }

    // const {
    //   mo2,
    //   mo3,
    //   mo4,
    //   mo5,
    //   sc2,
    //   sc3,
    //   sc4,
    //   sc5,
    //   ad2,
    //   ad3,
    //   ad4,
    //   ad5,
    //   pd2,
    //   pd3,
    //   pd4,
    //   pd5,
    //   ua2,
    //   ua3,
    //   ua4,
    //   ua5
    // } = data;
    // let dis =
    //   (mo2 + sc2 + ua2 + pd2 + ad2) * 0.191 +
    //   (mo3 + sc3 + ua3 + pd3 + ad3) * 0.458 +
    //   (mo4 + sc4 + ua4 + pd4 + ad4) * 0.832 +
    //   (mo5 + sc5 + ua5 + pd5 + ad5) * 1;
    // dis = 1 - dis;
    // dis = Math.floor(dis * 1000);
    // this.showResult(dis)
    this.showToast("数据提交成功");
    return wx.request({
      url: "https://ipro.cpzero.cn/ext/insert", //仅为示例，并非真实的接口地址
      data: {
        account: this.data.userInfo.nickName,
        extKey: "EQ-5D-5LY",
        extValue: JSON.stringify(e.detail.value)
      },
      header: {
        "content-type": "application/json"
      },
      success: function(res) {
        console.log(res.data);
      }
    });
  },
  //
  showToast: function(title, image, callback) {
    wx.showToast({
      title: title || "成功",
      icon: "success",
      image: image,
      duration: 2000,
      success: callback
    });
  },

  showResult(score) {
    this.setData({
      isShow: true,
      score
    });
  },
  closePanel() {
    this.setData({
      isShow: false
    });
  }
});
