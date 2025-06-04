import { Component, OnInit } from '@angular/core';
import {DecimalPipe, NgClass} from '@angular/common';
import {MANA_PER_CLICK, START_WITH_MANA} from '../../core/constants/game.constants';
import {LOCAL_STORAGE_MANA_GAME} from '../../core/constants/localStorage.constants';

interface Buyable {
  name: string;
  baseCost: number;
  cost: number;
  mps: number;
  count: number;
  type: 'gen' | 'click';
  clickBoost?: number;
}

interface Upgrade {
  name: string;
  description: string;
  cost: number;
  type: 'click' | 'gen';
  target?: string;
  multiplier: number;
  purchased: boolean;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit {
  mana = START_WITH_MANA;
  manaPerClick = MANA_PER_CLICK;
  recentClicks: number[] = [];
  log: string[] = [];

  showValue = false;
  floatX = 0;
  floatY = 0;


  buyables: Buyable[] = [
    { name: "Apprentice", baseCost: 15, cost: 15, mps: 0.2, count: 0, type: "gen" },
    { name: "Mage", baseCost: 50, cost: 50, mps: 1, count: 0, type: "gen" },
    { name: "Enchanter", baseCost: 150, cost: 150, mps: 5, count: 0, type: "gen" },
    { name: "Spell Factory", baseCost: 500, cost: 500, mps: 20, count: 0, type: "gen" },
    { name: "Arcane Golem", baseCost: 2500, cost: 2500, mps: 100, count: 0, type: "gen" },
    { name: "Ethereal Core", baseCost: 15000, cost: 15000, mps: 500, count: 0, type: "gen" },
    { name: "Chrono Wizard", baseCost: 90000, cost: 90000, mps: 2500, count: 0, type: "gen" },
    { name: "Runestone Forge", baseCost: 500000, cost: 500000, mps: 10000, count: 0, type: "gen" },
    { name: "Arcane Rift", baseCost: 2500000, cost: 2500000, mps: 50000, count: 0, type: "gen" },
    { name: "Mana Reactor", baseCost: 1e7, cost: 1e7, mps: 200000, count: 0, type: "gen" },
    { name: "Arcane Bloom", baseCost: 5e7, cost: 5e7, mps: 400000, count: 0, type: "gen" },
    { name: "Mana Leech", baseCost: 2e8, cost: 2e8, mps: 800000, count: 0, type: "gen" },
    { name: "Crystal Engine", baseCost: 8e8, cost: 8e8, mps: 1.6e6, count: 0, type: "gen" },
    { name: "Runic Beacon", baseCost: 3e9, cost: 3e9, mps: 3.2e6, count: 0, type: "gen" },
    { name: "Spirit Collector", baseCost: 1.2e10, cost: 1.2e10, mps: 6.4e6, count: 0, type: "gen" },
    { name: "Witch's Circle", baseCost: 5e10, cost: 5e10, mps: 1.28e7, count: 0, type: "gen" },
    { name: "Astral Harvester", baseCost: 2e11, cost: 2e11, mps: 2.56e7, count: 0, type: "gen" },
    { name: "Sigil Crafter", baseCost: 8e11, cost: 8e11, mps: 5.12e7, count: 0, type: "gen" },
    { name: "Mana Tree", baseCost: 3e12, cost: 3e12, mps: 1.02e8, count: 0, type: "gen" },
    { name: "Occult Furnace", baseCost: 1.2e13, cost: 1.2e13, mps: 2.04e8, count: 0, type: "gen" },
    { name: "Phantom Orb", baseCost: 5e13, cost: 5e13, mps: 4.09e8, count: 0, type: "gen" },
    { name: "Void Harvester", baseCost: 2e14, cost: 2e14, mps: 8.19e8, count: 0, type: "gen" },
    { name: "Ether Pump", baseCost: 8e14, cost: 8e14, mps: 1.63e9, count: 0, type: "gen" },
    { name: "Celestial Obelisk", baseCost: 3.2e15, cost: 3.2e15, mps: 3.27e9, count: 0, type: "gen" },
    { name: "Spell Infuser", baseCost: 1.2e16, cost: 1.2e16, mps: 6.55e9, count: 0, type: "gen" },
    { name: "Temporal Distorter", baseCost: 5e16, cost: 5e16, mps: 1.31e10, count: 0, type: "gen" },
    { name: "Mana Nexus", baseCost: 2e17, cost: 2e17, mps: 2.62e10, count: 0, type: "gen" },
    { name: "Arcane Drill", baseCost: 8e17, cost: 8e17, mps: 5.24e10, count: 0, type: "gen" },
    { name: "Binding Altar", baseCost: 3.2e18, cost: 3.2e18, mps: 1.04e11, count: 0, type: "gen" },
    { name: "Mythic Extractor", baseCost: 1.28e19, cost: 1.28e19, mps: 2.09e11, count: 0, type: "gen" },
  ];

  upgrades: Upgrade[] = [
    { name: "Click Upgrade I", description: "Double le pouvoir de clic", cost: 100, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade II", description: "Double le pouvoir de clic", cost: 500, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade III", description: "Double le pouvoir de clic", cost: 5000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade IV", description: "Double le pouvoir de clic", cost: 25000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade V", description: "Double le pouvoir de clic", cost: 100000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade VI", description: "Double le pouvoir de clic", cost: 500000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade VII", description: "Double le pouvoir de clic", cost: 1500000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade VIII", description: "Double le pouvoir de clic", cost: 5000000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade IX", description: "Double le pouvoir de clic", cost: 15000000, type: "click", multiplier: 2, purchased: false },
    { name: "Click Upgrade X", description: "Double le pouvoir de clic", cost: 50000000, type: "click", multiplier: 2, purchased: false },
    { name: "Apprentice Upgrade", description: "Double la production d'Apprentice", cost: 500, type: "gen", target: "Apprentice", multiplier: 2, purchased: false },
    { name: "Mage Upgrade", description: "Double la production de Mage", cost: 2000, type: "gen", target: "Mage", multiplier: 2, purchased: false },
    { name: "Enchanter Upgrade", description: "Double la production d'Enchanter", cost: 5000, type: "gen", target: "Enchanter", multiplier: 2, purchased: false },
    { name: "Spell Factory Upgrade", description: "Double la production de Spell Factory", cost: 10000, type: "gen", target: "Spell Factory", multiplier: 2, purchased: false },
    { name: "Arcane Golem Upgrade", description: "Double la production d'Arcane Golem", cost: 20000, type: "gen", target: "Arcane Golem", multiplier: 2, purchased: false },
    { name: "Ethereal Core Upgrade", description: "Double la production d'Ethereal Core", cost: 40000, type: "gen", target: "Ethereal Core", multiplier: 2, purchased: false },
    { name: "Chrono Wizard Upgrade", description: "Double la production de Chrono Wizard", cost: 60000, type: "gen", target: "Chrono Wizard", multiplier: 2, purchased: false },
    { name: "Runestone Forge Upgrade", description: "Double la production de Runestone Forge", cost: 90000, type: "gen", target: "Runestone Forge", multiplier: 2, purchased: false },
    { name: "Arcane Rift Upgrade", description: "Double la production d'Arcane Rift", cost: 135000, type: "gen", target: "Arcane Rift", multiplier: 2, purchased: false },
    { name: "Mana Reactor Upgrade", description: "Double la production de Mana Reactor", cost: 210000, type: "gen", target: "Mana Reactor", multiplier: 2, purchased: false },
    { name: "Arcane Bloom Upgrade", description: "Double la production d'Arcane Bloom", cost: 300000, type: "gen", target: "Arcane Bloom", multiplier: 2, purchased: false },
    { name: "Mana Leech Upgrade", description: "Double la production de Mana Leech", cost: 480000, type: "gen", target: "Mana Leech", multiplier: 2, purchased: false },
    { name: "Crystal Engine Upgrade", description: "Double la production de Crystal Engine", cost: 720000, type: "gen", target: "Crystal Engine", multiplier: 2, purchased: false },
    { name: "Runic Beacon Upgrade", description: "Double la production de Runic Beacon", cost: 1200000, type: "gen", target: "Runic Beacon", multiplier: 2, purchased: false },
    { name: "Spirit Collector Upgrade", description: "Double la production de Spirit Collector", cost: 1800000, type: "gen", target: "Spirit Collector", multiplier: 2, purchased: false },
    { name: "Witch's Circle Upgrade", description: "Double la production de Witch's Circle", cost: 3000000, type: "gen", target: "Witch's Circle", multiplier: 2, purchased: false },
    { name: "Astral Harvester Upgrade", description: "Double la production d'Astral Harvester", cost: 4500000, type: "gen", target: "Astral Harvester", multiplier: 2, purchased: false },
    { name: "Sigil Crafter Upgrade", description: "Double la production de Sigil Crafter", cost: 6600000, type: "gen", target: "Sigil Crafter", multiplier: 2, purchased: false },
    { name: "Mana Tree Upgrade", description: "Double la production de Mana Tree", cost: 10800000, type: "gen", target: "Mana Tree", multiplier: 2, purchased: false },
    { name: "Occult Furnace Upgrade", description: "Double la production de Occult Furnace", cost: 18000000, type: "gen", target: "Occult Furnace", multiplier: 2, purchased: false },
    { name: "Phantom Orb Upgrade", description: "Double la production de Phantom Orb", cost: 27000000, type: "gen", target: "Phantom Orb", multiplier: 2, purchased: false },
    { name: "Void Harvester Upgrade", description: "Double la production de Void Harvester", cost: 42000000, type: "gen", target: "Void Harvester", multiplier: 2, purchased: false },
    { name: "Ether Pump Upgrade", description: "Double la production de Ether Pump", cost: 66000000, type: "gen", target: "Ether Pump", multiplier: 2, purchased: false },
    { name: "Celestial Obelisk Upgrade", description: "Double la production de Celestial Obelisk", cost: 96000000, type: "gen", target: "Celestial Obelisk", multiplier: 2, purchased: false },
    { name: "Spell Infuser Upgrade", description: "Double la production de Spell Infuser", cost: 150000000, type: "gen", target: "Spell Infuser", multiplier: 2, purchased: false },
    { name: "Temporal Distorter Upgrade", description: "Double la production de Temporal Distorter", cost: 240000000, type: "gen", target: "Temporal Distorter", multiplier: 2, purchased: false },
    { name: "Mana Nexus Upgrade", description: "Double la production de Mana Nexus", cost: 360000000, type: "gen", target: "Mana Nexus", multiplier: 2, purchased: false },
    { name: "Arcane Drill Upgrade", description: "Double la production de Arcane Drill", cost: 540000000, type: "gen", target: "Arcane Drill", multiplier: 2, purchased: false },
    { name: "Binding Altar Upgrade", description: "Double la production de Binding Altar", cost: 720000000, type: "gen", target: "Binding Altar", multiplier: 2, purchased: false },
    { name: "Mythic Extractor Upgrade", description: "Double la production de Mythic Extractor", cost: 1050000000, type: "gen", target: "Mythic Extractor", multiplier: 2, purchased: false }
  ];

  get visibleBuyables(): Buyable[] {
    return this.buyables.filter((_, index, array) => {
      if (index === 0) return true;
      const previous = array[index - 1];
      return previous.count > 0;
    });
  }

  buyUpgrade(upg: Upgrade): void {
    if (this.mana >= upg.cost && !upg.purchased) {
      this.mana -= upg.cost;
      upg.purchased = true;
      this.log.unshift(`[${new Date().toLocaleTimeString()}] ✅ ${upg.name} acheté !`);
      if (this.log.length > 100) this.log.pop();

      if (upg.type === 'click') {
        this.manaPerClick *= upg.multiplier;
      } else if (upg.type === 'gen' && upg.target) {
        const target = this.buyables.find(g => g.name === upg.target);
        if (target) target.mps *= upg.multiplier;
      }
    }
  }


  get totalMPS(): number {
    return this.buyables.reduce((total, gen) => total + (gen.mps * gen.count), 0);
  }

  get clickPerSecond(): number {
    const now = Date.now();
    this.recentClicks = this.recentClicks.filter(t => now - t <= 1000);
    return this.recentClicks.length;
  }

  get crystalFillPercent(): number {
    const maxCPS = 50;
    return Math.min(this.clickPerSecond / maxCPS, 1) * 100;
  }

  onClickArea(event: MouseEvent): void {
    this.mana += this.manaPerClick;
    const now = Date.now();
    this.recentClicks.unshift(now);

    const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.floatX = event.clientX;
    this.floatY = event.clientY - 10;
    this.showValue = true;

    setTimeout(() => {
      this.showValue = false;
    }, 500);
  }

  buyGenerator(generator: Buyable): void {
    if (this.mana >= generator.cost) {
      this.mana -= generator.cost;
      generator.count++;
      const newCost = Math.floor(generator.baseCost * Math.pow(1.15, generator.count));

      const message = generator.type === 'click'
        ? `🔧 Amélioration achetée: ${generator.name} (+${generator.clickBoost} par clic)`
        : `🧙 Amélioration acheté: (${generator.name})`;
      this.log.unshift(`[${new Date().toLocaleTimeString()}] ${message}`);
      if (this.log.length > 100) this.log.pop();

      generator.cost = newCost;

      if (generator.type === 'click' && generator.clickBoost) {
        this.manaPerClick += generator.clickBoost;
      }
    }
  }

  clearLog(): void {
    const confirmed = window.confirm('⚠️ Es-tu sûr de vouloir vider le journal ?');
    if (!confirmed) return;
    this.log = [];
  }

  saveGame(): void {
    const gameData = {
      mana: this.mana,
      manaPerClick: this.manaPerClick,
      recentClicks: this.recentClicks,
      log: this.log,
      buyables: this.buyables.map(g => ({
        count: g.count,
        cost: g.cost
      })),
      upgrades: this.upgrades.map(u => ({
        name: u.name,
        purchased: u.purchased
      }))
    };
    localStorage.setItem(LOCAL_STORAGE_MANA_GAME, JSON.stringify(gameData));
  }

  loadGame(): void {
    const savedData = localStorage.getItem(LOCAL_STORAGE_MANA_GAME);
    if (savedData) {
      const gameData = JSON.parse(savedData);
      this.mana = gameData.mana || 0;
      this.manaPerClick = gameData.manaPerClick || 1;
      this.recentClicks = gameData.recentClicks || [];
      this.log = gameData.log || [];

      gameData.buyables?.forEach((savedGen: any, i: number) => {
        if (this.buyables[i]) {
          this.buyables[i].count = savedGen.count;
          this.buyables[i].cost = savedGen.cost;
        }
      });

      gameData.upgrades?.forEach((savedUpg: any) => {
        const upgrade = this.upgrades.find(u => u.name === savedUpg.name);
        if (upgrade && savedUpg.purchased) {
          upgrade.purchased = true;

          // Réappliquer les effets
          if (upgrade.type === 'click') {
            this.manaPerClick *= upgrade.multiplier;
          } else if (upgrade.type === 'gen' && upgrade.target) {
            const target = this.buyables.find(g => g.name === upgrade.target);
            if (target) {
              target.mps *= upgrade.multiplier;
            }
          }
        }
      });
    }
  }


  resetGame(): void {
    const confirmed = window.confirm('⚠️ Es-tu sûr de vouloir réinitialiser ta partie ?');
    if (!confirmed) return;

    this.mana = START_WITH_MANA;
    this.manaPerClick =  MANA_PER_CLICK;
    this.recentClicks = [];
    this.log = [];
    this.buyables.forEach(buy => {
      buy.count = 0;
      buy.cost = buy.baseCost;
    });
    this.upgrades.forEach(upg => {
      upg.purchased = false;
    })
    localStorage.removeItem(LOCAL_STORAGE_MANA_GAME);
  }

  ngOnInit(): void {
    this.loadGame();
    setInterval(() => {
      this.mana += this.totalMPS;
      this.saveGame();
    }, 1000);
  }
}
