$(function(){
    //导航下划线
    //在li被鼠标悬停时执行slide-bar的位置的改变
    $(".navbar-collapse>.navbar>.navigation>li ").on("mouseover",function(){
        var currentLeft = $(this).position().left + 123;
        $(".navbar-collapse .slide-bar").animate({
            "left": currentLeft
        },260);
    });


    //学员项目展示区域
    $(".opus-item ul li img").each(function(i){
        $(".opus-item ul li img").eq(i).on("mouseover",function(){
            $(".sport").eq(i).stop();
            $(".sport").eq(i).show();
            $(".sport").eq(i).animate({
                "right": 0
            },1500);
        })
    });

    $(".opus-item ul li img").each(function(i){
        $(".opus-item ul li img").eq(i).on("mouseout",function(){
            $(".sport").eq(i).stop();
            $(".sport").eq(i).animate({
                right: '-123'
            },1000);
        })
    });


    //活动区域旋转木马轮播
    var arrayImg = ["img1","img2","img3","img4","img5","img6","img7"];
    var index=0;
    $(".activities>.pre-btn").on("click",function(){
        console.log("left");
        nexting();
    });

    $(".activities>.next-btn").on("click",function(){
        console.log("right");
        nexting();
    });

    //上一张
    function preving(){
        arrayImg.unshift(arrayImg[6]);
        arrayImg.pop();
        //
        index--;
        if (index<0) {
            index=6;
        }
    }

    //下一张
    function nexting(){
        arrayImg.push(arrayImg[0]);
        arrayImg.shift();
        index++;
        if (index>6) {
            index=0;
        }
    }


    $(".tel").on('mouseenter',function(){
        $(".tel").addClass('animated swing');
    });

    $(".tel").on('mouseout',function(){
        $(".tel").removeClass('animated swing');
    });


    $(".counselor_service").on('mouseenter',function(){
        $(".counselor_service").addClass('animated jello');
    });

    $(".counselor_service").on('mouseout',function(){
        $(".counselor_service").removeClass('animated jello');
    });

});