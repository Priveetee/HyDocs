import type { Mod } from "./types";

export const COMBAT_MODS: Mod[] = [
	{
		id: "perfect-parries",
		name: "Perfect Parries",
		version: "0.7.1",
		author: "narwhals",
		category: "Combat",
		description:
			"Système de parade avancé avec stamina, contre-attaques et stagger. Chaque entité possède sa propre barre de stamina. Une parade parfaite dans la fenêtre de 200ms reflète 15% des dégâts et ouvre une fenêtre de contre-attaque.",
		usage:
			"Bloquer au bon moment (fenêtre de 200ms) pour déclencher une parade parfaite. Enchaîner avec une attaque dans les 250ms suivantes pour le bonus de contre-attaque x1.25. Vider la stamina d'un ennemi le stun pendant 5 secondes (x2.5 dégâts reçus).",
		commands: [
			{
				command: "/parry config set parryWindow <ms>",
				description: "Définit la fenêtre de parade en millisecondes",
				requiresOp: true,
			},
			{
				command: "/parry config set knockback <x> <y>",
				description: "Définit le knockback appliqué lors d'une parade",
				requiresOp: true,
			},
			{
				command: "/parry config set counterattackDamage <multiplier>",
				description: "Définit le multiplicateur de dégâts de contre-attaque",
				requiresOp: true,
			},
		],
		configParams: [
			{
				key: "parryWindowMs",
				value: "200",
				description: "Fenêtre de parade en millisecondes",
			},
			{
				key: "reflectDamagePercent",
				value: "0.15",
				description: "Pourcentage des dégâts réfléchis",
			},
			{
				key: "counterattackWindowMs",
				value: "250",
				description: "Fenêtre de contre-attaque après parade",
			},
			{
				key: "counterattackDamageMultiplier",
				value: "1.25",
				description: "Multiplicateur de dégâts de contre-attaque",
			},
			{
				key: "stunDuration",
				value: "5s",
				description: "Durée du stun quand la stamina est vidée",
			},
			{
				key: "stunnedDamageMultiplier",
				value: "2.5",
				description: "Multiplicateur de dégâts sur cible stunée",
			},
			{
				key: "blockSpamCooldownMs",
				value: "500",
				description: "Cooldown anti-spam du blocage",
			},
		],
	},
	{
		id: "kebs-katanas",
		name: "Keb's Katanas",
		version: "0.4.1",
		author: "Keb's",
		category: "Combat",
		description:
			"Ajoute 9 katanas avec matériaux uniques, animations custom et un établi dédié (Katana Forge). 6 katanas vanilla-friendly (Copper → Mithril) et 3 qui vont au-delà (Onyxium, Prisma, Pyrium).",
		usage:
			"Crafter les katanas au Katana Forge. Attaque primaire : enchaînement Stab → Swing_Down → Swing_Left → Swing_Diagonal. Attaque secondaire : Guard / Guard_Bash. Signature : Sanren_Kiri (triple combo).",
		commands: [],
		configParams: [],
		curseforgeUrl: "https://curseforge.com/hytale/mods/kebs-katanas",
	},
	{
		id: "weapon-stats-viewer",
		name: "Weapon Stats Viewer",
		version: "1.7.0",
		author: "Woxtz",
		category: "Combat",
		description:
			"Affiche les statistiques détaillées de toutes les armes du serveur dans une interface dédiée. Accessible à tous les joueurs (mode public activé).",
		usage:
			"Utiliser /weapons pour ouvrir l'interface de visualisation des stats d'armes.",
		commands: [
			{
				command: "/weapons",
				description: "Ouvre l'interface des statistiques d'armes",
				requiresOp: false,
			},
			{
				command: "/weaponsadmin public",
				description: "Active/désactive l'accès public",
				requiresOp: true,
			},
			{
				command: "/weaponsadmin welcome",
				description: "Active/désactive le message de bienvenue",
				requiresOp: true,
			},
			{
				command: "/weaponsadmin status",
				description: "Affiche le statut actuel du plugin",
				requiresOp: true,
			},
		],
		configParams: [
			{
				key: "publicCommand",
				value: "true",
				description: "La commande /weapons est accessible à tous",
			},
			{
				key: "showWelcomeMessage",
				value: "true",
				description: "Affiche un message de bienvenue à la connexion",
			},
		],
	},
	{
		id: "skeleton-banging-shield",
		name: "Skeleton Banging Shield",
		version: "0.2",
		author: "Jen",
		category: "Combat",
		description:
			"Rend certains squelettes plus agressifs : ils frappent leur arme et crient 'RAAAH' en entrant en combat. Affecte les variantes Knight, Burnt, Frost et Incandescent.",
		usage:
			"Aucune interaction joueur requise. Les squelettes affectés déclenchent automatiquement l'animation et le son en phase d'alerte.",
		commands: [],
		configParams: [],
		curseforgeUrl: "https://curseforge.com/hytale/mods/skeleton-banging-shield",
	},
	{
		id: "jcp-explosives-pack",
		name: "JCP Explosives Pack",
		version: "1.0.7",
		author: "Pipita (JCP)",
		category: "Combat",
		description:
			"Pack d'explosifs modulaire avec établi dédié (Explosive Workbench). Ajoute un Rocket Launcher (3 tiers, munitions Rocket craftées avec 5x Iron Bar + 2x Boom Powder), un Explosive Crossbow, des Mines posables (Dirt/Stone/Grass, 3 tiers), du C4 (Adhesive Bomb, 2 tiers) et des Bang Snaps.",
		usage:
			"Crafter toutes les armes et munitions à l'Explosive Workbench. Les mines se posent au sol et explosent au contact. Le Rocket Launcher se charge avec des Rockets (Tier 1/2/3). Le C4 (Adhesive Bomb) s'active à distance.",
		commands: [],
		configParams: [],
	},
];
