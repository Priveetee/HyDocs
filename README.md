# HyDocs

Documentation des mods du serveur Hytale. Recherche full-text via Meilisearch (Ctrl+K / ⌘K).

## Stack

- [Astro](https://astro.build) — static site generator
- [Meilisearch](https://www.meilisearch.com) — full-text search
- [Motion](https://motion.dev) — animations
- [Bun](https://bun.sh) — runtime & package manager
- [Biome](https://biomejs.dev) — linter & formatter

## Dev

```sh
bun install
bun run dev        # localhost:4321
bun run build      # dist/
bun run lint       # biome check
bun run index      # index mods into meilisearch
```

## Deploy

```sh
bun run build
docker restart hytale-web
```
