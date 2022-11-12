# Swarm game

## Game Features braistorming

### Game story

- Everything is a swarm (unit drones such as builders, soldiers, transporters, etc. + building drones such as labs, factories, etc.)
- Planet domination theme with a robotic alien specie
- Colonisation rae between multiple factions of that alien specie
- Planet is around black hole that changes game time speed

### Macro game mechanics

- At first, ground drones then flying drones
- Small drones can assemble to form bigger and more efficient drones
- Ability to move city (with ground and/or flying drones: ground are cheaper and stronger but flying are faster)
- Planet is around black hole that changes game time speed
  - Time speeds up as the game progresses, alliances can influence it but I still have most control over it
- Building or researching things is using resources progressively instead of all at the beginning, lacking resources will just slow down construction
  - Possibility to have multiple phases with different resource needs
- Alliance quests
- Map with spherical coordinates
- Mining buildings for early game, asteroid mining for late game. Asteroid mining requires influence territory which can be conquered and lost for better yield
- Events
  - Weekly events with missions
  - Longer event with bunch of missions and gift at the end, with mining building boosts for new players
- Search tree (with ability to hide branches to help readibility ?)
  - with xp gains by doing actions such as trading, building, gain over time, fighting, ...
  - Some researches are one-time, others are repetitive with increasing bonus
  - with progress bar for each tech and ability to switch research without losing progress
  - prerequisites are other techs or actions
- Economic routes that allow the player to send resources continuously
- Ability to scrap dead drones after battle + ability to repair drones
  - only the winner can recycle scraps
- Proposition / bugs page for end users + admin interface for myself
- Building/researching in parallel is possible as long as you have the resources, or you can choose serial. => Create dependency tree to build in the order you want. (tech needed to start building in parallel, then another one to start building the dependency tree)
- Rogue swarms are controled by AI
  - Ability to attack rogue swarms to get resources/technology pieces/new drones
  - AI improves over time and can team up but not attack players (at least, not something too harmful)
  - Inactive players become IA players
  - AI players can fight against each other and merge
  - Only AI players can be destroyed
  - AI players can only be X% of the total players. Otherwise, they will destroy each other or spawn new AIs
- Orbital station/weaponry / spying facilities / sabotage mission / stealing drones with hacking
- achievements (X ressources recoltees, X attaques lancées, X convois lancés/reçus, ...)
- No unit xp
 

### Micro game mechanics

- Units to build
  - Standard unit: can only build and be assembled into bigger units or building
  - Shield unit: used as defense or added to build bigger units
    - Cloaking unit: enable cloaking on army (cloaking efficiency depends on the amount of them)

- Researches
  - Unit parts
    - Armor
    - Shield
    - Cloaking
    - Recyclers: first only buildings, then from battles
  - Bigger combat/transport units
  - Building/research dependency tree with parallel/serials construction
  - Hacking
  
- Player stats
  - play time
  - ...

- Resources
  - raw metal
  - refined metal
  - sulfuric acid
  - energy
    - geothermal
    - solar panel
    - combustible extrait d'asteroide
    - sun matter harvester


## Development Technologies

### Frontend
- Angular 14
- i18n
- material / primeNG / ?

### Backend
- Django
- Swagger

### Deployment
- Jenkins for CD/CI
- SonarQube
- GPC
  - Frontend in Storage ?
  - Backend in Engine ?
