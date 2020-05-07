import Encounter from "./Encounter";

export class Encounters {

    private encounters: Encounter[];

    constructor() {
        this.encounters = [];
    }

    add(encounter: Encounter) {
        this.encounters.push(encounter);
    }

    last(): Encounter {
        return this.encounters[this.encounters.length - 1];
    }
}
