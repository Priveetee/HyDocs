import type { Mod } from "./types";

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
