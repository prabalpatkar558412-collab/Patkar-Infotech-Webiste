"use client";

import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Sparkles,
  Zap,
  Lock,
  Layers,
} from "lucide-react";

type ShowcaseTab = "all" | "web" | "mobile" | "admin";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("all");

  return (
    <div className="hero-showcase-container">
      {/* Top Controller Bar */}
      <div className="hero-showcase-header">
        <div className="showcase-status-indicator">
          <span className="showcase-pulse-dot" />
          <span className="showcase-status-text">Interactive Product Previews</span>
        </div>
        <div className="showcase-tabs" role="tablist" aria-label="Product Showcase Views">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "all"}
            className={`showcase-tab ${activeTab === "all" ? "is-active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <Layers size={13} /> Studio View
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "web"}
            className={`showcase-tab ${activeTab === "web" ? "is-active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            <Globe size={13} /> Website
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "mobile"}
            className={`showcase-tab ${activeTab === "mobile" ? "is-active" : ""}`}
            onClick={() => setActiveTab("mobile")}
          >
            <Smartphone size={13} /> Mobile App
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "admin"}
            className={`showcase-tab ${activeTab === "admin" ? "is-active" : ""}`}
            onClick={() => setActiveTab("admin")}
          >
            <LayoutDashboard size={13} /> Admin Panel
          </button>
        </div>
      </div>

      {/* Floating Badges for Studio View */}
      {activeTab === "all" && (
        <div className="showcase-floating-pills" aria-hidden="true">
          <div className="float-pill pill-top-right">
            <Zap size={11} className="text-amber-500" />
            <span>Sub-Second Page Loads</span>
          </div>
          <div className="float-pill pill-bottom-left">
            <Lock size={11} className="text-emerald-500" />
            <span>100% Owned Source Code</span>
          </div>
        </div>
      )}

      {/* Showcase Stage */}
      <div className={`hero-showcase-stage view-${activeTab}`}>
        {/* =========================================================
            1. WEBSITE PREVIEW (CareOn24 Live Healthcare Experience)
           ========================================================= */}
        {(activeTab === "all" || activeTab === "web") && (
          <div
            className={`showcase-window showcase-website ${
              activeTab === "web" ? "is-solo" : "is-layered-back"
            }`}
          >
            <div className="window-chrome">
              <div className="chrome-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="chrome-url-bar">
                <ShieldCheck size={11} className="text-emerald-600" />
                <span className="font-mono text-[10px]">careon24.com/services</span>
              </div>
              <span className="chrome-tag">CLIENT PLATFORM</span>
            </div>
            <div className="website-body">
              <div className="web-header">
                <div className="web-brand">
                  <div className="web-logo-box">C24</div>
                  <span>CareOn24 Health</span>
                </div>
                <div className="web-nav-links">
                  <span className="active">Home Nursing</span>
                  <span>Patient Attendants</span>
                  <span>Medical Equipment</span>
                </div>
                <span className="web-cta-btn">Book Care</span>
              </div>

              <div className="web-content-hero">
                <div className="web-hero-left">
                  <span className="web-badge">VERIFIED HOME HEALTHCARE</span>
                  <h4 className="web-title">Compassionate in-home clinical care.</h4>
                  <p className="web-subtitle">
                    Book certified nurses, elderly attendants, and ICU equipment with verified clinical backgrounds.
                  </p>
                  <div className="web-service-tags">
                    <span>✓ 24/7 Availability</span>
                    <span>✓ Background Checked</span>
                    <span>✓ Hospital Grade</span>
                  </div>
                </div>

                <div className="web-hero-card">
                  <div className="care-card-header">
                    <span>LIVE CLINICAL DISPATCH</span>
                    <span className="status-live">● ACTIVE</span>
                  </div>
                  <div className="care-card-row">
                    <div>
                      <strong>Senior Nursing Visit</strong>
                      <small>Medication, Vitals &amp; Dressing</small>
                    </div>
                    <span className="price-tag">₹850 / visit</span>
                  </div>
                  <div className="care-card-bar">
                    <span className="progress-fill" style={{ width: "88%" }} />
                  </div>
                  <div className="care-card-footer-mini">
                    <small>Verified Attendant: <strong>Sister Anita P.</strong></small>
                    <span className="rating-tag">★ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            2. MOBILE PREVIEW (Hyperlocal Delivery & Rider System)
           ========================================================= */}
        {(activeTab === "all" || activeTab === "mobile") && (
          <div
            className={`showcase-phone ${
              activeTab === "mobile" ? "is-solo" : "is-layered-front"
            }`}
          >
            <div className="phone-notch">
              <span className="phone-time">9:41</span>
              <span className="phone-island" />
              <div className="phone-icons">
                <span className="phone-signal">●●●</span>
              </div>
            </div>
            <div className="phone-body">
              <div className="phone-user-row">
                <div>
                  <small>Hyperlocal Dispatch</small>
                  <h4>Rahul Sharma</h4>
                </div>
                <span className="phone-avatar">RS</span>
              </div>

              {/* Order Status Tracking Card */}
              <div className="phone-status-card">
                <div className="phone-status-top">
                  <span className="status-pill">ORDER #4920</span>
                  <span className="eta-badge">
                    <Clock size={10} /> 12 min ETA
                  </span>
                </div>
                <h5>Rider Heading to Delivery Point</h5>
                <div className="phone-route-row">
                  <MapPin size={12} className="text-sky-600 flex-shrink-0" />
                  <span>MG Road Hub &rarr; Sector 14</span>
                </div>
                <div className="phone-otp-box">
                  <span>Handoff Verification OTP: <strong>7204</strong></span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="phone-grid">
                <div className="phone-tile">
                  <span className="tile-icon">⚡</span>
                  <small>Live Map</small>
                </div>
                <div className="phone-tile">
                  <span className="tile-icon">📞</span>
                  <small>Call Rider</small>
                </div>
                <div className="phone-tile">
                  <span className="tile-icon">🧾</span>
                  <small>Receipt</small>
                </div>
              </div>

              {/* Bottom Tab Bar */}
              <div className="phone-bottom-nav">
                <span className="nav-item active">⌂ Home</span>
                <span className="nav-item">⌕ Orders</span>
                <span className="nav-item">◯ Profile</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            3. ADMIN PANEL PREVIEW (PulseOps ERP & Daily Procurement)
           ========================================================= */}
        {(activeTab === "all" || activeTab === "admin") && (
          <div
            className={`showcase-window showcase-admin ${
              activeTab === "admin" ? "is-solo" : "is-layered-docked"
            }`}
          >
            <div className="admin-layout">
              {/* Sidebar */}
              <div className="admin-side">
                <div className="admin-brand">
                  <span className="brand-dot" /> PulseOps
                </div>
                <div className="admin-menu">
                  <span className="menu-item active">Overview</span>
                  <span className="menu-item">Procurement</span>
                  <span className="menu-item">Settlements</span>
                  <span className="menu-item">Fleet Routes</span>
                  <span className="menu-item">Audit Logs</span>
                </div>
                <div className="admin-side-footer">
                  <small>Role: Super-Admin</small>
                </div>
              </div>

              {/* Content */}
              <div className="admin-main">
                <div className="admin-topbar">
                  <div>
                    <h5>Procurement &amp; Settlement Center</h5>
                    <small>Daily collection routes &amp; farmer bank payouts</small>
                  </div>
                  <div className="admin-top-stats">
                    <span className="stat-pill">
                      <TrendingUp size={11} /> Today: ₹2.48L Settled
                    </span>
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="admin-kpi-row">
                  <div className="admin-kpi">
                    <small>DAILY INFLOW</small>
                    <strong>4,820 L</strong>
                    <span className="trend positive">+8.4% volume</span>
                  </div>
                  <div className="admin-kpi">
                    <small>BANK SETTLEMENTS</small>
                    <strong>₹1,18,500</strong>
                    <span className="trend">38 Accounts</span>
                  </div>
                  <div className="admin-kpi">
                    <small>FLEET LOGISTICS</small>
                    <strong>16 / 16</strong>
                    <span className="trend positive">Routes On Track</span>
                  </div>
                </div>

                {/* Data Table */}
                <div className="admin-table-container">
                  <div className="table-header-row">
                    <span>BATCH ID</span>
                    <span>ROUTE / PRODUCER</span>
                    <span>VOLUME</span>
                    <span>STATUS</span>
                  </div>
                  <div className="table-data-row">
                    <strong>#BT-8012</strong>
                    <span>Deesa North &middot; Dairy Coop #4</span>
                    <span>840 L</span>
                    <span className="status-badge success">Verified &amp; Paid</span>
                  </div>
                  <div className="table-data-row">
                    <strong>#BT-8013</strong>
                    <span>Rampura &middot; Farmer Syndicate</span>
                    <span>1,220 L</span>
                    <span className="status-badge progress">Quality Tested</span>
                  </div>
                  <div className="table-data-row">
                    <strong>#BT-8014</strong>
                    <span>West Corridor Route 2</span>
                    <span>650 L</span>
                    <span className="status-badge neutral">In Transit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Caption */}
      <div className="hero-showcase-caption">
        <div className="caption-features">
          <span>
            <CheckCircle2 size={13} className="text-sky-600" /> High-Performance Frontends
          </span>
          <span>
            <CheckCircle2 size={13} className="text-sky-600" /> Native Mobile Architecture
          </span>
          <span>
            <CheckCircle2 size={13} className="text-sky-600" /> Centralized Admin Consoles
          </span>
          <span>
            <CheckCircle2 size={13} className="text-sky-600" /> Secure PostgreSQL Backends
          </span>
        </div>
      </div>
    </div>
  );
}
