Page({
  data: {
    yearList:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
    monthList:[1,2,3,4,5,6,7,8,9,10,11,12],
    text:'',// 选择的年份与月份
  },
  onLoad() {},
  onChange(e){
    let year = this.data.yearList[e.detail.value[0]]+'年'    
    let month = this.data.monthList[e.detail.value[1]]+'月'
    let Datatext = year+month
    this.setData({text:Datatext})
  }
});
