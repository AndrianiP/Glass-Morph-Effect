
var currentChromaVal= 1;
var skinDisplay = new Image();

function changeColor(currentChromaVal) {
    var newSkinSRC = "Glass-Morph-Effect/imgs/"+currentChromaVal+ ".png";
    console.log(newSkinSRC);
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