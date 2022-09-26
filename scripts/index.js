let operation = document.querySelector('#operation');
let buttons = Array.from(document.querySelectorAll('.button'));
let results = document.querySelector('#result');

document.addEventListener('keypress', (event) => {
    if (event.key == '=') {
        operation.innerText = eval(operation.innerText);
    }
    else if (event.key === "Backspace" || event.key === "Delete") {
        operation.innerText = operation.innerText.slice(0, -1);
    } else {
        operation.innerText += event.key;
    }
})


buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                operation.innerText = '';
                results.innerText = '';
                break;
            case '⟲':
                if (operation.innerText) {
                    operation.innerText = operation.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    results.innerText = `Ans = ${eval(operation.innerText)}`;

                } catch {
                    results.innerText = 'Error!';
                }
                break;

            default:
                operation.innerText += e.target.innerText;

        }
    })
})