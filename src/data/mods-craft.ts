import type { Mod } from "./types";

export const CRAFT_MODS: Mod[] = [
	{
		id: "thorium-chests",
		name: "Thorium Chests",
		version: "1.0.1",
		author: "BlameJared",
		category: "Craft & Stockage",
		description:
			"Ajoute 11 niveaux de coffres avec des capacités croissantes, du Copper (27 slots) au Prisma (63 slots).",
		usage:
			"Crafter les coffres selon le matériau disponible. Les coffres de rang supérieur offrent plus d'espace.",
		commands: [],
		configParams: [
			{
				key: "Copper Chest",
				value: "27 slots",
				description: "Coffre en cuivre",
			},
			{ key: "Iron Chest", value: "36 slots", description: "Coffre en fer" },
			{ key: "Gold Chest", value: "40 slots", description: "Coffre en or" },
			{
				key: "Bronze Chest",
				value: "45 slots",
				description: "Coffre en bronze",
			},
			{
				key: "Thorium Chest",
				value: "45 slots",
				description: "Coffre en thorium",
			},
			{
				key: "Cobalt Chest",
				value: "49 slots",
				description: "Coffre en cobalt",
			},
			{
				key: "Silver Chest",
				value: "58 slots",
				description: "Coffre en argent",
			},
			{
				key: "Adamantite Chest",
				value: "54 slots",
				description: "Coffre en adamantite",
			},
			{
				key: "Mithril Chest",
				value: "63 slots",
				description: "Coffre en mithril",
			},
			{
				key: "Prisma Chest",
				value: "63 slots",
				description: "Coffre en prisma",
			},
		],
		curseforgeUrl: "https://legacy.curseforge.com/hytale/mods/thorium-chests",
	},
	{
		id: "thorium-furnaces",
		name: "Thorium Furnaces",
		version: "1.0.3",
		author: "BlameJared",
		category: "Craft & Stockage",
		description:
			"Ajoute 11 niveaux de fourneaux avec des vitesses de fusion croissantes, du Copper (x1.1) au Mithril et Prisma (x10).",
		usage:
			"Crafter et placer les fourneaux supérieurs pour accélérer la fusion des minerais.",
		commands: [],
		configParams: [
			{
				key: "Copper Furnace",
				value: "x1.1",
				description: "Vitesse légèrement améliorée",
			},
			{ key: "Iron Furnace", value: "x1.2", description: "Vitesse améliorée" },
			{
				key: "Gold Furnace",
				value: "x1.33",
				description: "Vitesse nettement améliorée",
			},
			{
				key: "Bronze Furnace",
				value: "x1.6",
				description: "Fusion bien plus rapide",
			},
			{
				key: "Cobalt Furnace",
				value: "x2",
				description: "Fusion 2 fois plus rapide",
			},
			{
				key: "Adamantite Furnace",
				value: "x2.8",
				description: "Fusion quasi 3 fois plus rapide",
			},
			{
				key: "Silver Furnace",
				value: "x5",
				description: "Fusion 5 fois plus rapide",
			},
			{
				key: "Mithril Furnace",
				value: "x10",
				description: "Fusion 10 fois plus rapide",
			},
			{
				key: "Prisma Furnace",
				value: "x10",
				description: "Fusion 10 fois plus rapide",
			},
		],
		curseforgeUrl: "https://legacy.curseforge.com/hytale/mods/thorium-furnaces",
	},
	{
		id: "vein-mining",
		name: "Vein Mining",
		version: "2.1.0",
		author: "EineNT",
		category: "Craft & Stockage",
		description:
			"Mine un filon entier en un seul coup. Supporte plusieurs modes (ores/all/off) et patterns (freeform, tunnel, cube, wall). Interface graphique intégrée.",
		usage:
			"Ouvrir l'interface via /veinmining. Choisir le mode et le pattern. Le vein mining s'active avec l'outil approprié en main.",
		commands: [
			{
				command: "/veinmining",
				description: "Ouvre l'interface de configuration du Vein Mining",
				requiresOp: false,
			},
		],
		configParams: [
			{
				key: "MaxVeinSize",
				value: "50",
				description: "Nombre maximum de blocs minés en une seule fois",
			},
			{
				key: "DropMode",
				value: "break",
				description: "Les blocs drop à l'endroit où ils sont minés",
			},
			{
				key: "RequireValidTool",
				value: "true",
				description:
					"Nécessite l'outil approprié (Pickaxe, Hatchet, Shovel, Shears)",
			},
			{
				key: "InstantBreak",
				value: "false",
				description: "La mine n'est pas instantanée",
			},
		],
	},
	{
		id: "pickaxes-place-torches",
		name: "The Pickaxes Place Torches",
		version: "1.0.0",
		author: "Buuz135",
		category: "Craft & Stockage",
		description:
			"Permet aux pioches de poser des torches directement. Simplifie l'éclairage lors du minage sans changer d'outil.",
		usage:
			"Avoir des torches dans l'inventaire et utiliser l'interaction secondaire avec une pioche pour poser une torche.",
		commands: [],
		configParams: [],
	},
];
