# ✨ Mana Clicker

Mana Clicker is an incremental idle game where you generate magical energy (mana) by clicking and by purchasing automated generators and upgrades.

## 🚀 Features

- Click to generate mana manually
- Purchase generators to automatically earn Mana Per Second (MPS)
- One-shot click upgrades that increase click power
- Progressive cost scaling to increase difficulty over time
- Save game state on local
- Animated click feedback

## 📦 Technologies

- **Angular** (Frontend framework)
- **Tailwind CSS** (UI styling)
- **TypeScript** (Strongly typed logic)
- **localStorage** for game persistence

## 🧠 Core Concepts

- `mana`: Current mana resource
- `manaPerClick`: Amount of mana gained per click
- `buyables`: Array of generators with increasing cost and MPS
- `upgrades`: One-time boosts for click power or generators
- `log`: Optional purchase log or history for user feedback

## 🔧 Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ng serve
   ```
