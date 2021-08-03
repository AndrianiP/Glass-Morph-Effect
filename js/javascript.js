
var currentChromaVal= 1;
var skinDisplay = new Image();
//Fixed Issue
function changeColor(currentChromaVal) {
    var newSkinSRC = "./imgs/Lunar/"+currentChromaVal+ ".png";
    document.getElementById('skinDisplay').src = newSkinSRC;
    changeCircleColor(currentChromaVal);

}



function changeCircleColor(currentChromaVal) {
    
    const circleOne = document.getElementById('circleOne');
    const circleTwo = document.getElementById('circleTwo');

    if(currentChromaVal == 1){
        circleOne.style.background = '#b584c2';
        circleTwo.style.background = '#8485c2' ;
    }
    else if(currentChromaVal == 2) {
        circleOne.style.background = 'rgb(46, 10, 70)';
        circleTwo.style.background = 'rgb(204, 89, 185)';
    }
    else if(currentChromaVal == 3) {
        circleOne.style.background = 'rgb(154, 195, 206)' ;
        circleTwo.style.background = 'rgb(88, 91, 235)';
    }
    else if(currentChromaVal == 4) {
        circleOne.style.background = 'rgb(13, 5, 32)';
        circleTwo.style.background = 'rgb(105, 8, 30)';
    }
    else if(currentChromaVal == 5) {
        circleOne.style.background = 'rgb(197, 210, 228)';
        circleTwo.style.background = 'rgb(231, 222, 95)';
    }
    else if(currentChromaVal == 6) {
        circleOne.style.background = 'rgb(218, 217, 168)' ;
        circleTwo.style.background = 'rgb(30, 92, 28)' ;
    }
    else if(currentChromaVal == 7) {
        circleOne.style.background = 'rgb(255, 0, 13)' ;
        circleTwo.style.background = 'rgb(112, 189, 157)';
    }
    else if(currentChromaVal == 8) {
        circleOne.style.background = 'rgb(5, 71, 73)' ;
        circleTwo.style.background = 'rgb(52, 185, 179)';
    }
}

function displaySkins(){
    cardAnimations();
    
}

function changeMassText(className, text) {
    var elements = document.querySelectorAll(className);
    console.log(elements.length);
    var i = 0, length = elements.length;
    for( ; i < length; i++){
        console.log(elements[i].getAttribute('id'));
        if(elements[i].getAttribute('id') != null){
            elements[i].innerHTML= text;
            console.log(elements[i].innerHTML);
            elements[i].style.pointerEvents = 'fill';
        }
    }
}

function cardAnimations(){
    var blur = document.getElementById('blur').style;
    blur.visibility='visible'; 
    blur.zIndex ='1';
    
    
    var card = document.getElementById('card').style;
    card.transition= '600ms ease-in-out';
    card.transform ='translateX(-175%)'
    card.zIndex = '110';
    card.pointerEvents = 'none';

    var newCard = document.getElementById('rightCard');
    newCard.style.opacity = '1';
    newCard.style.visibility='visible';
    newCard.firstElementChild.style.zIndex = '120';
    newCard.firstElementChild.style.opacity = '1';
    newCard.firstElementChild.style.visibility='visible';
    newCard.firstElementChild.style.transform ='translateX(175%) scale(1.0)';
    newCard.firstElementChild.style.transition = '800ms ease-in-out';
    newCard.firstElementChild.style.pointerEvents = 'none';

    var centerCard = document.getElementById('centerCard');
    centerCard.style.opacity = '1';
    centerCard.style.visibility='visible';
    centerCard.firstElementChild.style.zIndex = '120';
    centerCard.firstElementChild.style.opacity = '1';
    centerCard.firstElementChild.style.visibility='visible';
    centerCard.firstElementChild.style.transform ='translateY(-80px) scale(1.0)';
    centerCard.firstElementChild.style.transition = '900ms ease-in-out';
    centerCard.firstElementChild.style.pointerEvents = 'none';

    setTimeout(function(){
        card.pointerEvents = 'all';
        centerCard.firstElementChild.style.pointerEvents = 'all';
        newCard.firstElementChild.style.pointerEvents = 'all';
        changeMassText('h2', 'Select Skin');
    }, 500);
}