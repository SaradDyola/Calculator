class Calculator {
    constructor(outputText){
        this.outputText = outputText
        this.output = ''
        this.clear()
    }

    clear() {
        this.output = ''
        this.output1 = ''
        this.operation = undefined
    }

    appendNumber(number) {
        if (number === '.' && this.output.includes('.')) return
        this.output = this.output + number
    }

    chooseOperation(operator) {
        if (this.output === '') return
        if (this.output1 !== '') {
            this.result()
        }
        this.operation = operator
        this.output1 = this.output
        this.output = ''
    }

    result() {
        let total
        const out = parseFloat(this.output)
        const out1 = parseFloat(this.output1)
        if (isNaN(out1) || isNaN(out)) return
        switch (this.operation) {
        case '+':
            total = out1 + out
            break
        case '-':
            total = out1 - out
            break
        case 'X':
            total = out1 * out
            break
        case '÷':
            total = out1 / out
            break
        default:
            return
        }
        this.output = total
        this.operation = undefined
        this.output1 = ''
        }

    update() {
        document.getElementById("o").innerHTML = this.output.toLocaleString()
    }
}

const numberButton = document.querySelectorAll('[data-numbers]')
const operatorButton = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const acButton = document.querySelector('[data-clear]')
const outputText = document.querySelector('[data-output]')

const calculator = new Calculator(outputText)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.update()
    })
  })

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
    })
})

acButton.addEventListener('click', () => {
    calculator.clear()
    calculator.update()
})

equalsButton.addEventListener('click', () => {
    calculator.result()
    calculator.update()
})

