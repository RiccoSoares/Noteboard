export class Note {
    constructor(title, bodyText, color) {
        this.title = title;
        this.bodyText = bodyText;
        this.color = color;
        this.id = null;
        this.inBoard = false;
    }
}