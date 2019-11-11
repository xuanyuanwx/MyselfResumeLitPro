Page({
  data: {
    header:'Xu.Wang FE Engineer',
    name:'王旭/男',
    birthday: '1989-09-14',
    xueli: '本科/辽宁科技大学 软件学院',
    worktime: (new Date().getFullYear() - 2013) +'年（工作年限）',
    address: '沈阳',
    profession: '前端工程师',
    showView1: false,
    showView2: false,
    showView3: false
  },
  tapProgramlist1: function () {
    this.setData({
      showView1: !this.data.showView1
    })
  },
  tapProgramlist2: function () {
    this.setData({
      showView2: !this.data.showView2
    })
  },
  tapProgramlist3: function () {
    this.setData({
      showView3: !this.data.showView3
    })
  }
})