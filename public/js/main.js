const menuBtn = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}

const modal = document.querySelector("[data-modal]");
document.querySelectorAll("[data-open-quote]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!modal) return;
    modal.hidden = false;
  });
});
document.querySelectorAll("[data-close-quote]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!modal) return;
    modal.hidden = true;
  });
});
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });
}

const form = document.querySelector("[data-quote-form]");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = "Thanks — we’ll follow up within one business day.";
    }
    form.reset();
  });
}
