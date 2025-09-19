// Topbar.jsx
import React from "react";
import { Menu, Plus } from "lucide-react";

export default function Topbar() {
  return (
    <div className="topbar-mobile">
      <div className="topbar-logo-row">
        <img src="/enagram-logo.png" alt="ENAGRAM" className="topbar-logo-img" />
        <span className="topbar-logo-text">ENAGRAM</span>
      </div>

      <div className="topbar-right">
        <Menu className="topbar-menu-icon" />
      </div>
    </div>
  );
}