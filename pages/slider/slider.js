Page({
  data: {
    sliderValue: 0,
    score: 0,
    isShow: false,
    isOpen: false,
    money: 0,
    animationData: {}
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
      this.setData({
        isShow: true,
      })
  },
  openRedPack(){
    const val = Math.floor(Math.random()*10 +1) 
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-in',
    })

    this.animation = animation
    
    animation.rotateY(180).rotateY(180).step()

    this.setData({
      animationData:animation.export()
    })

    setTimeout(() => {
      this.setData({
        isOpen: true,
        money: val
      })
    }, 1000)
  }
  
});
