import { MeiliSearch } from "meilisearch";
import { ALL_MODS } from "../src/data/mods.ts";

const MEILISEARCH_HOST = process.env.MEILI_HOST ?? "http://localhost:7700";
const INDEX_NAME = "mods";

const client = new MeiliSearch({ host: MEILISEARCH_HOST });

const index = client.index(INDEX_NAME);

await index.updateSettings({
	searchableAttributes: ["name", "description", "usage", "category", "author", "commandNames"],
	displayedAttributes: ["id", "name", "version", "author", "category", "description", "usage"],
	filterableAttributes: ["category"],
});

const documents = ALL_MODS.map((mod) => ({
	id: mod.id,
	name: mod.name,
	version: mod.version,
	author: mod.author,
	category: mod.category,
	description: mod.description,
	usage: mod.usage,
	commandNames: mod.commands.map((c) => c.command).join(" "),
}));

const task = await index.addDocuments(documents);
console.log(`Indexation lancée — task uid: ${task.taskUid}`);
console.log(`${documents.length} mods indexés dans "${INDEX_NAME}"`);
