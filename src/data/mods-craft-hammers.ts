import type { Mod } from "./types";

export const HAMMERS_MODS: Mod[] = [
	{
		id: "miners-hammers",
		name: "Miners Hammers",
		version: "1.1.2",
		author: "DragoKane",
		category: "Craft & Stockage",
		description:
			"Ajoute 5 marteaux de minage avec zone d'effet (AoE) croissante. Iron (AoE ±0.5 haut/bas), Cobalt (AoE ±1 haut, ±1 bas), Thorium, Mithril et Adamantite (AoE ±1 haut, ±2 bas). Chacun se craft à la Workbench avec les barres correspondantes, du cuir et du tissu.",
		usage:
			"Crafter le marteau adapté à son niveau de progression. Le minage brise un volume de blocs autour du bloc ciblé selon l'AoE du marteau. Iron (ItemLevel 20) → Adamantite (ItemLevel 40).",
		commands: [],
		configParams: [
			{
				key: "Iron Hammer",
				value: "AoE ±0.5 haut/bas — ItemLevel 20",
				description:
					"Recette : 25x Iron Bar + 5x Light Leather + 4x Linen Scrap",
			},
			{
				key: "Cobalt Hammer",
				value: "AoE ±1 haut, ±1 bas — ItemLevel 25",
				description: "Recette : barres Cobalt + Heavy Leather + Shadoweave",
			},
			{
				key: "Thorium Hammer",
				value: "AoE ±1 haut, ±1 bas — ItemLevel 30",
				description: "Recette : barres Thorium + Heavy Leather + Shadoweave",
			},
			{
				key: "Mithril Hammer",
				value: "AoE ±1 haut, ±2 bas — ItemLevel 35",
				description: "Recette : barres Mithril + Heavy Leather + Cindercloth",
			},
			{
				key: "Adamantite Hammer",
				value: "AoE ±1 haut, ±2 bas — ItemLevel 40",
				description:
					"Recette : barres Adamantite + Heavy Leather + Cindercloth",
			},
		],
	},
];
