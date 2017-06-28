Page({
  data: {
    score: 0,
    isShow: false,
    questions: [
      {
        title: "行动能力",
        padColor: "#cf3e36",
        name: "mo",
        items: [
          { name: "mo1", value: "我四处走动没有困难" },
          { name: "mo2", value: "我四处走动有一点困难" },
          { name: "mo3", value: "我四处走动有中度的困难" },
          { name: "mo4", value: "我四处走动有很严重的困难" },
          { name: "mo5", value: "我无法四处走动" }
        ]
      },
      {
        title: "自我照顾",
        padColor: "#cc463d",
        name: "sc",
        items: [
          { name: "sc1", value: "我洗澡或穿衣服没有困难" },
          { name: "sc2", value: "我洗澡或穿衣服有一点困难" },
          { name: "sc3", value: "我洗澡或穿衣服有中度的困难" },
          { name: "sc4", value: "我洗澡或穿衣服有很严重的困难" },
          { name: "sc5", value: "我无法自己洗澡或穿衣" }
        ]
      },
      {
        title: "日常活动 （如工作、学习、家务、家庭或休闲活动）",
        padColor: "#63b359",
        name: "ua",
        items: [
          { name: "ua1", value: "我进行日常生活没有困难" },
          { name: "ua2", value: "我进行日常生活有一点困难" },
          { name: "ua3", value: "我进行日常生活有中度困难" },
          { name: "ua4", value: "我进行日常生活有很严重困难" },
          { name: "ua5", value: "我无法进行日常生活" }
        ]
      },
      {
        title: "疼痛或不舒服",
        padColor: "#d09a45",
        name: "pd",
        items: [
          { name: "pd1", value: "我没有疼痛或不舒服" },
          { name: "pd2", value: "我有一点疼痛或不舒服" },
          { name: "pd3", value: "我有中度的疼痛或不舒服" },
          { name: "pd4", value: "我有严重的疼痛或不舒服" },
          { name: "pd5", value: "我有非常严重的疼痛或不舒服" }
        ]
      },
      {
        title: "焦虑或沮丧",
        padColor: "#509fc9",
        name: "ad",
        items: [
          { name: "ad1", value: "我没有焦虑或沮丧" },
          { name: "ad2", value: "我有一点焦虑或沮丧" },
          { name: "ad3", value: "我有中度的焦虑或沮丧" },
          { name: "ad4", value: "我有严重的焦虑或沮丧" },
          { name: "ad5", value: "我有非常严重的焦虑或沮丧" }
        ]
      }
    ]
  },
  onload: function() {},
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
        return this.showToast("问卷还没有完成，不能进行下一项测试", "/images/error.png");
      }
    }

    const {
      mo2,
      mo3,
      mo4,
      mo5,
      sc2,
      sc3,
      sc4,
      sc5,
      ad2,
      ad3,
      ad4,
      ad5,
      pd2,
      pd3,
      pd4,
      pd5,
      ua2,
      ua3,
      ua4,
      ua5
    } = data;
    let dis =
      (mo2 + sc2 + ua2 + pd2 + ad2) * 0.191 +
      (mo3 + sc3 + ua3 + pd3 + ad3) * 0.458 +
      (mo4 + sc4 + ua4 + pd4 + ad4) * 0.832 +
      (mo5 + sc5 + ua5 + pd5 + ad5) * 1;
    dis = 1 - dis;
    dis = Math.floor(dis * 1000);
    this.showResult(dis)
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
