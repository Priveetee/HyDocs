import type { Mod } from "./types";

export const COSMETIC_MODS: Mod[] = [
	{
		id: "connected-windows",
		name: "Connected Windows",
		version: "0.13",
		author: "MrLoop",
		category: "Cosmétique",
		description:
			"Ajoute des fenêtres connectées visuellement pour 8 styles (Crude, Human_Ruins, Tavern, Temple Dark/Emerald/Light/Wind, Village). Les fenêtres adjacentes fusionnent automatiquement.",
		usage:
			"Placer les fenêtres du même style côte à côte. Elles se connectent automatiquement pour former une surface vitrée continue.",
		commands: [],
		configParams: [],
	},
	{
		id: "boats",
		name: "Boats",
		version: "2.0.0",
		author: "example",
		category: "Cosmétique",
		description:
			"Ajoute des bateaux craftables en 4 matériaux (Wood, Iron, Cobalt, Adamantine) avec une variante de course et animations dédiées.",
		usage:
			"Crafter un bateau à l'établi et le placer sur l'eau pour naviguer. Les bateaux de course offrent une vitesse accrue.",
		commands: [],
		configParams: [],
	},
];
