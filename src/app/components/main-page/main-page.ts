import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {MANA_PER_CLICK, START_WITH_MANA} from '../../core/constants/game.constants';
import {LOCAL_STORAGE_MANA_GAME} from '../../core/constants/localStorage.constants';
import {MobileMainPage} from '../mobile-main-page/mobile-main-page';
import {NumberSuffixPipe} from '../../pipes/number-suffix.pipe';
import { BUYABLES } from '../../data/buyables.data';
import { UPGRADES } from '../../data/upgrades.data';
import {Buyable, Upgrade} from '../../models/type';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgClass,
    MobileMainPage,
    NumberSuffixPipe,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit {

  buyables: Buyable[] = [...BUYABLES];
  upgrades: Upgrade[] = [...UPGRADES];

  mana = START_WITH_MANA;
  manaPerClick = MANA_PER_CLICK;
  recentClicks: number[] = [];
  log: string[] = [];

  showValue = false;
  floatX = 0;
  floatY = 0;

  buyMultiplier: number = 1;


  get visibleBuyables(): Buyable[] {
    return this.buyables.filter((_, index, array) => {
      if (index === 0) return true;
      const previous = array[index - 1];
      return previous.count > 0;
    });
  }

  buyBuyables(buyable: Buyable, multiplier: number = this.buyMultiplier): void {
    let bought = 0;

    for (let i = 0; i < multiplier; i++) {
      if (this.mana < buyable.cost) break;

      this.mana -= buyable.cost;
      buyable.count++;
      buyable.cost = Math.floor(buyable.baseCost * Math.pow(1.15, buyable.count));

      if (buyable.type === 'click' && buyable.clickBoost) {
        this.manaPerClick += buyable.clickBoost;
      }

      bought++;
    }

    if (bought > 0) {
      const message = buyable.type === 'click'
        ? `🔧 ${buyable.name} bought (${bought}x)`
        : `🧙 ${buyable.name} bought (${bought}x) – Total: ${buyable.count}`;
      this.log.unshift(`[${new Date().toLocaleTimeString()}] ${message}`);
      if (this.log.length > 100) this.log.pop();
    }
  }

  GetTotalBuyCost(buyable: Buyable): number {
    let total = 0;
    for (let i = 0; i < this.buyMultiplier; i++) {
      const cost = Math.floor(buyable.baseCost * Math.pow(1.15, buyable.count + i));
      total += cost;
    }
    return total;
  }

  buyUpgrade(upg: Upgrade): void {
    if (this.mana >= upg.cost && !upg.purchased) {
      this.mana -= upg.cost;
      upg.purchased = true;
      this.log.unshift(`[${new Date().toLocaleTimeString()}] ✅ ${upg.name} bought`);
      if (this.log.length > 100) this.log.pop();

      if (upg.name === 'Click Upgrade V' || upg.name === 'Click Upgrade X'){
        const sumMps = this.totalMPS * upg.multiplier
        this.manaPerClick = this.clickPerSecond + sumMps;
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
      const requiredLevel = upgrade.level ?? 10;
      return !!target && target.count >= requiredLevel;
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

  setBuyMultiplier(multi: number): void {
    this.buyMultiplier = multi;
  }

  get groupedLog(): { message: string; count: number }[] {
    const counter = new Map<string, number>();

    for (const entry of this.log) {
      counter.set(entry, (counter.get(entry) || 0) + 1);
    }

    return Array.from(counter.entries()).map(([message, count]) => ({ message, count }));
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
