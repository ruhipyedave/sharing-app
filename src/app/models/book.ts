export class Book {
    constructor(
        public title: string,
        public description: string,
        public tags: boolean[],
        public id?: number,
    ) {
        this.id = Date.now();
    }
}
