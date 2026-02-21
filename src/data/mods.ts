import { COMBAT_MODS } from "./mods-combat";
import { COSMETIC_MODS } from "./mods-cosmetic";
import { CRAFT_MODS } from "./mods-craft";
import { AGRICULTURE_MODS, EXPLORATION_MODS } from "./mods-exploration-agri";
import { INTERFACE_MODS, TAMING_MODS } from "./mods-other";
import { SERVER_MODS } from "./mods-server";
import type { Mod, ModCategory } from "./types";

export const ALL_MODS: Mod[] = [
	...COMBAT_MODS,
	...EXPLORATION_MODS,
	...AGRICULTURE_MODS,
	...CRAFT_MODS,
	...TAMING_MODS,
	...INTERFACE_MODS,
	...SERVER_MODS,
	...COSMETIC_MODS,
];

export const CATEGORIES: ModCategory[] = [
	"Combat",
	"Exploration",
	"Agriculture",
	"Craft & Stockage",
	"Apprivoisement",
	"Interface",
	"Serveur",
	"Cosmétique",
];

export type { Mod, ModCategory };
