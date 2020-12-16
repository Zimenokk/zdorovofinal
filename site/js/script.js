const menu = document.querySelector('.right_header'),
    trigger = document.querySelector('.menu__toggle'),
    body = document.querySelector('body');


trigger.addEventListener('click', () => {
    if (isActive(trigger)) {
        removeActiveState(trigger);
        removeActiveState(menu);
        body.classList.remove('lock')
    } else {
        addActiveState(trigger)
        addActiveState(menu);
        body.classList.add('lock');
    }
})




// Module Manipulate with active states

function isActive(element) {
    if (element.classList.contains('active')) {
        return true;
    } else {
        return false;
    }
}

function addActiveState(element) {
    element.classList.add('active');
}

function removeActiveState(element) {
    element.classList.remove('active');
}

// function lock(elem)...

// body.lock {
//     overflow: hidden;
// }