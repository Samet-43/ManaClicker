export interface Buyable {
  name: string;
  baseCost: number;
  cost: number;
  mps: number;
  count: number;
  type: 'buy' | 'click';
  clickBoost?: number;
}

export interface Upgrade {
  name: string;
  description: string;
  cost: number;
  type: 'buy' | 'click';
  target?: string;
  multiplier: number;
  purchased: boolean;
}
