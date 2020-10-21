Page({
  data: {
    status: "inited",
    time: "0",
    video: {
      src: "E:/淘宝/2092-2#加绒PU皮衣S-XXL/2092-2#加绒PU皮衣S-XXL/2092-2.mp4",
      showAllControls: true,
      showPlayButton: true,
      showCenterButton: true,
      showFullScreenButton: true,
      isLooping: false,
      muteWhenPlaying: false,
      initTime: 0,
      objectFit: "contain",
      autoPlay: false,
      directionWhenFullScreen: 90,
      mobilenetHintType: 2,
      poster:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603172443169&di=e05bbc6f870737d5691d22f6f5f02b07&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
    },
  },

  onPlay(e) {
    console.log('onPlay');
  },

  onPause(e) {
    console.log('onPause');
  },

  onEnded(e) {
    console.log('onEnded');
  },

  onPlayError(e) {
    console.log('onPlayError, e=' + JSON.stringify(e));
  },

  onTimeUpdate(e) {
    console.log('onTimeUpdate:', e.detail.currentTime);
  },
});
