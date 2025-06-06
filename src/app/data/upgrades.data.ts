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
  { name: "Apprentice Upgrade I", description: "Double production at level 10", cost: 3.0e+02, type: "buy", target: "Apprentice", level: 10, multiplier: 2, purchased: false },
  { name: "Apprentice Upgrade II", description: "Double production at level 25", cost: 1.5e+03, type: "buy", target: "Apprentice", level: 25, multiplier: 2, purchased: false },
  { name: "Apprentice Upgrade III", description: "Double production at level 50", cost: 7.5e+03, type: "buy", target: "Apprentice", level: 50, multiplier: 2, purchased: false },
  { name: "Apprentice Upgrade IV", description: "Double production at level 100", cost: 3.0e+04, type: "buy", target: "Apprentice", level: 100, multiplier: 2, purchased: false },

  { name: "Mage Upgrade I", description: "Double production at level 10", cost: 1.0e+03, type: "buy", target: "Mage", level: 10, multiplier: 2, purchased: false },
  { name: "Mage Upgrade II", description: "Double production at level 25", cost: 5.0e+03, type: "buy", target: "Mage", level: 25, multiplier: 2, purchased: false },
  { name: "Mage Upgrade III", description: "Double production at level 50", cost: 2.5e+04, type: "buy", target: "Mage", level: 50, multiplier: 2, purchased: false },
  { name: "Mage Upgrade IV", description: "Double production at level 100", cost: 1.0e+05, type: "buy", target: "Mage", level: 100, multiplier: 2, purchased: false },

  { name: "Enchanter Upgrade I", description: "Double production at level 10", cost: 3.0e+03, type: "buy", target: "Enchanter", level: 10, multiplier: 2, purchased: false },
  { name: "Enchanter Upgrade II", description: "Double production at level 25", cost: 1.5e+04, type: "buy", target: "Enchanter", level: 25, multiplier: 2, purchased: false },
  { name: "Enchanter Upgrade III", description: "Double production at level 50", cost: 7.5e+04, type: "buy", target: "Enchanter", level: 50, multiplier: 2, purchased: false },
  { name: "Enchanter Upgrade IV", description: "Double production at level 100", cost: 3.0e+05, type: "buy", target: "Enchanter", level: 100, multiplier: 2, purchased: false },

  { name: "Spell Factory Upgrade I", description: "Double production at level 10", cost: 1.0e+04, type: "buy", target: "Spell Factory", level: 10, multiplier: 2, purchased: false },
  { name: "Spell Factory Upgrade II", description: "Double production at level 25", cost: 5.0e+04, type: "buy", target: "Spell Factory", level: 25, multiplier: 2, purchased: false },
  { name: "Spell Factory Upgrade III", description: "Double production at level 50", cost: 2.5e+05, type: "buy", target: "Spell Factory", level: 50, multiplier: 2, purchased: false },
  { name: "Spell Factory Upgrade IV", description: "Double production at level 100", cost: 1.0e+06, type: "buy", target: "Spell Factory", level: 100, multiplier: 2, purchased: false },

  { name: "Arcane Golem Upgrade I", description: "Double production at level 10", cost: 5.0e+04, type: "buy", target: "Arcane Golem", level: 10, multiplier: 2, purchased: false },
  { name: "Arcane Golem Upgrade II", description: "Double production at level 25", cost: 2.5e+05, type: "buy", target: "Arcane Golem", level: 25, multiplier: 2, purchased: false },
  { name: "Arcane Golem Upgrade III", description: "Double production at level 50", cost: 1.2e+06, type: "buy", target: "Arcane Golem", level: 50, multiplier: 2, purchased: false },
  { name: "Arcane Golem Upgrade IV", description: "Double production at level 100", cost: 5.0e+06, type: "buy", target: "Arcane Golem", level: 100, multiplier: 2, purchased: false },

  { name: "Ethereal Core Upgrade I", description: "Double production at level 10", cost: 3.0e+05, type: "buy", target: "Ethereal Core", level: 10, multiplier: 2, purchased: false },
  { name: "Ethereal Core Upgrade II", description: "Double production at level 25", cost: 1.5e+06, type: "buy", target: "Ethereal Core", level: 25, multiplier: 2, purchased: false },
  { name: "Ethereal Core Upgrade III", description: "Double production at level 50", cost: 7.5e+06, type: "buy", target: "Ethereal Core", level: 50, multiplier: 2, purchased: false },
  { name: "Ethereal Core Upgrade IV", description: "Double production at level 100", cost: 3.0e+07, type: "buy", target: "Ethereal Core", level: 100, multiplier: 2, purchased: false },

  { name: "Chrono Wizard Upgrade I", description: "Double production at level 10", cost: 1.8e+06, type: "buy", target: "Chrono Wizard", level: 10, multiplier: 2, purchased: false },
  { name: "Chrono Wizard Upgrade II", description: "Double production at level 25", cost: 9.0e+06, type: "buy", target: "Chrono Wizard", level: 25, multiplier: 2, purchased: false },
  { name: "Chrono Wizard Upgrade III", description: "Double production at level 50", cost: 4.5e+07, type: "buy", target: "Chrono Wizard", level: 50, multiplier: 2, purchased: false },
  { name: "Chrono Wizard Upgrade IV", description: "Double production at level 100", cost: 1.8e+08, type: "buy", target: "Chrono Wizard", level: 100, multiplier: 2, purchased: false },

  { name: "Runestone Forge Upgrade I", description: "Double production at level 10", cost: 1.0e+07, type: "buy", target: "Runestone Forge", level: 10, multiplier: 2, purchased: false },
  { name: "Runestone Forge Upgrade II", description: "Double production at level 25", cost: 5.0e+07, type: "buy", target: "Runestone Forge", level: 25, multiplier: 2, purchased: false },
  { name: "Runestone Forge Upgrade III", description: "Double production at level 50", cost: 2.5e+08, type: "buy", target: "Runestone Forge", level: 50, multiplier: 2, purchased: false },
  { name: "Runestone Forge Upgrade IV", description: "Double production at level 100", cost: 1.0e+09, type: "buy", target: "Runestone Forge", level: 100, multiplier: 2, purchased: false },

  { name: "Arcane Rift Upgrade I", description: "Double production at level 10", cost: 5.0e+07, type: "buy", target: "Arcane Rift", level: 10, multiplier: 2, purchased: false },
  { name: "Arcane Rift Upgrade II", description: "Double production at level 25", cost: 2.5e+08, type: "buy", target: "Arcane Rift", level: 25, multiplier: 2, purchased: false },
  { name: "Arcane Rift Upgrade III", description: "Double production at level 50", cost: 1.2e+09, type: "buy", target: "Arcane Rift", level: 50, multiplier: 2, purchased: false },
  { name: "Arcane Rift Upgrade IV", description: "Double production at level 100", cost: 5.0e+09, type: "buy", target: "Arcane Rift", level: 100, multiplier: 2, purchased: false },

  { name: "Mana Reactor Upgrade I", description: "Double production at level 10", cost: 2.0e+08, type: "buy", target: "Mana Reactor", level: 10, multiplier: 2, purchased: false },
  { name: "Mana Reactor Upgrade II", description: "Double production at level 25", cost: 1.0e+09, type: "buy", target: "Mana Reactor", level: 25, multiplier: 2, purchased: false },
  { name: "Mana Reactor Upgrade III", description: "Double production at level 50", cost: 5.0e+09, type: "buy", target: "Mana Reactor", level: 50, multiplier: 2, purchased: false },
  { name: "Mana Reactor Upgrade IV", description: "Double production at level 100", cost: 2.0e+10, type: "buy", target: "Mana Reactor", level: 100, multiplier: 2, purchased: false },

  { name: "Arcane Bloom Upgrade I", description: "Double production at level 10", cost: 1.0e+09, type: "buy", target: "Arcane Bloom", level: 10, multiplier: 2, purchased: false },
  { name: "Arcane Bloom Upgrade II", description: "Double production at level 25", cost: 5.0e+09, type: "buy", target: "Arcane Bloom", level: 25, multiplier: 2, purchased: false },
  { name: "Arcane Bloom Upgrade III", description: "Double production at level 50", cost: 2.5e+10, type: "buy", target: "Arcane Bloom", level: 50, multiplier: 2, purchased: false },
  { name: "Arcane Bloom Upgrade IV", description: "Double production at level 100", cost: 1.0e+11, type: "buy", target: "Arcane Bloom", level: 100, multiplier: 2, purchased: false },

  { name: "Mana Leech Upgrade I", description: "Double production at level 10", cost: 4.0e+09, type: "buy", target: "Mana Leech", level: 10, multiplier: 2, purchased: false },
  { name: "Mana Leech Upgrade II", description: "Double production at level 25", cost: 2.0e+10, type: "buy", target: "Mana Leech", level: 25, multiplier: 2, purchased: false },
  { name: "Mana Leech Upgrade III", description: "Double production at level 50", cost: 1.0e+11, type: "buy", target: "Mana Leech", level: 50, multiplier: 2, purchased: false },
  { name: "Mana Leech Upgrade IV", description: "Double production at level 100", cost: 4.0e+11, type: "buy", target: "Mana Leech", level: 100, multiplier: 2, purchased: false },

  { name: "Crystal Engine Upgrade I", description: "Double production at level 10", cost: 1.6e+10, type: "buy", target: "Crystal Engine", level: 10, multiplier: 2, purchased: false },
  { name: "Crystal Engine Upgrade II", description: "Double production at level 25", cost: 8.0e+10, type: "buy", target: "Crystal Engine", level: 25, multiplier: 2, purchased: false },
  { name: "Crystal Engine Upgrade III", description: "Double production at level 50", cost: 4.0e+11, type: "buy", target: "Crystal Engine", level: 50, multiplier: 2, purchased: false },
  { name: "Crystal Engine Upgrade IV", description: "Double production at level 100", cost: 1.6e+12, type: "buy", target: "Crystal Engine", level: 100, multiplier: 2, purchased: false },

  { name: "Runic Beacon Upgrade I", description: "Double production at level 10", cost: 6.0e+10, type: "buy", target: "Runic Beacon", level: 10, multiplier: 2, purchased: false },
  { name: "Runic Beacon Upgrade II", description: "Double production at level 25", cost: 3.0e+11, type: "buy", target: "Runic Beacon", level: 25, multiplier: 2, purchased: false },
  { name: "Runic Beacon Upgrade III", description: "Double production at level 50", cost: 1.5e+12, type: "buy", target: "Runic Beacon", level: 50, multiplier: 2, purchased: false },
  { name: "Runic Beacon Upgrade IV", description: "Double production at level 100", cost: 6.0e+12, type: "buy", target: "Runic Beacon", level: 100, multiplier: 2, purchased: false },

  { name: "Spirit Collector Upgrade I", description: "Double production at level 10", cost: 2.4e+11, type: "buy", target: "Spirit Collector", level: 10, multiplier: 2, purchased: false },
  { name: "Spirit Collector Upgrade II", description: "Double production at level 25", cost: 1.2e+12, type: "buy", target: "Spirit Collector", level: 25, multiplier: 2, purchased: false },
  { name: "Spirit Collector Upgrade III", description: "Double production at level 50", cost: 6.0e+12, type: "buy", target: "Spirit Collector", level: 50, multiplier: 2, purchased: false },
  { name: "Spirit Collector Upgrade IV", description: "Double production at level 100", cost: 2.4e+13, type: "buy", target: "Spirit Collector", level: 100, multiplier: 2, purchased: false },

  { name: "Witch's Circle Upgrade I", description: "Double production at level 10", cost: 1.0e+12, type: "buy", target: "Witch's Circle", level: 10, multiplier: 2, purchased: false },
  { name: "Witch's Circle Upgrade II", description: "Double production at level 25", cost: 5.0e+12, type: "buy", target: "Witch's Circle", level: 25, multiplier: 2, purchased: false },
  { name: "Witch's Circle Upgrade III", description: "Double production at level 50", cost: 2.5e+13, type: "buy", target: "Witch's Circle", level: 50, multiplier: 2, purchased: false },
  { name: "Witch's Circle Upgrade IV", description: "Double production at level 100", cost: 1.0e+14, type: "buy", target: "Witch's Circle", level: 100, multiplier: 2, purchased: false },

  { name: "Astral Harvester Upgrade I", description: "Double production at level 10", cost: 4.0e+12, type: "buy", target: "Astral Harvester", level: 10, multiplier: 2, purchased: false },
  { name: "Astral Harvester Upgrade II", description: "Double production at level 25", cost: 2.0e+13, type: "buy", target: "Astral Harvester", level: 25, multiplier: 2, purchased: false },
  { name: "Astral Harvester Upgrade III", description: "Double production at level 50", cost: 1.0e+14, type: "buy", target: "Astral Harvester", level: 50, multiplier: 2, purchased: false },
  { name: "Astral Harvester Upgrade IV", description: "Double production at level 100", cost: 4.0e+14, type: "buy", target: "Astral Harvester", level: 100, multiplier: 2, purchased: false },

  { name: "Sigil Crafter Upgrade I", description: "Double production at level 10", cost: 1.6e+13, type: "buy", target: "Sigil Crafter", level: 10, multiplier: 2, purchased: false },
  { name: "Sigil Crafter Upgrade II", description: "Double production at level 25", cost: 8.0e+13, type: "buy", target: "Sigil Crafter", level: 25, multiplier: 2, purchased: false },
  { name: "Sigil Crafter Upgrade III", description: "Double production at level 50", cost: 4.0e+14, type: "buy", target: "Sigil Crafter", level: 50, multiplier: 2, purchased: false },
  { name: "Sigil Crafter Upgrade IV", description: "Double production at level 100", cost: 1.6e+15, type: "buy", target: "Sigil Crafter", level: 100, multiplier: 2, purchased: false },

  { name: "Mana Tree Upgrade I", description: "Double production at level 10", cost: 6.0e+13, type: "buy", target: "Mana Tree", level: 10, multiplier: 2, purchased: false },
  { name: "Mana Tree Upgrade II", description: "Double production at level 25", cost: 3.0e+14, type: "buy", target: "Mana Tree", level: 25, multiplier: 2, purchased: false },
  { name: "Mana Tree Upgrade III", description: "Double production at level 50", cost: 1.5e+15, type: "buy", target: "Mana Tree", level: 50, multiplier: 2, purchased: false },
  { name: "Mana Tree Upgrade IV", description: "Double production at level 100", cost: 6.0e+15, type: "buy", target: "Mana Tree", level: 100, multiplier: 2, purchased: false },

  { name: "Occult Furnace Upgrade I", description: "Double production at level 10", cost: 2.4e+14, type: "buy", target: "Occult Furnace", level: 10, multiplier: 2, purchased: false },
  { name: "Occult Furnace Upgrade II", description: "Double production at level 25", cost: 1.2e+15, type: "buy", target: "Occult Furnace", level: 25, multiplier: 2, purchased: false },
  { name: "Occult Furnace Upgrade III", description: "Double production at level 50", cost: 6.0e+15, type: "buy", target: "Occult Furnace", level: 50, multiplier: 2, purchased: false },
  { name: "Occult Furnace Upgrade IV", description: "Double production at level 100", cost: 2.4e+16, type: "buy", target: "Occult Furnace", level: 100, multiplier: 2, purchased: false },

  { name: "Phantom Orb Upgrade I", description: "Double production at level 10", cost: 1.0e+15, type: "buy", target: "Phantom Orb", level: 10, multiplier: 2, purchased: false },
  { name: "Phantom Orb Upgrade II", description: "Double production at level 25", cost: 5.0e+15, type: "buy", target: "Phantom Orb", level: 25, multiplier: 2, purchased: false },
  { name: "Phantom Orb Upgrade III", description: "Double production at level 50", cost: 2.5e+16, type: "buy", target: "Phantom Orb", level: 50, multiplier: 2, purchased: false },
  { name: "Phantom Orb Upgrade IV", description: "Double production at level 100", cost: 1.0e+17, type: "buy", target: "Phantom Orb", level: 100, multiplier: 2, purchased: false },

  { name: "Void Harvester Upgrade I", description: "Double production at level 10", cost: 4.0e+15, type: "buy", target: "Void Harvester", level: 10, multiplier: 2, purchased: false },
  { name: "Void Harvester Upgrade II", description: "Double production at level 25", cost: 2.0e+16, type: "buy", target: "Void Harvester", level: 25, multiplier: 2, purchased: false },
  { name: "Void Harvester Upgrade III", description: "Double production at level 50", cost: 1.0e+17, type: "buy", target: "Void Harvester", level: 50, multiplier: 2, purchased: false },
  { name: "Void Harvester Upgrade IV", description: "Double production at level 100", cost: 4.0e+17, type: "buy", target: "Void Harvester", level: 100, multiplier: 2, purchased: false },

  { name: "Ether Pump Upgrade I", description: "Double production at level 10", cost: 1.6e+16, type: "buy", target: "Ether Pump", level: 10, multiplier: 2, purchased: false },
  { name: "Ether Pump Upgrade II", description: "Double production at level 25", cost: 8.0e+16, type: "buy", target: "Ether Pump", level: 25, multiplier: 2, purchased: false },
  { name: "Ether Pump Upgrade III", description: "Double production at level 50", cost: 4.0e+17, type: "buy", target: "Ether Pump", level: 50, multiplier: 2, purchased: false },
  { name: "Ether Pump Upgrade IV", description: "Double production at level 100", cost: 1.6e+18, type: "buy", target: "Ether Pump", level: 100, multiplier: 2, purchased: false },

  { name: "Celestial Obelisk Upgrade I", description: "Double production at level 10", cost: 6.4e+16, type: "buy", target: "Celestial Obelisk", level: 10, multiplier: 2, purchased: false },
  { name: "Celestial Obelisk Upgrade II", description: "Double production at level 25", cost: 3.2e+17, type: "buy", target: "Celestial Obelisk", level: 25, multiplier: 2, purchased: false },
  { name: "Celestial Obelisk Upgrade III", description: "Double production at level 50", cost: 1.6e+18, type: "buy", target: "Celestial Obelisk", level: 50, multiplier: 2, purchased: false },
  { name: "Celestial Obelisk Upgrade IV", description: "Double production at level 100", cost: 6.4e+18, type: "buy", target: "Celestial Obelisk", level: 100, multiplier: 2, purchased: false },

  { name: "Spell Infuser Upgrade I", description: "Double production at level 10", cost: 2.4e+17, type: "buy", target: "Spell Infuser", level: 10, multiplier: 2, purchased: false },
  { name: "Spell Infuser Upgrade II", description: "Double production at level 25", cost: 1.2e+18, type: "buy", target: "Spell Infuser", level: 25, multiplier: 2, purchased: false },
  { name: "Spell Infuser Upgrade III", description: "Double production at level 50", cost: 6.0e+18, type: "buy", target: "Spell Infuser", level: 50, multiplier: 2, purchased: false },
  { name: "Spell Infuser Upgrade IV", description: "Double production at level 100", cost: 2.4e+19, type: "buy", target: "Spell Infuser", level: 100, multiplier: 2, purchased: false },

  { name: "Temporal Distorter Upgrade I", description: "Double production at level 10", cost: 1.0e+18, type: "buy", target: "Temporal Distorter", level: 10, multiplier: 2, purchased: false },
  { name: "Temporal Distorter Upgrade II", description: "Double production at level 25", cost: 5.0e+18, type: "buy", target: "Temporal Distorter", level: 25, multiplier: 2, purchased: false },
  { name: "Temporal Distorter Upgrade III", description: "Double production at level 50", cost: 2.5e+19, type: "buy", target: "Temporal Distorter", level: 50, multiplier: 2, purchased: false },
  { name: "Temporal Distorter Upgrade IV", description: "Double production at level 100", cost: 1.0e+20, type: "buy", target: "Temporal Distorter", level: 100, multiplier: 2, purchased: false },

  { name: "Mana Nexus Upgrade I", description: "Double production at level 10", cost: 4.0e+18, type: "buy", target: "Mana Nexus", level: 10, multiplier: 2, purchased: false },
  { name: "Mana Nexus Upgrade II", description: "Double production at level 25", cost: 2.0e+19, type: "buy", target: "Mana Nexus", level: 25, multiplier: 2, purchased: false },
  { name: "Mana Nexus Upgrade III", description: "Double production at level 50", cost: 1.0e+20, type: "buy", target: "Mana Nexus", level: 50, multiplier: 2, purchased: false },
  { name: "Mana Nexus Upgrade IV", description: "Double production at level 100", cost: 4.0e+20, type: "buy", target: "Mana Nexus", level: 100, multiplier: 2, purchased: false },

  { name: "Arcane Drill Upgrade I", description: "Double production at level 10", cost: 1.6e+19, type: "buy", target: "Arcane Drill", level: 10, multiplier: 2, purchased: false },
  { name: "Arcane Drill Upgrade II", description: "Double production at level 25", cost: 8.0e+19, type: "buy", target: "Arcane Drill", level: 25, multiplier: 2, purchased: false },
  { name: "Arcane Drill Upgrade III", description: "Double production at level 50", cost: 4.0e+20, type: "buy", target: "Arcane Drill", level: 50, multiplier: 2, purchased: false },
  { name: "Arcane Drill Upgrade IV", description: "Double production at level 100", cost: 1.6e+21, type: "buy", target: "Arcane Drill", level: 100, multiplier: 2, purchased: false },

  { name: "Binding Altar Upgrade I", description: "Double production at level 10", cost: 6.4e+19, type: "buy", target: "Binding Altar", level: 10, multiplier: 2, purchased: false },
  { name: "Binding Altar Upgrade II", description: "Double production at level 25", cost: 3.2e+20, type: "buy", target: "Binding Altar", level: 25, multiplier: 2, purchased: false },
  { name: "Binding Altar Upgrade III", description: "Double production at level 50", cost: 1.6e+21, type: "buy", target: "Binding Altar", level: 50, multiplier: 2, purchased: false },
  { name: "Binding Altar Upgrade IV", description: "Double production at level 100", cost: 6.4e+21, type: "buy", target: "Binding Altar", level: 100, multiplier: 2, purchased: false },

  { name: "Mythic Extractor Upgrade I", description: "Double production at level 10", cost: 2.6e+20, type: "buy", target: "Mythic Extractor", level: 10, multiplier: 2, purchased: false },
  { name: "Mythic Extractor Upgrade II", description: "Double production at level 25", cost: 1.3e+21, type: "buy", target: "Mythic Extractor", level: 25, multiplier: 2, purchased: false },
  { name: "Mythic Extractor Upgrade III", description: "Double production at level 50", cost: 6.4e+21, type: "buy", target: "Mythic Extractor", level: 50, multiplier: 2, purchased: false },
  { name: "Mythic Extractor Upgrade IV", description: "Double production at level 100", cost: 2.6e+22, type: "buy", target: "Mythic Extractor", level: 100, multiplier: 2, purchased: false },

  { name: "Runestone Obelisk Upgrade I", description: "Double production at level 10", cost: 1.0e+21, type: "buy", target: "Runestone Obelisk", level: 10, multiplier: 2, purchased: false },
  { name: "Runestone Obelisk Upgrade II", description: "Double production at level 25", cost: 5.1e+21, type: "buy", target: "Runestone Obelisk", level: 25, multiplier: 2, purchased: false },
  { name: "Runestone Obelisk Upgrade III", description: "Double production at level 50", cost: 2.6e+22, type: "buy", target: "Runestone Obelisk", level: 50, multiplier: 2, purchased: false },
  { name: "Runestone Obelisk Upgrade IV", description: "Double production at level 100", cost: 1.0e+23, type: "buy", target: "Runestone Obelisk", level: 100, multiplier: 2, purchased: false },

  { name: "Astral Prism Upgrade I", description: "Double production at level 10", cost: 4.1e+21, type: "buy", target: "Astral Prism", level: 10, multiplier: 2, purchased: false },
  { name: "Astral Prism Upgrade II", description: "Double production at level 25", cost: 2.0e+22, type: "buy", target: "Astral Prism", level: 25, multiplier: 2, purchased: false },
  { name: "Astral Prism Upgrade III", description: "Double production at level 50", cost: 1.0e+23, type: "buy", target: "Astral Prism", level: 50, multiplier: 2, purchased: false },
  { name: "Astral Prism Upgrade IV", description: "Double production at level 100", cost: 4.1e+23, type: "buy", target: "Astral Prism", level: 100, multiplier: 2, purchased: false },

  { name: "Quantum Cauldron Upgrade I", description: "Double production at level 10", cost: 1.6e+22, type: "buy", target: "Quantum Cauldron", level: 10, multiplier: 2, purchased: false },
  { name: "Quantum Cauldron Upgrade II", description: "Double production at level 25", cost: 8.2e+22, type: "buy", target: "Quantum Cauldron", level: 25, multiplier: 2, purchased: false },
  { name: "Quantum Cauldron Upgrade III", description: "Double production at level 50", cost: 4.1e+23, type: "buy", target: "Quantum Cauldron", level: 50, multiplier: 2, purchased: false },
  { name: "Quantum Cauldron Upgrade IV", description: "Double production at level 100", cost: 1.6e+24, type: "buy", target: "Quantum Cauldron", level: 100, multiplier: 2, purchased: false },

  { name: "Infinite Scroll Upgrade I", description: "Double production at level 10", cost: 6.5e+22, type: "buy", target: "Infinite Scroll", level: 10, multiplier: 2, purchased: false },
  { name: "Infinite Scroll Upgrade II", description: "Double production at level 25", cost: 3.2e+23, type: "buy", target: "Infinite Scroll", level: 25, multiplier: 2, purchased: false },
  { name: "Infinite Scroll Upgrade III", description: "Double production at level 50", cost: 1.6e+24, type: "buy", target: "Infinite Scroll", level: 50, multiplier: 2, purchased: false },
  { name: "Infinite Scroll Upgrade IV", description: "Double production at level 100", cost: 6.5e+24, type: "buy", target: "Infinite Scroll", level: 100, multiplier: 2, purchased: false },

  { name: "Leyline Anchor Upgrade I", description: "Double production at level 10", cost: 2.6e+23, type: "buy", target: "Leyline Anchor", level: 10, multiplier: 2, purchased: false },
  { name: "Leyline Anchor Upgrade II", description: "Double production at level 25", cost: 1.3e+24, type: "buy", target: "Leyline Anchor", level: 25, multiplier: 2, purchased: false },
  { name: "Leyline Anchor Upgrade III", description: "Double production at level 50", cost: 6.5e+24, type: "buy", target: "Leyline Anchor", level: 50, multiplier: 2, purchased: false },
  { name: "Leyline Anchor Upgrade IV", description: "Double production at level 100", cost: 2.6e+25, type: "buy", target: "Leyline Anchor", level: 100, multiplier: 2, purchased: false },

  { name: "Spell Matrix Upgrade I", description: "Double production at level 10", cost: 1.1e+24, type: "buy", target: "Spell Matrix", level: 10, multiplier: 2, purchased: false },
  { name: "Spell Matrix Upgrade II", description: "Double production at level 25", cost: 5.2e+24, type: "buy", target: "Spell Matrix", level: 25, multiplier: 2, purchased: false },
  { name: "Spell Matrix Upgrade III", description: "Double production at level 50", cost: 2.6e+25, type: "buy", target: "Spell Matrix", level: 50, multiplier: 2, purchased: false },
  { name: "Spell Matrix Upgrade IV", description: "Double production at level 100", cost: 1.1e+26, type: "buy", target: "Spell Matrix", level: 100, multiplier: 2, purchased: false },

  { name: "Celestial Loom Upgrade I", description: "Double production at level 10", cost: 4.2e+24, type: "buy", target: "Celestial Loom", level: 10, multiplier: 2, purchased: false },
  { name: "Celestial Loom Upgrade II", description: "Double production at level 25", cost: 2.1e+25, type: "buy", target: "Celestial Loom", level: 25, multiplier: 2, purchased: false },
  { name: "Celestial Loom Upgrade III", description: "Double production at level 50", cost: 1.1e+26, type: "buy", target: "Celestial Loom", level: 50, multiplier: 2, purchased: false },
  { name: "Celestial Loom Upgrade IV", description: "Double production at level 100", cost: 4.2e+26, type: "buy", target: "Celestial Loom", level: 100, multiplier: 2, purchased: false },

  { name: "Mind Fracturer Upgrade I", description: "Double production at level 10", cost: 1.7e+25, type: "buy", target: "Mind Fracturer", level: 10, multiplier: 2, purchased: false },
  { name: "Mind Fracturer Upgrade II", description: "Double production at level 25", cost: 8.4e+25, type: "buy", target: "Mind Fracturer", level: 25, multiplier: 2, purchased: false },
  { name: "Mind Fracturer Upgrade III", description: "Double production at level 50", cost: 4.2e+26, type: "buy", target: "Mind Fracturer", level: 50, multiplier: 2, purchased: false },
  { name: "Mind Fracturer Upgrade IV", description: "Double production at level 100", cost: 1.7e+27, type: "buy", target: "Mind Fracturer", level: 100, multiplier: 2, purchased: false },

  { name: "Mana Mirror Upgrade I", description: "Double production at level 10", cost: 6.7e+25, type: "buy", target: "Mana Mirror", level: 10, multiplier: 2, purchased: false },
  { name: "Mana Mirror Upgrade II", description: "Double production at level 25", cost: 3.4e+26, type: "buy", target: "Mana Mirror", level: 25, multiplier: 2, purchased: false },
  { name: "Mana Mirror Upgrade III", description: "Double production at level 50", cost: 1.7e+27, type: "buy", target: "Mana Mirror", level: 50, multiplier: 2, purchased: false },
  { name: "Mana Mirror Upgrade IV", description: "Double production at level 100", cost: 6.7e+27, type: "buy", target: "Mana Mirror", level: 100, multiplier: 2, purchased: false },

  { name: "Chrono Engine Upgrade I", description: "Double production at level 10", cost: 2.7e+26, type: "buy", target: "Chrono Engine", level: 10, multiplier: 2, purchased: false },
  { name: "Chrono Engine Upgrade II", description: "Double production at level 25", cost: 1.3e+27, type: "buy", target: "Chrono Engine", level: 25, multiplier: 2, purchased: false },
  { name: "Chrono Engine Upgrade III", description: "Double production at level 50", cost: 6.8e+27, type: "buy", target: "Chrono Engine", level: 50, multiplier: 2, purchased: false },
  { name: "Chrono Engine Upgrade IV", description: "Double production at level 100", cost: 2.7e+28, type: "buy", target: "Chrono Engine", level: 100, multiplier: 2, purchased: false },

  { name: "Eldritch Core Upgrade I", description: "Double production at level 10", cost: 1.1e+27, type: "buy", target: "Eldritch Core", level: 10, multiplier: 2, purchased: false },
  { name: "Eldritch Core Upgrade II", description: "Double production at level 25", cost: 5.5e+27, type: "buy", target: "Eldritch Core", level: 25, multiplier: 2, purchased: false },
  { name: "Eldritch Core Upgrade III", description: "Double production at level 50", cost: 2.7e+28, type: "buy", target: "Eldritch Core", level: 50, multiplier: 2, purchased: false },
  { name: "Eldritch Core Upgrade IV", description: "Double production at level 100", cost: 1.1e+29, type: "buy", target: "Eldritch Core", level: 100, multiplier: 2, purchased: false },

  { name: "Runic Reactor Upgrade I", description: "Double production at level 10", cost: 4.4e+27, type: "buy", target: "Runic Reactor", level: 10, multiplier: 2, purchased: false },
  { name: "Runic Reactor Upgrade II", description: "Double production at level 25", cost: 2.2e+28, type: "buy", target: "Runic Reactor", level: 25, multiplier: 2, purchased: false },
  { name: "Runic Reactor Upgrade III", description: "Double production at level 50", cost: 1.1e+29, type: "buy", target: "Runic Reactor", level: 50, multiplier: 2, purchased: false },
  { name: "Runic Reactor Upgrade IV", description: "Double production at level 100", cost: 4.4e+29, type: "buy", target: "Runic Reactor", level: 100, multiplier: 2, purchased: false },

  { name: "Void Loom Upgrade I", description: "Double production at level 10", cost: 1.8e+28, type: "buy", target: "Void Loom", level: 10, multiplier: 2, purchased: false },
  { name: "Void Loom Upgrade II", description: "Double production at level 25", cost: 8.8e+28, type: "buy", target: "Void Loom", level: 25, multiplier: 2, purchased: false },
  { name: "Void Loom Upgrade III", description: "Double production at level 50", cost: 4.4e+29, type: "buy", target: "Void Loom", level: 50, multiplier: 2, purchased: false },
  { name: "Void Loom Upgrade IV", description: "Double production at level 100", cost: 1.8e+30, type: "buy", target: "Void Loom", level: 100, multiplier: 2, purchased: false },

  { name: "Spirit Cycler Upgrade I", description: "Double production at level 10", cost: 7.0e+28, type: "buy", target: "Spirit Cycler", level: 10, multiplier: 2, purchased: false },
  { name: "Spirit Cycler Upgrade II", description: "Double production at level 25", cost: 3.5e+29, type: "buy", target: "Spirit Cycler", level: 25, multiplier: 2, purchased: false },
  { name: "Spirit Cycler Upgrade III", description: "Double production at level 50", cost: 1.8e+30, type: "buy", target: "Spirit Cycler", level: 50, multiplier: 2, purchased: false },
  { name: "Spirit Cycler Upgrade IV", description: "Double production at level 100", cost: 7.0e+30, type: "buy", target: "Spirit Cycler", level: 100, multiplier: 2, purchased: false },

  { name: "Ether Cascade Upgrade I", description: "Double production at level 10", cost: 2.8e+29, type: "buy", target: "Ether Cascade", level: 10, multiplier: 2, purchased: false },
  { name: "Ether Cascade Upgrade II", description: "Double production at level 25", cost: 1.4e+30, type: "buy", target: "Ether Cascade", level: 25, multiplier: 2, purchased: false },
  { name: "Ether Cascade Upgrade III", description: "Double production at level 50", cost: 7.0e+30, type: "buy", target: "Ether Cascade", level: 50, multiplier: 2, purchased: false },
  { name: "Ether Cascade Upgrade IV", description: "Double production at level 100", cost: 2.8e+31, type: "buy", target: "Ether Cascade", level: 100, multiplier: 2, purchased: false },

  { name: "Nexus Rift Upgrade I", description: "Double production at level 10", cost: 1.1e+30, type: "buy", target: "Nexus Rift", level: 10, multiplier: 2, purchased: false },
  { name: "Nexus Rift Upgrade II", description: "Double production at level 25", cost: 5.6e+30, type: "buy", target: "Nexus Rift", level: 25, multiplier: 2, purchased: false },
  { name: "Nexus Rift Upgrade III", description: "Double production at level 50", cost: 2.8e+31, type: "buy", target: "Nexus Rift", level: 50, multiplier: 2, purchased: false },
  { name: "Nexus Rift Upgrade IV", description: "Double production at level 100", cost: 1.1e+32, type: "buy", target: "Nexus Rift", level: 100, multiplier: 2, purchased: false },

  { name: "Astral Bloom Upgrade I", description: "Double production at level 10", cost: 4.5e+30, type: "buy", target: "Astral Bloom", level: 10, multiplier: 2, purchased: false },
  { name: "Astral Bloom Upgrade II", description: "Double production at level 25", cost: 2.2e+31, type: "buy", target: "Astral Bloom", level: 25, multiplier: 2, purchased: false },
  { name: "Astral Bloom Upgrade III", description: "Double production at level 50", cost: 1.1e+32, type: "buy", target: "Astral Bloom", level: 50, multiplier: 2, purchased: false },
  { name: "Astral Bloom Upgrade IV", description: "Double production at level 100", cost: 4.5e+32, type: "buy", target: "Astral Bloom", level: 100, multiplier: 2, purchased: false },

  { name: "Arcane Circuit Upgrade I", description: "Double production at level 10", cost: 1.8e+31, type: "buy", target: "Arcane Circuit", level: 10, multiplier: 2, purchased: false },
  { name: "Arcane Circuit Upgrade II", description: "Double production at level 25", cost: 9.0e+31, type: "buy", target: "Arcane Circuit", level: 25, multiplier: 2, purchased: false },
  { name: "Arcane Circuit Upgrade III", description: "Double production at level 50", cost: 4.5e+32, type: "buy", target: "Arcane Circuit", level: 50, multiplier: 2, purchased: false },
  { name: "Arcane Circuit Upgrade IV", description: "Double production at level 100", cost: 1.8e+33, type: "buy", target: "Arcane Circuit", level: 100, multiplier: 2, purchased: false },

  { name: "Sigil Forge Upgrade I", description: "Double production at level 10", cost: 7.2e+31, type: "buy", target: "Sigil Forge", level: 10, multiplier: 2, purchased: false },
  { name: "Sigil Forge Upgrade II", description: "Double production at level 25", cost: 3.6e+32, type: "buy", target: "Sigil Forge", level: 25, multiplier: 2, purchased: false },
  { name: "Sigil Forge Upgrade III", description: "Double production at level 50", cost: 1.8e+33, type: "buy", target: "Sigil Forge", level: 50, multiplier: 2, purchased: false },
  { name: "Sigil Forge Upgrade IV", description: "Double production at level 100", cost: 7.2e+33, type: "buy", target: "Sigil Forge", level: 100, multiplier: 2, purchased: false },

  { name: "Mystic Crucible Upgrade I", description: "Double production at level 10", cost: 2.9e+32, type: "buy", target: "Mystic Crucible", level: 10, multiplier: 2, purchased: false },
  { name: "Mystic Crucible Upgrade II", description: "Double production at level 25", cost: 1.5e+33, type: "buy", target: "Mystic Crucible", level: 25, multiplier: 2, purchased: false },
  { name: "Mystic Crucible Upgrade III", description: "Double production at level 50", cost: 7.3e+33, type: "buy", target: "Mystic Crucible", level: 50, multiplier: 2, purchased: false },
  { name: "Mystic Crucible Upgrade IV", description: "Double production at level 100", cost: 2.9e+34, type: "buy", target: "Mystic Crucible", level: 100, multiplier: 2, purchased: false },

  { name: "Dream Infuser Upgrade I", description: "Double production at level 10", cost: 1.2e+33, type: "buy", target: "Dream Infuser", level: 10, multiplier: 2, purchased: false },
  { name: "Dream Infuser Upgrade II", description: "Double production at level 25", cost: 5.8e+33, type: "buy", target: "Dream Infuser", level: 25, multiplier: 2, purchased: false },
  { name: "Dream Infuser Upgrade III", description: "Double production at level 50", cost: 2.9e+34, type: "buy", target: "Dream Infuser", level: 50, multiplier: 2, purchased: false },
  { name: "Dream Infuser Upgrade IV", description: "Double production at level 100", cost: 1.2e+35, type: "buy", target: "Dream Infuser", level: 100, multiplier: 2, purchased: false },

  { name: "Runestone Nexus Upgrade I", description: "Double production at level 10", cost: 4.6e+33, type: "buy", target: "Runestone Nexus", level: 10, multiplier: 2, purchased: false },
  { name: "Runestone Nexus Upgrade II", description: "Double production at level 25", cost: 2.3e+34, type: "buy", target: "Runestone Nexus", level: 25, multiplier: 2, purchased: false },
  { name: "Runestone Nexus Upgrade III", description: "Double production at level 50", cost: 1.2e+35, type: "buy", target: "Runestone Nexus", level: 50, multiplier: 2, purchased: false },
  { name: "Runestone Nexus Upgrade IV", description: "Double production at level 100", cost: 4.6e+35, type: "buy", target: "Runestone Nexus", level: 100, multiplier: 2, purchased: false },

  { name: "Stellar Engine Upgrade I", description: "Double production at level 10", cost: 1.9e+34, type: "buy", target: "Stellar Engine", level: 10, multiplier: 2, purchased: false },
  { name: "Stellar Engine Upgrade II", description: "Double production at level 25", cost: 9.2e+34, type: "buy", target: "Stellar Engine", level: 25, multiplier: 2, purchased: false },
  { name: "Stellar Engine Upgrade III", description: "Double production at level 50", cost: 4.6e+35, type: "buy", target: "Stellar Engine", level: 50, multiplier: 2, purchased: false },
  { name: "Stellar Engine Upgrade IV", description: "Double production at level 100", cost: 1.9e+36, type: "buy", target: "Stellar Engine", level: 100, multiplier: 2, purchased: false },

  { name: "Ethereal Crucible Upgrade I", description: "Double production at level 10", cost: 7.4e+34, type: "buy", target: "Ethereal Crucible", level: 10, multiplier: 2, purchased: false },
  { name: "Ethereal Crucible Upgrade II", description: "Double production at level 25", cost: 3.7e+35, type: "buy", target: "Ethereal Crucible", level: 25, multiplier: 2, purchased: false },
  { name: "Ethereal Crucible Upgrade III", description: "Double production at level 50", cost: 1.9e+36, type: "buy", target: "Ethereal Crucible", level: 50, multiplier: 2, purchased: false },
  { name: "Ethereal Crucible Upgrade IV", description: "Double production at level 100", cost: 7.4e+36, type: "buy", target: "Ethereal Crucible", level: 100, multiplier: 2, purchased: false },

  { name: "Arcane Riftwell Upgrade I", description: "Double production at level 10", cost: 3.0e+35, type: "buy", target: "Arcane Riftwell", level: 10, multiplier: 2, purchased: false },
  { name: "Arcane Riftwell Upgrade II", description: "Double production at level 25", cost: 1.5e+36, type: "buy", target: "Arcane Riftwell", level: 25, multiplier: 2, purchased: false },
  { name: "Arcane Riftwell Upgrade III", description: "Double production at level 50", cost: 7.5e+36, type: "buy", target: "Arcane Riftwell", level: 50, multiplier: 2, purchased: false },
  { name: "Arcane Riftwell Upgrade IV", description: "Double production at level 100", cost: 3.0e+37, type: "buy", target: "Arcane Riftwell", level: 100, multiplier: 2, purchased: false },

  { name: "Phantom Engine Upgrade I", description: "Double production at level 10", cost: 1.2e+36, type: "buy", target: "Phantom Engine", level: 10, multiplier: 2, purchased: false },
  { name: "Phantom Engine Upgrade II", description: "Double production at level 25", cost: 6.0e+36, type: "buy", target: "Phantom Engine", level: 25, multiplier: 2, purchased: false },
  { name: "Phantom Engine Upgrade III", description: "Double production at level 50", cost: 3.0e+37, type: "buy", target: "Phantom Engine", level: 50, multiplier: 2, purchased: false },
  { name: "Phantom Engine Upgrade IV", description: "Double production at level 100", cost: 1.2e+38, type: "buy", target: "Phantom Engine", level: 100, multiplier: 2, purchased: false },

  { name: "Twilight Node Upgrade I", description: "Double production at level 10", cost: 4.8e+36, type: "buy", target: "Twilight Node", level: 10, multiplier: 2, purchased: false },
  { name: "Twilight Node Upgrade II", description: "Double production at level 25", cost: 2.4e+37, type: "buy", target: "Twilight Node", level: 25, multiplier: 2, purchased: false },
  { name: "Twilight Node Upgrade III", description: "Double production at level 50", cost: 1.2e+38, type: "buy", target: "Twilight Node", level: 50, multiplier: 2, purchased: false },
  { name: "Twilight Node Upgrade IV", description: "Double production at level 100", cost: 4.8e+38, type: "buy", target: "Twilight Node", level: 100, multiplier: 2, purchased: false },

  { name: "Moonwell Upgrade I", description: "Double production at level 10", cost: 1.9e+37, type: "buy", target: "Moonwell", level: 10, multiplier: 2, purchased: false },
  { name: "Moonwell Upgrade II", description: "Double production at level 25", cost: 9.5e+37, type: "buy", target: "Moonwell", level: 25, multiplier: 2, purchased: false },
  { name: "Moonwell Upgrade III", description: "Double production at level 50", cost: 4.7e+38, type: "buy", target: "Moonwell", level: 50, multiplier: 2, purchased: false },
  { name: "Moonwell Upgrade IV", description: "Double production at level 100", cost: 1.9e+39, type: "buy", target: "Moonwell", level: 100, multiplier: 2, purchased: false },

  { name: "Cosmic Core Upgrade I", description: "Double production at level 10", cost: 7.7e+37, type: "buy", target: "Cosmic Core", level: 10, multiplier: 2, purchased: false },
  { name: "Cosmic Core Upgrade II", description: "Double production at level 25", cost: 3.9e+38, type: "buy", target: "Cosmic Core", level: 25, multiplier: 2, purchased: false },
  { name: "Cosmic Core Upgrade III", description: "Double production at level 50", cost: 1.9e+39, type: "buy", target: "Cosmic Core", level: 50, multiplier: 2, purchased: false },
  { name: "Cosmic Core Upgrade IV", description: "Double production at level 100", cost: 7.7e+39, type: "buy", target: "Cosmic Core", level: 100, multiplier: 2, purchased: false },

  { name: "Mana Ascender Upgrade I", description: "Double production at level 10", cost: 3.1e+38, type: "buy", target: "Mana Ascender", level: 10, multiplier: 2, purchased: false },
  { name: "Mana Ascender Upgrade II", description: "Double production at level 25", cost: 1.6e+39, type: "buy", target: "Mana Ascender", level: 25, multiplier: 2, purchased: false },
  { name: "Mana Ascender Upgrade III", description: "Double production at level 50", cost: 7.8e+39, type: "buy", target: "Mana Ascender", level: 50, multiplier: 2, purchased: false },
  { name: "Mana Ascender Upgrade IV", description: "Double production at level 100", cost: 3.1e+40, type: "buy", target: "Mana Ascender", level: 100, multiplier: 2, purchased: false },
]
