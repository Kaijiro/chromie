Feature: Basic WoW Log file parsing

  Scenario: I want to know how many players were in the fight
    Given The log file "tests/resources/WoWLog_20190812_fight1.txt"
    When Chromie process the file
    Then The encounter should contain 13 fighters

  Scenario: I want to know how many spells and techniques a players used in the fight
    Given The log file "tests/resources/WoWLog_20190812_fight1.txt"
    When Chromie process the file
    Then The player with ID Player-1390-09EFFE21 should has used 130 spells and techniques

  Scenario: I want Chromie to parse all events in the log file
    Given The log file "tests/resources/WoWLog_20190812_fight1.txt"
    When Chromie process the file
    Then The encounter should contain no unknown event
