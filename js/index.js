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
