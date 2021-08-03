import SpellCastSuccessParser from "../../../src/domain/parser/matchers/implementations/SpellCastSuccessParser";
import SpellCastSuccessEvent from "../../../src/domain/parser/events/implementations/SpellCastSuccessEvent";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("SpellCastSuccess", () => {
    const EVENT_LINE_WITH_TARGET = "8/12 21:18:29.434  SPELL_CAST_SUCCESS,Player-1390-06D03DE6,\"Kyrron-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,8921,\"Éclat lunaire\",0x40,Player-1390-06D03DE6,0000000000000000,487026,487026,13235,1611,7904,77234,1,250,1000,0,183.86,1436.85,1518,1.4615,420";
    const EVENT_LINE_WITHOUT_TARGET = "9/26 22:51:00.049  SPELL_CAST_SUCCESS,Player-1390-0A3D7C30,\"Khör-Hyjal\",0x514,0x0,0000000000000000,nil,0x80000000,0x80000000,191634,\"Gardien des tempêtes\",0x8,Player-1390-0A3D7C30,0000000000000000,303340,303340,2546,12515,6756,21582,11,0,100,0,206.22,2438.29,1520,1.5590,430";

    it("should parse the line and return a SpellCastSuccessEvent for a spell with target", () => {
        const parser: SpellCastSuccessParser = new SpellCastSuccessParser();

        const event = parser.parse(EVENT_LINE_WITH_TARGET);

        expect(event).not.toBeFalsy();
    });

    it("should parse the line and return a SpellCastSuccessEvent for a spell with no target", () => {
        const parser: SpellCastSuccessParser = new SpellCastSuccessParser();

        const event = parser.parse(EVENT_LINE_WITHOUT_TARGET);

        expect(event).not.toBeFalsy();
    });

    it("should extract the needed information from the line and build the event with them", () => {
        const parser: SpellCastSuccessParser = new SpellCastSuccessParser();

        const event = parser.parse(EVENT_LINE_WITH_TARGET) as SpellCastSuccessEvent;

        expect(event?.playerID).toBe("Player-1390-06D03DE6");
        expect(event?.playerName).toBe("Kyrron-Hyjal");
        expect(event?.targetID).toBe("Creature-0-3770-2164-22359-152853-000051BAA7");
        expect(event?.targetName).toBe("Silivaz le Zélé");
        expect(event?.spellID).toBe(8921);
        expect(event?.spellName).toBe("Éclat lunaire");
    });

    it("should add an action in the current encounter", () => {
        const encounter = new Encounter("A big bad guy");
        encounter.addFighter("Player-1390-06D03DE6");
        const addActionSpy = jest.spyOn(encounter, 'addActionFor');

        const parser: SpellCastSuccessParser = new SpellCastSuccessParser();
        const event = parser.parse(EVENT_LINE_WITH_TARGET);

        event?.applyOn([encounter]);

        expect(addActionSpy).toBeCalledWith("Player-1390-06D03DE6", {targetId: "Creature-0-3770-2164-22359-152853-000051BAA7", targetName: "Silivaz le Zélé", spellId: 8921, spellName: "Éclat lunaire"});
    });
});
