export default class Encounter {
    private readonly name: string;
    private fighters: Array<string> = [];

    private constructor(name: string) {
        this.name = name;
    }

    public static with(name: string): Encounter{
        return new Encounter(name);
    }

    countFighters(): number {
        return this.fighters.length;
    }

    addFighter(fighter: string) {
        this.fighters.push(fighter);
    }

    getName() {
        return this.name;
    }
}
