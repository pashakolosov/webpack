import Post from './Post'

function info() {
    const post = new Post()
    console.log(post.time())
    console.log(post.toString())
}

function changeTime() {
    const post = new Post();
    const times = document.getElementById("time");
    times.innerHTML = post.date
}

document.getElementById('foo').addEventListener('click', () => {
    info()
    changeTime()
})
