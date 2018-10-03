// modal on load
$(window).on('load',function(){
    $('#exampleModalCenter').modal('show');
    //console.log('ready111');
});

let links = document.querySelectorAll('.nav-link');
// let start = window.location.href.lastIndexOf('/')+1;
let url = window.location.href;
// console.log(url);
links.forEach((link)=>{
	if(link.href === url)	
		link.parentElement.classList.add('active');
	else 
		link.parentElement.classList.remove('active');
})

// Disabled for testing
// document.onreadystatechange = function () {
//     var state = document.readyState
//     if (state == 'interactive') {
//          document.getElementById('contents').style.visibility="hidden";
//     } else if (state == 'complete') {
        
// //            document.getElementById('interactive');
//            document.getElementById('load').style.visibility="hidden";
//            //document.getElementById('exampleModalCenter').style.visibility = "hidden";
//            document.getElementById('contents').style.visibility="visible";
        
//     }
//   }

  $(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').tooltip('show');

});



