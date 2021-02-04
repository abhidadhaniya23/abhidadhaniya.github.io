console.log('done');

let logo = document.getElementById('logo');
let ul = document.getElementById('ul');

window.onscroll = function () {
    if (scrollY > 50) {
        document.getElementById('topBtn').style.opacity = '1';
        document.querySelector('nav').style.background = 'rgb(118,33,236)';
    }
    else {
        document.getElementById('topBtn').style.opacity = '0';
        document.querySelector('nav').style.background = 'rgb(5,5,5)';
    }
}

if (window.innerWidth < 670) {
    document.getElementById('first').addEventListener('click', closemenu);
    document.getElementById('second').addEventListener('click', closemenu);
    // document.getElementById('third').addEventListener('click', closemenu);
    // document.getElementById('forth').addEventListener('click', closemenu);
    // document.getElementById('fifth').addEventListener('click', closemenu);
    // document.getElementById('footer').addEventListener('click', closemenu);

    document.getElementById('home').addEventListener('click', closemenu);
    document.getElementById('Skills').addEventListener('click', closemenu);
    document.getElementById('Development').addEventListener('click', closemenu);
    document.getElementById('Contact').addEventListener('click', closemenu);
    document.getElementById('About').addEventListener('click', closemenu);
}

function showmenu() {
    ul.style.left = '0';
}
function closemenu() {
    ul.style.left = '-130px';
}

// skill bar progress, when page scroll to skills

let skill = document.getElementsByClassName('skill');

window.onscroll = function () {
    if (scrollY < 136) {
        Array.from(skill).forEach(function (element) {
            element.style.animation = 'load 1.7s 0s ease-in-out ';
        })
    }
}