import { serve } from "bun";
import { readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const DIST = "/app/dist";
const MIME: Record<string, string> = {
	".html": "text/html; charset=utf-8",
	".css": "text/css",
	".js": "application/javascript",
	".json": "application/json",
	".svg": "image/svg+xml",
	".png": "image/png",
	".webp": "image/webp",
	".ico": "image/x-icon",
	".woff2": "font/woff2",
};

serve({
	port: 4322,
	fetch(req) {
		const url = new URL(req.url);
		let path = url.pathname === "/" ? "/index.html" : url.pathname;
		let file = join(DIST, path);
		try {
			statSync(file);
		} catch {
			file = join(DIST, "index.html");
		}
		const mime = MIME[extname(file)] ?? "application/octet-stream";
		return new Response(readFileSync(file), {
			headers: { "Content-Type": mime, "Cache-Control": "public, max-age=3600" },
		});
	},
});
