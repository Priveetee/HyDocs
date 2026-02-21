const MEILI = "/meili/indexes/mods/search";

const modal = document.getElementById("search-modal") as HTMLElement;
const input = document.getElementById("search-input") as HTMLInputElement;
const resultsList = document.getElementById(
	"search-results",
) as HTMLUListElement;
const emptyMsg = document.getElementById(
	"search-empty",
) as HTMLParagraphElement;

let activeIndex = -1;
let results: {
	id: string;
	name: string;
	category: string;
	description?: string;
	imageUrl?: string;
}[] = [];

function open() {
	modal.hidden = false;
	input.focus();
	input.value = "";
	clearResults();
}

function close() {
	modal.hidden = true;
	activeIndex = -1;
}

function clearResults() {
	resultsList.innerHTML = "";
	emptyMsg.hidden = true;
	results = [];
	activeIndex = -1;
}

async function search(q: string) {
	if (!q.trim()) {
		clearResults();
		return;
	}
	try {
		const res = await fetch(MEILI, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ q, limit: 7 }),
		});
		const data = await res.json();
		results = data.hits ?? [];
	} catch {
		results = [];
	}
	renderResults();
}

function renderResults() {
	resultsList.innerHTML = "";
	emptyMsg.hidden = results.length > 0;
	for (const hit of results) {
		const li = document.createElement("li");
		li.setAttribute("role", "option");
		li.setAttribute("aria-selected", "false");
		const img = hit.imageUrl
			? `<img class="result-img" src="${hit.imageUrl}" alt="" loading="lazy" />`
			: `<div class="result-img-placeholder"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.2"/><path d="M5 8h6M8 5v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></div>`;
		const desc = hit.description
			? `<p class="result-desc">${hit.description.length > 80 ? `${hit.description.slice(0, 80)}…` : hit.description}</p>`
			: "";
		li.innerHTML = `${img}<div class="result-body"><div class="result-name">${hit.name}</div>${desc}</div><span class="result-cat">${hit.category}</span>`;
		li.addEventListener("click", () => scrollToMod(hit.id, hit.category));
		resultsList.appendChild(li);
	}
	activeIndex = -1;
}

function setActive(idx: number) {
	const items = resultsList.querySelectorAll("li");
	for (let i = 0; i < items.length; i++) {
		items[i].setAttribute("aria-selected", i === idx ? "true" : "false");
	}
	activeIndex = idx;
}

function scrollToMod(id: string, _category: string) {
	window.location.href = `/mods/${id}`;
}

window.addEventListener("open-search", open);
modal.addEventListener("click", (e) => {
	if (e.target === modal) close();
});
input.addEventListener("input", (e) =>
	search((e.target as HTMLInputElement).value),
);

document.addEventListener("keydown", (e) => {
	if ((e.metaKey || e.ctrlKey) && e.key === "k") {
		e.preventDefault();
		open();
		return;
	}
	if (e.key === "Escape" && !modal.hidden) {
		close();
		return;
	}
	if (modal.hidden) return;
	const count = results.length;
	if (count === 0) return;
	if (e.key === "ArrowDown") {
		e.preventDefault();
		setActive((activeIndex + 1) % count);
	}
	if (e.key === "ArrowUp") {
		e.preventDefault();
		setActive((activeIndex - 1 + count) % count);
	}
	if (e.key === "Enter" && activeIndex >= 0)
		scrollToMod(results[activeIndex].id, results[activeIndex].category);
});
