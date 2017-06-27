Page({
  data: {
    questions: [
      {
        title: '行动能力',
        padColor: '#d09a45',
        items: [
          { name: "USA", value: "我四处走动没有困难" },
          { name: "CHN", value: "我四处走动有一点困难" },
          { name: "BRA", value: "我四处走动有中度的困难" },
          { name: "JPN", value: "我四处走动有很严重的困难" },
          { name: "ENG", value: "我无法四处走动" }
        ]
      },
      {
        title: '自我照顾',
        padColor: '#cc463d',
        items: [
          { name: "USA", value: "我洗澡或穿衣服没有困难" },
          { name: "CHN", value: "我洗澡或穿衣服有一点困难" },
          { name: "BRA", value: "我洗澡或穿衣服有中度的困难" },
          { name: "JPN", value: "我洗澡或穿衣服有很严重的困难" },
          { name: "ENG", value: "我无法自己洗澡或穿衣" }
        ]
      },
      {
        title: '日常活动 （如工作、学习、家务、家庭或休闲活动）',
        padColor: '#63b359',
        items: [
          { name: "USA", value: "我进行日常生活没有困难" },
          { name: "CHN", value: "我进行日常生活有一点困难" },
          { name: "BRA", value: "我进行日常生活有中度困难" },
          { name: "JPN", value: "我进行日常生活有很严重困难" },
          { name: "ENG", value: "我无法进行日常生活" }
        ]
      },
      {
        title: '疼痛或不舒服',
        padColor: '#d09a45',
        items: [
          { name: "USA", value: "我没有疼痛或不舒服" },
          { name: "CHN", value: "我有一点疼痛或不舒服" },
          { name: "BRA", value: "我有中度的疼痛或不舒服" },
          { name: "JPN", value: "我有严重的疼痛或不舒服" },
          { name: "ENG", value: "我有非常严重的疼痛或不舒服" }
        ]
      },
      {
        title: '焦虑或沮丧',
        padColor: '#509fc9',
        items: [
          { name: "USA", value: "我没有焦虑或沮丧" },
          { name: "CHN", value: "我有一点焦虑或沮丧" },
          { name: "BRA", value: "我有中度的焦虑或沮丧" },
          { name: "JPN", value: "我有严重的焦虑或沮丧" },
          { name: "ENG", value: "我有非常严重的焦虑或沮丧" }
        ]
      }
    ]
  },
  onload: function() {}
});
