[![Build Status](https://travis-ci.org/Kaijiro/chromie.svg?branch=master)](https://travis-ci.org/Kaijiro/chromie)
[![Known Vulnerabilities](https://snyk.io//test/github/Kaijiro/chromie/badge.svg?targetFile=package.json)](https://snyk.io//test/github/Kaijiro/chromie?targetFile=package.json)

# Chromie

Chromie is a tool made to inspect passed World of Warcraft raids fight and try to figure :
- Why it didn't work
- Planify your Raid CDs
- Get some stats on your pulls

This tools does not intend to replace WarcraftLogs at all, they are 2 different tools.
## Objectives on short/mid term
- Make Chromie as """efficient""" as before the code project big refactor

## Project setup
```shell script
yarn install
```

You need to install [GIT LFS](https://git-lfs.github.com/) to retrieve the large log files that are (intentionally) 
not committed here. 

You can download the log file with :
```shell script
git lfs pull
```

### Run the project 
```shell script
yarn serve
```

This will start the Vue project in dev mode with hot reload and link the Electron app
to the webapp.

### Run the tests
```shell script
yarn test:unit
yarn test:unit:watch # To enter watch mode

# Run the integration tests
git lfs pull # Refresh the logs file 
yarn test:integration

# Run both tests
yarn test
```

## Resources
[WoW Log Documentation](https://wow.gamepedia.com/COMBAT_LOG_EVENT)
