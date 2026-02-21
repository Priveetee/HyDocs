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

export const SERVER_MODS: Mod[] = [
	{
		id: "party-plugin",
		name: "Party Plugin",
		version: "1.5.5",
		author: "CarsonK",
		category: "Serveur",
		description:
			"Système complet de groupes et d'amis. Gère le PvP entre joueurs, les marqueurs sur la boussole, le HUD de groupe et l'intégration SimpleClaims.",
		usage:
			"Créer ou rejoindre un groupe via /party. Ajouter des amis via /friends. Les membres du groupe apparaissent sur la boussole et dans le HUD.",
		commands: [
			{
				command: "/party",
				description: "Ouvre le menu de gestion de groupe",
				requiresOp: false,
			},
			{
				command: "/partymsg <message>",
				description: "Envoie un message au groupe",
				requiresOp: false,
			},
			{
				command: "/friends",
				description: "Ouvre le menu de gestion des amis",
				requiresOp: false,
			},
			{
				command: "/msg <joueur> <message>",
				description: "Envoie un message privé",
				requiresOp: false,
			},
			{
				command: "/ping",
				description: "Pose un marqueur visible par le groupe",
				requiresOp: false,
			},
			{
				command: "/pingclear",
				description: "Supprime tous les pings posés",
				requiresOp: false,
			},
			{
				command: "/scparty",
				description: "Intégration SimpleClaims pour les groupes",
				requiresOp: false,
			},
		],
		configParams: [
			{
				key: "DefaultPvpEnabled",
				value: "false",
				description: "PvP désactivé par défaut",
			},
			{
				key: "DefaultShowPartyHud",
				value: "true",
				description: "HUD de groupe affiché par défaut",
			},
			{
				key: "DefaultShowPartyOnCompass",
				value: "true",
				description: "Membres du groupe visibles sur la boussole",
			},
			{
				key: "DefaultShowFriendsOnCompass",
				value: "true",
				description: "Amis visibles sur la boussole",
			},
			{
				key: "DefaultFriendsCanPvpMe",
				value: "false",
				description: "Les amis ne peuvent pas faire de PvP par défaut",
			},
		],
	},
	{
		id: "nitrado-performance-saver",
		name: "Nitrado Performance Saver",
		version: "1.0.0",
		author: "Nitrado",
		category: "Serveur",
		description:
			"Optimise les performances du serveur via gestion dynamique du view radius, monitoring du GC/TPS et nettoyage automatique des chunks. S'active automatiquement sous charge.",
		usage:
			"Aucune interaction manuelle requise. Le plugin surveille en continu les métriques du serveur et ajuste automatiquement les paramètres.",
		commands: [],
		configParams: [
			{
				key: "TpsLimit",
				value: "20",
				description: "TPS cible pour le serveur",
			},
			{
				key: "TpsLimitEmpty",
				value: "5",
				description: "TPS limite quand le serveur est vide",
			},
			{
				key: "HeapThresholdRatio",
				value: "0.85",
				description: "Seuil heap avant déclenchement du GC forcé",
			},
			{
				key: "MinViewRadius",
				value: "2",
				description: "Rayon de vue minimum en cas de surcharge",
			},
			{
				key: "InitialViewRadius",
				value: "32",
				description: "Rayon de vue normal",
			},
			{
				key: "CheckInterval",
				value: "5s",
				description: "Fréquence de vérification des métriques",
			},
		],
	},
];

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
