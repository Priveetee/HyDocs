const filterToggle = document.getElementById("filter-toggle");
const drawer = document.getElementById("category-drawer");
const overlay = document.getElementById("drawer-overlay");
const drawerClose = document.getElementById("drawer-close");

function openDrawer() {
	drawer?.classList.add("open");
	overlay?.classList.add("visible");
	filterToggle?.classList.add("active");
	overlay?.removeAttribute("hidden");
}

function closeDrawer() {
	drawer?.classList.remove("open");
	overlay?.classList.remove("visible");
	filterToggle?.classList.remove("active");
	setTimeout(() => overlay?.setAttribute("hidden", ""), 200);
}

filterToggle?.addEventListener("click", () => {
	drawer?.classList.contains("open") ? closeDrawer() : openDrawer();
});
overlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

document.querySelectorAll(".drawer .filter-btn").forEach((btn) => {
	btn.addEventListener("click", () => setTimeout(closeDrawer, 150));
});
