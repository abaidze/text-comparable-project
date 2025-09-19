// Sidebar.jsx
import React from "react";
import {
  AlignLeft,
  Mic,
  Volume2,
  FileType2,
  UserCircle,
  ChevronLeft
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="sidebar-top">
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:20}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <img src="/enagram-logo.png" alt="ENAGRAM" className="sidebar-logo-img" />
            <span className="sidebar-logo-text">ENAGRAM</span>
          </div>
          <div style={{color:'#cfe1ff'}}><ChevronLeft size={18} /></div>
        </div>
      </div>

      <nav className="sidebar-nav" role="navigation" aria-label="Sections">
        <ul>
            <li className="sidebar-secondary-brand" title="ტექსტის შედარება">
            <ChevronLeft size={18} />
            <span className="brand-text">მართლმწერი</span>
          </li>
          <li className="active" title="ტექსტის შედარება">
            <AlignLeft size={18} />
            <span className="sidebar-nav-text">ტექსტის შედარება</span>
          </li>
          <li title="ხმა → ტექსტი">
            <Mic size={18} />
            <span className="sidebar-nav-text">ხმა → ტექსტი</span>
          </li>
          <li title="ტექსტი → ხმა">
            <Volume2 size={18} />
            <span className="sidebar-nav-text">ტექსტი → ხმა</span>
          </li>
          <li title="PDF კონვერტაცია">
            <FileType2 size={18} />
            <span className="sidebar-nav-text">PDF კონვერტაცია</span>
          </li>
        </ul>
      </nav>

      <div className="sidebar-user">
        <UserCircle size={22} />
        <span className="sidebar-user-name">თამარ ონიანი</span>
        <button className="sidebar-user-menu" aria-label="More">⋯</button>
      </div>
    </aside>
  );
}