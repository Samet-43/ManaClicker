import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgClass} from '@angular/common';
import {NumberSuffixPipe} from '../../pipes/number-suffix.pipe';
import { Buyable, Upgrade } from '../../models/type';

@Component({
  selector: 'app-mobile-main-page',
  standalone: true,
  imports: [NgClass, NumberSuffixPipe],
  templateUrl: './mobile-main-page.html',
  styleUrl: './mobile-main-page.css'
})
export class MobileMainPage {
  @Input() mana: number = 0;
  @Input() totalMPS: number = 0;
  @Input() clickPerSecond: number = 0;
  @Input() manaPerClick: number = 1;
  @Input() crystalFillPercent: number = 0;
  @Input() buyables: Buyable[] = [];
  @Input() upgrades: Upgrade[] = [];
  @Input() log: string[] = [];

  // Fonctions de logique de shop (venant du parent)
  @Input() showUpgrade!: (upg: Upgrade) => boolean;
  @Input() canBuyUpgrade!: (upg: Upgrade) => boolean;
  @Input() upgIsActive!: (upg: Upgrade) => boolean;
  @Input() hasVisibleUpgrades!: () => boolean;

  // Événements vers parent
  @Output() triggerCast = new EventEmitter<void>();
  @Output() buyItem = new EventEmitter<{ buyable: Buyable; multiplier: number }>();
  @Output() buyUpgrade = new EventEmitter<Upgrade>();
  @Output() clearLog = new EventEmitter<void>();
  @Output() resetGame = new EventEmitter<void>();

  activeTab: 'mana' | 'store' | 'upgrades' | 'logs' = 'mana';
  showSettings: boolean = false;

  buyMultiplier: number = 1;

  setBuyMultiplier(multi: number): void {
    this.buyMultiplier = multi;
  }

  getTotalBuyCost(buyable: Buyable): number {
    let total = 0;
    let currentCount = buyable.count;

    for (let i = 0; i < this.buyMultiplier; i++) {
      const cost = Math.floor(buyable.baseCost * Math.pow(1.15, currentCount));
      total += cost;
      currentCount++;
    }

    return total;

  }

  get availableBuyablesCount(): number {
    return this.buyables.filter(buy => this.mana >= buy.cost).length;
  }

  get availableUpgradesCount(): number {
    return this.upgrades.filter(
      upg => this.showUpgrade(upg) && this.canBuyUpgrade(upg)
    ).length;
  }

  onResetConfirm(): void {
    const confirmReset = window.confirm('⚠️ Are you sure you want to reset your progress?');
    if (confirmReset) {
      this.resetGame.emit();
      this.showSettings = false;
    }
  }
}
