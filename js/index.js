window.onload=function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween:0,
        autoplay: 1500,
        loop: true
    });
    
    //倒计时
    setmiaosha();
    setInterval(function() {
    	setmiaosha();
    }, 1000);
    function setmiaosha(){
    	var nowdate = new Date();
    	var nowtime = nowdate.getTime();
    	nowdate.setDate(28);
    	nowdate.setHours(20);
    	nowdate.setMinutes(0);
    	nowdate.setSeconds(0);
    	var settime = nowdate.getTime();
    	var s = parseInt(((settime - nowtime) / 1000) % 60);
    	var m = parseInt(((settime - nowtime) / 1000) / 60 % 60);
    	var h = parseInt(((settime - nowtime) / 1000) / 60 / 60);
    	var items = document.querySelectorAll(".product_time>.jd_title>a>i");
//  	console.log(items)
    	items[0].innerHTML = h;
    	items[1].innerHTML = m;
    	items[2].innerHTML = s;
    }
}
