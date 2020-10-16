Page({
  data: {
    navList:[
      {name:'表单组件',url:'/pages/FormTest/FormTest'},
      {name:'checkbox 多项选择器',url:'/pages/CheckBoxTest/CheckBoxTest'},
      {name:'switch 单选开关',url:'/pages/switchTest/switchTest'},
      {name:'slider 滑动选择器',url:'/pages/sliderTest/sliderTest'},
      {name:'picker-view 滚动选择器',url:'/pages/picker-view/picker-view'}
    ]
  },
  onLoad() {},
  onCardClick(ev){    
    console.log(ev)
    my.navigateTo({
      url: ev.info
    });
  },
});
