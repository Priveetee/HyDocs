export type ModCategory =
	| "Combat"
	| "Exploration"
	| "Agriculture"
	| "Craft & Stockage"
	| "Apprivoisement"
	| "Interface"
	| "Serveur"
	| "Cosmétique";

export interface ModCommand {
	command: string;
	description: string;
	requiresOp?: boolean;
}

export interface ModConfigParam {
	key: string;
	value: string;
	description: string;
}

export interface Mod {
	id: string;
	name: string;
	version: string;
	author: string;
	category: ModCategory;
	description: string;
	usage: string;
	commands: ModCommand[];
	configParams: ModConfigParam[];
	curseforgeUrl?: string;
	imageUrl?: string;
}
