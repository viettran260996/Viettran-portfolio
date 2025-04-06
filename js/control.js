// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Graphic Designer.", "Code Developer.","Apps Designer.","Film Maker."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
AOS.init();