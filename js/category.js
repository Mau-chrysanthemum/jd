window.addEventListener('load', function () {
     new Swiper('.category-left .swiper-container', {
         direction: 'vertical', // 垂直滚动
         // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
         slidesPerView: 'auto',
         freeMode: true, // 是否添加滑动的惯性

         // mousewheel: true,//支持鼠标滚轮
     })
     new Swiper('.category-right .swiper-container', {
         direction: 'vertical', // 垂直滚动
         // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
         slidesPerView: 'auto',
         freeMode: true, // 是否添加滑动的惯性

         // mousewheel: true,//支持鼠标滚轮
     })
    var lis = document.querySelectorAll('.category-left li');
    var lisHeight = lis[0].offsetHeight;
    // 获取移动的元素
    var swiperWrapper = document.querySelector('.category-left .swiper-wrapper');
    // 计算最小距离位移距离   父容器高度-子容器内容的高度
    var fazhe = document.querySelector('.swiper-container');
    var son = document.querySelector('.swiper-slide');
    var min = fazhe.offsetHeight - son.offsetHeight;

    for (var i = 0; i < lis.length; i++) {
        lis[i].dataset['index'] = i;
        lis[i].addEventListener('click', function () {
            var translateY = -(this.dataset['index'] * lisHeight);
            console.log(translateY);
            
            if (translateY < min) {
                translateY = min;
            };
            swiperWrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
            // swiperWrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
                                            
            swiperWrapper.style.transition = 'all 0.2s';
            for (var j = 0; j < lis.length; j++){
                lis[j].classList.remove('active');
            }
            this.classList.add('active');

        })
        
    }

})