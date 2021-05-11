function createAnalitics() {
    let counter = 0;
    let isDestroid = false;

    const listener = () => counter++

    document.addEventListener('click', listener) 

    return {
        destroy() {
            isDestroid = true
            document.removeEventListener('click', listener)
            console.log('isDestroy')
        },

        getClick() {
            if (isDestroid) {
                return 'Analitic is destroed'
            }
            return counter
        }
    }
}

let an = createAnalitics()

function innerText() {
    document.getElementById('analitics').innerHTML = `аналитика: ${an.getClick()}`
    console.log('innerText')
}

document.getElementById('an').addEventListener('click', innerText);
document.getElementById('des').addEventListener('click', an.destroy);

