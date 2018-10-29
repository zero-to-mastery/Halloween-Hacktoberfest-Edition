// Loads and implants head
// hContents gets the contents of the element, so we can add them back in
let hContents = document.getElementById("head").innerHTML;
const url = window.location.href;
document.getElementById('head').innerHTML =
    `${url.endsWith("/")?
        '<meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' +
        '<title>ZTM Halloween - Hacktoberfest</title>' +
        '<link href="https://fonts.googleapis.com/css?family=Griffy" rel="stylesheet">' +
        '<link href="https://fonts.googleapis.com/css?family=Mali" rel="stylesheet"> '+
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">' +
        '<!-- fontawesome cdn-->' +
        '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">' +
        '<!-- Custom styles for this template -->' +
        '<link href="./css/carousel.css" rel="stylesheet">' +
        '<link href="./css/style.css" rel="stylesheet">' +
        '<!-- meta icon -->' +
        '<link rel="icon" href="./images/pumpkin.jpg" type="image/gif" sizes="32x32">' +
        hContents
    :
        '<meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' +
        '<title>ZTM Halloween - Hacktoberfest</title>' +
        '<link href="https://fonts.googleapis.com/css?family=Griffy" rel="stylesheet">' +
        '<link href="https://fonts.googleapis.com/css?family=Mali" rel="stylesheet"> '+
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">' +
        '<!-- fontawesome cdn-->' +
        '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">' +
        '<!-- Custom styles for this template -->' +
        '<link href="../css/carousel.css" rel="stylesheet">' +
        '<link href="../css/style.css" rel="stylesheet">' +
        '<!-- meta icon -->' +
        '<link rel="icon" href="../images/pumpkin.jpg" type="image/gif" sizes="32x32">' +
        hContents
    }`