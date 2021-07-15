export default class Encounter {
    public readonly fighters: Array<string> = [];
    public readonly unknownLines: Array<string> = [];

    public constructor(public readonly name: string) {
    }

    addFighter(fighter: string) {
        this.fighters.push(fighter);
    }

    addUnknownEvent(eventLine: string) {
        this.unknownLines.push(eventLine);
    }
}
