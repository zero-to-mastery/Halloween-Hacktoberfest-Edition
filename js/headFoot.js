// Before committing any changes check for errors on all pages

const urlCheck = (url) => {
  if (url.endsWith('/')) {
    return true;
  }
  return false;
}

const urlRepair = (url) => {
  let arrUrl = url.split('/');
  arrUrl.splice(-2);
  return arrUrl.join('/');
}

// Generates and implants the NavBar
const insertNav = () => {
  const navContainer = document.getElementById("myNav");
  urlCheck(window.location.href)
  // Add your page name to the below array without .html extension
  // if your page name is myNewPage the href attr will be myNewPage.html
  // and the link text will be My New Page
  const pages= ['index', 'about', 'recipes', 'facts', 'designs', 'names', 'movies', 'books',
                'games', 'catchTheWitch', 'costumes', 'activities', 'backgrounds',];
  const generateTitle = (href) =>{
    if(href==='index')
      return 'Home';
    for(let i = 0; i < href.length; i++)
              if(href.charAt(i)===href.charAt(i).toUpperCase()) {
                href = href.slice(0,i)+' '+href.slice(i);
                i++;
              }
            return href[0].toUpperCase()+href.slice(1); // for 'catchTheWitch' will return 'Catch The Witch'
  }

  const generateLink = (href) =>
    `<li class="nav-item">
      <a class="nav-link ${window.location.href.endsWith(`${href}.html`)?"active":(window.location.href.endsWith('/')&&href==='index'?"active":"")}"
          href="${urlCheck(window.location.href) 
            ? href==='index' ? './':`html/${href}.html` 
            : href==='index' ? `${urlRepair(window.location.href)}/`:`${urlRepair(window.location.href)}/html/${href}.html`}">
        ${generateTitle(href)}
      </a>
    </li>`;

  navContainer.innerHTML =
  `<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <a class="navbar-brand"><img src="${!window.location.href.includes('html') ? "./images/ztm-halloween-logo.svg" : "../images/ztm-halloween-logo.svg"}" alt="ZTM"/></a>
      <button class="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto" id="links">
          ${pages.map(page => generateLink(page)).join("")}
        </ul>
      </div>
    </nav>
  </header>`;
  console.log("Header ✔");
}

// Loads and implants the Footer
// mfContents gets the contents of the element, so we can add them back in
const insertFooter = () =>{
  const footerContainer = document.getElementById("myFoot");
  if (footerContainer != null) {
    let mfContents = footerContainer.innerHTML;
    footerContainer.innerHTML =
      `<footer class="footer" >
      <p class="copywrite">&copy; 2017-2018 Zero To Mastery Inc. &middot;
      <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      <a id="back-to-top" href="#" class="back-to-top d-block"
          role="button" title="return to the top" data-toggle="tooltip"
          data-placement="left"><i class="fas fa-arrow-circle-up fa-2x"></i>
      </a>
      ${mfContents}
      </footer>`;
  }
  console.log("Footer ✔");
}

// Load and implant the End of Body Scripts
const addScript = (src, integrity, crossorigin) => {
  let scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', src);
  if (integrity) scriptTag.setAttribute('integrity', integrity);
  if (crossorigin) scriptTag.setAttribute('crossorigin', crossorigin);
  document.getElementById("endScripts").appendChild(scriptTag);
}

const insertScripts = () =>{
  const container = document.getElementById("endScripts");
  if(container != null){ //if container exists
    addScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', 'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49', 'anonymous');
    setTimeout(()=>{ addScript('https://code.jquery.com/jquery-3.3.1.min.js', 'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=', 'anonymous'); }, 100);
    setTimeout(()=>{ addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy', 'anonymous'); }, 200);
    setTimeout(()=>{ addScript(`${urlCheck(window.location.href) ? './js/global.js' : '../js/global.js'}`);}, 300);
  }
  console.log("Scripts ✔");
}

insertNav();
insertFooter();
insertScripts(); 
