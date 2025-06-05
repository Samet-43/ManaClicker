import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DecimalPipe, NgClass} from '@angular/common';

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
  selector: 'app-mobile-main-page',
  standalone: true,
  imports: [NgClass, DecimalPipe],
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
  @Output() buyItem = new EventEmitter<Buyable>();
  @Output() buyUpgrade = new EventEmitter<Upgrade>();
  @Output() clearLog = new EventEmitter<void>();
  @Output() resetGame = new EventEmitter<void>();

  activeTab: 'mana' | 'store' | 'upgrades' | 'logs' = 'mana';
  showSettings: boolean = false;

  onResetConfirm(): void {
    const confirmReset = window.confirm('⚠️ Are you sure you want to reset your progress?');
    if (confirmReset) {
      this.resetGame.emit();
      this.showSettings = false;
    }
  }
}
