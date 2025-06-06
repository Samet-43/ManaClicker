import { Upgrade } from '../models/type';

export const UPGRADES: Upgrade[] = [
  // --- CLICK UPGRADES ---
  { name: "Click Upgrade I", description: "Doubles click power", cost: 100, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade II", description: "Doubles click power", cost: 500, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade III", description: "Doubles click power", cost: 5000, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade IV", description: "Doubles click power", cost: 2.5e4, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade V", description: "Doubles click power", cost: 1e5, type: "click", multiplier: 0.2, purchased: false },
  { name: "Click Upgrade VI", description: "Doubles click power", cost: 5e5, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade VII", description: "Doubles click power", cost: 1.5e6, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade VIII", description: "Doubles click power", cost: 5e6, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade IX", description: "Doubles click power", cost: 1.5e7, type: "click", multiplier: 2, purchased: false },
  { name: "Click Upgrade X", description: "Doubles click power", cost: 5e7, type: "click", multiplier: 0.5, purchased: false },

  // --- BUYABLES UPGRADES ---
  { name: "Apprentice Upgrade", description: "Doubles Apprentice production", cost: 3e2, type: "buy", target: "Apprentice", multiplier: 2, purchased: false },
  { name: "Mage Upgrade", description: "Doubles Mage production", cost: 1e3, type: "buy", target: "Mage", multiplier: 2, purchased: false },
  { name: "Enchanter Upgrade", description: "Doubles Enchanter production", cost: 3e3, type: "buy", target: "Enchanter", multiplier: 2, purchased: false },
  { name: "Spell Factory Upgrade", description: "Doubles Spell Factory production", cost: 1e4, type: "buy", target: "Spell Factory", multiplier: 2, purchased: false },
  { name: "Arcane Golem Upgrade", description: "Doubles Arcane Golem production", cost: 5e4, type: "buy", target: "Arcane Golem", multiplier: 2, purchased: false },
  { name: "Ethereal Core Upgrade", description: "Doubles Ethereal Core production", cost: 3e5, type: "buy", target: "Ethereal Core", multiplier: 2, purchased: false },
  { name: "Chrono Wizard Upgrade", description: "Doubles Chrono Wizard production", cost: 1.8e6, type: "buy", target: "Chrono Wizard", multiplier: 2, purchased: false },
  { name: "Runestone Forge Upgrade", description: "Doubles Runestone Forge production", cost: 1e7, type: "buy", target: "Runestone Forge", multiplier: 2, purchased: false },
  { name: "Arcane Rift Upgrade", description: "Doubles Arcane Rift production", cost: 5e7, type: "buy", target: "Arcane Rift", multiplier: 2, purchased: false },
  { name: "Mana Reactor Upgrade", description: "Doubles Mana Reactor production", cost: 2e8, type: "buy", target: "Mana Reactor", multiplier: 2, purchased: false },
  { name: "Arcane Bloom Upgrade", description: "Doubles Arcane Bloom production", cost: 1e9, type: "buy", target: "Arcane Bloom", multiplier: 2, purchased: false },
  { name: "Mana Leech Upgrade", description: "Doubles Mana Leech production", cost: 4e9, type: "buy", target: "Mana Leech", multiplier: 2, purchased: false },
  { name: "Crystal Engine Upgrade", description: "Doubles Crystal Engine production", cost: 1.6e10, type: "buy", target: "Crystal Engine", multiplier: 2, purchased: false },
  { name: "Runic Beacon Upgrade", description: "Doubles Runic Beacon production", cost: 6e10, type: "buy", target: "Runic Beacon", multiplier: 2, purchased: false },
  { name: "Spirit Collector Upgrade", description: "Doubles Spirit Collector production", cost: 2.4e11, type: "buy", target: "Spirit Collector", multiplier: 2, purchased: false },
  { name: "Witch's Circle Upgrade", description: "Doubles Witch's Circle production", cost: 1e12, type: "buy", target: "Witch's Circle", multiplier: 2, purchased: false },
  { name: "Astral Harvester Upgrade", description: "Doubles Astral Harvester production", cost: 4e12, type: "buy", target: "Astral Harvester", multiplier: 2, purchased: false },
  { name: "Sigil Crafter Upgrade", description: "Doubles Sigil Crafter production", cost: 1.6e13, type: "buy", target: "Sigil Crafter", multiplier: 2, purchased: false },
  { name: "Mana Tree Upgrade", description: "Doubles Mana Tree production", cost: 6e13, type: "buy", target: "Mana Tree", multiplier: 2, purchased: false },
  { name: "Occult Furnace Upgrade", description: "Doubles Occult Furnace production", cost: 2.4e14, type: "buy", target: "Occult Furnace", multiplier: 2, purchased: false },
  { name: "Phantom Orb Upgrade", description: "Doubles Phantom Orb production", cost: 1e15, type: "buy", target: "Phantom Orb", multiplier: 2, purchased: false },
  { name: "Void Harvester Upgrade", description: "Doubles Void Harvester production", cost: 4e15, type: "buy", target: "Void Harvester", multiplier: 2, purchased: false },
  { name: "Ether Pump Upgrade", description: "Doubles Ether Pump production", cost: 1.6e16, type: "buy", target: "Ether Pump", multiplier: 2, purchased: false },
  { name: "Celestial Obelisk Upgrade", description: "Doubles Celestial Obelisk production", cost: 6.4e16, type: "buy", target: "Celestial Obelisk", multiplier: 2, purchased: false },
  { name: "Spell Infuser Upgrade", description: "Doubles Spell Infuser production", cost: 2.4e17, type: "buy", target: "Spell Infuser", multiplier: 2, purchased: false },
  { name: "Temporal Distorter Upgrade", description: "Doubles Temporal Distorter production", cost: 1e18, type: "buy", target: "Temporal Distorter", multiplier: 2, purchased: false },
  { name: "Mana Nexus Upgrade", description: "Doubles Mana Nexus production", cost: 4e18, type: "buy", target: "Mana Nexus", multiplier: 2, purchased: false },
  { name: "Arcane Drill Upgrade", description: "Doubles Arcane Drill production", cost: 1.6e19, type: "buy", target: "Arcane Drill", multiplier: 2, purchased: false },
  { name: "Binding Altar Upgrade", description: "Doubles Binding Altar production", cost: 6.4e19, type: "buy", target: "Binding Altar", multiplier: 2, purchased: false },
  { name: "Mythic Extractor Upgrade", description: "Doubles Mythic Extractor production", cost: 2.56e20, type: "buy", target: "Mythic Extractor", multiplier: 2, purchased: false }

]
