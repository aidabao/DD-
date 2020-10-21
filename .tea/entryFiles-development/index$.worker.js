if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/card/index?hash=8c77e86e89c40c5b2ab9f0f22cf86a6245babc59');
require('../../node_modules/mini-ali-ui/es/collapse/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../node_modules/mini-ali-ui/es/collapse/collapse-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/container/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/title/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../pages/Nav/Nav?hash=e7d3addcb667e6d52f5d0546f9c80c9a65423efb');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/test/test?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/gitTest/gitTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/git/git?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/FormTest/FormTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/CheckBoxTest/CheckBoxTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/switchTest/switchTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/sliderTest/sliderTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/picker-view/picker-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/picker/picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/NavigatorTest/NavigatorTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ImageTest/ImageTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/VideoTest/VideoTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ContainerTest/ContainerTest?hash=b3c00e752e7ec314af9579f9179a32a834e699b3');
require('../../pages/TitleTest/TitleTest?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}