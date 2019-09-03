export default class Encounter {
    private fighters: Array<string> = [];

    countFighters(): number {
        return this.fighters.length;
    }

    addFighter(myFighter: string) {
        this.fighters.push(myFighter);
    }
}
