const $ = require('jquery')


function createAnalitics() {
    
    let isDestroy = false;
    let counter = 0;

    printClicks(counter)
    printTime()
    $('#destroy').on('click', () => $('#desptoyp').html('is destroy...'))

 
    return {
        getClick() {
            if (isDestroy) 'is destroy'
            return counter
        },

        destroy() {
            isDestroy = true
            (document).off('click', listener)
        }
    } 
}


printClicks = (counter) => { 
    let list = () => ++counter

    $('#analitics').on('click', () => {
        list()
        $('#analiticsp').html(`${counter} clicks`)
    })
}

printTime = () => {
    const post = new Date()

    $('#time').on('click', () => {
        $('#timep').html(post)
    })
}


createAnalitics()








