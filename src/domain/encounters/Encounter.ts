export default class Encounter {
    private readonly name: string;
    private fighters: Array<string> = [];
    private unknownLines: Array<string> = [];

    public constructor(name: string) {
        this.name = name;
    }

    countFighters(): number {
        return this.fighters.length;
    }

    addFighter(fighter: string) {
        this.fighters.push(fighter);
    }

    addUnknownEvent(eventLine: string) {
        this.unknownLines.push(eventLine);
    }
}
