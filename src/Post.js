export default class Post{
    constructor(title) {
        this.title = title;
        this.date = new Date();
    }

    toString = () => JSON.stringify(`post.toString: title:${this.title} date:${this.date.toJSON()}`)
    time = () => JSON.stringify(this.date.toJSON());

}

