Feature: WoW Log file parsing

  Scenario: I want to know how many players were in the fight
    Given The log file "tests/resources/WoWLog_20190812_fight1.txt"
    When Chromie process the file
    Then The encounter should contain 13 fighters
