import { diffChars } from "diff";

export function compareTexts(source, target) {
  const parts = diffChars(source || "", target || "");
  
  const sourceHtml = parts
    .map((p) => {
      const v = escapeHtml(p.value);
      if (p.removed) return `<span class="del">${v}</span>`;
      return v;
    })
    .join("");

  const targetHtml = parts
    .map((p) => {
      const v = escapeHtml(p.value);
      if (p.added) return `<span class="ins">${v}</span>`;
      return v;
    })
    .join("");

  return { sourceHtml, targetHtml };
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}