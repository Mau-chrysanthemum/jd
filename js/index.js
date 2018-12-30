window.addEventListener('load',function(){
    // 获取轮播图的高度
    var heightList=document.querySelector('#slides');
    // var header=document.querySelector('#header');
    var slideHeight=heightList.offsetHeight;
    var header=document.querySelector('#header');
    // 获取滚动的距离
    param();
    function param() {  
     var scorlltop=document.documentElement.scrollTop||document.body.scrollTop;
    //  计算滚动的距离和透明度的值
    var opacity=scorlltop/slideHeight;
    header.style.backgroundColor='rgba(222, 24, 27, ' + opacity + ')';
    }
    window.addEventListener('scroll',param);
    var spans=document.querySelectorAll('.down-time span:not(:nth-child(3n))');
       var time=2*60*60
       settime()
       function settime(){
           if(time<0){
               time=7200;
           }
        //    小时
           var hour=Math.floor(time/60/60);
        //    分钟
           var mouse=Math.floor(time%3600/60);
        //    秒
           var second=time%3600%60;
           spans[0].innerHTML=Math.floor(hour/10)
           spans[1].innerHTML=Math.floor(hour%10)
           spans[2].innerHTML=Math.floor(mouse/10)
           spans[3].innerHTML=Math.floor(mouse%10)
           spans[4].innerHTML=Math.floor(second/10)
           spans[5].innerHTML=Math.floor(second%10)
       }
       setInterval(function(){
           time--;
        settime()
       },1000)
    //    轮播图初始化
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 自动轮播
        autoplay: {
            delay: 1000,
            // 是否当你触摸滑动后禁止自动轮播图 
            disableOnInteraction: false, //不禁止
            // disableOnInteraction: true,// 禁止
        },
        
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })        
})