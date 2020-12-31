Page({
  data: {
    navList:[
      {name:'表单组件',url:'/pages/FormTest/FormTest'},
      {name:'checkbox 多项选择器',url:'/pages/CheckBoxTest/CheckBoxTest'},
      {name:'switch 单选开关',url:'/pages/switchTest/switchTest'},
      {name:'slider 滑动选择器',url:'/pages/sliderTest/sliderTest'},
      {name:'picker-view 滚动选择器',url:'/pages/picker-view/picker-view'},
      {name:'picker 底部弹起的滚动选择器',url:'/pages/picker/picker'},
    ],
    VideoNavList:[
      {name:'image 图片',url:'/pages/ImageTest/ImageTest'},
      {name:'video 视频',url:'/pages/VideoTest/VideoTest'}
    ],
    LayoutList:[
      {name:'Container 容器',url:'/pages/ContainerTest/ContainerTest'},
      {name:'Title 模块标题',url:'/pages/TitleTest/TitleTest'},
      {name:'List 列表',url:'/pages/ListTest/ListTest'},
      {name:'List-secondary 列表次级信息元素',url:'/pages/ListSecond/ListSecond'}
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
