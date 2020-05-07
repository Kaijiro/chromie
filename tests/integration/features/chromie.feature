Feature: WoW Log file parsing

  Scenario: Listing the players
    Given The log file "my/log/file.log"
    When Chromie process the file
    Then The encounter should contain 14 fighters
