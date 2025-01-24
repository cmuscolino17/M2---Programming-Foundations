let display= document.getElementById('display')
const buttons = document.querySelectorAll('.btn')

let currentInput = ''

const appendValue = function(number) {
    currentInput += number
    display.innerText = currentInput
}

const clearDisplay = function() {
    currentInput = ''
    display.innerText = ''
}

const calculate = function() {
    try {
        currentInput = eval(currentInput).toString()
        display.innerText = currentInput
    } catch (error) {
        display.innerText = 'Error!'
        currentInput = ''
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value')

        if (value === 'C') {
            clearDisplay()
        } else if (value === '=') {
            calculate()
        } else {
            appendValue (value)
        }
    })
})