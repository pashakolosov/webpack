const Post = class {
    constructor(title, img) {
        this.title = title
        this.date = new Date()
        this.img = img
    }

    toString = () => JSON.stringify({
        title: this.title,
        date: this.date,
        img: this.img
    }, null, 2)
}

export default Post;