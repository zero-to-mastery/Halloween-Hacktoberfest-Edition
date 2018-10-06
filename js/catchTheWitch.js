const witch= document.getElementById('witch');
const witchImg= document.querySelector('#witch>img');
const points= document.querySelector('.points');
const shoutBox= document.querySelector('.witchTalk');
const viewPortHeight= window.innerHeight;
const viewPortWidth= window.innerWidth;
let highscore= 0;

const witchShout= ['catch me, try it', 'no chance my friend', 'abracadabra', 'hahhaha'];


const moveWitch = () => {
    
    const randtb= Math.round((Math.random()*(viewPortHeight/2)));
    const randlr= Math.round((Math.random()*(viewPortWidth/2)));
    const randPos= Math.floor((Math.random()*(witchShout.length-1)));

    witch.style.left= `${randlr}px`;
    witch.style.top= `${randtb}px`;

    shoutBox.textContent= witchShout[randPos];

}

witch.addEventListener("mouseenter", moveWitch);

witch.addEventListener('click', () => {

    
    if(!witch.classList.contains('catched'))
    {
        shoutBox.textContent="damn, you got me";
        points.textContent= ++highscore; 
    }

    witch.classList.add('catched');
    witchImg.style.width= "580px";
    witch.style.left= (witch.parentElement.clientWidth/2)-(witchImg.clientWidth/2) +"px";
    witch.style.top= ((witch.parentElement.clientHeight/2)-(witchImg.clientHeight/2))+"px"; 
    witchImg.src='images/witchCatched.png';


    setTimeout( () => {
        witch.classList.remove('catched');
        witchImg.style.width="100px";
        witch.style.left= "0px";
        witch.style.top= "0px"; 
        witchImg.src='images/witch.png';
        moveWitch();
    }, 2000);
});