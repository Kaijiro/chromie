import {Fighter} from "./Fighter";

export default class Encounter {
    public readonly fighters: Array<Fighter> = [];
    public readonly unknownLines: Array<string> = [];

    public constructor(public readonly name: string) {
    }

    addFighter(fighterId: string): void {
        this.fighters.push({actions: [], id: fighterId, name: ""});
    }

    addUnknownEvent(eventLine: string): void {
        this.unknownLines.push(eventLine);
    }

    addActionFor(fighterId: string, action: {targetName: string; targetId: string; spellName: string; spellId: number}): void {
        const fighter = this.fighters.find(fighter => fighter.id === fighterId);

        if(fighter === undefined){
            console.error(`Unknown fighter ! :( ${fighterId}. Actual fighters are ${this.fighters.map(fighter => `${fighter.id}/${fighter.name}`)}`);
            return;
            //throw new Error(`Unknown fighter ! :( ${fighterId}. Actual fighters are ${this.fighters.map(fighter => `${fighter.id}/${fighter.name}`)}`);
        }

        fighter.actions.push(action);
    }
}
