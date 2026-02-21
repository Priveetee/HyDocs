import type { Mod } from "./types";

export const TAMING_MODS: Mod[] = [
	{
		id: "hytame",
		name: "HyTame",
		version: "1.5.2",
		author: "AnimalTaming",
		category: "Apprivoisement",
		description:
			"Système complet d'apprivoisement d'animaux pour ~100 espèces. Gère la progression de confiance, les comportements, le montage, l'alimentation et l'élevage. Cooldown d'élevage : 5 min. Croissance : 30 min.",
		usage:
			"Approcher un animal et lui offrir sa nourriture préférée progressivement pour augmenter le niveau de confiance. Une fois apprivoisé, l'animal peut être monté, suivi ou mis en mode passif/défensif/agressif.",
		commands: [],
		configParams: [
			{
				key: "growthTimeMinutes",
				value: "30",
				description: "Temps de croissance des bébés animaux",
			},
			{
				key: "breedCooldownMinutes",
				value: "5",
				description: "Cooldown entre deux élevages",
			},
			{
				key: "preset",
				value: "default_extended",
				description: "Preset actif (100+ espèces configurées)",
			},
		],
	},
];

export const INTERFACE_MODS: Mod[] = [
	{
		id: "multiple-hud",
		name: "Multiple HUD",
		version: "1.0.6",
		author: "Buuz135",
		category: "Interface",
		description:
			"Système de HUD modulaire et personnalisable. Affiche des informations de chunk, membres du groupe et autres données directement sur l'écran.",
		usage:
			"Le HUD s'affiche automatiquement selon les modules actifs. Compatible avec PartyPlugin pour afficher les membres du groupe.",
		commands: [],
		configParams: [],
	},
	{
		id: "better-wardrobes",
		name: "Better Wardrobes",
		version: "1.0.3",
		author: "iTzKenar",
		category: "Interface",
		description:
			"Améliore les armoires en ajoutant un inventaire fonctionnel. Disponible en 16 styles visuels (Ancient, Crude, Desert, Feran, Frozen, Human, Jungle, Kweebec, Lumberjack, Tavern, et variantes Temple).",
		usage:
			"Interagir avec une armoire pour ouvrir son inventaire intégré et y stocker des objets.",
		commands: [],
		configParams: [],
		curseforgeUrl: "https://curseforge.com/hytale/mods/better-wardrobes",
	},
	{
		id: "eye-spy",
		name: "Eye Spy",
		version: "2026.2.20",
		author: "JarHax",
		category: "Interface",
		description:
			"Affiche des informations sur le bloc ou l'entité regardé directement dans le HUD. Supporte FR, EN, DE, ES et peut être étendu via son API.",
		usage:
			"Regarder un bloc ou une entité pour voir ses informations affichées automatiquement dans le coin de l'écran.",
		commands: [],
		configParams: [],
	},
];
