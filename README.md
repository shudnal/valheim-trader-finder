# Valheim Traders Finder

Find Haldor, Hildir and Bog Witch without all the stress amd spoilers.

## Instructions

- Go to http://valheim-traders-finder.vercel.app/
- Upload your world.db
- Get RPG-friendly instructions to the nearest trader from spawn
- Or, if you want, see a full map of all spots

## Development

- Clone repository
- `yarn install`
- `yarn dev`

## Key Files

- `valheim/Dropzone` has the logic for parsing locations
- `valheim/WorldMap` is the code for the map component
- `valheim/Hint` calculates the closest merchant and creates the text to send you there
