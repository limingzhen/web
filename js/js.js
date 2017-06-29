
//第一屏轮播
var mySwiper = new Swiper ('.swiper-container.ban', {
  loop: true,
  // 如果需要前进后退按钮
  nextButton: '.btn_right',
  prevButton: '.btn_left',
  // direction: 'vertical',

})
//导航栏固定并改变透明度
$(window).scroll(function(){
  if($(this).scrollTop()>$("nav").height()){
    $(".naa").css("opacity","0.2");
  }
  if($(this).scrollTop()==0){
    $(".naa").css("opacity","0.5")
  }
})
//rem布局
var oHtml = document.documentElement;
change();
window.onresize = function() {
  change();
}

function change() {
  var oHtmlW = oHtml.clientWidth;
  if (oHtmlW >= 1366) {
    oHtmlW = 1366;
  }
  oHtml.style.fontSize = (oHtmlW / (1366 / 100)) + "px";
}
//第二屏swiper 自适应
var swiper = new Swiper('.swiper-container.hy_con', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 50,
    nextButton: '.hy_btn.r',
    prevButton: '.hy_btn.l',
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
//鼠标hover 换图片
$('.index_hx_left li').hover(function() {
     var index=$(this).index();
      	$(".index_hx_conimg img").css("display","none").eq(index).stop().fadeIn(1000);
      })
$('.index_hx_right li').hover(function() {
     var index=$(this).index();
        $(".index_hx_conimg img").css("display","none").eq(index).stop().fadeIn(1000);
            })
//图标换颜色
            const ImgAy1 = ["img/index/sssr.png", "img/index/ssss-2r.png", "img/index/s-157r.png", "img/index/sr.png", "img/index/s-159r.png", "img/index/efer.png", "img/index/s-168r.png"]
            const ImgAy2 = ["img/index/sss.png", "img/index/ssss-2.png", "img/index/s-157.png", "img/index/s.png", "img/index/s-159.png", "img/index/efe.png", "img/index/s-168.png"]
            $(".index_hx_left img").hover(function() {
            	let index = $(this).index(".index_hx_left img");
            	$(this).attr("src", ImgAy1[index]);
            }, function() {
            	let index = $(this).index(".index_hx_left img");
            	$(this).attr("src", ImgAy2[index]);
            })

            const ImgAy3 = ["img/index/s-163.png", "img/index/s-166.png", "img/index/s-165.png", "img/index/s-160.png", "img/index/ss164.png", "img/index/ss-167.png"]
            const ImgAy4 = ["img/index/s-163r.png", "img/index/s-166r.png", "img/index/s-165r.png", "img/index/s-160r.png", "img/index/ss164r.png", "img/index/ss-167r.png"]
            $(".index_hx_right img").hover(function() {
            	let index = $(this).index(".index_hx_right img");
            	$(this).attr("src", ImgAy4[index]);
            }, function() {
              let index = $(this).index(".index_hx_right img");
            	$(this).attr("src", ImgAy3[index]);
            })



$(".hanbao_img").click(function(){
  if($(".hanbao ul").css("display")=="none"){
  $(".hanbao ul").show();
  $(".hanbao_img").attr("src", "img/index/hb2.png");
  }else{
  $(".hanbao ul").hide();
  $(".hanbao_img").attr("src", "img/index/hb1.png");
  }
  });
