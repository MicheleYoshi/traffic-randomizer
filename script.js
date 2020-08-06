function doTrafficLights() {
    const activeLight = getActiveLight();
    if (activeLight === 'red'){
        turnRed();
    }

    if (activeLight === 'yellow'){
        turnYellow();
    }

    if (activeLight === 'green'){
        turnGreen();
    }
}

function getActiveLight() {
    return(['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function turnOffLights() {
    $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
    turnOffLights();
    $('.green-light').addClass('green-on');
}

function turnYellow() {
    turnOffLights();
    $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
    turnOffLights();
    $('.red-light').addClass('red-on');
}

function handleClicks() {
    $('.js-controls-lights').click(function (){
        doTrafficLights();
    });
}

$(function() {
    turnOffLights();
    handleClicks();
});