// Header.jsx
import React from "react";
import { ChevronDown, Plus, Menu ,AlignLeft} from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-controls">
          <select className="header-select" aria-label="language">
            <option>ქართული</option>
            <option>ქართული</option>
          </select>

          <label className="header-checkbox">
            <input type="checkbox" />
            <span>ფორმატის შენარჩუნება</span>
          </label>
        </div>
      </div>

      <div>
        <button className="header-add-btn" type="button" aria-label="ახლის გახსნა">
          <Plus size={16} />
          <span>ახლის გახსნა</span>
        </button>
      </div>

      <Menu className="header-menu-icon" />
    </header>
  );
}