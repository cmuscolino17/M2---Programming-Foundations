// ESERCIZIO 7:
function changeH1(){
    document.querySelector('h1').textContent = 'Epicode Online Shop'
}

changeH1()

// ESERCIZIO 8:
const changeBodyBackgroundcolor = function(){
    document.querySelector('body').style.backgroundColor = 'lightgrey'
}

changeBodyBackgroundcolor()

// ESERCIZIO 9:
const changeFooterAddress = function(){
    document.getElementById('address').innerText = 'Via Giuseppe Verdi, 1'
}

changeFooterAddress()

// ESERCIZIO 10:
function addClassToLink (){
    let element = document.querySelectorAll('a')

    for (let i= 0; i < element.length; i++){
        element[i].classList.add('newLink')
    }
}

addClassToLink()