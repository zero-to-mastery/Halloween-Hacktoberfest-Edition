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

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        
//            document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           //document.getElementById('exampleModalCenter').style.visibility = "hidden";
           document.getElementById('contents').style.visibility="visible";
        
    }
  }
