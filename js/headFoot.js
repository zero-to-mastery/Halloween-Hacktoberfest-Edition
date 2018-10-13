// This could probably do with some optimising, feel free to do so
// But please check everything works after. Some things I wanted to
// Remove broke one or more pages.


// Show whether the nav/footer is being dynamically loaded on each page.
console.log("Header and nav have been dynamically loaded")







// Loads and implants the NavBar
document.getElementById("myNav").innerHTML =

  '<header>' +
      '<nav class="navbar navbar-expand-md navbar-dark fixed-top">' +

      '<a class="navbar-brand" href="index.html"><img src="images/ztm-halloween-logo.svg"/></a>' +
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
      '</button>' +
      '<div class="collapse navbar-collapse" id="navbarCollapse">' +
        '<ul class="navbar-nav mr-auto" id="linsks">' +

          '<li class="nav-item">' +
            '<a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>' +
          '</li>' +
          '<li class="nav-item">' +
            '<a class="nav-link" href="about.html">About</a>' +
          '</li>' +

          '<li class="nav-item">' +
            '<a class="nav-link" href="recipes.html">Recipes</a>' +
          '</li>' +

          '<li class="nav-item">' +
            '<a class="nav-link" href="facts.html">Facts</a>' +
          '</li>' +

          '<li class="nav-item">' +
            '<a class="nav-link" href="designs.html">Pumpkin Designs</a>' +
          '</li>' +

          '<li class="nav-item">' +
              '<a class="nav-link" href="names.html">Names</a>' +
          '</li>' +

          '<li class="nav-item">' +
              '<a class="nav-link" href="halloweenMovies.html">Movies</a>' +
          '</li>' +

          '<!-- Books Link -->' +
          '<li class="nav-item">' +
              '<a class="nav-link" href="halloweenBooks.html">Books</a>' +
          '</li>' +

          '<!-- Games Link -->' +
          '<li class="nav-item">' +
              '<a class="nav-link" href="halloweenGames.html">Games</a>' +
          '</li>' +

          '<!-- Catch the Witch Link -->' +
          '<li class="nav-item">' +
              '<a class="nav-link" href="catchTheWitch.html">Catch the Witch</a>' +
          '</li>' +

          '<!-- Costumes Link -->' +
          '<li class="nav-item">' +
              '<a class="nav-link" href="costumes.html">Costumes</a>' +
          '</li>' +

          '<!-- Activities Link -->' +
          '<li class="nav-item">' +
              '<a class="nav-link" href="activities.html">Activities</a>' +
          '</li>' +

        '</ul>'+
      '</div>' +
    '</nav>' +
  '</header>'

// Set the active link on the NavBar
let links = document.querySelectorAll('.nav-link');
// let start = window.location.href.lastIndexOf('/')+1;
let url = window.location.href;
console.log("Url of the page", url);
links.forEach((link)=>{
	if(link.href === url)
    link.parentElement.classList.add('active');
  else if (link.href.endsWith("index.html") && url.endsWith('/')) // if base url is '/' and not index
    link.parentElement.classList.add('active');
	else
		link.parentElement.classList.remove('active');
})

// Loads and implants the Footer
// mfContents gets the contents of the element, so we can add them back in
if(document.getElementById("myFoot") != null){
let mfContents = document.getElementById("myFoot").innerHTML;
document.getElementById("myFoot").innerHTML =
  '<footer class="footer" >' +
      '<p>&copy; 2017-2018 Zero To Mastery Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>' +
      '<a id="back-to-top" href="#" class="back-to-top d-block" role="button" title="return to the top" data-toggle="tooltip" data-placement="left"><i class="fas fa-arrow-circle-up fa-2x"></i></a>' +
      mfContents +
  '</footer>'

}


// Load and implant the End of Body Scripts
// esContents gets the contents of the element, so we can add them back in
function addScript(src, integrity, crossorigin) {
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', src);
  if (integrity) {
    scriptTag.setAttribute('integrity', integrity);
  }
  if (crossorigin) {
    scriptTag.setAttribute('crossorigin', crossorigin);
  }
  document.getElementById("endScripts").appendChild(scriptTag);
}
if(document.getElementById("endScripts") != null){
  addScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', 'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49', 'anonymous');
  setTimeout(function(){ addScript('https://code.jquery.com/jquery-3.3.1.min.js', 'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=', 'anonymous'); }, 100);
  setTimeout(function(){ addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy', 'anonymous'); }, 200);
  setTimeout(function(){ addScript('./js/global.js');}, 300);  
}
//Add color to navbar on scroll and remove color when back to top.
document.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.add('navbar-scroll');
  if (window.scrollY === 0) {
      document.querySelector('.navbar').classList.remove('navbar-scroll');
  }
})
