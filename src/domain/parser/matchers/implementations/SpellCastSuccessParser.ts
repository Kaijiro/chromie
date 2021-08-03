import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellCastSuccessEvent from "../../events/implementations/SpellCastSuccessEvent";

export default class SpellCastSuccessParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_CAST_SUCCESS,(?<PlayerID>Player-\\d{4}-[A-Z0-9]+|(?:Creature|Vehicle|Pet)-0-\\d+-\\d+-\\d+-\\d+-[0-9A-Z]+),"(?<PlayerName>[a-zA-Zöøõéâåêè'’ ]+-?[A-Za-z]+?)",0x[a-z0-9]+,0x\\d+,(?<TargetID>Player-\\d{4}-[A-Z0-9]+|(?:Creature|Vehicle|Pet)-0-\\d+-\\d+-\\d+-\\d+-[0-9A-Z]+|0{16}),"?(?<TargetName>[a-zA-Zöøõéèâå\\-'’ ]+|nil)"?,0x[a-z0-9]+,0x[a-z0-9]+,(?<SpellId>\\d+),"(?<SpellName>[A-Za-zçÂâÉéêèîïôû’':\\-  ]+)"`);

        const result = eventInfosRegex.exec(line);

        if (result !== null && result.groups !== undefined) {
            return new SpellCastSuccessEvent(
                result.groups['PlayerID'],
                result.groups['PlayerName'],
                result.groups['TargetID'],
                result.groups['TargetName'],
                Number(result.groups['SpellID']),
                result.groups['SpellName']
            );
        }
    }
}
