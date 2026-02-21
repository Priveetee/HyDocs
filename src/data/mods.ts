import { COMBAT_MODS } from "./mods-combat";
import { CRAFT_MODS } from "./mods-craft";
import { AGRICULTURE_MODS, EXPLORATION_MODS } from "./mods-exploration-agri";
import {
	COSMETIC_MODS,
	INTERFACE_MODS,
	SERVER_MODS,
	TAMING_MODS,
} from "./mods-other";
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
