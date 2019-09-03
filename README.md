[![Build Status](https://travis-ci.org/Kaijiro/chromie.svg?branch=master)](https://travis-ci.org/Kaijiro/chromie)
[![Known Vulnerabilities](https://snyk.io//test/github/Kaijiro/chromie/badge.svg?targetFile=package.json)](https://snyk.io//test/github/Kaijiro/chromie?targetFile=package.json)


# Chromie

Chromie is a tool made to inspect passed Raid fight and try to figure :
- Why it didn't work
- Planify your Raid CDs
- Get some stats on your pulls

## Objectives on short/mid term
- Clean the code (because it was a 8 hours POC and I was learning how Electron works at the same time)
- Setup a CI/CD env on Travis with tests

## Project setup
```
yarn install
```

### Run the project 
```
yarn electron:serve
```

### Run the tests
```
yarn test:unit
```
(Add `:watch` to enter watch mode)

### Lints and fixes files
```
yarn lint
```

## Resources
[WoW Log Documentation](https://wow.gamepedia.com/COMBAT_LOG_EVENT)
