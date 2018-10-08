// Loads and implants head
// hContents gets the contents of the element, so we can add them back in
let hContents = document.getElementById("head").innerHTML;
document.getElementById('head').innerHTML =
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' +
    '<title>ZTM Halloween - Hacktoberfest</title>' +
    '<link href="https://fonts.googleapis.com/css?family=Griffy" rel="stylesheet">' +
    '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">' +
    '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>' +
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>' +
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>' +
    '<!-- fontawesome cdn-->' +
    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">' +
    '<!-- Custom styles for this template -->' +
    '<link href="./css/carousel.css" rel="stylesheet">' +
    '<link href="./css/style.css" rel="stylesheet">' +
    '<!-- meta icon -->' +
    '<link rel="icon" href="./images/pumpkin.jpg" type="image/gif" sizes="32x32">' +
    hContents;