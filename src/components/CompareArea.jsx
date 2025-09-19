import React, { useState } from "react";
import { diffWords } from "diff";

function diffToHtml(diff, type) {
  return diff
    .map(part => {
      if (type === "A" && part.removed)
        return `<span style="background:#ffeaea;color:#a01818">${escapeHtml(part.value)}</span>`;
      if (type === "B" && part.added)
        return `<span style="background:#eaffea;color:#0b6b2b">${escapeHtml(part.value)}</span>`;
      if (!part.added && !part.removed)
        return escapeHtml(part.value);
      return "";
    })
    .join("");
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default function CompareArea({ source, setSource, target, setTarget }) {
  const [showDiff, setShowDiff] = useState(false);
  const [diffA, setDiffA] = useState([]);
  const [diffB, setDiffB] = useState([]);

  const canCompare = (source && source.trim().length > 0) || (target && target.trim().length > 0);

  const handleCompare = () => {
    if (!canCompare) return;
    const diff = diffWords(source, target);
    setDiffA(diff);
    setDiffB(diff);
    setShowDiff(true);
  };

  const handleEdit = () => setShowDiff(false);

  return (
    <div className="compare-area">
      <div className="text-columns">
        <div className="text-box">
          {showDiff ? (
            <div
              className="diff-text"
              style={{ minHeight: 220 }}
              dangerouslySetInnerHTML={{ __html: diffToHtml(diffA, "A") }}
            />
          ) : (
            <textarea
              placeholder="დაიწყე წერა..."
              value={source}
              onChange={e => setSource(e.target.value)}
              className="text-input"
              style={{ minHeight: 220 }}
            />
          )}
        </div>

        <div className="arrow-wrapper">
          <span className="arrow" aria-hidden>⇄</span>
        </div>

        <div className="text-box">
          {showDiff ? (
            <div
              className="diff-text"
              style={{ minHeight: 220 }}
              dangerouslySetInnerHTML={{ __html: diffToHtml(diffB, "B") }}
            />
          ) : (
            <textarea
              placeholder="დაიწყე წერა..."
              value={target}
              onChange={e => setTarget(e.target.value)}
              className="text-input"
              style={{ minHeight: 220 }}
            />
          )}
        </div>
      </div>

      <button
        className="compare-btn"
        onClick={showDiff ? handleEdit : handleCompare}
        disabled={!showDiff && !canCompare}
      >
        {showDiff ? "რედაქტირება" : "შედარება"}
      </button>
    </div>
  );
}