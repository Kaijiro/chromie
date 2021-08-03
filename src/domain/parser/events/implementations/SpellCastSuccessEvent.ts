import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellCastSuccessEvent implements EncounterEvent {
    constructor(public readonly playerID: string,
                public readonly playerName: string,
                public readonly targetID: string,
                public readonly targetName: string,
                public readonly spellID: number,
                public readonly spellName: string) {
    }

    applyOn(encounters: Encounter[]): void {
        const currentEncounter = encounters[encounters.length - 1];

        if(currentEncounter === undefined){
            return;
        }

        const action = {targetName: this.targetName, targetId: this.targetID, spellName: this.spellName, spellId: this.spellID};
        currentEncounter.addActionFor(this.playerID, action);
    }
}
