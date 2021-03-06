function setNowFontSize() {
    // 1. 设计稿的宽度 假设750
    // 2. 设计稿屏幕的根元素字体大小 200
    // 3. 求得当前屏幕根元素字体大小 假设当前 375
    // 4. 当前根元素字体大小  375 / (750 / 200)  == 100px
    var designWidth = 750;
    var designFontSize = 200;
    // 获取当前屏幕宽度
    var windowWidth = document.documentElement.offsetWidth;
    // 使用当前屏幕宽度 / (设计稿宽度/设计稿的字体大小)
    var nowFontSize = windowWidth / (designWidth / designFontSize);
  //   console.log(nowFontSize);
    // 给当前根元素设置这个算好的字体大小
    document.documentElement.style.fontSize = nowFontSize + 'px';
  }
setNowFontSize();
 //当屏幕宽度一变化马上获取计算当前根元素字体大小 把 setNowFontSize函数体传递过去的
 window.addEventListener('resize', setNowFontSize);