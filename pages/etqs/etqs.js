Page({
  data: {
    score: 0,
    isShow: false,
    userInfo: {},
    questions: [
      {
        title: "行动能力（走动）",
        padColor: "#cf3e36",
        name: "mo",
        items: [
          { name: "mo1", value: "我四处走动没有困难" },
          { name: "mo2", value: "虽然我四处走动有些困难，但不严重，我一个人也能四处走动" },
          { name: "mo3", value: "我四处走动有很大困难" }
        ]
      },
      {
        title: "自我照顾",
        padColor: "#dd6549",
        name: "sc",
        items: [
          { name: "sc1", value: "我自己洗澡或穿衣没有困难" },
          { name: "sc2", value: "虽然我洗澡或穿衣有些困难，但不严重，我自己能洗澡或穿衣" },
          { name: "sc3", value: "我自己洗澡或穿衣有很大困难" }
        ]
      },
      {
        title: "做经常做的事（比如：上学、兴趣与活动、运动、玩耍、和家人或朋友一起做事）",
        padColor: "#63b359",
        name: "ua",
        items: [
          { name: "ua1", value: "我做经常做的事没有困难" },
          { name: "ua2", value: "虽然我做这些经常做的事情有些困难，但不严重，我一个人也能做" },
          { name: "ua3", value: "我做经常做的事有很大困难" }
        ]
      },
      {
        title: "疼痛或不舒服",
        padColor: "#d09a45",
        name: "pd",
        items: [
          { name: "pd1", value: "我没有疼痛或不舒服" },
          { name: "pd2", value: "我有些疼痛或不舒服，比如头疼或者身上痒，但我能够忍受" },
          { name: "pd3", value: "我有很大疼痛或不舒服" }
        ]
      },
      {
        title: "感到担心、伤心或不高兴",
        padColor: "#509fc9",
        name: "ad",
        items: [
          { name: "ad1", value: "我没有感到担心、伤心或不高兴" },
          { name: "ad2", value: "我感到有点担心、伤心或不高兴" },
          { name: "ad3", value: "我感到非常担心、伤心或不高兴" }
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
    // this.showResult('完成问卷')    
    this.showToast("数据提交成功");
    return wx.request({
      url: "https://ipro.cpzero.cn/ext/insert", //仅为示例，并非真实的接口地址      
      data: {
        account: this.data.userInfo.nickName,
        extKey: 'EQ-5D-3LY',
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
