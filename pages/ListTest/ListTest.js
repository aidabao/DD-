Page({
 data: {
   loadMore: '',
   loadContent: [
     '马不停蹄加载更多数据中...',
     '-- 已经到底了，加不了咯 --',
   ],
   items:[]
 },
 onLoad(){
   let tempItems=[]
   for(var i=0;i<=50;i++){
     var text = '春天来了冬天走了' + i.toString()
     tempItems.push(text)
   }
   this.setData({items:tempItems})
 },
 onScrollToLower() {
   // 根据实际数据加载情况设定 loadMore 的值即可，分别为 load 和 over
   this.setData({
     loadMore: 'load',
   })
 },
})
