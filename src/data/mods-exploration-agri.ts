import type { Mod } from "./types";

export const EXPLORATION_MODS: Mod[] = [
	{
		id: "grab-from-far",
		name: "Grab From Far",
		version: "1.3.0",
		author: "Linceros",
		category: "Exploration",
		description:
			"Permet d'interagir avec des blocs et coffres à distance (16 blocs horizontal, 8 blocs vertical). Requiert les droits OP.",
		usage:
			"Pointer vers un coffre ou bloc dans le rayon d'action et utiliser /grab pour y accéder à distance.",
		commands: [
			{
				command: "/grab",
				description: "Interagit avec le bloc ciblé à distance",
				requiresOp: true,
			},
		],
		configParams: [
			{
				key: "horizontalRadius",
				value: "16",
				description: "Rayon horizontal d'interaction en blocs",
			},
			{
				key: "verticalRadius",
				value: "8",
				description: "Rayon vertical d'interaction en blocs",
			},
			{
				key: "chestLimit",
				value: "200",
				description: "Nombre maximum de coffres gérés",
			},
			{
				key: "requireOp",
				value: "true",
				description: "Requiert les droits OP pour utiliser le mod",
			},
		],
	},
	{
		id: "miners-helmet",
		name: "Miner's Helmet",
		version: "1.0.3",
		author: "BlameJared",
		category: "Exploration",
		description:
			"Ajoute un casque de mineur avec lumière intégrée en 8 couleurs (Default, Blue, Cyan, Green, Purple, Red, White, Yellow).",
		usage:
			"Équiper le casque de mineur pour bénéficier d'une source de lumière portable.",
		commands: [],
		configParams: [],
		curseforgeUrl: "https://legacy.curseforge.com/hytale/mods/miners-helmet",
	},
	{
		id: "infinite-teleporter",
		name: "Infinite Teleporter",
		version: "1.0.0",
		author: "VictorLuck",
		category: "Exploration",
		description:
			"Augmente le nombre maximum de téléporteurs pouvant être placés dans un monde, supprimant la limite vanilla.",
		usage:
			"Placer les téléporteurs normalement. Le mod supprime automatiquement la limitation.",
		commands: [],
		configParams: [],
	},
];

export const AGRICULTURE_MODS: Mod[] = [
	{
		id: "gone-fishing",
		name: "Gone Fishing",
		version: "0.3.0",
		author: "MrBysco",
		category: "Agriculture",
		description:
			"Système de pêche complet avec 30 espèces de poissons, probabilités pondérées et possibilité de relâcher les prises. Temps de pêche : 5 à 30 secondes.",
		usage:
			"Équiper une canne à pêche et l'utiliser près d'un plan d'eau. Attendre que le bouchon plonge puis récupérer la ligne.",
		commands: [],
		configParams: [
			{
				key: "MinFishingTime",
				value: "100 ticks (5s)",
				description: "Temps minimum avant une touche",
			},
			{
				key: "MaxFishingTime",
				value: "600 ticks (30s)",
				description: "Temps maximum avant une touche",
			},
			{
				key: "CanRelease",
				value: "true",
				description: "Le joueur peut relâcher les poissons pêchés",
			},
		],
	},
	{
		id: "nocube-cultivation",
		name: "NoCube's Cultivation",
		version: "0.0.2",
		author: "NoCube",
		category: "Agriculture",
		description:
			"Ajoute des outils agricoles avancés : 4 fertilisants (Lime Powder, Bone Meal, Seashell, Elite) et 3 niveaux d'arrosoir (Wood, Copper, Thorium).",
		usage:
			"Utiliser les fertilisants sur les terres cultivées pour accélérer la croissance. Les arrosoirs doivent être remplis avant usage.",
		commands: [],
		configParams: [
			{
				key: "Lime Powder",
				value: "8 farmlands",
				description: "Fertilise 8 parcelles agricoles",
			},
			{
				key: "Bone Meal",
				value: "15 farmlands",
				description: "Fertilise 15 parcelles agricoles",
			},
			{
				key: "Seashell",
				value: "20 farmlands",
				description: "Fertilise 20 parcelles agricoles",
			},
			{
				key: "Elite Fertilizer",
				value: "50 farmlands",
				description: "Fertilise 50 parcelles agricoles",
			},
		],
		curseforgeUrl:
			"https://curseforge.com/hytale/mods/nocubes-cultivation-hytale",
	},
	{
		id: "aures-livestock",
		name: "Aures Livestock",
		version: "17.02.2026",
		author: "BlackAures",
		category: "Agriculture",
		description:
			"Ajoute des variations de couleurs et skins pour les animaux d'élevage : Camel, Chicken, Cow, Goat, Mouflon, Pig, Rabbit, Ram, Sheep, Skrill, avec variantes Undead.",
		usage:
			"Les animaux spawneront automatiquement avec des skins variés. Aucune action particulière requise.",
		commands: [],
		configParams: [],
	},
];
