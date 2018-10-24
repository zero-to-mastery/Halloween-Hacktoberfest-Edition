var witch= document.getElementById('witch');
var witchImg= document.querySelector('#witch>img');
var points= document.querySelector('.points');
var shoutBox= document.querySelector('.witchTalk');
var viewPortHeight= window.innerHeight;
var viewPortWidth= window.innerWidth;
var highscore= 0;

var witchShout= ['catch me, try it', 'no chance my friend', 'abracadabra', 'hahhaha'];


var moveWitch = () => {
    
    var randtb= Math.round((Math.random()*(viewPortHeight/2)));
    var randlr= Math.round((Math.random()*(viewPortWidth/2)));
    var randPos= Math.floor((Math.random()*(witchShout.length-1)));

    witch.style.left= `${randlr}px`;
    witch.style.top= `${randtb}px`;

    shoutBox.textContent= witchShout[randPos];

};

witch.addEventListener("mouseenter", moveWitch);

witch.addEventListener('click', () => {

    
    if(!witch.classList.contains('catched'))
    {
        shoutBox.textContent="damn, you got me";
        points.textContent= ++highscore; 
    }

    witchImg.src="../images/witchCatched.png";
    witch.classList.add('catched');
    witchImg.style.width= "580px";
    witch.style.left= (witch.parentElement.clientWidth/2)-(witchImg.clientWidth/2) +"px";
    witch.style.top= ((witch.parentElement.clientHeight/2)-(witchImg.clientHeight/2))+"px";
    


    setTimeout( () => {
        witch.classList.remove('catched');
        witchImg.style.width="100px";
        witch.style.left= "0px";
        witch.style.top= "0px";
        witchImg.src="../images/witch.png";
        moveWitch();
    }, 2000);
});