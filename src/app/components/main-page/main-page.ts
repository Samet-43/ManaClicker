import {Component, HostListener, OnInit} from '@angular/core';
import {DecimalPipe, NgClass} from '@angular/common';
import {MANA_PER_CLICK, START_WITH_MANA} from '../../core/constants/game.constants';
import {LOCAL_STORAGE_MANA_GAME} from '../../core/constants/localStorage.constants';
import {MobileMainPage} from '../mobile-main-page/mobile-main-page';

interface Buyable {
  name: string;
  baseCost: number;
  cost: number;
  mps: number;
  count: number;
  type: 'buy' | 'click';
  clickBoost?: number;
}

interface Upgrade {
  name: string;
  description: string;
  cost: number;
  type: 'buy' | 'click';
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
    MobileMainPage,
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
    { name: "Apprentice", baseCost: 15, cost: 15, mps: 0.2, count: 0, type: "buy" },
    { name: "Mage", baseCost: 50, cost: 50, mps: 1, count: 0, type: "buy" },
    { name: "Enchanter", baseCost: 150, cost: 150, mps: 5, count: 0, type: "buy" },
    { name: "Spell Factory", baseCost: 500, cost: 500, mps: 20, count: 0, type: "buy" },
    { name: "Arcane Golem", baseCost: 2500, cost: 2500, mps: 100, count: 0, type: "buy" },
    { name: "Ethereal Core", baseCost: 15000, cost: 15000, mps: 500, count: 0, type: "buy" },
    { name: "Chrono Wizard", baseCost: 90000, cost: 90000, mps: 2500, count: 0, type: "buy" },
    { name: "Runestone Forge", baseCost: 500000, cost: 500000, mps: 10000, count: 0, type: "buy" },
    { name: "Arcane Rift", baseCost: 2500000, cost: 2500000, mps: 50000, count: 0, type: "buy" },
    { name: "Mana Reactor", baseCost: 1e7, cost: 1e7, mps: 200000, count: 0, type: "buy" },
    { name: "Arcane Bloom", baseCost: 5e7, cost: 5e7, mps: 400000, count: 0, type: "buy" },
    { name: "Mana Leech", baseCost: 2e8, cost: 2e8, mps: 800000, count: 0, type: "buy" },
    { name: "Crystal Engine", baseCost: 8e8, cost: 8e8, mps: 1.6e6, count: 0, type: "buy" },
    { name: "Runic Beacon", baseCost: 3e9, cost: 3e9, mps: 3.2e6, count: 0, type: "buy" },
    { name: "Spirit Collector", baseCost: 1.2e10, cost: 1.2e10, mps: 6.4e6, count: 0, type: "buy" },
    { name: "Witch's Circle", baseCost: 5e10, cost: 5e10, mps: 1.28e7, count: 0, type: "buy" },
    { name: "Astral Harvester", baseCost: 2e11, cost: 2e11, mps: 2.56e7, count: 0, type: "buy" },
    { name: "Sigil Crafter", baseCost: 8e11, cost: 8e11, mps: 5.12e7, count: 0, type: "buy" },
    { name: "Mana Tree", baseCost: 3e12, cost: 3e12, mps: 1.02e8, count: 0, type: "buy" },
    { name: "Occult Furnace", baseCost: 1.2e13, cost: 1.2e13, mps: 2.04e8, count: 0, type: "buy" },
    { name: "Phantom Orb", baseCost: 5e13, cost: 5e13, mps: 4.09e8, count: 0, type: "buy" },
    { name: "Void Harvester", baseCost: 2e14, cost: 2e14, mps: 8.19e8, count: 0, type: "buy" },
    { name: "Ether Pump", baseCost: 8e14, cost: 8e14, mps: 1.63e9, count: 0, type: "buy" },
    { name: "Celestial Obelisk", baseCost: 3.2e15, cost: 3.2e15, mps: 3.27e9, count: 0, type: "buy" },
    { name: "Spell Infuser", baseCost: 1.2e16, cost: 1.2e16, mps: 6.55e9, count: 0, type: "buy" },
    { name: "Temporal Distorter", baseCost: 5e16, cost: 5e16, mps: 1.31e10, count: 0, type: "buy" },
    { name: "Mana Nexus", baseCost: 2e17, cost: 2e17, mps: 2.62e10, count: 0, type: "buy" },
    { name: "Arcane Drill", baseCost: 8e17, cost: 8e17, mps: 5.24e10, count: 0, type: "buy" },
    { name: "Binding Altar", baseCost: 3.2e18, cost: 3.2e18, mps: 1.04e11, count: 0, type: "buy" },
    { name: "Mythic Extractor", baseCost: 1.28e19, cost: 1.28e19, mps: 2.09e11, count: 0, type: "buy" },
  ];

  upgrades: Upgrade[] = [
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

      if (upg.name === 'Click Upgrade V' || upg.name === 'Click Upgrade X'){
        this.manaPerClick = this.totalMPS * upg.multiplier;
      }

      else{
        if (upg.type === 'click') {
          this.manaPerClick *= upg.multiplier;
        } else if (upg.type === 'buy' && upg.target) {
          const target = this.buyables.find(b => b.name === upg.target);
          if (target) target.mps *= upg.multiplier;
        }
      }

    }
  }

  showUpgrade(upg: Upgrade): boolean {
    if (upg.purchased) return false;
    if (this.mana < upg.cost - 500) return false;

    if (upg.type === 'buy' && upg.target) {
      const target = this.buyables.find(b => b.name === upg.target);
      return !!target && target.count > 0;
    }

    return true;
  }

  canBuyUpgrade(upgrade: Upgrade): boolean {
    if (this.mana < upgrade.cost) return false;

    if (upgrade.type === 'buy' && upgrade.target) {
      const target = this.buyables.find(b => b.name === upgrade.target);
      return !!target && target.count >= 10;
    }

    return true;
  }

  upgIsActive(upg: Upgrade): boolean {

    if (upg.type === 'buy' && upg.target){
    const target = this.buyables.find(b => b.name === upg.target);
    const enoughMana= this.mana >= upg.cost;

    return !!target && target.count >= 10 && enoughMana;
    }
    else{
      return this.mana >= upg.cost;
    }
  }

  hasVisibleUpgrades(): boolean {
    return this.upgrades.some(upg => this.showUpgrade(upg));
  }


  get totalMPS(): number {
    return this.buyables.reduce((total, buy) => total + (buy.mps * buy.count), 0);
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

    this.floatX = event.clientX;
    this.floatY = event.clientY - 10;
    this.showValue = true;

    setTimeout(() => {
      this.showValue = false;
    }, 500);
  }

  buyBuyables(buyables: Buyable): void {
    if (this.mana >= buyables.cost) {
      this.mana -= buyables.cost;
      buyables.count++;
      const newCost = Math.floor(buyables.baseCost * Math.pow(1.15, buyables.count));

      const message = buyables.type === 'click'
        ? `🔧 Amélioration achetée: ${buyables.name} (+${buyables.clickBoost} par clic)`
        : `🧙 Amélioration acheté: (${buyables.name})`;
      this.log.unshift(`[${new Date().toLocaleTimeString()}] ${message}`);
      if (this.log.length > 100) this.log.pop();

      buyables.cost = newCost;

      if (buyables.type === 'click' && buyables.clickBoost) {
        this.manaPerClick += buyables.clickBoost;
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
      buyables: this.buyables.map(b => ({
        count: b.count,
        cost: b.cost
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
      gameData.buyables?.forEach((savedBuy: any, i: number) => {
        if (this.buyables[i]) {
          this.buyables[i].count = savedBuy.count;
          this.buyables[i].cost = savedBuy.cost;
        }
      });

      gameData.upgrades?.forEach((savedUpb: any) => {
        const upgrade = this.upgrades.find(u => u.name === savedUpb.name);
        if (upgrade && savedUpb.purchased) {
          upgrade.purchased = true;

          if (upgrade.type === 'buy' && upgrade.target) {
            const target = this.buyables.find(b => b.name === upgrade.target);
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

  @HostListener('window:beforeunload')
  handleBeforeunload() {
    this.saveGame()
  }

  ngOnInit(): void {
    this.loadGame();
    setInterval(() => {
      this.mana += this.totalMPS;
      this.saveGame();
    }, 1000);
  }

  onClickMobile(): void {
    this.onClickArea(new MouseEvent('click', { clientX: 0, clientY: 0 }));
  }
}
