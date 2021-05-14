

function createAnalitics() {
    
    let isDestroy = false;
    let counter = 0;

    printClicks(counter)
    printTime()

 
    return {
        getClick() {
            if (isDestroy) 'is destroy'
            return counter
        },

        destroy() {
            isDestroy = true
            document.removeEventListener('click', listener)
        }
    }
}


printClicks = (counter) => { 
    let list = () => ++counter

    document.getElementById('analitics').addEventListener('click', () => {
        list()
        document.getElementById('analiticsp').innerHTML = `${counter} clicks`
    })
}

printTime = () => {
    const post = new Date()

    document.getElementById('time').addEventListener('click', () => {
        document.getElementById('timep').innerHTML = post
    })
}


createAnalitics()








