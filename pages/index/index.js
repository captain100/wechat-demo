//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    appInfo: [
      {
        title: "卡",
        color: "yellow",
        type: "weChatCard"
      },
      {
        title: "图片",
        color: "",
        type: "weChatCard"
      },
      {
        title: "卷",
        color: "",
        type: "questionnaire"
      },
      {
        title: "投票",
        color: "#cf3e36",
        type: "toupiao"
      },
      {
        title: "摇杆",
        color: "#cf3e36",
        type: "yaogan"
      },
      {
        title: "患者",
        color: "",
        type: "patient"
      },{
        title: '投票',
        color: '#cf3e36',
        type: 'toupiao'
      }, 
      {
        title: '摇杆',
        color: '#cf3e36',
        type: 'yaogan'
      },
      {
        title: '投票1',
        color: '#cf3e36',
        type: 'etqs'
      }, 
      {
        title: '投票2',
        color: '#cf3e36',
        type: 'eq5d5ly'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          iConWidth: res.screenWidth / 4
        });
      }
    });

    wx.showShareMenu({
      withShareTicket: true
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  },
  //
  onShareAppMessage: function() {
    return {
      title: "分享",
      path: "/pages/index/index",
      success: function(e) {
        console.log("分享成功！！！", e);
      }
    };
  },
  onAddToPackage: function(e) {
    console.log("添加card to package", e);
    const type = e.target.dataset.type;
    wx.navigateTo({
      url: selectPageByType(type)
    });
  }
});

function selectPageByType(type) {
  const path = "/pages";
  const selectObj = {
    weChatCard: `${path}/card/card`,
    questionnaire: `${path}/questionnaire/questionnaire`,
    toupiao: `${path}/toupiao/toupiao`,
    yaogan: `${path}/yaogan/yaogan`,
    patient: `${path}/patient/patient`,
    etqs: `${path}/etqs/etqs`,
    eq5d5ly: `${path}/eq5d5ly/eq5d5ly`

  }
  return selectObj[type]
}
