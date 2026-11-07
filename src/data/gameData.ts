export type PanelId =
  | "store"
  | "luck"
  | "vault"
  | "missions"
  | "events";

export type CurrencyKind = "coins" | "diamonds";

export type ToastKind = "info" | "success" | "error";

export interface SettingsState {
  music: boolean;
  sfx: boolean;
  particles: boolean;
  quality: string;
}

export interface ModeOption {
  id: string;
  name: string;
  map: string;
}

export const MODES: ModeOption[] = [
  { id: "br-bermuda", name: "BR-RANKED", map: "Bermuda" },
  { id: "br-purgatory", name: "BR-RANKED", map: "Purgatory" },
  { id: "cs-craftland", name: "CLASH SQUAD", map: "Craftland" },
  { id: "lw-clock", name: "LONE WOLF", map: "Clock Tower" },
];

export interface StoreItem {
  id: string;
  name: string;
  tag: string;
  rarity: "Legendary" | "Epic" | "Rare";
  price: number;
  kind: CurrencyKind;
  img: "bundle" | "crate" | "gem" | "avatar";
  hue: number;
}

export const STORE_ITEMS: StoreItem[] = [
  { id: "s1", name: "Crimson Voxel Bundle", tag: "BUNDLE", rarity: "Legendary", price: 899, kind: "diamonds", img: "bundle", hue: 0 },
  { id: "s2", name: "Golden Royale Crate", tag: "CRATE", rarity: "Epic", price: 120, kind: "diamonds", img: "crate", hue: 0 },
  { id: "s3", name: "Nebula Crystal Pack", tag: "GEMS", rarity: "Epic", price: 4500, kind: "coins", img: "gem", hue: 0 },
  { id: "s4", name: "Fearless Skin — Onyx", tag: "SKIN", rarity: "Legendary", price: 1199, kind: "diamonds", img: "avatar", hue: 140 },
  { id: "s5", name: "Pixel Storm Bundle", tag: "BUNDLE", rarity: "Epic", price: 649, kind: "diamonds", img: "bundle", hue: 190 },
  { id: "s6", name: "Supply Crate ×5", tag: "CRATE", rarity: "Rare", price: 2600, kind: "coins", img: "crate", hue: 60 },
];

export const ROYALE_PRIZES = [
  { name: "250 Diamonds", kind: "diamonds" as CurrencyKind, amount: 250 },
  { name: "5,000 Gold", kind: "coins" as CurrencyKind, amount: 5000 },
  { name: "Crimson Voxel Bundle", kind: "diamonds" as CurrencyKind, amount: 0 },
  { name: "80 Diamonds", kind: "diamonds" as CurrencyKind, amount: 80 },
  { name: "2,400 Gold", kind: "coins" as CurrencyKind, amount: 2400 },
  { name: "Nebula Crystal Pack", kind: "coins" as CurrencyKind, amount: 0 },
];

export const MISSIONS = [
  { id: "m1", title: "Deal 2,000 damage in BR-Ranked", progress: 1450, goal: 2000, reward: 800 },
  { id: "m2", title: "Get 3 BOOYAHs with Spark equipped", progress: 3, goal: 3, reward: 1500 },
  { id: "m3", title: "Open 5 supply crates", progress: 2, goal: 5, reward: 600 },
  { id: "m4", title: "Travel 10,000m across Bermuda", progress: 7300, goal: 10000, reward: 950 },
];

export const EVENTS = [
  { id: "e1", title: "Voxel Rampage", desc: "Double XP on all ranked modes this weekend.", ends: "2d 14h" },
  { id: "e2", title: "Crate Rain Festival", desc: "Supply crates drop 2× loot on Craftland.", ends: "5d 03h" },
  { id: "e3", title: "Husky Derby", desc: "Race pets through the obstacle course for gems.", ends: "6d 19h" },
];

export const VAULT_ITEMS = [
  { id: "v1", name: "Crimson Hoodie", type: "Outfit", rarity: "Legendary", count: 1 },
  { id: "v2", name: "Pixel Backpack Lv.3", type: "Backpack", rarity: "Epic", count: 1 },
  { id: "v3", name: "Loot Crate Token", type: "Token", rarity: "Rare", count: 14 },
  { id: "v4", name: "Gold Rush Pan", type: "Melee", rarity: "Epic", count: 1 },
  { id: "v5", name: "Nebula Parachute", type: "Glider", rarity: "Legendary", count: 1 },
  { id: "v6", name: "XP Card 24h", type: "Boost", rarity: "Rare", count: 6 },
];

export const FRIENDS = [
  { id: "f1", name: "PixelQueen", status: "In match", online: true },
  { id: "f2", name: "BlockSniper99", status: "Lobby", online: true },
  { id: "f3", name: "CraftyFox", status: "Lobby", online: true },
  { id: "f4", name: "NoScopeNina", status: "Offline", online: false },
];

export const MAILS = [
  { id: "ml1", title: "Daily login bonus", reward: 500, kind: "coins" as CurrencyKind },
  { id: "ml2", title: "Ranked season reward", reward: 120, kind: "diamonds" as CurrencyKind },
  { id: "ml3", title: "Guild activity chest", reward: 1500, kind: "coins" as CurrencyKind },
];

export const CHAT_FEED = [
  { user: "[World]", text: "٩(•̀ᴗ•́)و Team Invite — need 1 more for BR!" },
  { user: "[World]", text: "PixelQueen: that Crimson bundle is insane" },
  { user: "[Guild]", text: "BlockSniper99: Luck Royale in 5, join up" },
  { user: "[World]", text: "CraftyFox: selling Nebula parachute, DM me" },
  { user: "[World]", text: "NoScopeNina: BOOYAH streak x4, who's next?" },
];
