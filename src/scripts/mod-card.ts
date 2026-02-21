for (const row of document.querySelectorAll<HTMLButtonElement>(".mod-row")) {
	const detailId = row.getAttribute("aria-controls");
	if (!detailId) continue;
	const detail = document.getElementById(detailId);
	if (!detail) continue;

	row.addEventListener("click", () => {
		const expanded = row.getAttribute("aria-expanded") === "true";
		row.setAttribute("aria-expanded", expanded ? "false" : "true");
		detail.hidden = expanded;
	});
}
