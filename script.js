// ---------- Mock data (replace with real API/database later) ----------

let categories = [
  { name: "Gondola Rack" },
  { name: "Cold Room" },
  { name: "Chiller" },
  { name: "Freezer" },
  { name: "Kitchen Equipment" },
];

const products = [
  { sku: "GR-1001", name: "Gondola Rack 4-Tier", category: "Gondola Rack", unit: "pcs", stock: 42, reorder: 15, price: 8500, description: "4-tier adjustable shelving gondola rack for supershops and retail displays. Powder-coated GI Sheet body, load capacity up to 50 kg per shelf." },
  { sku: "GR-1002", name: "Gondola Rack Wall Unit", category: "Gondola Rack", unit: "pcs", stock: 8, reorder: 10, price: 6200, description: "Single-sided wall-mounted gondola rack, ideal for small showrooms and corner displays." },
  { sku: "CR-2001", name: "Cold Room Panel (100mm)", category: "Cold Room", unit: "sqm", stock: 120, reorder: 40, price: 3200, description: "100mm PUF insulated cold room panel — the core material/unit for walk-in cold room assembly." },
  { sku: "CR-2002", name: "Cold Room Door Assembly", category: "Cold Room", unit: "pcs", stock: 5, reorder: 6, price: 42000, description: "Hinged cold room door with gasket seal, for air-tight insulation." },
  { sku: "CH-3001", name: "Display Chiller 4-Door", category: "Chiller", unit: "pcs", stock: 12, reorder: 5, price: 95000, description: "4-door glass display chiller for supershop and restaurant beverage/fresh item displays. Digital thermostat control." },
  { sku: "CH-3002", name: "Chiller Compressor Unit", category: "Chiller", unit: "pcs", stock: 3, reorder: 4, price: 28000, description: "R404A compressor unit — core component used in chiller and freezer assembly." },
  { sku: "FZ-4001", name: "Chest Freezer 400L", category: "Freezer", unit: "pcs", stock: 18, reorder: 8, price: 41000, description: "400 liter chest freezer, standard storage freezer for shops and restaurants." },
  { sku: "FZ-4002", name: "Upright Freezer 2-Door", category: "Freezer", unit: "pcs", stock: 0, reorder: 5, price: 63000, description: "2-door upright freezer for large-scale storage and commercial kitchens." },
  { sku: "KE-5001", name: "Commercial Kitchen Hood", category: "Kitchen Equipment", unit: "pcs", stock: 25, reorder: 10, price: 15500, description: "Stainless steel exhaust hood for removing smoke and grease from commercial kitchens." },
  { sku: "KE-5002", name: "Stainless Prep Table", category: "Kitchen Equipment", unit: "pcs", stock: 30, reorder: 12, price: 9800, description: "Stainless steel preparation table with under-shelf, for kitchen workstations." },
];

const stockMovements = [
  { id: 1, date: "2026-07-01", product: "Gondola Rack 4-Tier", type: "in", qty: 52, warehouse: "Dhaka Warehouse", ref: "OPENING" },
  { id: 2, date: "2026-07-01", product: "Gondola Rack Wall Unit", type: "in", qty: 8, warehouse: "Main Godown", ref: "OPENING" },
  { id: 3, date: "2026-07-01", product: "Cold Room Panel (100mm)", type: "in", qty: 60, warehouse: "Main Godown", ref: "OPENING" },
  { id: 4, date: "2026-07-01", product: "Cold Room Door Assembly", type: "in", qty: 5, warehouse: "Main Godown", ref: "OPENING" },
  { id: 5, date: "2026-07-01", product: "Display Chiller 4-Door", type: "in", qty: 6, warehouse: "Main Godown", ref: "OPENING" },
  { id: 6, date: "2026-07-01", product: "Chiller Compressor Unit", type: "in", qty: 3, warehouse: "Main Godown", ref: "OPENING" },
  { id: 7, date: "2026-07-01", product: "Chest Freezer 400L", type: "in", qty: 22, warehouse: "Main Godown", ref: "OPENING" },
  { id: 8, date: "2026-07-01", product: "Upright Freezer 2-Door", type: "in", qty: 3, warehouse: "Main Godown", ref: "OPENING" },
  { id: 9, date: "2026-07-01", product: "Commercial Kitchen Hood", type: "in", qty: 10, warehouse: "Main Godown", ref: "OPENING" },
  { id: 10, date: "2026-07-01", product: "Stainless Prep Table", type: "in", qty: 30, warehouse: "Main Godown", ref: "OPENING" },
  { id: 11, date: "2026-08-12", product: "Display Chiller 4-Door", type: "in", qty: 6, warehouse: "Main Godown", ref: "PO-2298" },
  { id: 12, date: "2026-08-11", product: "Gondola Rack 4-Tier", type: "out", qty: 10, warehouse: "Dhaka Warehouse", ref: "SO-5510" },
  { id: 13, date: "2026-08-11", product: "Chest Freezer 400L", type: "out", qty: 4, warehouse: "Main Godown", ref: "SO-5509" },
  { id: 14, date: "2026-08-10", product: "Cold Room Panel (100mm)", type: "in", qty: 60, warehouse: "Ctg Warehouse", ref: "PO-2295" },
  { id: 15, date: "2026-08-09", product: "Upright Freezer 2-Door", type: "out", qty: 3, warehouse: "Main Godown", ref: "SO-5502" },
  { id: 16, date: "2026-08-08", product: "Commercial Kitchen Hood", type: "in", qty: 15, warehouse: "Dhaka Warehouse", ref: "PO-2290" },
];

let movementIdCounter = 17;

const rawMaterials = [
  { id: 1, name: "GI Sheet (1.2mm)", usedIn: "Gondola Rack, Kitchen Equipment", unit: "sheet", qty: 210, reorder: 80 },
  { id: 2, name: "PUF Insulation Panel", usedIn: "Cold Room", unit: "sqm", qty: 35, reorder: 50 },
  { id: 3, name: "Compressor (R404A)", usedIn: "Chiller, Freezer", unit: "pcs", qty: 6, reorder: 10 },
  { id: 4, name: "Stainless Steel Rod", usedIn: "Gondola Rack, Kitchen Equipment", unit: "kg", qty: 480, reorder: 150 },
  { id: 5, name: "Powder Coating Paint", usedIn: "Gondola Rack", unit: "kg", qty: 22, reorder: 25 },
];

let rawMaterialIdCounter = 6;

const warehouses = [
  { id: 1, name: "Main Godown", location: "Tejgaon, Dhaka" },
  { id: 2, name: "Dhaka Warehouse", location: "Ashulia, Dhaka" },
  { id: 3, name: "Ctg Warehouse", location: "Chattogram" },
];

let warehouseIdCounter = 4;

// ---------- Derived helpers ----------

function stockStatus(p) {
  if (p.stock <= 0) return "out";
  if (p.stock <= p.reorder) return "low";
  return "ok";
}

function money(n) {
  return "৳" + Math.round(n).toLocaleString("en-BD");
}

// ---------- Generic CSV export ----------

function downloadCSV(filename, headers, rows) {
  const escapeCsv = (val) => {
    const s = String(val ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [headers.map(escapeCsv).join(",")];
  rows.forEach(row => lines.push(row.map(escapeCsv).join(",")));
  const csv = lines.join("\r\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------- Generic module date-range filter (All Time / This Month / This Year / Custom Range) ----------
// Drops into any module's topbar so its stat cards can be recomputed for a chosen period.

function inDateRange(dateStr, range) {
  if (!range || !range.active) return true;
  return dateStr >= range.from && dateStr <= range.to;
}

// containerId: element with .toggle-group [data-mdr] buttons + a .report-date-range with .mdr-from/.mdr-to inputs.
// onChange(range) fires whenever the selection changes, with range = { from, to, active, label }.
function setupModuleDateFilter(containerId, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return { currentRange: () => ({ active: false }) };

  const toggleBtns = container.querySelectorAll("[data-mdr]");
  const rangeBox = container.querySelector(".report-date-range");
  const fromInput = container.querySelector(".mdr-from");
  const toInput = container.querySelector(".mdr-to");
  let mode = "all";

  function currentRange() {
    if (mode === "custom") {
      const from = fromInput.value || `${currentMonthKey()}-01`;
      const to = toInput.value || todayStr();
      return { from, to, active: true, label: rangeLabel(from, to) };
    }
    if (mode === "monthly") {
      const mk = currentMonthKey();
      return { from: `${mk}-01`, to: monthLastDate(mk), active: true, label: monthLabel(mk) };
    }
    if (mode === "yearly") {
      const y = currentYearKey();
      return { from: `${y}-01-01`, to: `${y}-12-31`, active: true, label: y };
    }
    return { from: null, to: null, active: false, label: "All Time" };
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mode = btn.dataset.mdr;
      toggleBtns.forEach(b => b.classList.toggle("active", b === btn));
      if (rangeBox) rangeBox.classList.toggle("hidden", mode !== "custom");
      if (mode === "custom") {
        if (!fromInput.value) fromInput.value = `${currentMonthKey()}-01`;
        if (!toInput.value) toInput.value = todayStr();
      }
      onChange(currentRange());
    });
  });

  [fromInput, toInput].forEach(input => {
    if (!input) return;
    input.addEventListener("change", () => {
      if (mode !== "custom") return;
      onChange(currentRange());
    });
  });

  return { currentRange };
}

// ---------- Render: stat cards ----------

function renderStats() {
  const totalProducts = products.length;
  const totalStockValue = products.reduce((sum, p) => sum + p.stock * p.price, 0);
  const lowStockCount = products.filter(p => stockStatus(p) !== "ok").length;
  const warehouseCount = warehouses.length;

  const cards = [
    { icon: "📦", value: totalProducts, label: "Total Products", cls: "" },
    { icon: "💵", value: money(totalStockValue), label: "Total Stock Value", cls: "good" },
    { icon: "⚠️", value: lowStockCount, label: "Low Stock Items", cls: lowStockCount > 0 ? "warn" : "" },
    { icon: "🏬", value: warehouseCount, label: "Warehouses / Godown", cls: "" },
  ];

  document.getElementById("statsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

// ---------- Render: product catalog ----------

function renderCategoryFilter() {
  const select = document.getElementById("categoryFilter");
  const currentValue = select.value || "all";
  select.innerHTML = `<option value="all">All Categories</option>` +
    categories.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
  if (categories.some(c => c.name === currentValue) || currentValue === "all") {
    select.value = currentValue;
  }
}

function populateCategorySelect() {
  const select = document.getElementById("f-category");
  const currentValue = select.value;
  select.innerHTML = categories.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
  if (categories.some(c => c.name === currentValue)) select.value = currentValue;
}

function productThumbHtml(p, size = 36) {
  if (p.image) {
    return `<img class="product-thumb" src="${p.image}" alt="" style="width:${size}px;height:${size}px;">`;
  }
  return `<div class="product-thumb-placeholder" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.4)}px;">${(p.name || "?").charAt(0).toUpperCase()}</div>`;
}

// ---------- Searchable product picker (replaces plain <select> for choosing a product) ----------

function productPickerThumbHtml(product) {
  return product
    ? productThumbHtml(product, 28)
    : `<div class="product-thumb-placeholder" style="width:28px;height:28px;font-size:12px;">?</div>`;
}

function productPickerHtml(selectedSku = "") {
  const product = products.find(p => p.sku === selectedSku);
  return `
    <div class="product-picker" data-selected-sku="${selectedSku}">
      <div class="product-picker-thumb">${productPickerThumbHtml(product)}</div>
      <input type="text" class="product-picker-input" placeholder="Search product..." value="${product ? product.name : ""}" autocomplete="off">
      <div class="product-picker-dropdown hidden"></div>
    </div>
  `;
}

function productPickerOptionsHtml(term = "") {
  const t = term.trim().toLowerCase();
  const matches = products
    .filter(p => !t || p.name.toLowerCase().includes(t) || p.sku.toLowerCase().includes(t))
    .slice(0, 30);
  if (matches.length === 0) return `<div class="product-picker-empty">No products found</div>`;
  return matches.map(p => `
    <div class="product-picker-option" data-sku="${p.sku}">
      ${productThumbHtml(p, 28)}
      <div class="product-picker-option-text">
        <div class="product-picker-option-name">${p.name}</div>
        <div class="product-picker-option-meta">${p.sku} · ${money(p.price)}</div>
      </div>
    </div>
  `).join("");
}

function getProductPickerSku(pickerEl) {
  return pickerEl.dataset.selectedSku || "";
}

// For a picker that's wired once and reused (not re-created per row), reset its value programmatically.
function setProductPickerValue(pickerEl, sku) {
  const product = products.find(p => p.sku === sku);
  pickerEl.dataset.selectedSku = sku || "";
  pickerEl.querySelector(".product-picker-input").value = product ? product.name : "";
  pickerEl.querySelector(".product-picker-thumb").innerHTML = productPickerThumbHtml(product);
}

// Wires search/select behavior onto a .product-picker element already in the DOM.
// onSelect(sku) fires whenever the user picks a product from the dropdown.
function setupProductPicker(pickerEl, onSelect) {
  const input = pickerEl.querySelector(".product-picker-input");
  const dropdown = pickerEl.querySelector(".product-picker-dropdown");

  function openDropdown(term) {
    dropdown.innerHTML = productPickerOptionsHtml(term);
    dropdown.classList.remove("hidden");
  }
  function closeDropdown() {
    dropdown.classList.add("hidden");
  }

  input.addEventListener("focus", () => {
    input.select();
    openDropdown("");
  });

  input.addEventListener("input", () => openDropdown(input.value));

  input.addEventListener("blur", () => {
    closeDropdown();
    const product = products.find(p => p.sku === pickerEl.dataset.selectedSku);
    input.value = product ? product.name : "";
  });

  // mousedown (not click) + preventDefault so the option registers before the input's blur fires.
  dropdown.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const option = e.target.closest(".product-picker-option");
    if (!option) return;
    const sku = option.dataset.sku;
    const product = products.find(p => p.sku === sku);
    pickerEl.dataset.selectedSku = sku;
    input.value = product ? product.name : "";
    pickerEl.querySelector(".product-picker-thumb").innerHTML = productPickerThumbHtml(product);
    closeDropdown();
    if (product) onSelect(sku);
  });
}

// ---------- Searchable company picker (replaces plain <select> for choosing a company) ----------
// Reuses the .product-picker* CSS (search input + dropdown look) since the layout is identical.

function companyPickerOptionsHtml(term = "") {
  const t = term.trim().toLowerCase();
  const matches = companies
    .filter(c => !t || c.name.toLowerCase().includes(t))
    .slice(0, 30);
  if (matches.length === 0) return `<div class="product-picker-empty">No companies found</div>`;
  return matches.map(c => `
    <div class="product-picker-option" data-id="${c.id}">
      <div class="product-picker-option-text">
        <div class="product-picker-option-name">${c.name}</div>
        ${c.address ? `<div class="product-picker-option-meta">${c.address}</div>` : ""}
      </div>
    </div>
  `).join("");
}

function getCompanyPickerId(pickerEl) {
  const val = pickerEl.dataset.selectedId;
  return val ? Number(val) : null;
}

function setCompanyPickerValue(pickerEl, id) {
  const company = companies.find(c => c.id === Number(id));
  pickerEl.dataset.selectedId = id || "";
  pickerEl.querySelector(".product-picker-input").value = company ? company.name : "";
}

// Wires search/select behavior onto a .product-picker element already in the DOM.
// onSelect(companyId) fires whenever the user picks a company from the dropdown.
function setupCompanyPicker(pickerEl, onSelect) {
  const input = pickerEl.querySelector(".product-picker-input");
  const dropdown = pickerEl.querySelector(".product-picker-dropdown");

  function openDropdown(term) {
    dropdown.innerHTML = companyPickerOptionsHtml(term);
    dropdown.classList.remove("hidden");
  }
  function closeDropdown() {
    dropdown.classList.add("hidden");
  }

  input.addEventListener("focus", () => {
    input.select();
    openDropdown("");
  });

  input.addEventListener("input", () => openDropdown(input.value));

  input.addEventListener("blur", () => {
    closeDropdown();
    const company = companies.find(c => c.id === Number(pickerEl.dataset.selectedId));
    input.value = company ? company.name : "";
  });

  // mousedown (not click) + preventDefault so the option registers before the input's blur fires.
  dropdown.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const option = e.target.closest(".product-picker-option");
    if (!option) return;
    const id = Number(option.dataset.id);
    const company = companies.find(c => c.id === id);
    pickerEl.dataset.selectedId = id;
    input.value = company ? company.name : "";
    closeDropdown();
    if (company) onSelect(id);
  });
}

// ---------- Searchable vendor picker (replaces plain <select> for choosing a vendor) ----------
// Reuses the .product-picker* CSS (search input + dropdown look) since the layout is identical.

function vendorPickerOptionsHtml(term = "") {
  const t = term.trim().toLowerCase();
  const matches = vendors
    .filter(v => !t || v.name.toLowerCase().includes(t))
    .slice(0, 30);
  if (matches.length === 0) return `<div class="product-picker-empty">No vendors found</div>`;
  return matches.map(v => `
    <div class="product-picker-option" data-id="${v.id}">
      <div class="product-picker-option-text">
        <div class="product-picker-option-name">${v.name}</div>
        ${v.address ? `<div class="product-picker-option-meta">${v.address}</div>` : ""}
      </div>
    </div>
  `).join("");
}

function getVendorPickerId(pickerEl) {
  const val = pickerEl.dataset.selectedId;
  return val ? Number(val) : null;
}

function setVendorPickerValue(pickerEl, id) {
  const vendor = vendors.find(v => v.id === Number(id));
  pickerEl.dataset.selectedId = id || "";
  pickerEl.querySelector(".product-picker-input").value = vendor ? vendor.name : "";
}

// Wires search/select behavior onto a .product-picker element already in the DOM.
// onSelect(vendorId) fires whenever the user picks a vendor from the dropdown.
function setupVendorPicker(pickerEl, onSelect) {
  const input = pickerEl.querySelector(".product-picker-input");
  const dropdown = pickerEl.querySelector(".product-picker-dropdown");

  function openDropdown(term) {
    dropdown.innerHTML = vendorPickerOptionsHtml(term);
    dropdown.classList.remove("hidden");
  }
  function closeDropdown() {
    dropdown.classList.add("hidden");
  }

  input.addEventListener("focus", () => {
    input.select();
    openDropdown("");
  });

  input.addEventListener("input", () => openDropdown(input.value));

  input.addEventListener("blur", () => {
    closeDropdown();
    const vendor = vendors.find(v => v.id === Number(pickerEl.dataset.selectedId));
    input.value = vendor ? vendor.name : "";
  });

  // mousedown (not click) + preventDefault so the option registers before the input's blur fires.
  dropdown.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const option = e.target.closest(".product-picker-option");
    if (!option) return;
    const id = Number(option.dataset.id);
    const vendor = vendors.find(v => v.id === id);
    pickerEl.dataset.selectedId = id;
    input.value = vendor ? vendor.name : "";
    closeDropdown();
    if (vendor && onSelect) onSelect(id);
  });
}

function productRowHtml(p, { showCategory = true, showReorder = false } = {}) {
  const status = stockStatus(p);
  const badgeClass = status === "ok" ? "ok" : status === "low" ? "low" : "out";
  const badgeText = status === "ok" ? "In Stock" : status === "low" ? "Low Stock" : "Out of Stock";
  return `
    <tr>
      <td>${p.sku}</td>
      <td>
        <div class="product-name-cell">
          ${productThumbHtml(p, 32)}
          <span class="product-name-link" data-view-product="${p.sku}">${p.name}</span>
        </div>
      </td>
      ${showCategory ? `<td>${p.category}</td>` : ""}
      <td>${p.unit}</td>
      <td>${p.stock}</td>
      ${showReorder ? `<td>${p.reorder}</td>` : ""}
      <td>${money(p.price)}</td>
      <td><span class="badge ${badgeClass}">${badgeText}</span></td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="View Details" data-view-product="${p.sku}">👁️</button>
          <button class="icon-btn-sm" title="Edit" data-edit-product="${p.sku}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-product="${p.sku}">🗑️</button>
        </div>
      </td>
    </tr>
  `;
}

function renderCatalog(filterCategory = "all", searchTerm = "") {
  const tbody = document.querySelector("#catalogTable tbody");
  const term = searchTerm.trim().toLowerCase();

  const rows = products.filter(p => {
    const matchesCategory = filterCategory === "all" || p.category === filterCategory;
    const matchesSearch = !term || p.name.toLowerCase().includes(term) || p.sku.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  tbody.innerHTML = rows.map(p => productRowHtml(p, { showReorder: false })).join("")
    || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No products found</td></tr>`;
}

// ---------- Render: category-wise view ----------

function renderCategoryGrid() {
  const grid = document.getElementById("categoryGrid");

  grid.innerHTML = categories.map(cat => {
    const items = products.filter(p => p.category === cat.name);
    const totalQty = items.reduce((s, p) => s + p.stock, 0);
    const totalValue = items.reduce((s, p) => s + p.stock * p.price, 0);
    return `
      <div class="category-card" data-category="${cat.name}">
        <button class="category-card-delete" title="Delete Category" data-delete-category="${cat.name}">🗑️</button>
        <div class="category-card-name">${cat.name}</div>
        <div class="category-card-meta">${items.length} products · ${totalQty} pcs</div>
        <div class="category-card-value">${money(totalValue)}</div>
      </div>
    `;
  }).join("") || `<p class="muted">No categories yet — add one below.</p>`;
}

function renderCategoryDetailTable(category) {
  const items = products.filter(p => p.category === category);
  const totalQty = items.reduce((s, p) => s + p.stock, 0);

  document.getElementById("categoryDetailTitle").textContent = category;
  document.getElementById("categoryDetailMeta").textContent = `${items.length} products · ${totalQty} pcs in stock`;

  const tbody = document.querySelector("#categoryProductTable tbody");
  tbody.innerHTML = items.map(p => productRowHtml(p, { showCategory: false })).join("")
    || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No products in this category</td></tr>`;
}

let activeCategory = null;

function showCategoryGrid() {
  activeCategory = null;
  document.getElementById("categoryGridView").classList.remove("hidden");
  document.getElementById("categoryDetailView").classList.add("hidden");
  renderCategoryGrid();
}

function openCategoryDetail(category) {
  activeCategory = category;
  renderCategoryDetailTable(category);
  document.getElementById("categoryGridView").classList.add("hidden");
  document.getElementById("categoryDetailView").classList.remove("hidden");
}

// ---------- Render: stock movements ----------

function renderMovements() {
  const tbody = document.querySelector("#movementTable tbody");
  tbody.innerHTML = stockMovements.map(m => `
    <tr>
      <td>${m.date}</td>
      <td>${m.product}</td>
      <td><span class="badge ${m.type === "in" ? "in" : "outmove"}">${m.type === "in" ? "Stock In" : "Stock Out"}</span></td>
      <td>${m.qty}</td>
      <td>${m.warehouse}</td>
      <td>${m.ref}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="Edit" data-edit-movement="${m.id}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-movement="${m.id}">🗑️</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No movements yet</td></tr>`;
}

// ---------- Render: raw materials ----------

function renderRawMaterials() {
  const tbody = document.querySelector("#rawMaterialTable tbody");
  tbody.innerHTML = rawMaterials.map(r => {
    const status = r.qty <= r.reorder ? "low" : "ok";
    return `
      <tr>
        <td>${r.name}</td>
        <td>${r.usedIn}</td>
        <td>${r.unit}</td>
        <td>${r.qty}</td>
        <td>${r.reorder}</td>
        <td><span class="badge ${status}">${status === "ok" ? "Sufficient" : "Low"}</span></td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm" title="Edit" data-edit-material="${r.id}">✏️</button>
            <button class="icon-btn-sm danger" title="Delete" data-delete-material="${r.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No raw materials yet</td></tr>`;
}

// ---------- Render: low stock alerts ----------

function renderLowStock() {
  const list = document.getElementById("lowStockList");
  const lowItems = products.filter(p => stockStatus(p) !== "ok");
  const lowRaw = rawMaterials.filter(r => r.qty <= r.reorder);

  if (lowItems.length === 0 && lowRaw.length === 0) {
    list.innerHTML = `<div class="muted">No low stock alerts right now 🎉</div>`;
    return;
  }

  const productAlerts = lowItems.map(p => {
    const critical = p.stock <= 0;
    return `
      <div class="alert-item ${critical ? "critical" : ""}">
        <div class="product-name-cell">
          ${productThumbHtml(p, 32)}
          <div>
            <div class="alert-item-name">${p.name}</div>
            <div class="alert-item-meta">${p.category} · SKU: ${p.sku}</div>
          </div>
        </div>
        <div class="alert-item-right">
          <div class="alert-item-qty">${p.stock} ${p.unit}</div>
          <button class="alert-restock-btn" data-restock-product="${p.sku}">+ Restock</button>
        </div>
      </div>
    `;
  });

  const rawAlerts = lowRaw.map(r => `
    <div class="alert-item">
      <div>
        <div class="alert-item-name">${r.name}</div>
        <div class="alert-item-meta">Raw Material · Used in: ${r.usedIn}</div>
      </div>
      <div class="alert-item-right">
        <div class="alert-item-qty">${r.qty} / ${r.reorder} ${r.unit}</div>
        <button class="alert-restock-btn" data-edit-material="${r.id}">✏️ Edit</button>
      </div>
    </div>
  `);

  list.innerHTML = [...productAlerts, ...rawAlerts].join("");
}

// ---------- Render: warehouses ----------

// ---------- Warehouse stock (derived live from stock movements) ----------

function warehouseProductBreakdown(warehouseName) {
  const qtyByProduct = {};
  stockMovements.forEach(m => {
    if (m.warehouse !== warehouseName) return;
    const delta = m.type === "in" ? m.qty : -m.qty;
    qtyByProduct[m.product] = (qtyByProduct[m.product] || 0) + delta;
  });

  return Object.entries(qtyByProduct)
    .filter(([, qty]) => qty > 0)
    .map(([productName, qty]) => {
      const product = products.find(p => p.name === productName);
      return {
        name: productName,
        qty,
        unit: product ? product.unit : "",
        price: product ? product.price : 0,
        value: qty * (product ? product.price : 0),
      };
    })
    .sort((a, b) => b.value - a.value);
}

function computeWarehouseStock(warehouseName) {
  const breakdown = warehouseProductBreakdown(warehouseName);
  return {
    items: breakdown.reduce((s, b) => s + b.qty, 0),
    value: breakdown.reduce((s, b) => s + b.value, 0),
    breakdown,
  };
}

function renderWarehouses() {
  const grid = document.getElementById("warehouseGrid");
  grid.innerHTML = warehouses.map(w => {
    const stock = computeWarehouseStock(w.name);
    return `
    <div class="warehouse-card">
      <div class="warehouse-card-actions">
        <button class="icon-btn-sm" title="View" data-view-warehouse="${w.id}">👁️</button>
        <button class="icon-btn-sm" title="Edit" data-edit-warehouse="${w.id}">✏️</button>
        <button class="icon-btn-sm danger" title="Delete" data-delete-warehouse="${w.id}">🗑️</button>
      </div>
      <h3>${w.name}</h3>
      <p>${w.location}</p>
      <div class="warehouse-stat"><span>Total Items</span><b>${stock.items}</b></div>
      <div class="warehouse-stat"><span>Stock Value</span><b>${money(stock.value)}</b></div>
    </div>
  `;
  }).join("") || `<p class="muted">No warehouses yet — add one to get started.</p>`;
}

// ---------- Render: stock valuation ----------

function renderValuation() {
  const grid = document.getElementById("valuationGrid");
  const usedCategories = [...new Set(products.map(p => p.category))];

  const cards = usedCategories.map(cat => {
    const items = products.filter(p => p.category === cat);
    const totalQty = items.reduce((s, p) => s + p.stock, 0);
    const totalValue = items.reduce((s, p) => s + p.stock * p.price, 0);
    return `
      <div class="valuation-card">
        <div class="cat">${cat}</div>
        <div class="amount">${money(totalValue)}</div>
        <div class="sub">${items.length} products · ${totalQty} units</div>
      </div>
    `;
  });

  grid.innerHTML = cards.join("");
}

// ---------- Tabs ----------

function setupTabs() {
  const tabButtons = document.querySelectorAll("#module-inventory .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll("#module-inventory .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`panel-${btn.dataset.tab}`).classList.remove("hidden");
    });
  });
}

function setupPurchaseTabs() {
  const tabButtons = document.querySelectorAll("#module-purchase .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll("#module-purchase .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`ppanel-${btn.dataset.ptab}`).classList.remove("hidden");
    });
  });
}

// ---------- Module navigation (sidebar) ----------

function setupModuleNav() {
  document.querySelectorAll(".nav-item[data-module]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const module = link.dataset.module;

      document.querySelectorAll(".nav-item[data-module]").forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      document.querySelectorAll(".module-page").forEach(page => page.classList.add("hidden"));
      document.getElementById(`module-${module}`).classList.remove("hidden");

      if (module === "sales") refreshSalesView();
      if (module === "installation") refreshInstallationView();
      if (module === "service") refreshServiceView();
      if (module === "accounts") refreshAccountsView();
      if (module === "reports") refreshReportsView();
      if (module === "hr") refreshHrView();
      if (module === "conveyance") refreshConveyanceView();
      if (module === "settings") refreshSettingsView();
    });
  });
}

// ---------- Filters / search ----------

function setupFilters() {
  document.getElementById("categoryFilter").addEventListener("change", (e) => {
    const searchTerm = document.getElementById("globalSearch").value;
    renderCatalog(e.target.value, searchTerm);
  });

  document.getElementById("globalSearch").addEventListener("input", (e) => {
    const category = document.getElementById("categoryFilter").value;
    renderCatalog(category, e.target.value);
  });
}

// ---------- Modal helpers ----------

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

function setupModalDismiss() {
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.add("hidden");
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay").forEach(o => o.classList.add("hidden"));
    }
  });
}

// ---------- Generic confirm modal (used for deletes) ----------

let confirmActionCallback = null;

function showConfirm(message, onConfirm, actionLabel = "Delete") {
  document.getElementById("confirmMessage").textContent = message;
  const actionBtn = document.getElementById("confirmActionBtn");
  actionBtn.textContent = actionLabel;
  actionBtn.classList.toggle("btn-danger", !!onConfirm);
  actionBtn.classList.toggle("btn-primary", !onConfirm);
  confirmActionCallback = onConfirm;
  openModal("confirmModalOverlay");
}

function showInfo(message) {
  showConfirm(message, null, "OK");
}

function setupConfirmModal() {
  document.getElementById("confirmActionBtn").addEventListener("click", () => {
    if (confirmActionCallback) confirmActionCallback();
    confirmActionCallback = null;
    closeModal("confirmModalOverlay");
  });
}

function refreshCatalogView() {
  renderStats();
  renderCatalog(document.getElementById("categoryFilter").value, document.getElementById("globalSearch").value);
  renderLowStock();
  renderValuation();

  if (activeCategory && products.some(p => p.category === activeCategory)) {
    renderCategoryDetailTable(activeCategory);
  } else if (activeCategory) {
    showCategoryGrid();
  } else {
    renderCategoryGrid();
  }

  saveState();
}

// ---------- Add / Edit Product modal ----------

let editingSku = null;
let pendingProductImage = null;

function updateProductImagePreview() {
  const preview = document.getElementById("f-image-preview");
  preview.innerHTML = pendingProductImage
    ? `<img src="${pendingProductImage}" alt="">`
    : `<span class="image-preview-placeholder">No image</span>`;
}

function fillProductForm(p) {
  document.getElementById("f-name").value = p.name;
  document.getElementById("f-category").value = p.category;
  document.getElementById("f-unit").value = p.unit;
  document.getElementById("f-stock").value = p.stock;
  document.getElementById("f-price").value = p.price;
  document.getElementById("f-description").value = p.description || "";
  pendingProductImage = p.image || null;
  updateProductImagePreview();
}

function setupAddProduct() {
  document.getElementById("addProductBtn").addEventListener("click", () => {
    editingSku = null;
    document.querySelector("#productModalOverlay .modal-header h3").textContent = "Add New Product";
    document.querySelector("#productForm button[type=submit]").textContent = "Save Product";
    document.getElementById("productForm").reset();
    pendingProductImage = null;
    updateProductImagePreview();
    openModal("productModalOverlay");
  });

  document.getElementById("f-image-pick").addEventListener("click", () => document.getElementById("f-image").click());

  document.getElementById("f-image").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingProductImage = reader.result;
      updateProductImagePreview();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("f-image-remove").addEventListener("click", () => {
    pendingProductImage = null;
    document.getElementById("f-image").value = "";
    updateProductImagePreview();
  });

  document.getElementById("productForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("f-name").value.trim();
    if (!name) return;

    const data = {
      name,
      category: document.getElementById("f-category").value,
      unit: document.getElementById("f-unit").value.trim() || "pcs",
      stock: Number(document.getElementById("f-stock").value) || 0,
      price: Number(document.getElementById("f-price").value) || 0,
      description: document.getElementById("f-description").value.trim(),
      image: pendingProductImage,
    };

    if (editingSku) {
      Object.assign(products.find(p => p.sku === editingSku), data);
    } else {
      // Reorder point isn't user-facing — new products get a sensible default so Low Stock detection still works.
      const newProduct = { sku: "SKU-" + Math.floor(1000 + Math.random() * 9000), reorder: 5, ...data };
      products.push(newProduct);
    }

    editingSku = null;
    closeModal("productModalOverlay");
    refreshCatalogView();
    saveState();
  });
}

function editProduct(sku) {
  const p = products.find(x => x.sku === sku);
  if (!p) return;
  editingSku = sku;
  document.querySelector("#productModalOverlay .modal-header h3").textContent = "Edit Product";
  document.querySelector("#productForm button[type=submit]").textContent = "Update Product";
  fillProductForm(p);
  openModal("productModalOverlay");
}

function deleteProduct(sku) {
  const p = products.find(x => x.sku === sku);
  if (!p) return;
  showConfirm(`Delete "${p.name}"? This action cannot be undone.`, () => {
    const idx = products.findIndex(x => x.sku === sku);
    if (idx > -1) products.splice(idx, 1);
    refreshCatalogView();
    saveState();
  });
}

function setupProductRowActions(tbodySelector) {
  document.querySelector(tbodySelector).addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-product]");
    const editBtn = e.target.closest("[data-edit-product]");
    const deleteBtn = e.target.closest("[data-delete-product]");
    if (viewBtn) viewProduct(viewBtn.dataset.viewProduct);
    else if (editBtn) editProduct(editBtn.dataset.editProduct);
    else if (deleteBtn) deleteProduct(deleteBtn.dataset.deleteProduct);
  });
}

// ---------- Catalog sub-tabs (All Products / Category-wise) ----------

function setupCatalogSubtabs() {
  const subtabBtns = document.querySelectorAll(".subtab-btn");
  subtabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      subtabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("subview-all").classList.toggle("hidden", btn.dataset.subtab !== "all");
      document.getElementById("subview-categories").classList.toggle("hidden", btn.dataset.subtab !== "categories");
      if (btn.dataset.subtab === "categories") showCategoryGrid();
    });
  });

  document.getElementById("categoryGrid").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-category]");
    if (deleteBtn) {
      deleteCategory(deleteBtn.dataset.deleteCategory);
      return;
    }
    const card = e.target.closest(".category-card");
    if (card) openCategoryDetail(card.dataset.category);
  });

  document.getElementById("backToCategories").addEventListener("click", showCategoryGrid);
}

// ---------- Add / Delete Category ----------

function setupAddCategory() {
  document.getElementById("addCategoryBtn").addEventListener("click", () => {
    document.getElementById("categoryForm").reset();
    openModal("categoryModalOverlay");
  });

  document.getElementById("categoryForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("c-name").value.trim();
    if (!name) return;

    if (categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      showInfo(`A category named "${name}" already exists.`);
      return;
    }

    categories.push({ name });

    closeModal("categoryModalOverlay");
    renderCategoryGrid();
    renderCategoryFilter();
    populateCategorySelect();
    saveState();
  });
}

function deleteCategory(name) {
  const inUse = products.some(p => p.category === name);

  if (inUse) {
    showInfo(`"${name}" still has products in it. Delete those products or move them to another category first, then delete this category.`);
    return;
  }

  showConfirm(`Delete category "${name}"?`, () => {
    categories = categories.filter(c => c.name !== name);
    renderCategoryGrid();
    renderCategoryFilter();
    populateCategorySelect();
    saveState();
  });
}

// ---------- Product Detail view ----------

function viewProduct(sku) {
  const p = products.find(x => x.sku === sku);
  if (!p) return;

  const status = stockStatus(p);
  const badgeClass = status === "ok" ? "ok" : status === "low" ? "low" : "out";
  const badgeText = status === "ok" ? "In Stock" : status === "low" ? "Low Stock" : "Out of Stock";
  const stockValue = p.stock * p.price;

  const history = stockMovements
    .filter(m => m.product === p.name)
    .map(m => `
      <div class="history-row">
        <span class="badge ${m.type === "in" ? "in" : "outmove"}">${m.type === "in" ? "In" : "Out"}</span>
        <span class="history-qty">${m.qty} ${p.unit}</span>
        <span class="history-meta">${m.warehouse} · ${m.ref}</span>
        <span class="history-date">${m.date}</span>
      </div>
    `).join("") || `<p class="muted">No stock movement history for this product.</p>`;

  document.getElementById("detailContent").innerHTML = `
    <div class="detail-top">
      ${p.image
        ? `<img class="product-detail-image" src="${p.image}" alt="">`
        : `<div class="product-detail-image-placeholder">${p.name.charAt(0).toUpperCase()}</div>`}
      <div>
        <h2 class="detail-title">${p.name}</h2>
        <div class="detail-sub">SKU: ${p.sku} · ${p.category}</div>
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Stock Qty</span><b>${p.stock} ${p.unit}</b></div>
      <div class="detail-stat"><span>Unit Price</span><b>${money(p.price)}</b></div>
      <div class="detail-stat"><span>Stock Value</span><b>${money(stockValue)}</b></div>
    </div>

    <div class="detail-section">
      <h4>Description</h4>
      <p class="detail-desc">${p.description || "No description added."}</p>
    </div>

    <div class="detail-section">
      <h4>Stock Movement History</h4>
      <div class="history-list">${history}</div>
    </div>
  `;

  document.getElementById("detailEditBtn").onclick = () => {
    closeModal("productDetailModalOverlay");
    editProduct(p.sku);
  };

  openModal("productDetailModalOverlay");
}

// ---------- Add / Edit Stock Movement modal ----------

let editingMovementId = null;
let selectedMovementType = "in";

function populateMovementSelects() {
  const warehouseSelect = document.getElementById("m-warehouse");
  warehouseSelect.innerHTML = warehouses.map(w => `<option value="${w.name}">${w.name}</option>`).join("");
}

function setMovementType(type) {
  selectedMovementType = type;
  document.querySelectorAll(".toggle-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.type === type);
  });
}

function openMovementModal({ product, type = "in" } = {}) {
  populateMovementSelects();
  document.getElementById("movementForm").reset();
  setMovementType(type);
  const match = product ? products.find(p => p.name === product) : null;
  setProductPickerValue(document.getElementById("m-product"), match ? match.sku : "");
  openModal("movementModalOverlay");
}

function setupAddMovement() {
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => setMovementType(btn.dataset.type));
  });

  setupProductPicker(document.getElementById("m-product"), () => {});

  document.getElementById("addMovementBtn").addEventListener("click", () => {
    editingMovementId = null;
    document.querySelector("#movementModalOverlay .modal-header h3").textContent = "New Stock Movement";
    document.querySelector("#movementForm button[type=submit]").textContent = "Save Movement";
    openMovementModal();
  });

  document.getElementById("movementForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const sku = getProductPickerSku(document.getElementById("m-product"));
    const match = products.find(p => p.sku === sku);
    if (!match) return;

    const qty = Number(document.getElementById("m-qty").value) || 0;
    const warehouse = document.getElementById("m-warehouse").value;

    if (editingMovementId) {
      const m = stockMovements.find(x => x.id === editingMovementId);
      const oldProduct = products.find(p => p.name === m.product);
      if (oldProduct) {
        if (m.type === "in") oldProduct.stock = Math.max(0, oldProduct.stock - m.qty);
        else oldProduct.stock += m.qty;
      }

      if (selectedMovementType === "out") match.stock = Math.max(0, match.stock - qty);
      else match.stock += qty;

      m.product = match.name;
      m.type = selectedMovementType;
      m.qty = qty;
      m.warehouse = warehouse;
      editingMovementId = null;
    } else {
      if (selectedMovementType === "out") match.stock = Math.max(0, match.stock - qty);
      else match.stock += qty;

      const newMovement = {
        id: movementIdCounter++,
        date: new Date().toISOString().slice(0, 10),
        product: match.name,
        type: selectedMovementType,
        qty, warehouse, ref: "MANUAL-" + Math.floor(1000 + Math.random() * 9000),
      };

      stockMovements.unshift(newMovement);
    }

    closeModal("movementModalOverlay");
    renderMovements();
    refreshCatalogView();
    saveState();
  });
}

function editMovement(id) {
  const m = stockMovements.find(x => x.id === id);
  if (!m) return;
  editingMovementId = id;
  document.querySelector("#movementModalOverlay .modal-header h3").textContent = "Edit Stock Movement";
  document.querySelector("#movementForm button[type=submit]").textContent = "Update Movement";
  openMovementModal({ product: m.product, type: m.type });
  document.getElementById("m-qty").value = m.qty;
  document.getElementById("m-warehouse").value = m.warehouse;
}

function deleteMovement(id) {
  const m = stockMovements.find(x => x.id === id);
  if (!m) return;
  showConfirm(`Deleting this ${m.type === "in" ? "Stock In" : "Stock Out"} entry for "${m.product}" (${m.qty} · ${m.ref}) will also reverse the stock change on that product. Continue?`, () => {
    const product = products.find(p => p.name === m.product);
    if (product) {
      if (m.type === "in") product.stock = Math.max(0, product.stock - m.qty);
      else product.stock += m.qty;
    }

    const idx = stockMovements.findIndex(x => x.id === id);
    if (idx > -1) stockMovements.splice(idx, 1);
    renderMovements();
    refreshCatalogView();
    saveState();
  });
}

function setupMovementRowActions() {
  document.querySelector("#movementTable tbody").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-movement]");
    const deleteBtn = e.target.closest("[data-delete-movement]");
    if (editBtn) editMovement(Number(editBtn.dataset.editMovement));
    else if (deleteBtn) deleteMovement(Number(deleteBtn.dataset.deleteMovement));
  });
}

// ---------- Raw Material CRUD ----------

let editingMaterialId = null;

function fillRawMaterialForm(r) {
  document.getElementById("rm-name").value = r.name;
  document.getElementById("rm-usedin").value = r.usedIn;
  document.getElementById("rm-unit").value = r.unit;
  document.getElementById("rm-qty").value = r.qty;
  document.getElementById("rm-reorder").value = r.reorder;
}

function setupAddRawMaterial() {
  document.getElementById("addRawMaterialBtn").addEventListener("click", () => {
    editingMaterialId = null;
    document.querySelector("#rawMaterialModalOverlay .modal-header h3").textContent = "Add Raw Material";
    document.querySelector("#rawMaterialForm button[type=submit]").textContent = "Save Raw Material";
    document.getElementById("rawMaterialForm").reset();
    openModal("rawMaterialModalOverlay");
  });

  document.getElementById("rawMaterialForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rm-name").value.trim();
    if (!name) return;

    const data = {
      name,
      usedIn: document.getElementById("rm-usedin").value.trim(),
      unit: document.getElementById("rm-unit").value.trim() || "pcs",
      qty: Number(document.getElementById("rm-qty").value) || 0,
      reorder: Number(document.getElementById("rm-reorder").value) || 0,
    };

    if (editingMaterialId) {
      Object.assign(rawMaterials.find(r => r.id === editingMaterialId), data);
    } else {
      rawMaterials.push({ id: rawMaterialIdCounter++, ...data });
    }

    editingMaterialId = null;
    closeModal("rawMaterialModalOverlay");
    renderRawMaterials();
    renderLowStock();
    saveState();
  });
}

function editRawMaterial(id) {
  const r = rawMaterials.find(x => x.id === id);
  if (!r) return;
  editingMaterialId = id;
  document.querySelector("#rawMaterialModalOverlay .modal-header h3").textContent = "Edit Raw Material";
  document.querySelector("#rawMaterialForm button[type=submit]").textContent = "Update Raw Material";
  fillRawMaterialForm(r);
  openModal("rawMaterialModalOverlay");
}

function deleteRawMaterial(id) {
  const r = rawMaterials.find(x => x.id === id);
  if (!r) return;
  showConfirm(`Delete "${r.name}"? This action cannot be undone.`, () => {
    const idx = rawMaterials.findIndex(x => x.id === id);
    if (idx > -1) rawMaterials.splice(idx, 1);
    renderRawMaterials();
    renderLowStock();
    saveState();
  });
}

function setupRawMaterialRowActions() {
  document.querySelector("#rawMaterialTable tbody").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-material]");
    const deleteBtn = e.target.closest("[data-delete-material]");
    if (editBtn) editRawMaterial(Number(editBtn.dataset.editMaterial));
    else if (deleteBtn) deleteRawMaterial(Number(deleteBtn.dataset.deleteMaterial));
  });
}

// ---------- Warehouse CRUD ----------

let editingWarehouseId = null;

function fillWarehouseForm(w) {
  document.getElementById("w-name").value = w.name;
  document.getElementById("w-location").value = w.location;
}

function setupAddWarehouse() {
  document.getElementById("addWarehouseBtn").addEventListener("click", () => {
    editingWarehouseId = null;
    document.querySelector("#warehouseModalOverlay .modal-header h3").textContent = "Add Warehouse";
    document.querySelector("#warehouseForm button[type=submit]").textContent = "Save Warehouse";
    document.getElementById("warehouseForm").reset();
    openModal("warehouseModalOverlay");
  });

  document.getElementById("warehouseForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("w-name").value.trim();
    if (!name) return;

    const data = {
      name,
      location: document.getElementById("w-location").value.trim(),
    };

    if (editingWarehouseId) {
      Object.assign(warehouses.find(w => w.id === editingWarehouseId), data);
    } else {
      warehouses.push({ id: warehouseIdCounter++, ...data });
    }

    editingWarehouseId = null;
    closeModal("warehouseModalOverlay");
    renderWarehouses();
    renderStats();
    populateMovementSelects();
    saveState();
  });
}

function editWarehouse(id) {
  const w = warehouses.find(x => x.id === id);
  if (!w) return;
  editingWarehouseId = id;
  document.querySelector("#warehouseModalOverlay .modal-header h3").textContent = "Edit Warehouse";
  document.querySelector("#warehouseForm button[type=submit]").textContent = "Update Warehouse";
  fillWarehouseForm(w);
  openModal("warehouseModalOverlay");
}

function deleteWarehouse(id) {
  const w = warehouses.find(x => x.id === id);
  if (!w) return;
  showConfirm(`Delete "${w.name}"? This action cannot be undone.`, () => {
    const idx = warehouses.findIndex(x => x.id === id);
    if (idx > -1) warehouses.splice(idx, 1);
    renderWarehouses();
    renderStats();
    saveState();
  });
}

function viewWarehouse(id) {
  const w = warehouses.find(x => x.id === id);
  if (!w) return;

  const stock = computeWarehouseStock(w.name);

  const breakdownRows = stock.breakdown.map(b => `
    <div class="history-row">
      <span class="badge in">${b.qty} ${b.unit}</span>
      <span class="history-qty">${b.name}</span>
      <span class="history-meta">${money(b.price)} / unit</span>
      <span class="history-date">${money(b.value)}</span>
    </div>
  `).join("") || `<p class="muted">No stock recorded in this warehouse yet — use Stock In/Out and set this warehouse to move products here.</p>`;

  const recentMoves = stockMovements
    .filter(m => m.warehouse === w.name)
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 8)
    .map(m => `
      <div class="history-row">
        <span class="badge ${m.type === "in" ? "in" : "outmove"}">${m.type === "in" ? "Stock In" : "Stock Out"}</span>
        <span class="history-qty">${m.qty} · ${m.product}</span>
        <span class="history-meta">${m.ref}</span>
        <span class="history-date">${m.date}</span>
      </div>
    `).join("") || `<p class="muted">No movements recorded yet.</p>`;

  document.getElementById("warehouseDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${w.name}</h2>
        <div class="detail-sub">${w.location || "—"}</div>
      </div>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Total Items</span><b>${stock.items}</b></div>
      <div class="detail-stat"><span>Stock Value</span><b>${money(stock.value)}</b></div>
      <div class="detail-stat"><span>Distinct Products</span><b>${stock.breakdown.length}</b></div>
    </div>

    <div class="detail-section"><h4>Stock by Product</h4><div class="history-list">${breakdownRows}</div></div>
    <div class="detail-section"><h4>Recent Movements</h4><div class="history-list">${recentMoves}</div></div>
  `;

  document.getElementById("warehouseDetailEditBtn").onclick = () => {
    closeModal("warehouseDetailModalOverlay");
    editWarehouse(w.id);
  };

  openModal("warehouseDetailModalOverlay");
}

function setupWarehouseCardActions() {
  document.getElementById("warehouseGrid").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-warehouse]");
    const editBtn = e.target.closest("[data-edit-warehouse]");
    const deleteBtn = e.target.closest("[data-delete-warehouse]");
    if (viewBtn) viewWarehouse(Number(viewBtn.dataset.viewWarehouse));
    else if (editBtn) editWarehouse(Number(editBtn.dataset.editWarehouse));
    else if (deleteBtn) deleteWarehouse(Number(deleteBtn.dataset.deleteWarehouse));
  });
}

// ---------- Low Stock Alerts quick actions ----------

function setupLowStockActions() {
  document.getElementById("lowStockList").addEventListener("click", (e) => {
    const restockBtn = e.target.closest("[data-restock-product]");
    const editBtn = e.target.closest("[data-edit-material]");
    if (restockBtn) {
      const p = products.find(x => x.sku === restockBtn.dataset.restockProduct);
      if (!p) return;
      editingMovementId = null;
      document.querySelector("#movementModalOverlay .modal-header h3").textContent = "New Stock Movement";
      document.querySelector("#movementForm button[type=submit]").textContent = "Save Movement";
      openMovementModal({ product: p.name, type: "in" });
    } else if (editBtn) {
      editRawMaterial(Number(editBtn.dataset.editMaterial));
    }
  });
}

// =====================================================================
// PURCHASE / PROCUREMENT MODULE
// =====================================================================

// ---------- Mock data ----------

const vendors = [
  { id: 1, name: "Rahman Steel & Engineering", contact: "Md. Rahman", phone: "01711-000001", email: "sales@rahmansteel.com", address: "Tejgaon Industrial Area, Dhaka" },
  { id: 2, name: "ColdTech Refrigeration Supplies", contact: "Nasrin Akter", phone: "01819-000002", email: "info@coldtech.com", address: "Konabari, Gazipur" },
  { id: 3, name: "BD Compressor House", contact: "Kamal Hossain", phone: "01911-000003", email: "orders@bdcompressor.com", address: "Chattogram EPZ" },
];
let vendorIdCounter = 4;

const purchaseOrders = [
  {
    id: 1, poNumber: "PO-3001", vendorId: 1, date: "2026-08-10", status: "pending",
    items: [
      { sku: "GR-1001", name: "Gondola Rack 4-Tier", qty: 20, receivedQty: 0, unitPrice: 8000 },
      { sku: "GR-1002", name: "Gondola Rack Wall Unit", qty: 10, receivedQty: 0, unitPrice: 5800 },
    ],
    notes: "Deliver to Main Godown by end of month.",
  },
  {
    id: 2, poNumber: "PO-3002", vendorId: 2, date: "2026-08-08", status: "approved",
    items: [
      { sku: "CH-3001", name: "Display Chiller 4-Door", qty: 5, receivedQty: 0, unitPrice: 90000 },
    ],
    notes: "",
  },
  {
    id: 3, poNumber: "PO-3003", vendorId: 3, date: "2026-08-05", status: "partially_received",
    items: [
      { sku: "CH-3002", name: "Chiller Compressor Unit", qty: 10, receivedQty: 4, unitPrice: 26000 },
    ],
    notes: "",
  },
];
let poIdCounter = 4;

const goodsReceipts = [
  { id: 1, grnNumber: "GRN-5001", poId: 3, date: "2026-08-07", warehouse: "Main Godown", items: [{ sku: "CH-3002", name: "Chiller Compressor Unit", qty: 4 }] },
];
let grnIdCounter = 2;

const vendorPayments = [
  { id: 1, vendorId: 3, poId: 3, date: "2026-08-07", amount: 80000, method: "Bank Transfer", accountId: 3, note: "Partial payment against GRN-5001" },
  { id: 2, vendorId: 1, poId: null, date: "2026-08-01", amount: 50000, method: "Cash", accountId: 2, note: "Advance payment" },
];
let paymentIdCounter = 3;

const vendorReturns = [];
let vendorReturnIdCounter = 1;

const salesReturns = [];
let salesReturnIdCounter = 1;

// Shared line-item-row builder for return forms (Vendor Return / Sales Return) — product + qty only.
function returnLineItemRowHtml(sku = "") {
  return `
    <div class="line-item-row return-line-row">
      ${productPickerHtml(sku)}
      <input type="number" class="return-line-qty" min="1" value="1">
      <button type="button" class="line-item-remove" title="Remove">✕</button>
    </div>
  `;
}

function addReturnLineRow(containerId) {
  const container = document.getElementById(containerId);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = returnLineItemRowHtml().trim();
  const row = wrapper.firstElementChild;
  container.appendChild(row);
  setupProductPicker(row.querySelector(".product-picker"), () => {});
  row.querySelector(".line-item-remove").addEventListener("click", () => row.remove());
}

function resetReturnLineItems(containerId) {
  document.getElementById(containerId).innerHTML = "";
  addReturnLineRow(containerId);
}

// ---------- Helpers ----------

function poTotal(po) {
  return po.items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
}

function poPaid(po) {
  return vendorPayments.filter(p => p.poId === po.id).reduce((s, p) => s + p.amount, 0);
}

function poOutstanding(po) {
  return poTotal(po) - poPaid(po);
}

function poStatusBadgeClass(status) {
  return { pending: "pending", approved: "approved", rejected: "rejected", partially_received: "partial", received: "done" }[status] || "ok";
}

function poStatusLabel(status) {
  return { pending: "Pending Approval", approved: "Approved", rejected: "Rejected", partially_received: "Partially Received", received: "Received" }[status] || status;
}

function vendorPayable(vendorId) {
  return purchaseOrders
    .filter(po => po.vendorId === vendorId && ["approved", "partially_received", "received"].includes(po.status))
    .reduce((s, po) => s + poTotal(po), 0);
}

function vendorPaid(vendorId) {
  return vendorPayments.filter(p => p.vendorId === vendorId).reduce((s, p) => s + p.amount, 0);
}

function vendorOutstanding(vendorId) {
  return vendorPayable(vendorId) - vendorPaid(vendorId);
}

// ---------- Render: purchase stat cards ----------

let purchaseDateRange = { active: false };

function renderPurchaseStats() {
  const totalVendors = vendors.length;
  const pendingApprovals = purchaseOrders.filter(po => po.status === "pending").length;

  let card3, card4;
  if (purchaseDateRange.active) {
    const posInRange = purchaseOrders.filter(po => inDateRange(po.date, purchaseDateRange));
    const purchaseValueInRange = posInRange.reduce((s, po) => s + poTotal(po), 0);
    card3 = { icon: "📄", value: posInRange.length, label: `Purchase Orders (${purchaseDateRange.label})`, cls: "" };
    card4 = { icon: "💸", value: money(purchaseValueInRange), label: `Purchase Value (${purchaseDateRange.label})`, cls: "" };
  } else {
    const activePOs = purchaseOrders.filter(po => ["pending", "approved", "partially_received"].includes(po.status)).length;
    const totalOutstanding = vendors.reduce((s, v) => s + Math.max(0, vendorOutstanding(v.id)), 0);
    card3 = { icon: "📄", value: activePOs, label: "Active Purchase Orders", cls: "" };
    card4 = { icon: "💸", value: money(totalOutstanding), label: "Total Outstanding Payable", cls: totalOutstanding > 0 ? "warn" : "good" };
  }

  const cards = [
    { icon: "🤝", value: totalVendors, label: "Total Vendors", cls: "" },
    card3,
    { icon: "⏳", value: pendingApprovals, label: "Pending Approvals", cls: pendingApprovals > 0 ? "warn" : "" },
    card4,
  ];

  document.getElementById("purchaseStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

// ---------- Vendors ----------

function vendorLogoHtml(v, size = 32) {
  if (v.logo) {
    return `<img class="product-thumb" src="${v.logo}" alt="" style="width:${size}px;height:${size}px;">`;
  }
  return `<div class="product-thumb-placeholder" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.4)}px;">${(v.name || "?").charAt(0).toUpperCase()}</div>`;
}

function renderVendors(searchTerm = "") {
  const tbody = document.querySelector("#vendorTable tbody");
  const term = searchTerm.trim().toLowerCase();
  const rows = vendors.filter(v => !term || v.name.toLowerCase().includes(term));

  tbody.innerHTML = rows.map(v => {
    const payable = vendorPayable(v.id);
    const paid = vendorPaid(v.id);
    const outstanding = payable - paid;
    return `
      <tr>
        <td>
          <div class="product-name-cell">
            ${vendorLogoHtml(v, 32)}
            <span class="product-name-link" data-view-vendor="${v.id}">${v.name}</span>
          </div>
        </td>
        <td>${v.contact || "—"}</td>
        <td>${v.phone || "—"}</td>
        <td>${money(payable)}</td>
        <td>${money(paid)}</td>
        <td class="${outstanding > 0 ? "text-danger" : "text-success"}">${money(outstanding)}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm" title="View" data-view-vendor="${v.id}">👁️</button>
            <button class="icon-btn-sm" title="Edit" data-edit-vendor="${v.id}">✏️</button>
            <button class="icon-btn-sm danger" title="Delete" data-delete-vendor="${v.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No vendors found</td></tr>`;
}

let editingVendorId = null;

let pendingVendorLogo = null;

function updateVendorLogoPreview() {
  const preview = document.getElementById("v-logo-preview");
  preview.innerHTML = pendingVendorLogo
    ? `<img src="${pendingVendorLogo}" alt="">`
    : `<span class="image-preview-placeholder">No logo</span>`;
}

function fillVendorForm(v) {
  document.getElementById("v-name").value = v.name;
  document.getElementById("v-contact").value = v.contact || "";
  document.getElementById("v-phone").value = v.phone || "";
  document.getElementById("v-email").value = v.email || "";
  document.getElementById("v-address").value = v.address || "";
  document.getElementById("v-bank-name").value = v.bankName || "";
  document.getElementById("v-bank-account").value = v.bankAccount || "";
  document.getElementById("v-bank-address").value = v.bankAddress || "";
  document.getElementById("v-bkash").value = v.bkash || "";
  document.getElementById("v-nagad").value = v.nagad || "";
  pendingVendorLogo = v.logo || null;
  updateVendorLogoPreview();
}

function setupAddVendor() {
  document.getElementById("addVendorBtn").addEventListener("click", () => {
    editingVendorId = null;
    document.querySelector("#vendorModalOverlay .modal-header h3").textContent = "Add New Vendor";
    document.querySelector("#vendorForm button[type=submit]").textContent = "Save Vendor";
    document.getElementById("vendorForm").reset();
    pendingVendorLogo = null;
    updateVendorLogoPreview();
    openModal("vendorModalOverlay");
  });

  document.getElementById("v-logo-pick").addEventListener("click", () => document.getElementById("v-logo").click());

  document.getElementById("v-logo").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingVendorLogo = reader.result;
      updateVendorLogoPreview();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("v-logo-remove").addEventListener("click", () => {
    pendingVendorLogo = null;
    document.getElementById("v-logo").value = "";
    updateVendorLogoPreview();
  });

  document.getElementById("vendorForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("v-name").value.trim();
    if (!name) return;

    const data = {
      name,
      logo: pendingVendorLogo,
      contact: document.getElementById("v-contact").value.trim(),
      phone: document.getElementById("v-phone").value.trim(),
      email: document.getElementById("v-email").value.trim(),
      address: document.getElementById("v-address").value.trim(),
      bankName: document.getElementById("v-bank-name").value.trim(),
      bankAccount: document.getElementById("v-bank-account").value.trim(),
      bankAddress: document.getElementById("v-bank-address").value.trim(),
      bkash: document.getElementById("v-bkash").value.trim(),
      nagad: document.getElementById("v-nagad").value.trim(),
    };

    if (editingVendorId) {
      Object.assign(vendors.find(v => v.id === editingVendorId), data);
    } else {
      vendors.push({ id: vendorIdCounter++, ...data });
    }

    editingVendorId = null;
    closeModal("vendorModalOverlay");
    refreshPurchaseView();
  });
}

function editVendor(id) {
  const v = vendors.find(x => x.id === id);
  if (!v) return;
  editingVendorId = id;
  document.querySelector("#vendorModalOverlay .modal-header h3").textContent = "Edit Vendor";
  document.querySelector("#vendorForm button[type=submit]").textContent = "Update Vendor";
  fillVendorForm(v);
  openModal("vendorModalOverlay");
}

function deleteVendor(id) {
  const v = vendors.find(x => x.id === id);
  if (!v) return;

  const hasPOs = purchaseOrders.some(po => po.vendorId === id);
  if (hasPOs) {
    showInfo(`"${v.name}" has purchase orders on record and can't be deleted. Remove those purchase orders first.`);
    return;
  }

  showConfirm(`Delete vendor "${v.name}"? This action cannot be undone.`, () => {
    const idx = vendors.findIndex(x => x.id === id);
    if (idx > -1) vendors.splice(idx, 1);
    refreshPurchaseView();
  });
}

function viewVendor(id) {
  const v = vendors.find(x => x.id === id);
  if (!v) return;

  const payable = vendorPayable(id);
  const paid = vendorPaid(id);
  const outstanding = payable - paid;

  const vendorPOs = purchaseOrders.filter(po => po.vendorId === id);
  const poRows = vendorPOs.map(po => `
    <div class="history-row">
      <span class="badge ${poStatusBadgeClass(po.status)}">${poStatusLabel(po.status)}</span>
      <span class="history-qty">${po.poNumber}</span>
      <span class="history-meta">${po.items.length} item(s) · ${money(poTotal(po))}</span>
      <span class="history-date">${po.date}</span>
    </div>
  `).join("") || `<p class="muted">No purchase orders yet.</p>`;

  const vendorPays = vendorPayments.filter(p => p.vendorId === id);
  const payRows = vendorPays.map(p => {
    const po = p.poId ? purchaseOrders.find(x => x.id === p.poId) : null;
    return `
      <div class="history-row">
        <span class="badge in">${p.method}</span>
        <span class="history-qty">${money(p.amount)}</span>
        <span class="history-meta">${po ? po.poNumber : "General"}${p.note ? " · " + p.note : ""}</span>
        <span class="history-date">${p.date}</span>
      </div>
    `;
  }).join("") || `<p class="muted">No payments recorded yet.</p>`;

  document.getElementById("vendorDetailContent").innerHTML = `
    <div class="detail-top">
      ${v.logo
        ? `<img class="product-detail-image" src="${v.logo}" alt="">`
        : `<div class="product-detail-image-placeholder">${v.name.charAt(0).toUpperCase()}</div>`}
      <div>
        <h2 class="detail-title">${v.name}</h2>
        <div class="detail-sub">${v.contact || "No contact person"} · ${v.phone || "No phone"}</div>
        ${v.email ? `<div class="detail-sub">${v.email}</div>` : ""}
        ${v.address ? `<div class="detail-sub">${v.address}</div>` : ""}
      </div>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Total Payable</span><b>${money(payable)}</b></div>
      <div class="detail-stat"><span>Total Paid</span><b>${money(paid)}</b></div>
      <div class="detail-stat"><span>Outstanding</span><b class="${outstanding > 0 ? "text-danger" : "text-success"}">${money(outstanding)}</b></div>
      <div class="detail-stat"><span>Purchase Orders</span><b>${vendorPOs.length}</b></div>
    </div>

    ${(v.bankName || v.bankAccount || v.bankAddress || v.bkash || v.nagad) ? `
    <div class="detail-section">
      <h4>Bank Details</h4>
      <p class="detail-desc">
        ${v.bankName ? `${v.bankName}<br>` : ""}
        ${v.bankAccount ? `A/C: ${v.bankAccount}<br>` : ""}
        ${v.bankAddress ? `${v.bankAddress}<br>` : ""}
        ${v.bkash ? `Bkash: ${v.bkash}<br>` : ""}
        ${v.nagad ? `Nagad: ${v.nagad}` : ""}
      </p>
    </div>
    ` : ""}

    <div class="detail-section">
      <h4>Purchase Order History</h4>
      <div class="history-list">${poRows}</div>
    </div>

    <div class="detail-section">
      <h4>Payment History</h4>
      <div class="history-list">${payRows}</div>
    </div>
  `;

  document.getElementById("vendorDetailEditBtn").onclick = () => {
    closeModal("vendorDetailModalOverlay");
    editVendor(v.id);
  };

  openModal("vendorDetailModalOverlay");
}

function setupVendorRowActions() {
  document.querySelector("#vendorTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-vendor]");
    const editBtn = e.target.closest("[data-edit-vendor]");
    const deleteBtn = e.target.closest("[data-delete-vendor]");
    if (viewBtn) viewVendor(Number(viewBtn.dataset.viewVendor));
    else if (editBtn) editVendor(Number(editBtn.dataset.editVendor));
    else if (deleteBtn) deleteVendor(Number(deleteBtn.dataset.deleteVendor));
  });
}

// ---------- Purchase Orders ----------

function renderPOs(searchTerm = "") {
  const tbody = document.querySelector("#poTable tbody");
  const term = searchTerm.trim().toLowerCase();

  const rows = purchaseOrders
    .filter(po => {
      const vendor = vendors.find(v => v.id === po.vendorId);
      return !term || po.poNumber.toLowerCase().includes(term) || (vendor && vendor.name.toLowerCase().includes(term));
    })
    .slice()
    .sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(po => {
    const vendor = vendors.find(v => v.id === po.vendorId);
    return `
      <tr>
        <td><span class="product-name-link" data-view-po="${po.id}">${po.poNumber}</span></td>
        <td>${vendor ? vendor.name : "—"}</td>
        <td>${po.date}</td>
        <td>${po.items.length}</td>
        <td>${money(poTotal(po))}</td>
        <td><span class="badge ${poStatusBadgeClass(po.status)}">${poStatusLabel(po.status)}</span></td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm" title="View" data-view-po="${po.id}">👁️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No purchase orders yet</td></tr>`;
}

let poLineIndex = 0;

function poLineItemRowHtml(index, item = {}) {
  return `
    <div class="line-item-row" data-line-index="${index}">
      ${productPickerHtml(item.sku)}
      <input type="number" class="po-line-qty" min="1" value="${item.qty || 1}">
      <input type="number" class="po-line-price" min="0" value="${item.unitPrice ?? ""}">
      <div class="line-item-static po-line-total">৳0</div>
      <button type="button" class="line-item-remove" title="Remove">✕</button>
    </div>
  `;
}

function updatePoLineTotal(row) {
  const qty = Number(row.querySelector(".po-line-qty").value) || 0;
  const price = Number(row.querySelector(".po-line-price").value) || 0;
  row.querySelector(".po-line-total").textContent = money(qty * price);
}

function updatePoTotal() {
  const rows = document.querySelectorAll("#poLineItems .line-item-row");
  let total = 0;
  rows.forEach(row => {
    const qty = Number(row.querySelector(".po-line-qty").value) || 0;
    const price = Number(row.querySelector(".po-line-price").value) || 0;
    total += qty * price;
  });
  document.getElementById("poTotalValue").textContent = money(total);
}

function addPoLineRow(prefill = {}) {
  const container = document.getElementById("poLineItems");
  const index = poLineIndex++;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = poLineItemRowHtml(index, prefill).trim();
  const row = wrapper.firstElementChild;
  container.appendChild(row);

  const picker = row.querySelector(".product-picker");
  const priceInput = row.querySelector(".po-line-price");
  const qtyInput = row.querySelector(".po-line-qty");

  if (prefill.unitPrice === undefined) {
    const p = products.find(p => p.sku === getProductPickerSku(picker));
    priceInput.value = p ? p.price : 0;
  }

  setupProductPicker(picker, (sku) => {
    const p = products.find(p => p.sku === sku);
    priceInput.value = p ? p.price : 0;
    updatePoLineTotal(row);
    updatePoTotal();
  });

  [qtyInput, priceInput].forEach(input => {
    input.addEventListener("input", () => {
      updatePoLineTotal(row);
      updatePoTotal();
    });
  });

  row.querySelector(".line-item-remove").addEventListener("click", () => {
    row.remove();
    updatePoTotal();
  });

  updatePoLineTotal(row);
  updatePoTotal();
}

function resetPoLineItems() {
  document.getElementById("poLineItems").innerHTML = "";
  poLineIndex = 0;
  addPoLineRow();
}

function setupAddPO() {
  const vendorPicker = document.getElementById("po-vendor");
  setupVendorPicker(vendorPicker);

  document.getElementById("addPoBtn").addEventListener("click", () => {
    if (vendors.length === 0) {
      showInfo("Add a vendor first before creating a purchase order.");
      return;
    }
    setVendorPickerValue(vendorPicker, "");
    document.getElementById("poForm").reset();
    resetPoLineItems();
    openModal("poModalOverlay");
  });

  document.getElementById("poAddLineBtn").addEventListener("click", () => addPoLineRow());

  document.getElementById("poForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const vendorId = getVendorPickerId(vendorPicker);
    if (!vendorId) {
      showInfo("Please choose a vendor.");
      return;
    }

    const rows = document.querySelectorAll("#poLineItems .line-item-row");
    const items = [];
    rows.forEach(row => {
      const sku = getProductPickerSku(row.querySelector(".product-picker"));
      const product = products.find(p => p.sku === sku);
      if (!product) return;
      const qty = Number(row.querySelector(".po-line-qty").value) || 0;
      const unitPrice = Number(row.querySelector(".po-line-price").value) || 0;
      if (qty <= 0) return;
      items.push({ sku: product.sku, name: product.name, qty, receivedQty: 0, unitPrice });
    });

    if (items.length === 0) {
      showInfo("Add at least one item with a quantity greater than 0.");
      return;
    }

    purchaseOrders.unshift({
      id: poIdCounter,
      poNumber: "PO-" + (3000 + poIdCounter),
      vendorId,
      date: new Date().toISOString().slice(0, 10),
      status: "pending",
      items,
      notes: document.getElementById("po-notes").value.trim(),
    });
    poIdCounter++;

    closeModal("poModalOverlay");
    refreshPurchaseView();
  });
}

function viewPO(id) {
  const po = purchaseOrders.find(x => x.id === id);
  if (!po) return;
  const vendor = vendors.find(v => v.id === po.vendorId);

  const itemRows = po.items.map(i => `
    <tr>
      <td>${i.name}</td>
      <td>${i.qty}</td>
      <td>${i.receivedQty || 0}</td>
      <td>${money(i.unitPrice)}</td>
      <td>${money(i.qty * i.unitPrice)}</td>
    </tr>
  `).join("");

  const total = poTotal(po);
  const paid = poPaid(po);
  const due = total - paid;
  const poPayments = vendorPayments.filter(p => p.poId === po.id);
  const payRows = poPayments.slice().sort((a, b) => b.id - a.id).map(p => `
    <div class="history-row">
      <span class="badge in">${p.method}</span>
      <span class="history-qty">${money(p.amount)}</span>
      <span class="history-meta">${p.note || "—"}</span>
      <span class="history-date">${p.date}</span>
    </div>
  `).join("") || `<p class="muted">No payments recorded against this PO yet.</p>`;

  document.getElementById("poDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${po.poNumber}</h2>
        <div class="detail-sub">${vendor ? vendor.name : "Unknown vendor"} · ${po.date}</div>
        <span class="badge ${poStatusBadgeClass(po.status)}">${poStatusLabel(po.status)}</span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Product</th><th>Ordered</th><th>Received</th><th>Unit Price</th><th>Line Total</th></tr></thead>
        <tbody>${itemRows}</tbody>
      </table>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Total PO Value</span><b>${money(total)}</b></div>
      <div class="detail-stat"><span>Paid</span><b>${money(paid)}</b></div>
      <div class="detail-stat"><span>Due</span><b class="${due > 0 ? "text-danger" : "text-success"}">${money(due)}</b></div>
    </div>

    ${po.notes ? `<div class="detail-section"><h4>Notes</h4><p class="detail-desc">${po.notes}</p></div>` : ""}

    <div class="detail-section">
      <h4>Payment History</h4>
      <div class="history-list">${payRows}</div>
    </div>
  `;

  const actions = document.getElementById("poDetailActions");
  let actionsHtml = `<button type="button" class="btn-ghost" data-close="poDetailModalOverlay">Close</button>`;
  actionsHtml += `<button type="button" class="btn-ghost" id="poPrintBtn">🖨️ Print PO</button>`;

  if (po.status === "pending") {
    actionsHtml += `<button type="button" class="btn-danger" id="poRejectBtn">❌ Reject</button>`;
    actionsHtml += `<button type="button" class="btn-primary" id="poApproveBtn">✅ Approve</button>`;
  }
  if (po.status === "approved" || po.status === "partially_received") {
    actionsHtml += `<button type="button" class="btn-primary" id="poReceiveBtn">📥 Receive Goods</button>`;
  }
  if (["approved", "partially_received", "received"].includes(po.status) && due > 0) {
    actionsHtml += `<button type="button" class="btn-primary" id="poPayBtn">💰 Record Payment</button>`;
  }
  if (po.status === "pending" || po.status === "rejected") {
    actionsHtml += `<button type="button" class="btn-danger" id="poDeleteBtn">🗑️ Delete PO</button>`;
  }

  actions.innerHTML = actionsHtml;

  document.getElementById("poPrintBtn").onclick = () => printPurchaseOrder(po.id);

  if (["approved", "partially_received", "received"].includes(po.status) && due > 0) {
    document.getElementById("poPayBtn").onclick = () => {
      closeModal("poDetailModalOverlay");
      openPaymentModal(po.vendorId, po.id);
    };
  }

  if (po.status === "pending") {
    document.getElementById("poApproveBtn").onclick = () => {
      po.status = "approved";
      logActivity(`Approved Purchase Order ${po.poNumber}`);
      closeModal("poDetailModalOverlay");
      refreshPurchaseView();
    };
    document.getElementById("poRejectBtn").onclick = () => {
      showConfirm(`Reject ${po.poNumber}? The vendor won't be able to deliver against this PO.`, () => {
        po.status = "rejected";
        logActivity(`Rejected Purchase Order ${po.poNumber}`);
        closeModal("poDetailModalOverlay");
        refreshPurchaseView();
      });
    };
  }

  if (po.status === "approved" || po.status === "partially_received") {
    document.getElementById("poReceiveBtn").onclick = () => {
      closeModal("poDetailModalOverlay");
      openGrnModal(po.id);
    };
  }

  if (po.status === "pending" || po.status === "rejected") {
    document.getElementById("poDeleteBtn").onclick = () => {
      showConfirm(`Delete ${po.poNumber}? This action cannot be undone.`, () => {
        const idx = purchaseOrders.findIndex(x => x.id === po.id);
        if (idx > -1) purchaseOrders.splice(idx, 1);
        closeModal("poDetailModalOverlay");
        refreshPurchaseView();
      });
    };
  }

  openModal("poDetailModalOverlay");
}

function setupPoRowActions() {
  document.querySelector("#poTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-po]");
    if (viewBtn) viewPO(Number(viewBtn.dataset.viewPo));
  });
}

function buildPOPrintHtml(po) {
  const vendor = vendors.find(v => v.id === po.vendorId);

  const itemRows = po.items.map((i, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td>${i.name}</td>
      <td class="num">${i.qty}</td>
      <td class="num">${money(i.unitPrice)}</td>
      <td class="num">${money(i.qty * i.unitPrice)}</td>
    </tr>
  `).join("");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Purchase Order — ${po.poNumber}</title>
<style>${letterheadCss()}</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml("PURCHASE ORDER", `Date: ${po.date}<br>PO No: ${po.poNumber}<br>Status: ${poStatusLabel(po.status)}`)}

  <div class="print-parties">
    <div class="print-party-label">Vendor</div>
    <div class="print-party-name">${vendor ? vendor.name : "—"}</div>
    <div class="print-party-detail">
      ${vendor && vendor.contact ? vendor.contact + "<br>" : ""}
      ${vendor && vendor.phone ? vendor.phone : ""}${vendor && vendor.email ? " · " + vendor.email : ""}<br>
      ${vendor && vendor.address ? vendor.address : ""}
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th class="num">Qty</th>
        <th class="num">Unit Price</th>
        <th class="num">Line Total</th>
      </tr>
    </thead>
    <tbody>
      ${itemRows}
    </tbody>
  </table>

  <div class="print-total-row">
    <div class="print-total-box">
      <div class="print-total-line">
        <span>Total</span>
        <span>${money(poTotal(po))}</span>
      </div>
    </div>
  </div>

  ${po.notes ? `<div class="print-parties"><div class="print-party-label">Notes</div><div class="print-party-detail">${po.notes}</div></div>` : ""}

  <div class="print-signatures">
    <div class="print-sig-line">Prepared By</div>
    <div class="print-sig-line">Approved By</div>
  </div>

  <div class="doc-note">This is a system-generated purchase order from ${COMPANY_INFO.name} ERP.</div>
  </div>
</body>
</html>`;
}

function printPurchaseOrder(id) {
  const po = purchaseOrders.find(x => x.id === id);
  if (!po) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildPOPrintHtml(po));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

// ---------- Goods Receipt ----------

function eligiblePOsForReceipt() {
  return purchaseOrders.filter(po => po.status === "approved" || po.status === "partially_received");
}

function populateGrnPoSelect(preselectId) {
  const select = document.getElementById("grn-po");
  const eligible = eligiblePOsForReceipt();
  select.innerHTML = eligible.map(po => {
    const vendor = vendors.find(v => v.id === po.vendorId);
    return `<option value="${po.id}">${po.poNumber} — ${vendor ? vendor.name : "—"}</option>`;
  }).join("");
  if (preselectId) select.value = preselectId;
}

function populateGrnWarehouseSelect() {
  const select = document.getElementById("grn-warehouse");
  select.innerHTML = warehouses.map(w => `<option value="${w.name}">${w.name}</option>`).join("");
}

function renderGrnLineItems(poId) {
  const po = purchaseOrders.find(x => x.id === Number(poId));
  const container = document.getElementById("grnLineItems");
  if (!po) {
    container.innerHTML = `<p class="muted">Select a purchase order to see its items.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="grn-line-row">
      <div class="line-item-static"><b>Product</b></div>
      <div class="line-item-static"><b>Ordered</b></div>
      <div class="line-item-static"><b>Remaining</b></div>
      <div class="line-item-static"><b>Receive Now</b></div>
    </div>
  ` + po.items.map((i, idx) => {
    const remaining = i.qty - (i.receivedQty || 0);
    return `
      <div class="grn-line-row" data-grn-index="${idx}">
        <div class="line-item-static">${i.name}</div>
        <div class="line-item-static">${i.qty}</div>
        <div class="line-item-static">${remaining}</div>
        <input type="number" class="grn-line-qty" min="0" max="${remaining}" value="${remaining}" ${remaining <= 0 ? "disabled" : ""}>
      </div>
    `;
  }).join("");
}

function openGrnModal(preselectPoId) {
  const eligible = eligiblePOsForReceipt();
  if (eligible.length === 0) {
    showInfo("No approved purchase orders are awaiting receipt right now.");
    return;
  }
  populateGrnPoSelect(preselectPoId);
  populateGrnWarehouseSelect();
  document.getElementById("grnForm").reset();
  if (preselectPoId) document.getElementById("grn-po").value = preselectPoId;
  renderGrnLineItems(document.getElementById("grn-po").value);
  openModal("grnModalOverlay");
}

function setupAddGrn() {
  document.getElementById("addGrnBtn").addEventListener("click", () => openGrnModal());

  document.getElementById("grn-po").addEventListener("change", (e) => {
    renderGrnLineItems(e.target.value);
  });

  document.getElementById("grnForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const poId = Number(document.getElementById("grn-po").value);
    const po = purchaseOrders.find(x => x.id === poId);
    if (!po) return;

    const warehouse = document.getElementById("grn-warehouse").value;
    const rows = document.querySelectorAll("#grnLineItems .grn-line-row[data-grn-index]");
    const receivedItems = [];

    for (const row of rows) {
      const idx = Number(row.dataset.grnIndex);
      const input = row.querySelector(".grn-line-qty");
      const receiveQty = Number(input.value) || 0;
      if (receiveQty <= 0) continue;

      const item = po.items[idx];
      const remaining = item.qty - (item.receivedQty || 0);
      const actualQty = Math.min(receiveQty, remaining);
      if (actualQty <= 0) continue;

      item.receivedQty = (item.receivedQty || 0) + actualQty;

      const product = products.find(p => p.sku === item.sku);
      if (product) {
        product.stock += actualQty;
      }

      receivedItems.push({ sku: item.sku, name: item.name, qty: actualQty });

      stockMovements.unshift({
        id: movementIdCounter++,
        date: new Date().toISOString().slice(0, 10),
        product: item.name,
        type: "in",
        qty: actualQty,
        warehouse,
        ref: `GRN-${grnIdCounter} / ${po.poNumber}`,
      });
    }

    if (receivedItems.length === 0) {
      showInfo("Enter a quantity greater than 0 for at least one item.");
      return;
    }

    const fullyReceived = po.items.every(i => (i.receivedQty || 0) >= i.qty);
    po.status = fullyReceived ? "received" : "partially_received";

    goodsReceipts.unshift({
      id: grnIdCounter,
      grnNumber: "GRN-" + (5000 + grnIdCounter),
      poId: po.id,
      date: new Date().toISOString().slice(0, 10),
      warehouse,
      items: receivedItems,
    });
    grnIdCounter++;

    closeModal("grnModalOverlay");
    renderMovements();
    refreshCatalogView();
    refreshPurchaseView();
    saveState();
  });
}

function renderGrns() {
  const tbody = document.querySelector("#grnTable tbody");
  const rows = goodsReceipts.slice().sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(g => {
    const po = purchaseOrders.find(x => x.id === g.poId);
    const vendor = po ? vendors.find(v => v.id === po.vendorId) : null;
    const itemsSummary = g.items.map(i => `${i.name} (${i.qty})`).join(", ");
    return `
      <tr>
        <td>${g.grnNumber}</td>
        <td>${po ? po.poNumber : "—"}</td>
        <td>${vendor ? vendor.name : "—"}</td>
        <td>${g.date}</td>
        <td>${itemsSummary}</td>
        <td>${g.warehouse}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm" title="View PO" data-view-po="${g.poId}">👁️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No goods receipts yet</td></tr>`;
}

function setupGrnRowActions() {
  document.querySelector("#grnTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-po]");
    if (viewBtn) viewPO(Number(viewBtn.dataset.viewPo));
  });
}

// ---------- Vendor Payments ----------

function renderPayments() {
  const tbody = document.querySelector("#paymentTable tbody");
  const rows = vendorPayments.slice().sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(p => {
    const vendor = vendors.find(v => v.id === p.vendorId);
    const po = p.poId ? purchaseOrders.find(x => x.id === p.poId) : null;
    return `
      <tr>
        <td>${p.date}</td>
        <td>${vendor ? vendor.name : "—"}</td>
        <td>${po ? po.poNumber : "General"}</td>
        <td>${money(p.amount)}</td>
        <td>${p.method}</td>
        <td>${p.accountId ? accountName(p.accountId) : "—"}</td>
        <td>${p.note || "—"}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm danger" title="Delete" data-delete-payment="${p.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No payments recorded yet</td></tr>`;
}

function populatePayVendorSelect() {
  const select = document.getElementById("pay-vendor");
  select.innerHTML = vendors.map(v => `<option value="${v.id}">${v.name}</option>`).join("");
}

function populatePayPoSelect(vendorId) {
  const select = document.getElementById("pay-po");
  const vendorPOs = purchaseOrders.filter(po => po.vendorId === Number(vendorId) && po.status !== "rejected" && poOutstanding(po) > 0);
  select.innerHTML = `<option value="">— General Payment (no PO) —</option>` +
    vendorPOs.map(po => `<option value="${po.id}">${po.poNumber} · ${money(poOutstanding(po))} due</option>`).join("");
}

// Opens the Record Payment modal, optionally pre-selecting a vendor and/or a specific PO
// (used by the PO detail view's "Record Payment" shortcut).
function openPaymentModal(prefillVendorId = null, prefillPoId = null) {
  if (vendors.length === 0) {
    showInfo("Add a vendor first before recording a payment.");
    return false;
  }
  if (cashAccounts.length === 0) {
    showInfo("Add a cash or bank account first before recording a payment.");
    return false;
  }
  document.getElementById("paymentForm").reset();
  populatePayVendorSelect();
  if (prefillVendorId) document.getElementById("pay-vendor").value = prefillVendorId;
  populatePayPoSelect(document.getElementById("pay-vendor").value);
  if (prefillPoId) document.getElementById("pay-po").value = prefillPoId;
  populateAccountSelect("pay-account");
  openModal("paymentModalOverlay");
  return true;
}

function setupAddPayment() {
  document.getElementById("addPaymentBtn").addEventListener("click", () => openPaymentModal());

  document.getElementById("pay-vendor").addEventListener("change", (e) => {
    populatePayPoSelect(e.target.value);
  });

  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const vendorId = Number(document.getElementById("pay-vendor").value);
    if (!vendorId) return;

    const amount = Number(document.getElementById("pay-amount").value) || 0;
    if (amount <= 0) return;

    const poIdRaw = document.getElementById("pay-po").value;
    const accountId = Number(document.getElementById("pay-account").value);
    if (!ensureSufficientBalance(accountId, amount)) return;

    vendorPayments.unshift({
      id: paymentIdCounter++,
      vendorId,
      poId: poIdRaw ? Number(poIdRaw) : null,
      date: new Date().toISOString().slice(0, 10),
      amount,
      method: document.getElementById("pay-method").value,
      accountId,
      note: document.getElementById("pay-note").value.trim(),
    });
    logActivity(`Recorded a vendor payment of ${money(amount)}`);

    closeModal("paymentModalOverlay");
    refreshPurchaseView();
  });
}

function deletePayment(id) {
  const p = vendorPayments.find(x => x.id === id);
  if (!p) return;
  showConfirm(`Delete this payment of ${money(p.amount)}? This action cannot be undone.`, () => {
    const idx = vendorPayments.findIndex(x => x.id === id);
    if (idx > -1) vendorPayments.splice(idx, 1);
    refreshPurchaseView();
  });
}

function setupPaymentRowActions() {
  document.querySelector("#paymentTable tbody").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-payment]");
    if (deleteBtn) deletePayment(Number(deleteBtn.dataset.deletePayment));
  });
}

// ---------- Vendor Returns ----------

function openVendorReturnModal() {
  if (vendors.length === 0) {
    showInfo("Add a vendor first before recording a return.");
    return;
  }
  document.getElementById("vendorReturnForm").reset();
  setVendorPickerValue(document.getElementById("vr-vendor"), "");
  resetReturnLineItems("vrLineItems");
  openModal("vendorReturnModalOverlay");
}

function setupAddVendorReturn() {
  const vendorPicker = document.getElementById("vr-vendor");
  setupVendorPicker(vendorPicker);

  document.getElementById("addVendorReturnBtn").addEventListener("click", openVendorReturnModal);
  document.getElementById("vrAddLineBtn").addEventListener("click", () => addReturnLineRow("vrLineItems"));

  document.getElementById("vendorReturnForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const vendorId = getVendorPickerId(vendorPicker);
    if (!vendorId) {
      showInfo("Please choose a vendor.");
      return;
    }

    const rows = document.querySelectorAll("#vrLineItems .return-line-row");
    const items = [];
    const movementIds = [];
    const returnNumber = `VR-${6000 + vendorReturnIdCounter}`;

    rows.forEach(row => {
      const sku = getProductPickerSku(row.querySelector(".product-picker"));
      const product = products.find(p => p.sku === sku);
      if (!product) return;
      const qty = Number(row.querySelector(".return-line-qty").value) || 0;
      if (qty <= 0) return;

      product.stock = Math.max(0, product.stock - qty);
      const movement = {
        id: movementIdCounter++,
        date: new Date().toISOString().slice(0, 10),
        product: product.name,
        type: "out",
        qty,
        warehouse: warehouses[0] ? warehouses[0].name : "Main Godown",
        ref: returnNumber,
      };
      stockMovements.unshift(movement);
      movementIds.push(movement.id);
      items.push({ sku: product.sku, name: product.name, qty });
    });

    if (items.length === 0) {
      showInfo("Add at least one item with a quantity greater than 0.");
      return;
    }

    const vendor = vendors.find(v => v.id === vendorId);
    vendorReturns.unshift({
      id: vendorReturnIdCounter,
      returnNumber,
      vendorId,
      date: new Date().toISOString().slice(0, 10),
      items,
      notes: document.getElementById("vr-notes").value.trim(),
      movementIds,
    });
    vendorReturnIdCounter++;

    logActivity(`Recorded a vendor return (${returnNumber}) for ${vendor ? vendor.name : "a vendor"}`);
    closeModal("vendorReturnModalOverlay");
    renderMovements();
    refreshCatalogView();
    refreshPurchaseView();
  });
}

function renderVendorReturnTable() {
  const tbody = document.querySelector("#vendorReturnTable tbody");
  const rows = vendorReturns.slice().sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(r => {
    const vendor = vendors.find(v => v.id === r.vendorId);
    const itemsSummary = r.items.map(i => `${i.name} (${i.qty})`).join(", ");
    return `
      <tr>
        <td>${r.returnNumber}</td>
        <td>${vendor ? vendor.name : "—"}</td>
        <td>${r.date}</td>
        <td>${itemsSummary}</td>
        <td>${r.notes || "—"}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm danger" title="Delete" data-delete-vendor-return="${r.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6" style="color:var(--text-muted); text-align:center; padding:24px;">No vendor returns yet</td></tr>`;
}

function deleteVendorReturn(id) {
  const r = vendorReturns.find(x => x.id === id);
  if (!r) return;
  showConfirm(`Delete return ${r.returnNumber}? The returned stock will be added back.`, () => {
    r.items.forEach(i => {
      const product = products.find(p => p.sku === i.sku);
      if (product) product.stock += i.qty;
    });
    (r.movementIds || []).forEach(mid => {
      const idx = stockMovements.findIndex(m => m.id === mid);
      if (idx > -1) stockMovements.splice(idx, 1);
    });
    const idx = vendorReturns.findIndex(x => x.id === id);
    if (idx > -1) vendorReturns.splice(idx, 1);
    renderMovements();
    refreshCatalogView();
    refreshPurchaseView();
  });
}

function setupVendorReturnRowActions() {
  document.querySelector("#vendorReturnTable tbody").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-vendor-return]");
    if (deleteBtn) deleteVendorReturn(Number(deleteBtn.dataset.deleteVendorReturn));
  });
}

// ---------- Purchase module: search + refresh ----------

function setupPurchaseSearch() {
  document.getElementById("purchaseSearch").addEventListener("input", (e) => {
    renderVendors(e.target.value);
    renderPOs(e.target.value);
  });
}

function refreshPurchaseView() {
  renderPurchaseStats();
  renderVendors(document.getElementById("purchaseSearch").value);
  renderPOs(document.getElementById("purchaseSearch").value);
  renderGrns();
  renderPayments();
  renderVendorReturnTable();
  saveState();
}

function initPurchaseModule() {
  refreshPurchaseView();
  setupPurchaseTabs();
  setupPurchaseSearch();
  setupAddVendor();
  setupVendorRowActions();
  setupAddPO();
  setupPoRowActions();
  setupAddGrn();
  setupGrnRowActions();
  setupAddPayment();
  setupPaymentRowActions();
  setupAddVendorReturn();
  setupVendorReturnRowActions();
  setupModuleDateFilter("purchaseDateFilter", (range) => {
    purchaseDateRange = range;
    renderPurchaseStats();
  });
}

// =====================================================================
// SALES / CRM MODULE
// =====================================================================

// ---------- Mock data ----------

const DEAL_STAGES = [
  { key: "new", label: "New Lead" },
  { key: "contacted", label: "Contacted" },
  { key: "qualified", label: "Qualified" },
  { key: "proposal", label: "Proposal Sent" },
  { key: "negotiation", label: "Negotiation" },
  { key: "won", label: "Won" },
  { key: "lost", label: "Lost" },
];

const companies = [
  { id: 1, name: "Shwapno Superstore Ltd.", industry: "Retail / Supershop", phone: "01712-100001", email: "procurement@shwapno.com", address: "Gulshan, Dhaka" },
  { id: 2, name: "Khana's Kitchen & Restaurant", industry: "Restaurant / HoReCa", phone: "01812-100002", email: "admin@khanaskitchen.com", address: "Banani, Dhaka" },
  { id: 3, name: "Agora Family Needs", industry: "Retail / Supershop", phone: "01912-100003", email: "purchase@agorabd.com", address: "Dhanmondi, Dhaka" },
];
let companyIdCounter = 4;

const contacts = [
  { id: 1, companyId: 1, name: "Farhana Islam", designation: "Procurement Manager", phone: "01712-100011", email: "farhana@shwapno.com" },
  { id: 2, companyId: 2, name: "Shakil Ahmed", designation: "Owner", phone: "01812-100022", email: "shakil@khanaskitchen.com" },
  { id: 3, companyId: 3, name: "Tanvir Hasan", designation: "Store Operations Head", phone: "01912-100033", email: "tanvir@agorabd.com" },
];
let contactIdCounter = 4;

const deals = [
  { id: 1, title: "Initial Inquiry - New Franchise", companyId: 3, contactId: 3, value: 150000, stage: "new", expectedClose: "2026-09-30", employeeId: 3, notes: "" },
  { id: 2, title: "Kitchen Hood Inquiry", companyId: 2, contactId: 2, value: 95000, stage: "contacted", expectedClose: "2026-09-10", employeeId: 2, notes: "Follow-up call scheduled." },
  { id: 3, title: "Dhanmondi Cold Room Installation", companyId: 3, contactId: 3, value: 680000, stage: "qualified", expectedClose: "2026-09-15", employeeId: 3, notes: "" },
  { id: 4, title: "New Kitchen Equipment for Banani Outlet", companyId: 2, contactId: 2, value: 320000, stage: "proposal", expectedClose: "2026-09-05", employeeId: 2, notes: "Sent proposal for hood + prep tables + freezer." },
  { id: 5, title: "Gulshan Branch Gondola Rack Setup", companyId: 1, contactId: 1, value: 450000, stage: "negotiation", expectedClose: "2026-08-25", employeeId: 1, notes: "Negotiating bulk discount for 40 units." },
  { id: 6, title: "Display Chiller Bulk Order", companyId: 1, contactId: 1, value: 294000, stage: "won", expectedClose: "2026-08-05", employeeId: 1, notes: "Converted to Quotation QT-4001 → Sales Order SO-7001." },
  { id: 7, title: "Freezer Replacement - Old Branch", companyId: 2, contactId: 2, value: 126000, stage: "lost", expectedClose: "2026-07-20", employeeId: 2, notes: "Went with a competitor on price." },
];
let dealIdCounter = 8;

const quotations = [];
let quoteIdCounter = 1;

const salesOrders = [
  { id: 1, soNumber: "SO-7001", companyId: 1, contactId: 1, employeeId: 1, quotationId: 1, date: "2026-08-05", status: "partially_delivered", items: [{ sku: "CH-3001", name: "Display Chiller 4-Door", qty: 3, deliveredQty: 2, unitPrice: 98000 }], notes: "Converted from QT-4001" },
  { id: 2, soNumber: "SO-7002", companyId: 2, contactId: 2, employeeId: 2, quotationId: null, date: "2026-08-09", status: "delivered", items: [{ sku: "KE-5001", name: "Commercial Kitchen Hood", qty: 2, deliveredQty: 2, unitPrice: 16500 }, { sku: "KE-5002", name: "Stainless Prep Table", qty: 4, deliveredQty: 4, unitPrice: 10500 }], notes: "" },
  { id: 3, soNumber: "SO-7003", companyId: 3, contactId: 3, employeeId: 3, quotationId: null, date: "2026-07-20", status: "delivered", items: [{ sku: "GR-1001", name: "Gondola Rack 4-Tier", qty: 5, deliveredQty: 5, unitPrice: 8500 }, { sku: "CR-2001", name: "Cold Room Panel (100mm)", qty: 20, deliveredQty: 20, unitPrice: 3200 }], notes: "" },
  { id: 4, soNumber: "SO-7004", companyId: 1, contactId: 1, employeeId: 1, quotationId: null, date: "2026-07-10", status: "delivered", items: [{ sku: "FZ-4001", name: "Chest Freezer 400L", qty: 4, deliveredQty: 4, unitPrice: 41000 }], notes: "" },
  { id: 5, soNumber: "SO-7005", companyId: 2, contactId: 2, employeeId: 2, quotationId: null, date: "2026-07-25", status: "delivered", items: [{ sku: "KE-5001", name: "Commercial Kitchen Hood", qty: 1, deliveredQty: 1, unitPrice: 15500 }], notes: "" },
];
let soIdCounter = 6;

// ---------- Helpers ----------

function companyName(id) {
  const c = companies.find(x => x.id === id);
  return c ? c.name : "—";
}

function contactName(id) {
  const c = contacts.find(x => x.id === id);
  return c ? c.name : "—";
}

function employeeName(id) {
  if (!id) return "Unassigned";
  const e = employees.find(x => x.id === id);
  return e ? e.name : "Unassigned";
}

function dealStageLabel(key) {
  const s = DEAL_STAGES.find(x => x.key === key);
  return s ? s.label : key;
}

function dealStageBadgeClass(stage) {
  return { new: "draft", contacted: "sent", qualified: "pending", proposal: "pending", negotiation: "partial", won: "done", lost: "rejected" }[stage] || "draft";
}

function quoteTotal(q) {
  return q.items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
}

function soTotal(so) {
  return so.items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
}

function quoteStatusBadgeClass(status) {
  return { draft: "draft", sent: "sent", accepted: "done", rejected: "rejected" }[status] || "draft";
}

function quoteStatusLabel(status) {
  return { draft: "Draft", sent: "Sent", accepted: "Accepted", rejected: "Rejected" }[status] || status;
}

function soStatusBadgeClass(status) {
  return { confirmed: "approved", partially_delivered: "partial", delivered: "done", cancelled: "rejected" }[status] || "approved";
}

function soStatusLabel(status) {
  return { confirmed: "Confirmed", partially_delivered: "Partially Delivered", delivered: "Delivered", cancelled: "Cancelled" }[status] || status;
}

function companySalesValue(companyId) {
  return salesOrders.filter(so => so.companyId === companyId && so.status !== "cancelled").reduce((s, so) => s + soTotal(so), 0);
}

function companyOpenDeals(companyId) {
  return deals.filter(d => d.companyId === companyId && !["won", "lost"].includes(d.stage)).length;
}

// ---------- Customer payments (who owes how much) ----------

const customerPayments = [];
let customerPaymentIdCounter = 1;

function customerPaid(companyId) {
  return customerPayments.filter(p => p.companyId === companyId).reduce((s, p) => s + p.amount, 0);
}

function customerOutstanding(companyId) {
  return companySalesValue(companyId) - customerPaid(companyId);
}

// ---------- Render: sales stat cards ----------

function renderSalesStats() {
  const totalCompanies = companies.length;
  const activeDeals = deals.filter(d => !["won", "lost"].includes(d.stage));
  const pipelineValue = activeDeals.reduce((s, d) => s + d.value, 0);
  const openOrders = salesOrders.filter(so => ["confirmed", "partially_delivered"].includes(so.status)).length;

  const cards = [
    { icon: "🏢", value: totalCompanies, label: "Total Companies", cls: "" },
    { icon: "📈", value: activeDeals.length, label: "Active Deals", cls: "" },
    { icon: "💰", value: money(pipelineValue), label: "Pipeline Value", cls: "good" },
    { icon: "📦", value: openOrders, label: "Open Sales Orders", cls: openOrders > 0 ? "warn" : "" },
  ];

  document.getElementById("salesStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

// ---------- Pipeline (Kanban) ----------

function renderDealBoard() {
  const board = document.getElementById("dealBoard");

  board.innerHTML = DEAL_STAGES.map(stage => {
    const stageDeals = deals.filter(d => d.stage === stage.key);
    const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);

    const cards = stageDeals.map(d => `
      <div class="deal-card" draggable="true" data-deal-id="${d.id}">
        <div class="deal-card-title" data-view-deal="${d.id}">${d.title}</div>
        <div class="deal-card-company">${companyName(d.companyId)}</div>
        <div class="deal-card-value">${money(d.value)}</div>
        <div class="deal-card-meta">Close: ${d.expectedClose || "—"} · ${employeeName(d.employeeId)}</div>
        <select class="deal-stage-select" data-deal-stage="${d.id}">
          ${DEAL_STAGES.map(s => `<option value="${s.key}" ${s.key === d.stage ? "selected" : ""}>${s.label}</option>`).join("")}
        </select>
      </div>
    `).join("") || `<p class="muted" style="font-size:12px;">No deals</p>`;

    return `
      <div class="kanban-column stage-${stage.key}">
        <div class="kanban-column-header">
          <div class="kanban-column-title">${stage.label}</div>
          <div class="kanban-column-meta">${stageDeals.length} deals · ${money(stageValue)}</div>
        </div>
        <div class="kanban-cards" data-stage="${stage.key}">${cards}</div>
      </div>
    `;
  }).join("");
}

function setupDealBoardActions() {
  const board = document.getElementById("dealBoard");

  board.addEventListener("click", (e) => {
    const titleEl = e.target.closest("[data-view-deal]");
    if (titleEl) viewDeal(Number(titleEl.dataset.viewDeal));
  });

  board.addEventListener("change", (e) => {
    const select = e.target.closest("[data-deal-stage]");
    if (select) {
      const deal = deals.find(d => d.id === Number(select.dataset.dealStage));
      if (deal) {
        deal.stage = select.value;
        refreshSalesView();
      }
    }
  });

  // ---- Drag and drop: drag a card into another column to move its stage ----

  board.addEventListener("dragstart", (e) => {
    const card = e.target.closest(".deal-card");
    if (!card) return;
    card.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", card.dataset.dealId);
  });

  board.addEventListener("dragend", (e) => {
    const card = e.target.closest(".deal-card");
    if (card) card.classList.remove("dragging");
    board.querySelectorAll(".kanban-cards.drag-over").forEach(col => col.classList.remove("drag-over"));
  });

  board.addEventListener("dragover", (e) => {
    const column = e.target.closest(".kanban-cards");
    if (!column) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    column.classList.add("drag-over");
  });

  board.addEventListener("dragleave", (e) => {
    const column = e.target.closest(".kanban-cards");
    if (column && !column.contains(e.relatedTarget)) column.classList.remove("drag-over");
  });

  board.addEventListener("drop", (e) => {
    const column = e.target.closest(".kanban-cards");
    if (!column) return;
    e.preventDefault();
    column.classList.remove("drag-over");

    const dealId = Number(e.dataTransfer.getData("text/plain"));
    const targetStage = column.dataset.stage;
    const deal = deals.find(d => d.id === dealId);
    if (!deal || !targetStage || deal.stage === targetStage) return;

    showConfirm(
      `Move "${deal.title}" from ${dealStageLabel(deal.stage)} to ${dealStageLabel(targetStage)}?`,
      () => {
        deal.stage = targetStage;
        refreshSalesView();
      },
      "Move"
    );
  });
}

let editingDealId = null;

function populateDealSelects() {
  document.getElementById("d-company").innerHTML = companies.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  updateDealContactSelect(document.getElementById("d-company").value);
  document.getElementById("d-stage").innerHTML = DEAL_STAGES.map(s => `<option value="${s.key}">${s.label}</option>`).join("");
  document.getElementById("d-employee").innerHTML = `<option value="">— Unassigned —</option>` + employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function updateDealContactSelect(companyId) {
  const select = document.getElementById("d-contact");
  const companyContacts = contacts.filter(c => c.companyId === Number(companyId));
  select.innerHTML = `<option value="">— No specific contact —</option>` + companyContacts.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function fillDealForm(d) {
  document.getElementById("d-title").value = d.title;
  document.getElementById("d-company").value = d.companyId;
  updateDealContactSelect(d.companyId);
  document.getElementById("d-contact").value = d.contactId || "";
  document.getElementById("d-value").value = d.value;
  document.getElementById("d-close").value = d.expectedClose || "";
  document.getElementById("d-stage").value = d.stage;
  document.getElementById("d-employee").value = d.employeeId || "";
  document.getElementById("d-notes").value = d.notes || "";
}

function setupAddDeal() {
  document.getElementById("addDealBtn").addEventListener("click", () => {
    if (companies.length === 0) {
      showInfo("Add a company first before creating a deal.");
      return;
    }
    editingDealId = null;
    document.querySelector("#dealModalOverlay .modal-header h3").textContent = "New Deal";
    document.querySelector("#dealForm button[type=submit]").textContent = "Save Deal";
    document.getElementById("dealForm").reset();
    populateDealSelects();
    document.getElementById("d-stage").value = "new";
    openModal("dealModalOverlay");
  });

  document.getElementById("d-company").addEventListener("change", (e) => updateDealContactSelect(e.target.value));

  document.getElementById("dealForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("d-title").value.trim();
    if (!title) return;

    const data = {
      title,
      companyId: Number(document.getElementById("d-company").value),
      contactId: document.getElementById("d-contact").value ? Number(document.getElementById("d-contact").value) : null,
      value: Number(document.getElementById("d-value").value) || 0,
      expectedClose: document.getElementById("d-close").value,
      stage: document.getElementById("d-stage").value,
      employeeId: document.getElementById("d-employee").value ? Number(document.getElementById("d-employee").value) : null,
      notes: document.getElementById("d-notes").value.trim(),
    };

    if (editingDealId) {
      Object.assign(deals.find(d => d.id === editingDealId), data);
    } else {
      deals.push({ id: dealIdCounter++, ...data });
    }

    editingDealId = null;
    closeModal("dealModalOverlay");
    refreshSalesView();
  });
}

function editDeal(id) {
  const d = deals.find(x => x.id === id);
  if (!d) return;
  editingDealId = id;
  document.querySelector("#dealModalOverlay .modal-header h3").textContent = "Edit Deal";
  document.querySelector("#dealForm button[type=submit]").textContent = "Update Deal";
  populateDealSelects();
  fillDealForm(d);
  openModal("dealModalOverlay");
}

function deleteDeal(id) {
  const d = deals.find(x => x.id === id);
  if (!d) return;
  showConfirm(`Delete deal "${d.title}"? This action cannot be undone.`, () => {
    const idx = deals.findIndex(x => x.id === id);
    if (idx > -1) deals.splice(idx, 1);
    closeModal("dealDetailModalOverlay");
    refreshSalesView();
  });
}

function viewDeal(id) {
  const d = deals.find(x => x.id === id);
  if (!d) return;

  document.getElementById("dealDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${d.title}</h2>
        <div class="detail-sub">${companyName(d.companyId)}${d.contactId ? " · " + contactName(d.contactId) : ""}</div>
        <span class="badge ${dealStageBadgeClass(d.stage)}">${dealStageLabel(d.stage)}</span>
      </div>
    </div>
    <div class="detail-stats">
      <div class="detail-stat"><span>Estimated Value</span><b>${money(d.value)}</b></div>
      <div class="detail-stat"><span>Expected Close</span><b>${d.expectedClose || "—"}</b></div>
      <div class="detail-stat"><span>Stage</span><b>${dealStageLabel(d.stage)}</b></div>
      <div class="detail-stat"><span>Sales Rep</span><b>${employeeName(d.employeeId)}</b></div>
    </div>
    ${d.notes ? `<div class="detail-section"><h4>Notes</h4><p class="detail-desc">${d.notes}</p></div>` : ""}
  `;

  const actions = document.getElementById("dealDetailActions");
  actions.innerHTML = `
    <button type="button" class="btn-ghost" data-close="dealDetailModalOverlay">Close</button>
    <button type="button" class="btn-danger" id="dealDeleteBtn">🗑️ Delete</button>
    <button type="button" class="btn-ghost" id="dealToQuoteBtn">📄 Create Quotation</button>
    <button type="button" class="btn-primary" id="dealEditBtn">✏️ Edit</button>
  `;

  document.getElementById("dealDeleteBtn").onclick = () => deleteDeal(d.id);
  document.getElementById("dealEditBtn").onclick = () => {
    closeModal("dealDetailModalOverlay");
    editDeal(d.id);
  };
  document.getElementById("dealToQuoteBtn").onclick = () => {
    closeModal("dealDetailModalOverlay");
    openQuoteModal({ companyId: d.companyId, contactId: d.contactId, employeeId: d.employeeId });
  };

  openModal("dealDetailModalOverlay");
}

// ---------- Companies ----------

function renderCompanies(searchTerm = "") {
  const tbody = document.querySelector("#companyTable tbody");
  const term = searchTerm.trim().toLowerCase();
  const rows = companies.filter(c => !term || c.name.toLowerCase().includes(term));

  tbody.innerHTML = rows.map(c => {
    const totalSales = companySalesValue(c.id);
    const paid = customerPaid(c.id);
    const outstanding = totalSales - paid;
    return `
    <tr>
      <td><span class="product-name-link" data-view-company="${c.id}">${c.name}</span></td>
      <td>${c.industry || "—"}</td>
      <td>${c.phone || "—"}</td>
      <td>${companyOpenDeals(c.id)}</td>
      <td>${money(totalSales)}</td>
      <td>${money(paid)}</td>
      <td class="${outstanding > 0 ? "text-danger" : "text-success"}">${money(outstanding)}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="View" data-view-company="${c.id}">👁️</button>
          <button class="icon-btn-sm" title="Edit" data-edit-company="${c.id}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-company="${c.id}">🗑️</button>
        </div>
      </td>
    </tr>
  `;
  }).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No companies found</td></tr>`;
}

let editingCompanyId = null;

function fillCompanyForm(c) {
  document.getElementById("co-name").value = c.name;
  document.getElementById("co-industry").value = c.industry || "";
  document.getElementById("co-phone").value = c.phone || "";
  document.getElementById("co-email").value = c.email || "";
  document.getElementById("co-address").value = c.address || "";
}

function setupAddCompany() {
  document.getElementById("addCompanyBtn").addEventListener("click", () => {
    editingCompanyId = null;
    document.querySelector("#companyModalOverlay .modal-header h3").textContent = "Add New Company";
    document.querySelector("#companyForm button[type=submit]").textContent = "Save Company";
    document.getElementById("companyForm").reset();
    openModal("companyModalOverlay");
  });

  document.getElementById("companyForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("co-name").value.trim();
    if (!name) return;

    const data = {
      name,
      industry: document.getElementById("co-industry").value.trim(),
      phone: document.getElementById("co-phone").value.trim(),
      email: document.getElementById("co-email").value.trim(),
      address: document.getElementById("co-address").value.trim(),
    };

    if (editingCompanyId) {
      Object.assign(companies.find(c => c.id === editingCompanyId), data);
    } else {
      companies.push({ id: companyIdCounter++, ...data });
    }

    editingCompanyId = null;
    closeModal("companyModalOverlay");
    refreshSalesView();
  });
}

function editCompany(id) {
  const c = companies.find(x => x.id === id);
  if (!c) return;
  editingCompanyId = id;
  document.querySelector("#companyModalOverlay .modal-header h3").textContent = "Edit Company";
  document.querySelector("#companyForm button[type=submit]").textContent = "Update Company";
  fillCompanyForm(c);
  openModal("companyModalOverlay");
}

function deleteCompany(id) {
  const c = companies.find(x => x.id === id);
  if (!c) return;

  const inUse = contacts.some(x => x.companyId === id) || deals.some(x => x.companyId === id) ||
    quotations.some(x => x.companyId === id) || salesOrders.some(x => x.companyId === id);

  if (inUse) {
    showInfo(`"${c.name}" has contacts, deals, quotations or sales orders on record and can't be deleted. Remove those first.`);
    return;
  }

  showConfirm(`Delete company "${c.name}"? This action cannot be undone.`, () => {
    const idx = companies.findIndex(x => x.id === id);
    if (idx > -1) companies.splice(idx, 1);
    refreshSalesView();
  });
}

function viewCompany(id) {
  const c = companies.find(x => x.id === id);
  if (!c) return;

  const companyContacts = contacts.filter(x => x.companyId === id);
  const contactRows = companyContacts.map(ct => `
    <div class="history-row">
      <span class="badge sent">${ct.designation || "Contact"}</span>
      <span class="history-qty">${ct.name}</span>
      <span class="history-meta">${ct.phone || "—"}${ct.email ? " · " + ct.email : ""}</span>
      <span class="history-date"></span>
    </div>
  `).join("") || `<p class="muted">No contacts yet.</p>`;

  const companyDeals = deals.filter(x => x.companyId === id);
  const dealRows = companyDeals.map(d => `
    <div class="history-row">
      <span class="badge ${dealStageBadgeClass(d.stage)}">${dealStageLabel(d.stage)}</span>
      <span class="history-qty">${d.title}</span>
      <span class="history-meta">${money(d.value)}</span>
      <span class="history-date">${d.expectedClose || ""}</span>
    </div>
  `).join("") || `<p class="muted">No deals yet.</p>`;

  const companyOrders = salesOrders.filter(x => x.companyId === id);
  const orderRows = companyOrders.map(so => `
    <div class="history-row">
      <span class="badge ${soStatusBadgeClass(so.status)}">${soStatusLabel(so.status)}</span>
      <span class="history-qty">${so.soNumber}</span>
      <span class="history-meta">${money(soTotal(so))}</span>
      <span class="history-date">${so.date}</span>
    </div>
  `).join("") || `<p class="muted">No sales orders yet.</p>`;

  const companyPays = customerPayments.filter(p => p.companyId === id);
  const payRows = companyPays.map(p => {
    const so = p.soId ? salesOrders.find(x => x.id === p.soId) : null;
    return `
      <div class="history-row">
        <span class="badge in">${p.method}</span>
        <span class="history-qty">${money(p.amount)}</span>
        <span class="history-meta">${so ? so.soNumber : "General"}${p.note ? " · " + p.note : ""}</span>
        <span class="history-date">${p.date}</span>
      </div>
    `;
  }).join("") || `<p class="muted">No payments recorded yet.</p>`;

  const totalSales = companySalesValue(id);
  const paid = customerPaid(id);
  const outstanding = totalSales - paid;

  document.getElementById("companyDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${c.name}</h2>
        <div class="detail-sub">${c.industry || "—"}${c.phone ? " · " + c.phone : ""}</div>
        ${c.email ? `<div class="detail-sub">${c.email}</div>` : ""}
        ${c.address ? `<div class="detail-sub">${c.address}</div>` : ""}
      </div>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Total Sales</span><b>${money(totalSales)}</b></div>
      <div class="detail-stat"><span>Total Paid</span><b>${money(paid)}</b></div>
      <div class="detail-stat"><span>Outstanding</span><b class="${outstanding > 0 ? "text-danger" : "text-success"}">${money(outstanding)}</b></div>
      <div class="detail-stat"><span>Open Deals</span><b>${companyOpenDeals(id)}</b></div>
    </div>

    <div class="detail-section"><h4>Contacts</h4><div class="history-list">${contactRows}</div></div>
    <div class="detail-section"><h4>Deals</h4><div class="history-list">${dealRows}</div></div>
    <div class="detail-section"><h4>Sales Orders</h4><div class="history-list">${orderRows}</div></div>
    <div class="detail-section"><h4>Payments</h4><div class="history-list">${payRows}</div></div>
  `;

  document.getElementById("companyDetailEditBtn").onclick = () => {
    closeModal("companyDetailModalOverlay");
    editCompany(c.id);
  };

  openModal("companyDetailModalOverlay");
}

function setupCompanyRowActions() {
  document.querySelector("#companyTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-company]");
    const editBtn = e.target.closest("[data-edit-company]");
    const deleteBtn = e.target.closest("[data-delete-company]");
    if (viewBtn) viewCompany(Number(viewBtn.dataset.viewCompany));
    else if (editBtn) editCompany(Number(editBtn.dataset.editCompany));
    else if (deleteBtn) deleteCompany(Number(deleteBtn.dataset.deleteCompany));
  });
}

// ---------- Contacts ----------

function renderContacts(searchTerm = "") {
  const tbody = document.querySelector("#contactTable tbody");
  const term = searchTerm.trim().toLowerCase();
  const rows = contacts.filter(ct => !term || ct.name.toLowerCase().includes(term));

  tbody.innerHTML = rows.map(ct => `
    <tr>
      <td>${ct.name}</td>
      <td>${companyName(ct.companyId)}</td>
      <td>${ct.designation || "—"}</td>
      <td>${ct.phone || "—"}</td>
      <td>${ct.email || "—"}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="Edit" data-edit-contact="${ct.id}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-contact="${ct.id}">🗑️</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="6" style="color:var(--text-muted); text-align:center; padding:24px;">No contacts found</td></tr>`;
}

let editingContactId = null;

function fillContactForm(ct) {
  document.getElementById("ct-name").value = ct.name;
  setCompanyPickerValue(document.getElementById("ct-company"), ct.companyId);
  document.getElementById("ct-designation").value = ct.designation || "";
  document.getElementById("ct-phone").value = ct.phone || "";
  document.getElementById("ct-email").value = ct.email || "";
}

function setupAddContact() {
  const companyPicker = document.getElementById("ct-company");
  setupCompanyPicker(companyPicker);

  document.getElementById("addContactBtn").addEventListener("click", () => {
    if (companies.length === 0) {
      showInfo("Add a company first before creating a contact.");
      return;
    }
    editingContactId = null;
    document.querySelector("#contactModalOverlay .modal-header h3").textContent = "Add New Contact";
    document.querySelector("#contactForm button[type=submit]").textContent = "Save Contact";
    document.getElementById("contactForm").reset();
    setCompanyPickerValue(companyPicker, "");
    openModal("contactModalOverlay");
  });

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("ct-name").value.trim();
    if (!name) return;

    const companyId = getCompanyPickerId(companyPicker);
    if (!companyId) {
      showInfo("Please choose a company.");
      return;
    }

    const data = {
      name,
      companyId,
      designation: document.getElementById("ct-designation").value.trim(),
      phone: document.getElementById("ct-phone").value.trim(),
      email: document.getElementById("ct-email").value.trim(),
    };

    if (editingContactId) {
      Object.assign(contacts.find(c => c.id === editingContactId), data);
    } else {
      contacts.push({ id: contactIdCounter++, ...data });
    }

    editingContactId = null;
    closeModal("contactModalOverlay");
    refreshSalesView();
  });
}

function editContact(id) {
  const ct = contacts.find(x => x.id === id);
  if (!ct) return;
  editingContactId = id;
  document.querySelector("#contactModalOverlay .modal-header h3").textContent = "Edit Contact";
  document.querySelector("#contactForm button[type=submit]").textContent = "Update Contact";
  fillContactForm(ct);
  openModal("contactModalOverlay");
}

function deleteContact(id) {
  const ct = contacts.find(x => x.id === id);
  if (!ct) return;
  showConfirm(`Delete contact "${ct.name}"? This action cannot be undone.`, () => {
    const idx = contacts.findIndex(x => x.id === id);
    if (idx > -1) contacts.splice(idx, 1);
    refreshSalesView();
  });
}

function setupContactRowActions() {
  document.querySelector("#contactTable tbody").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-contact]");
    const deleteBtn = e.target.closest("[data-delete-contact]");
    if (editBtn) editContact(Number(editBtn.dataset.editContact));
    else if (deleteBtn) deleteContact(Number(deleteBtn.dataset.deleteContact));
  });
}

function setupContactsSubtabs() {
  const btns = document.querySelectorAll(".csub-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("csub-companies").classList.toggle("hidden", btn.dataset.csub !== "companies");
      document.getElementById("csub-contacts").classList.toggle("hidden", btn.dataset.csub !== "contacts");
    });
  });
}

// ---------- Quotations ----------

let quoteLineIndex = 0;
let editingQuoteId = null;

function quoteLineItemRowHtml(index, item = {}) {
  return `
    <div class="line-item-row" data-line-index="${index}">
      ${productPickerHtml(item.sku)}
      <input type="number" class="quote-line-qty" min="1" value="${item.qty || 1}">
      <input type="number" class="quote-line-price" min="0" value="${item.unitPrice ?? ""}">
      <div class="line-item-static quote-line-total">৳0</div>
      <button type="button" class="line-item-remove" title="Remove">✕</button>
    </div>
  `;
}

function quoteLineMinPrice(row) {
  const sku = getProductPickerSku(row.querySelector(".product-picker"));
  const product = products.find(p => p.sku === sku);
  return product ? product.price : 0;
}

// Product's catalog price is the floor — user can quote higher, never lower.
// An empty price field falls back to that floor.
function quoteLineEffectivePrice(row) {
  const priceInput = row.querySelector(".quote-line-price");
  const minPrice = quoteLineMinPrice(row);
  if (priceInput.value === "") return minPrice;
  return Math.max(Number(priceInput.value) || 0, minPrice);
}

function enforceQuoteLineMinPrice(row) {
  const priceInput = row.querySelector(".quote-line-price");
  const minPrice = quoteLineMinPrice(row);
  if (priceInput.value !== "" && Number(priceInput.value) < minPrice) {
    priceInput.value = minPrice;
  }
}

function syncQuoteLinePricePlaceholder(row) {
  const priceInput = row.querySelector(".quote-line-price");
  const minPrice = quoteLineMinPrice(row);
  priceInput.placeholder = `Unit price ৳${minPrice}`;
  priceInput.min = minPrice;
}

function updateQuoteLineTotal(row) {
  const qty = Number(row.querySelector(".quote-line-qty").value) || 0;
  const price = quoteLineEffectivePrice(row);
  row.querySelector(".quote-line-total").textContent = money(qty * price);
}

function updateQuoteTotal() {
  const rows = document.querySelectorAll("#quoteLineItems .line-item-row");
  let total = 0;
  rows.forEach(row => {
    const qty = Number(row.querySelector(".quote-line-qty").value) || 0;
    const price = quoteLineEffectivePrice(row);
    total += qty * price;
  });
  document.getElementById("quoteTotalValue").textContent = money(total);
}

function addQuoteLineRow(prefill = {}) {
  const container = document.getElementById("quoteLineItems");
  const index = quoteLineIndex++;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = quoteLineItemRowHtml(index, prefill).trim();
  const row = wrapper.firstElementChild;
  container.appendChild(row);

  const picker = row.querySelector(".product-picker");
  const priceInput = row.querySelector(".quote-line-price");
  const qtyInput = row.querySelector(".quote-line-qty");

  syncQuoteLinePricePlaceholder(row);

  setupProductPicker(picker, () => {
    priceInput.value = "";
    syncQuoteLinePricePlaceholder(row);
    updateQuoteLineTotal(row);
    updateQuoteTotal();
  });

  priceInput.addEventListener("blur", () => {
    enforceQuoteLineMinPrice(row);
    updateQuoteLineTotal(row);
    updateQuoteTotal();
  });

  [qtyInput, priceInput].forEach(input => {
    input.addEventListener("input", () => {
      updateQuoteLineTotal(row);
      updateQuoteTotal();
    });
  });

  row.querySelector(".line-item-remove").addEventListener("click", () => {
    row.remove();
    updateQuoteTotal();
  });

  updateQuoteLineTotal(row);
  updateQuoteTotal();
}

function resetQuoteLineItems(items = []) {
  document.getElementById("quoteLineItems").innerHTML = "";
  quoteLineIndex = 0;
  if (items.length) {
    items.forEach(item => addQuoteLineRow(item));
  } else {
    addQuoteLineRow();
  }
}

function updateQuoteContactSelect(companyId) {
  const select = document.getElementById("q-contact");
  const companyContacts = contacts.filter(c => c.companyId === Number(companyId));
  select.innerHTML = `<option value="">— No specific contact —</option>` + companyContacts.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function populateQuoteEmployeeSelect() {
  document.getElementById("q-employee").innerHTML = `<option value="">— Unassigned —</option>` + employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function openQuoteModal(prefill = {}, quote = null) {
  if (companies.length === 0) {
    showInfo("Add a company first before creating a quotation.");
    return;
  }

  editingQuoteId = quote ? quote.id : null;
  document.getElementById("quoteModalTitle").textContent = quote ? "Edit Quotation" : "New Quotation";
  document.getElementById("quoteSubmitBtn").textContent = quote ? "Update Quotation" : "Save Quotation";

  document.getElementById("quoteForm").reset();
  populateQuoteEmployeeSelect();

  const source = quote || prefill;
  const companyPicker = document.getElementById("q-company");
  setCompanyPickerValue(companyPicker, source.companyId || "");
  updateQuoteContactSelect(getCompanyPickerId(companyPicker) || "");
  if (source.contactId) document.getElementById("q-contact").value = source.contactId;
  if (source.employeeId) document.getElementById("q-employee").value = source.employeeId;

  if (quote) {
    document.getElementById("q-validuntil").value = quote.validUntil || "";
    document.getElementById("q-notes").value = quote.notes || "";
    resetQuoteLineItems(quote.items);
  } else {
    resetQuoteLineItems();
  }

  openModal("quoteModalOverlay");
}

function editQuote(id) {
  const q = quotations.find(x => x.id === id);
  if (!q) return;
  if (!["draft", "sent"].includes(q.status)) {
    showInfo("This quotation has already been accepted/rejected and can no longer be edited.");
    return;
  }
  openQuoteModal({}, q);
}

function setupAddQuote() {
  document.getElementById("addQuoteBtn").addEventListener("click", () => openQuoteModal());
  setupCompanyPicker(document.getElementById("q-company"), (companyId) => updateQuoteContactSelect(companyId));
  document.getElementById("quoteAddLineBtn").addEventListener("click", () => addQuoteLineRow());

  document.getElementById("q-validuntil-30d").addEventListener("change", (e) => {
    if (!e.target.checked) return;
    const d = new Date();
    d.setDate(d.getDate() + 30);
    document.getElementById("q-validuntil").value = d.toISOString().slice(0, 10);
  });

  document.getElementById("quoteForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const companyId = getCompanyPickerId(document.getElementById("q-company"));
    if (!companyId) {
      showInfo("Please choose a company.");
      return;
    }

    const rows = document.querySelectorAll("#quoteLineItems .line-item-row");
    const items = [];
    rows.forEach(row => {
      const sku = getProductPickerSku(row.querySelector(".product-picker"));
      const product = products.find(p => p.sku === sku);
      if (!product) return;
      const qty = Number(row.querySelector(".quote-line-qty").value) || 0;
      const unitPrice = quoteLineEffectivePrice(row);
      if (qty <= 0) return;
      items.push({ sku: product.sku, name: product.name, qty, unitPrice });
    });

    if (items.length === 0) {
      showInfo("Add at least one item with a quantity greater than 0.");
      return;
    }

    const contactIdRaw = document.getElementById("q-contact").value;
    const employeeIdRaw = document.getElementById("q-employee").value;
    const contactId = contactIdRaw ? Number(contactIdRaw) : null;
    const employeeId = employeeIdRaw ? Number(employeeIdRaw) : null;
    const validUntil = document.getElementById("q-validuntil").value;
    const notes = document.getElementById("q-notes").value.trim();

    if (editingQuoteId) {
      const q = quotations.find(x => x.id === editingQuoteId);
      if (q) {
        Object.assign(q, { companyId, contactId, employeeId, validUntil, items, notes });
      }
      editingQuoteId = null;
    } else {
      quotations.unshift({
        id: quoteIdCounter,
        quoteNumber: "QT-" + (4000 + quoteIdCounter),
        companyId,
        contactId,
        employeeId,
        date: new Date().toISOString().slice(0, 10),
        validUntil,
        items,
        status: "draft",
        notes,
        convertedSoId: null,
        createdByUsername: currentUser ? currentUser.username : null,
        createdByName: currentUser ? currentUser.name : "Unknown",
        createdAt: new Date().toISOString(),
      });
      quoteIdCounter++;
    }

    closeModal("quoteModalOverlay");
    refreshSalesView();
  });
}

function formatDateTime(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-US", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
}

function quotationsVisibleToCurrentUser() {
  if (!currentUser || currentUser.role === "owner") return quotations;
  return quotations.filter(q => q.createdByUsername === currentUser.username);
}

function renderQuotes(searchTerm = "") {
  const tbody = document.querySelector("#quoteTable tbody");
  const term = searchTerm.trim().toLowerCase();

  const rows = quotationsVisibleToCurrentUser()
    .filter(q => {
      const c = companies.find(x => x.id === q.companyId);
      return !term || q.quoteNumber.toLowerCase().includes(term) || (c && c.name.toLowerCase().includes(term));
    })
    .slice()
    .sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(q => `
    <tr>
      <td><span class="product-name-link" data-view-quote="${q.id}">${q.quoteNumber}</span></td>
      <td>${companyName(q.companyId)}</td>
      <td>${q.date}</td>
      <td>${q.validUntil || "—"}</td>
      <td>${money(quoteTotal(q))}</td>
      <td><span class="badge ${quoteStatusBadgeClass(q.status)}">${quoteStatusLabel(q.status)}</span></td>
      <td>${q.createdByName || "—"}<br><span class="muted" style="font-size:11px;">${formatDateTime(q.createdAt)}</span></td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="View" data-view-quote="${q.id}">👁️</button>
          ${["draft", "sent"].includes(q.status) ? `<button class="icon-btn-sm" title="Edit" data-edit-quote="${q.id}">✏️</button>` : ""}
          <button class="icon-btn-sm" title="Print / Save as PDF" data-print-quote="${q.id}">🖨️</button>
          ${q.status === "draft" && canDeleteQuotation() ? `<button class="icon-btn-sm danger" title="Delete" data-delete-quote="${q.id}">🗑️</button>` : ""}
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No quotations yet</td></tr>`;
}

function deleteQuote(id) {
  if (!canDeleteQuotation()) return;
  const q = quotations.find(x => x.id === id);
  if (!q || q.status !== "draft") return;
  showConfirm(`Delete ${q.quoteNumber}? This action cannot be undone.`, () => {
    const idx = quotations.findIndex(x => x.id === id);
    if (idx > -1) quotations.splice(idx, 1);
    refreshSalesView();
  });
}

function setupQuoteRowActions() {
  document.querySelector("#quoteTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-quote]");
    const editBtn = e.target.closest("[data-edit-quote]");
    const printBtn = e.target.closest("[data-print-quote]");
    const deleteBtn = e.target.closest("[data-delete-quote]");
    if (editBtn) editQuote(Number(editBtn.dataset.editQuote));
    else if (viewBtn) viewQuote(Number(viewBtn.dataset.viewQuote));
    else if (printBtn) printQuotation(Number(printBtn.dataset.printQuote));
    else if (deleteBtn) deleteQuote(Number(deleteBtn.dataset.deleteQuote));
  });
}

function viewQuote(id) {
  const q = quotations.find(x => x.id === id);
  if (!q) return;

  const itemRows = q.items.map(i => `
    <tr><td>${i.name}</td><td>${i.qty}</td><td>${money(i.unitPrice)}</td><td>${money(i.qty * i.unitPrice)}</td></tr>
  `).join("");

  document.getElementById("quoteDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${q.quoteNumber}</h2>
        <div class="detail-sub">${companyName(q.companyId)}${q.contactId ? " · " + contactName(q.contactId) : ""} · ${q.date}</div>
        <div class="detail-sub">Sales Rep: ${employeeName(q.employeeId)}</div>
        <div class="detail-sub">Created by ${q.createdByName || "—"} · ${formatDateTime(q.createdAt)}</div>
        <span class="badge ${quoteStatusBadgeClass(q.status)}">${quoteStatusLabel(q.status)}</span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Line Total</th></tr></thead>
        <tbody>${itemRows}</tbody>
      </table>
    </div>
    <div class="po-total-row" style="margin-top:14px;">
      <span>Total Quote Value</span>
      <b>${money(quoteTotal(q))}</b>
    </div>
    ${q.validUntil ? `<div class="detail-section"><h4>Valid Until</h4><p class="detail-desc">${q.validUntil}</p></div>` : ""}
    ${q.notes ? `<div class="detail-section"><h4>Notes</h4><p class="detail-desc">${q.notes}</p></div>` : ""}
    ${q.convertedSoId ? `<div class="detail-section"><h4>Converted</h4><p class="detail-desc">Converted to Sales Order.</p></div>` : ""}
  `;

  const actions = document.getElementById("quoteDetailActions");
  let html = `<button type="button" class="btn-ghost" data-close="quoteDetailModalOverlay">Close</button>`;
  html += `<button type="button" class="btn-ghost" id="quotePrintBtn">🖨️ Print / PDF</button>`;
  if (["draft", "sent"].includes(q.status)) {
    html += `<button type="button" class="btn-ghost" id="quoteEditBtn">✏️ Edit</button>`;
  }
  if (q.status === "draft") {
    if (canDeleteQuotation()) html += `<button type="button" class="btn-danger" id="quoteDeleteBtn">🗑️ Delete</button>`;
    html += `<button type="button" class="btn-primary" id="quoteSentBtn">📤 Mark as Sent</button>`;
  }
  if (q.status === "sent") {
    html += `<button type="button" class="btn-danger" id="quoteRejectBtn">❌ Reject</button>`;
    html += `<button type="button" class="btn-primary" id="quoteAcceptBtn">✅ Accept</button>`;
  }
  if (q.status === "accepted" && !q.convertedSoId) {
    html += `<button type="button" class="btn-primary" id="quoteConvertBtn">🧾 Convert to Sales Order</button>`;
  }
  actions.innerHTML = html;

  document.getElementById("quotePrintBtn").onclick = () => printQuotation(q.id);

  if (["draft", "sent"].includes(q.status)) {
    document.getElementById("quoteEditBtn").onclick = () => {
      closeModal("quoteDetailModalOverlay");
      editQuote(q.id);
    };
  }

  if (q.status === "draft") {
    if (canDeleteQuotation()) {
      document.getElementById("quoteDeleteBtn").onclick = () => {
        showConfirm(`Delete ${q.quoteNumber}? This action cannot be undone.`, () => {
          const idx = quotations.findIndex(x => x.id === q.id);
          if (idx > -1) quotations.splice(idx, 1);
          closeModal("quoteDetailModalOverlay");
          refreshSalesView();
        });
      };
    }
    document.getElementById("quoteSentBtn").onclick = () => {
      q.status = "sent";
      logActivity(`Marked Quotation ${q.quoteNumber} as sent`);
      closeModal("quoteDetailModalOverlay");
      refreshSalesView();
    };
  }

  if (q.status === "sent") {
    document.getElementById("quoteRejectBtn").onclick = () => {
      q.status = "rejected";
      logActivity(`Rejected Quotation ${q.quoteNumber}`);
      closeModal("quoteDetailModalOverlay");
      refreshSalesView();
    };
    document.getElementById("quoteAcceptBtn").onclick = () => {
      q.status = "accepted";
      logActivity(`Accepted Quotation ${q.quoteNumber}`);
      closeModal("quoteDetailModalOverlay");
      refreshSalesView();
    };
  }

  if (q.status === "accepted" && !q.convertedSoId) {
    document.getElementById("quoteConvertBtn").onclick = () => {
      closeModal("quoteDetailModalOverlay");
      convertQuoteToSO(q.id);
    };
  }

  openModal("quoteDetailModalOverlay");
}

// ---------- Quotation print / PDF ----------

const COMPANY_INFO = {
  name: "Banfozz Industries LTD.",
  tagline: "Industrial Equipment Trading & Assembly",
  address: "House-20, Road-11, Sector-1, Uttara-1230 (Jasimuddin, Near Apex Showroom)",
  phone: "+880 1337770055",
  email: "info@banfozzindustries.com",
  website: "www.banfozzindustries.com",
  logo: null,
};

function updateBrandMarks() {
  document.querySelectorAll(".brand-mark").forEach(el => {
    el.innerHTML = COMPANY_INFO.logo
      ? `<img src="${COMPANY_INFO.logo}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`
      : COMPANY_INFO.name.charAt(0).toUpperCase();
  });
}

// ---------- Letterhead pad — shared branded header/footer for every printed document ----------

const LETTERHEAD_PAD_IMAGE = "data:image/jpeg;base64,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e8SaJ4r0i217w5eRahp92gkguIGDI6n0I/X0rYaGOVWSVQ6OCGVgCCD1BB6iv50/2d/2n/GPwE1dEh36r4bncG70uR8DnPzwsc7HHX0Pev3s+GnxS8HfFnwxbeK/Bl6l1a3CjfHkCaCT+KOVOqsPfr1HFfo+V5vTxkdNJrofwj4ieGGYcL4hymufDt+7NflJdH07Pofmp+19+wz9oF38TfgtYjzBvm1HQ4RkvnrJaqB16lk/L0r84P8Ahn/43f8AQka7/wCAUn/xNf1H4HHTrUn4V+sZZ4kZpg8OsO1GaWzle9u3mfhmM4UweIqurqr9j//R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvOfiD8OtH8d6eY7lfJvolP2e5UfMDjgN6rnqO1ejUUAfnPBP4u+E3ikghre5iOGQ/6q4i/qCOh7V9q+BPHmk+OdKF5ZMI7iPi4tyfnjb+qnsaseO/AWj+O9Mazv02XMYJt7lR88Tf1U9xXw/NF4r+FHirCs1tdW54Zf8AVzxE/kyt+hq9GvMnY9g/ab/Zc8NfHjQ3v7JU0/xVZxN9ivVAVZe/lTYGSpPQ9V9+lfgZ4t8IeIvAviC88MeKrKTT9RsnMcsUoxnH8SnoynqCOCK/pp+H/j/TPHmk/arciK8gAW5tyeUY9x6qexrxj9pf9mbwz8fPD7yKI7HxRZRH+ztRx1xk+VKB96Nj+K9R6V8vnmRRxK9tRVpr8T978JPF2rkVSOWZpJywstm9XTf/AMj3XTofzsGkrqPGPhDxB4D8S3/hLxTaPZalp0phmifoSOjKehVhypHUVzVfnzi03F7o/t6hXp16ca1GScZaprrfXQT+dev/AAZ+N3jf4H+J18Q+EbgGOTC3VjMSbe5j7hlBHzDsw5H0rx80lVSrTpzVSm7NbHPmGXYbHYeeExcFOnJWaa0a/rr9x/S78Dfjx4M+O3hhNd8NziK7hAW+06Qjz7WQ9iO6nHysOD+le4fL6mv5i/gn498VfD34kaHrHhO+ks5p762t51HMc0MkiqySKeCME9eh5Ffq5/w0f8Sv+e9v/wB+hX3mB4mhKkvbr3j+O+LPAXF4XMZRyqqnRlqlJ2ave8dtbNaPqf/S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACk5z7UtFABXDeOvAmk+OdJaxvkCTplre4UfPE/17qe4ruaKAPzjuYvFXwq8VYVmt7q3bIZc+VPEf8A0JWHbtX2p8P/AB5pvjvS/tdriK7iAW5tyRuRvUdyp7Grnj7wFpXjvSTZXv7u5iy1tcAfNG5/mp7ivhtD4o+FvisHDWt5aMeD/q5oj/6EjY/Cr0a1IaPZv2of2X9B+O/h572xSKw8V2UZ+xX2ABNgcRTHuh7HkrX4A+IvDut+E9bu/DviOzlsNRspWingmBVldev4HqCOCOa/p68C+ONM8c6NHf2ZEdwoC3NvnLRP/gex9K+Y/wBrf9lrTvjX4fk8SeG4o7bxhp0TGBwMC9RASIHx/ETwjHoeOlfLZ9knt17eivfX4n9CeDvi5UySrHKc1lfDS+GT/wCXb/8AkX+HQ/AbGaMVoarpepaHqNzpGsW0tne2khingmUpJG6nBVlPINUBX584tXT3R/bNKcJwU4O8WtH0a6Nd0dR4J58Z6B/2FLP/ANHJX6JV+dvgj/kctA/7Cln/AOjkr9Eq7MM/dPkeIP8AeI2/lX5s/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkAxS0UAHWvNfiT8O9P8d6SYyBFqMAJtp8cg9djf7J/SvSqCM0LRgfm9pWqeJfhf4qchWgurVvLuIH+5LH1wfUEcg/jX3n4S8U6R4z0ePVtLk3KeJIz9+KQdVI9vXvXE/Fn4YweNtO+26eqx6vbKfLc8eao/gY/wDoJr5K8D+MtX+HPiEyFXEQfyr21bI3KDzwejDtWr95aEstftnfsoRfE3TJ/iL4BtB/wlVjFuubePC/2hCnX6yqB8vr0r8QJ4ZbaZ7e4RopYmKOjgqyspwQR1BBFf1Y6JrWm+I9Mg1fS5RNbXC7lPceqkdiOhFfmD+3B+yedRS8+Mfw5sx9pjBl1qwgX/WIMlriNAOWH8YAyevrXxnEGS898TRXvdV3P6e8E/Fh4WUOH83n+7btTk38N/st9u3Z6bH5YeCD/wAVnoA/6idn/wCjkr9Eq/OzwRn/AITPQOx/tSz/APRy1+imDXyWHXun9IZ+08RHl191fmz/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBCARg185fGr4XDW7eXxToUI/tCBS1zEo/18a8lgO7qPzFfR1NIB6inF22A+AfhV8SLjwPqotL5mfSbl8XCYJMTdPMX6dx6V95WtxbXttHd2rrLDMgdHU5DK3Qj618h/G/4ZLo8z+LdCi22czZu4kHETsfvgf3WP60nwR+Jp0m6Twlrs2LKZttpI5/1UhP3Ceyt29DVtX1RK3PlH9pv9kY+E/Hek/FX4Z2Tto0+rWs2q2EIyLNzOh82NRz5THJYfwn2rM/s+9/59pf++D/AIV+wboJFIYBgQQVPIIqn9gtf+faP/vha+ercPYec3OLtfoftWUeNubYTB08LiYKq4Kyk3q10v3ttc//1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAqXtnb39rNZ3cSzQzIUeNxlWU8EEV+f/AMUfh9ceBdbPkKx026YtayHnb3KE+o9fSv0K5z7VyvjHwnYeMtCuNFv14kG6KT+KKUfdcfTv7VUZWE1c8j+CPxJPiGzXw1rMudRtEHku55niHuerKOvc19D1+bS6VrPg3xva6fc7re8s72IK65GVL8Mp7hh+nFfQ/wDwlviP/n+l/Mf4U3EXMf/W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA8f+J/w9XxT9h1rTkH9padNG3oZYg6ll+q9RXC/8IZ4l/wCfKT9P8a+mcUv407hZH//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9H9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9f9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9L9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiqsk0ychMj2qt9uYcbaRpGlKWxp0VmG/b+6KT7c3939aOYfsZGpRWYL4/3f1pftx/u0cyH7CfY0qKzvtx/u0n20/3aOZB7CfY0qKzhet/dp/2z2p3QvYz7F6iqP2z2o+2exoug9jPsXqKo/bPaj7Z7GgPYz7F6iqP2wAZwaQXoP8ACaExeyn2L9FUPty5xtNBvkHUEU7C9nIv0Vn/ANoIP4SfxoGoJ/dP50WZLTNCis/+0E/umj7ev92nysRoUVnf2in900n9op/cNPkYuZGlRWd/aCf3TSi/U/w0uRhzI0KKzvty/wB0/nS/bh/dP50/ZyDmRoUVn/bv9g/nTftx/u/rR7OQuZGlRWb9ub+7R9uI6rRyMOZGlRWb9vPZf8/lR9u9VpcrE5o0qKzftx/u8fWl+3Z6Kafs2HOjRorP+2n+7R9s9v1o5GL2kTQorP8AtZ9P1o+1n+7+tHs5C9tA0KKoC7J/h/Wl+1N/d/Wj2cg9tAvUVS+0+360faW/u0ezkHtoF2iqX2lv7p/OlFye6/rR7Nj9rHuXKKqfaf8AZ/U0n2r/AGf1pcrD2sS5RVP7V/s/rR9pHp+tPkYe1iXKKqfaR6frQLjPY0cjD2sS3RVP7SPQ/nSG59B+tHs2HtYl2iqBuyOo/WlF2p6g/nR7OQ1Uiy9RVVbqM9akE0Z6NU8rKUkyaimKQec5pxNIYtFJnNAoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAQjJqvLbRyc4wfUVZooGm1sYsltLGCcZHqKq+1dESDxVaW2jk7YPqKnl7HVDE/zGLxTgDViS1kTp8w9qh9umKh32Z0RcXsHNHNLRUjsKuadz6/pQBilpBoJz6/pRz6/pS0UAIPWlooqkwsIe9MqQ0wjnNUhNdRp9ajyKlqJjmtUZSYcU3ODmnL0prelaJmEx56U3GaUcjNN6VomYNCdD1pwOe9RHrQDg1RnoTY9aMHtQDmlqU3cegZxS7xTCM0bTV3JsiUHNLiolbBwakBB6UEtC4pMClooEJj3NIRTqKTQDd1KB3ppGKUEUJ9CWiTOKXP8AnFNzinAYpkh9f5Uny06mHrQJjgVBzTgymoqctBNyTPoKUGmUo60A3cnpDQOlBpMzW4n50hxTuCORRtFSimxvFJTx0pasm7GZHpRnHrQ3HSoyc0FasU5o/AU2m7jQNOwpJpvNJRQAvNO5xQBikLUNlocrsOc1Ml1IDycjuDVYDNKSKlRT3KTfQ1EuUbg8VZBB6HNYIJHSpEmdDxUOl2NI1X1NuiqUVyH4fg1cBBGRWLTW5rGSewtFJkZpaRVgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAIyBkmil7kUYNO4AMEVFJbpJ94c+oqXb60AkUhptbGZJasnK/MKrYOea3AAailgSQc9qhwXQ6IV7aMy6Kme2dDleRVfp1zWbTOmMk9h1MyadnjNJjPNJjfkKKWkAxS1URoKaeRTqQdMd6oT2GVEy45qWmP0qombQxaR6cvSkbpmtkYyQ1W7UVHUlaGDQHvUdSU0j0qkzJgOOalByM1BzT1bHBpyQiWiiioAaV9KUZFLRVKQElFRq1SVRm0FFFFABUZ61JTSO9JoLBnNPU1GOtPpp3RmxwwKMZ5pAR0p/SkFhhGKVaQnNJTIZJSjrTQc9aWgRODkUtQqcGpqCGrCdKAc0p6Ui9KVh30AcClPFFNamSMLZplFITig0DPYUylzQBmgBy9KNwpp44FAGaTZoOPNMOKXOOlJRYBB0paQnFNyabYD6QnFJuNITmpbHZjg2OanjuHjPJyPSqtOwT1pblJWNyOVJAMdamrBSQxHcO1asM6yDI696ynC2xtGfRljPalpBzzS1mWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAhaRFk2E8nmpQc1j6jncGHpVOC+nhOM7h6Gq5dLiujpaQjNU4b6KbvtPoauA5pWC40jFAOKDmkpDH8GoHgSQZYc05qA2OtFhptbFB7VwPl5FQEFeCMfWtkMp6daZJCkg+YVDguhvCu1uY4zT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qXk4X+dZssrTNubgdh6USyvM25jx2FR0JFWACpUQsQq8kmmqpPA6mt6ztREm9h8x/ShuwiW2txBGFPLHqatUUVAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKM0h6UAYk/+vf6/wBKiPTmpbj/AFzg+o/lUGBWbjqejSa5CvJK0Tnbz7VajvU4D8GqpiLuT1p4spXPyZH1rZXsefUtzs01kVxlDmsy8JaUYyeKvwaaq4aRifYcVorGi4wo/r+dJkpGBFZTzDAXaPU/4VoxaUgwZW3H07VqD3pdwHU0hkUcEMX3EC1NVSW7gj4Lc+grNl1M8iJfxNA7G2xA+8cVTlvYIupyfQVgSXE0p+ck+1NCOevH1oswukaEmpu3EYwPWqBkmlOSSad5ajnrS7jjHb0quTuLmfQYIj1c4/Wn/KPuj8TTe9B5FapJCSvuLnPfNFIARS0x2sFFFFILBRgUuDShaYbDQPSngYpaKCXIKKQe9LQSFMPWnZppGTVRAUHtU1RKKloYCEDFPXpTcEjinKMA00JjuopAMUtJkUyBaTIpCQaTBpN9hPYeD6UoNMHWnZpogfuo3CmUZxQAFqQkUhJoGMc0rlJCcmlwfWnCmMeMU4otajScmmtx3pcgCgRSOeAfyqeY1UGRck0uDV2OzkbqMD3q0lgP4j+VZyqFqmurMoKSPSp47SRznbn61sx20cfQCp8e1ZOUmaKUY7GdHZAffP5VeWNUHAAp3TtQT2pEynJ7jaQ9KWkPSggZRRTCc0AJTTTqaaAG01jgcUtMbJ6dKBMQcjNLVaS4jjGM7j6CqUtzJJx91fQVaEolya6WP5UwzfoKzndnYsxyT3puKkSKSQ4RSTRbqNKwypoYXmbao/GtC301jhpjgelayRpGMIABS5hle2tY4RkjLdyauUUVIBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAbnHWq8t1GmQDk+1EkDyHl8D0HFNFmo6H8TzS1LSj3MmUSTSFgvU1Klox/1hx7CtT7OMfeNKIADwxppDdV7IgVEUYUYxUw6c1J5Q9aURAd6dzMaOmBSNIiDLMBTZIpX4STaPpVNtNL8tISallJLqxZtQiThPmNZc15LNweBWh/ZI/wCeh/KnDSkBzvJ/Cml3C9tjEIZvc08Qn+I1t/2cMYD4/Cj+zR/f/StLRRm7syQAo2qPx70nzda1/wCzR/fP5Uf2cP75/Kq50tBWZlUzaa1/7NH98/lS/wBnD+/+lHMhq6MjBo21r/2aP7/6Uf2aP7/6UcyHdmSFpcetav8AZw/v/pR/Zo/v/pRzILsyqK1f7NH9/wDSj+zh/f8A0o5kLUyqK1f7OH98/lR/Zw/vn8qOZCszKzikyK1v7NU/xmk/sxP75/KqUo9w5WZJb0oya1xpqj+M04aeB/GafNELMxyrU5QB1rW/s8f3z+VH9nr/AHzQ5xYrMzBjtSgZrT+wLjG80osEH8RqVNXBp9jOxikOe1an2FP7xpPsKf3jVe0iRyy7GaM0mK1PsS/3jThaIB1NHtIicZ9EZWB7U7itX7Kvqf0o+yr6n9KXtUTyTZlAClwK1Psyepo+yx+9HtUNU5GXtFMKgmthbWJe2af5MYOQKXtUV7LuYm0ngAmnCCU9FNbewduKNgqXUKVMyPs0h4PFSLZg8sxrT2D1pvle9J1Gy1FIrLBEuMLnFTDr2A9qkEeO+aQxAnOahtlXYvFPFIFxxSgYpALRRRQAUw9afSYzQAymmpCoNNMfof0oAiyBTKlMTnow/KojbTH/AJbEfQCgBM+lQtKi/ecD8eaDp5b70rGgaXD3ZjT0ArNeRLyoLEevSqMtxLM2Sdo/uitsadbDqCfqamW0t05CD8qEBzSxu/Cgn6VYSyuH6Lgep4rpAqr0GKdTuBlRaaFwZGyc9B0rSVFQYQAU7HOaWpuAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/0P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9H9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9f9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9L9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/fyikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBBS0hOKTdQB/9L6N/Zl/wCCg8F2bbwX8dZxBL8sdtrwU7HJ4xdKvQ9PnAx6461+rthf2upWsN/Y3EdzbXCCSKaFw8bowyGVhwQR0xX4g/tB/wDBPjxb4KW58UfCRpPEGjIDJJpzZN/bqOT5YxiZR+Dexrx/9nn9rr4i/s/agnh7VVm1Xw2km240q6JE1v2Ywl+UYf3TwfQV+uZrwll+c0nmHD0lfrDbXyXR+Wz6efw+DzvE4Caw2Zp26S/rdH9FuTTh3ryT4RfGfwD8avDUXifwPqCzowxPaSEJdWz/AN2WPJIPoRkEdDXrQIHBr8or0KlGo6VaLUlo0+h9pTqwqRUqbumOopMilrI0CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKTIoAWikyKMj1oAac5I/KqGo6hZ6TZzajqVxHa2tupeWaVtiIo6kk8AV5n8XfjL4F+DWgyeIPGN8sZAxb2cRD3Vy/8AdjjyPxY8AV+LPxx/ag+IHx61T+x7JJtP0J5NtppVtl5JiThfNK8yMc/d6enrXj5pnVDBxs9Zdj9S8O/CjNuKqvtIfu8MviqS2+Xd/gup9a/tB/tzgtN4S+DUxYrujuNaIwCehFuD26/OR9PWvj7/AIak+PP/AEN19/30P8K98+A37C3ibxUtv4j+KTPomluFkj05eLyVc9JO0QP/AH19K+t/+GDvgj/zzvv/AAJb/Gvlp4XO8Y/b35U9le34H9EUeIvCPhaH9jOksRKHxT5VUu+t5aJ/JWX3n//T+p/2ff8AgoBY3+st4C+NbJZzLcPb2uuKNsLYcqq3KgfKeg3jj1xya+kfjn+yN8Kvj7YnXLVYtK1yaMPBrFgFZZQRlTKq/LKpz16+9fzxa5/yG9R9ruf/ANDavrb9nD9svx38DZYdA1QvrvhRn+eymcmW3U9TbuSd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";

function letterheadBackgroundHtml() {
  return `<img class="lh-page-bg" src="${LETTERHEAD_PAD_IMAGE}" alt="">`;
}

function letterheadCss() {
  return `
  * { box-sizing: border-box; }
  @page { size: A4; margin: 0; }
  html, body { margin: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #1a1a2e; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

  .lh-page-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: fill;
    z-index: 0;
    pointer-events: none;
  }

  .doc-content { position: relative; z-index: 1; padding: 42mm 18mm 44mm; box-sizing: border-box; }
  .doc-title-row { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #eee; padding-bottom: 16px; margin-bottom: 26px; }
  .print-doc-title { font-size: 21px; font-weight: 800; color: #1d4ed8; }
  .print-doc-meta { font-size: 12px; color: #555; margin-top: 6px; line-height: 1.7; text-align: right; }
  .print-parties { margin-bottom: 30px; }
  .print-party-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 6px; font-weight: 700; }
  .print-party-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .print-party-detail { font-size: 12.5px; color: #555; line-height: 1.6; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  thead th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #888; padding: 10px 8px; border-bottom: 2px solid #ddd; }
  tbody td { padding: 12px 8px; font-size: 13px; border-bottom: 1px solid #eee; }
  td.num, th.num { text-align: right; }
  .print-notes { font-size: 12.5px; color: #555; margin-bottom: 30px; line-height: 1.7; }
  .print-notes b { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #999; margin-bottom: 6px; }
  .print-total-row { display: flex; justify-content: flex-end; margin-bottom: 30px; }
  .print-total-box { min-width: 240px; }
  .print-total-line { display: flex; justify-content: space-between; border-top: 2px solid #1a1a2e; padding-top: 12px; font-size: 17px; font-weight: 800; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .doc-note { text-align: center; font-size: 11px; color: #aaa; margin-top: 40px; }
  `;
}

function letterheadDocTitleHtml(title, metaHtml, extraRightHtml) {
  return `
  <div class="doc-title-row">
    <div class="print-doc-title">${title}</div>
    <div>
      <div class="print-doc-meta">${metaHtml}</div>
      ${extraRightHtml || ""}
    </div>
  </div>`;
}

function buildQuotePrintHtml(q) {
  const company = companies.find(c => c.id === q.companyId);
  const contact = q.contactId ? contacts.find(c => c.id === q.contactId) : null;
  const total = quoteTotal(q);

  const itemRows = q.items.map((i, idx) => {
    const product = products.find(p => p.sku === i.sku);
    const image = product && product.image
      ? `<img class="print-item-img" src="${product.image}" alt="">`
      : `<div class="print-item-img-placeholder">${i.name.charAt(0).toUpperCase()}</div>`;
    const description = product && product.description
      ? `<div class="print-item-desc">${product.description}</div>`
      : "";
    return `
    <tr>
      <td>${idx + 1}</td>
      <td>
        <div class="print-item">
          ${image}
          <div>
            <div class="print-item-name">${i.name}</div>
            ${description}
          </div>
        </div>
      </td>
      <td class="num">${i.qty}</td>
      <td class="num">${money(i.unitPrice)}</td>
      <td class="num">${money(i.qty * i.unitPrice)}</td>
    </tr>
  `;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${q.quoteNumber} — Quotation</title>
<style>
${letterheadCss()}
  .print-item { display: flex; align-items: flex-start; gap: 12px; }
  .print-item-img { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; flex-shrink: 0; border: 1px solid #eee; }
  .print-item-img-placeholder { width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0; background: linear-gradient(135deg, #22d3ee, #7c9dff); color: #051025; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 17px; }
  .print-item-name { font-weight: 700; font-size: 13px; color: #1a1a2e; }
  .print-item-desc { font-size: 11px; color: #888; margin-top: 3px; line-height: 1.5; max-width: 320px; }
  tbody td { vertical-align: top; }
  td.num, th.num { vertical-align: middle; }
</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml("QUOTATION", `Quote No: <b>${q.quoteNumber}</b><br>Date: ${q.date}<br>${q.validUntil ? `Valid Until: ${q.validUntil}<br>` : ""}Prepared By: ${employeeName(q.employeeId)}`)}

  <div class="print-parties">
    <div class="print-party-label">Quoted To</div>
    <div class="print-party-name">${company ? company.name : "—"}</div>
    <div class="print-party-detail">
      ${contact ? contact.name + (contact.designation ? " · " + contact.designation : "") + "<br>" : ""}
      ${company && company.address ? company.address + "<br>" : ""}
      ${company && company.phone ? company.phone : ""}${company && company.email ? " · " + company.email : ""}
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Description</th>
        <th class="num">Qty</th>
        <th class="num">Unit Price</th>
        <th class="num">Line Total</th>
      </tr>
    </thead>
    <tbody>
      ${itemRows}
    </tbody>
  </table>

  <div class="print-total-row">
    <div class="print-total-box">
      <div class="print-total-line">
        <span>Total</span>
        <span>${money(total)}</span>
      </div>
    </div>
  </div>

  ${q.notes ? `<div class="print-notes"><b>Notes</b>${q.notes}</div>` : ""}

  <div class="print-signatures">
    <div class="print-sig-line">Authorized Signature — ${COMPANY_INFO.name}</div>
    <div class="print-sig-line">Client Acceptance</div>
  </div>

  <div class="doc-note">Thank you for considering ${COMPANY_INFO.name} for your business.</div>
  </div>
</body>
</html>`;
}

function printQuotation(id) {
  const q = quotations.find(x => x.id === id);
  if (!q) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildQuotePrintHtml(q));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

function convertQuoteToSO(quoteId) {
  const q = quotations.find(x => x.id === quoteId);
  if (!q || q.status !== "accepted" || q.convertedSoId) return;

  const items = q.items.map(i => ({ sku: i.sku, name: i.name, qty: i.qty, deliveredQty: 0, unitPrice: i.unitPrice }));

  salesOrders.unshift({
    id: soIdCounter,
    soNumber: "SO-" + (7000 + soIdCounter),
    companyId: q.companyId,
    contactId: q.contactId,
    employeeId: q.employeeId,
    quotationId: q.id,
    date: new Date().toISOString().slice(0, 10),
    status: "confirmed",
    items,
    notes: `Converted from ${q.quoteNumber}`,
  });
  q.convertedSoId = soIdCounter;
  logActivity(`Converted Quotation ${q.quoteNumber} to a Sales Order`);
  soIdCounter++;

  refreshSalesView();
}

// ---------- Sales Orders ----------

let soLineIndex = 0;

function soLineItemRowHtml(index, item = {}) {
  return `
    <div class="line-item-row" data-line-index="${index}">
      ${productPickerHtml(item.sku)}
      <input type="number" class="so-line-qty" min="1" value="${item.qty || 1}">
      <input type="number" class="so-line-price" min="0" value="${item.unitPrice ?? ""}">
      <div class="line-item-static so-line-total">৳0</div>
      <button type="button" class="line-item-remove" title="Remove">✕</button>
    </div>
  `;
}

function updateSoLineTotal(row) {
  const qty = Number(row.querySelector(".so-line-qty").value) || 0;
  const price = Number(row.querySelector(".so-line-price").value) || 0;
  row.querySelector(".so-line-total").textContent = money(qty * price);
}

function updateSoTotal() {
  const rows = document.querySelectorAll("#soLineItems .line-item-row");
  let total = 0;
  rows.forEach(row => {
    const qty = Number(row.querySelector(".so-line-qty").value) || 0;
    const price = Number(row.querySelector(".so-line-price").value) || 0;
    total += qty * price;
  });
  document.getElementById("soTotalValue").textContent = money(total);
}

function addSoLineRow(prefill = {}) {
  const container = document.getElementById("soLineItems");
  const index = soLineIndex++;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = soLineItemRowHtml(index, prefill).trim();
  const row = wrapper.firstElementChild;
  container.appendChild(row);

  const picker = row.querySelector(".product-picker");
  const priceInput = row.querySelector(".so-line-price");
  const qtyInput = row.querySelector(".so-line-qty");

  if (prefill.unitPrice === undefined) {
    const p = products.find(p => p.sku === getProductPickerSku(picker));
    priceInput.value = p ? p.price : 0;
  }

  setupProductPicker(picker, (sku) => {
    const p = products.find(p => p.sku === sku);
    priceInput.value = p ? p.price : 0;
    updateSoLineTotal(row);
    updateSoTotal();
  });

  [qtyInput, priceInput].forEach(input => {
    input.addEventListener("input", () => {
      updateSoLineTotal(row);
      updateSoTotal();
    });
  });

  row.querySelector(".line-item-remove").addEventListener("click", () => {
    row.remove();
    updateSoTotal();
  });

  updateSoLineTotal(row);
  updateSoTotal();
}

function resetSoLineItems() {
  document.getElementById("soLineItems").innerHTML = "";
  soLineIndex = 0;
  addSoLineRow();
}

function populateSoCompanySelect() {
  document.getElementById("so-company").innerHTML = companies.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function updateSoContactSelect(companyId) {
  const select = document.getElementById("so-contact");
  const companyContacts = contacts.filter(c => c.companyId === Number(companyId));
  select.innerHTML = `<option value="">— No specific contact —</option>` + companyContacts.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function populateSoEmployeeSelect() {
  document.getElementById("so-employee").innerHTML = `<option value="">— Unassigned —</option>` + employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function setupAddSO() {
  document.getElementById("addSoBtn").addEventListener("click", () => {
    if (companies.length === 0) {
      showInfo("Add a company first before creating a sales order.");
      return;
    }
    document.getElementById("soForm").reset();
    populateSoCompanySelect();
    updateSoContactSelect(document.getElementById("so-company").value);
    populateSoEmployeeSelect();
    resetSoLineItems();
    openModal("soModalOverlay");
  });

  document.getElementById("so-company").addEventListener("change", (e) => updateSoContactSelect(e.target.value));
  document.getElementById("soAddLineBtn").addEventListener("click", () => addSoLineRow());

  document.getElementById("soForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const companyId = Number(document.getElementById("so-company").value);
    if (!companyId) return;

    const rows = document.querySelectorAll("#soLineItems .line-item-row");
    const items = [];
    rows.forEach(row => {
      const sku = getProductPickerSku(row.querySelector(".product-picker"));
      const product = products.find(p => p.sku === sku);
      if (!product) return;
      const qty = Number(row.querySelector(".so-line-qty").value) || 0;
      const unitPrice = Number(row.querySelector(".so-line-price").value) || 0;
      if (qty <= 0) return;
      items.push({ sku: product.sku, name: product.name, qty, deliveredQty: 0, unitPrice });
    });

    if (items.length === 0) {
      showInfo("Add at least one item with a quantity greater than 0.");
      return;
    }

    const contactIdRaw = document.getElementById("so-contact").value;
    const employeeIdRaw = document.getElementById("so-employee").value;

    salesOrders.unshift({
      id: soIdCounter,
      soNumber: "SO-" + (7000 + soIdCounter),
      companyId,
      contactId: contactIdRaw ? Number(contactIdRaw) : null,
      employeeId: employeeIdRaw ? Number(employeeIdRaw) : null,
      quotationId: null,
      date: new Date().toISOString().slice(0, 10),
      status: "confirmed",
      items,
      notes: document.getElementById("so-notes").value.trim(),
    });
    soIdCounter++;

    closeModal("soModalOverlay");
    refreshSalesView();
  });
}

function renderSalesOrders(searchTerm = "") {
  const tbody = document.querySelector("#soTable tbody");
  const term = searchTerm.trim().toLowerCase();

  const rows = salesOrders
    .filter(so => {
      const c = companies.find(x => x.id === so.companyId);
      return !term || so.soNumber.toLowerCase().includes(term) || (c && c.name.toLowerCase().includes(term));
    })
    .slice()
    .sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(so => `
    <tr>
      <td><span class="product-name-link" data-view-so="${so.id}">${so.soNumber}</span></td>
      <td>${companyName(so.companyId)}</td>
      <td>${so.date}</td>
      <td>${so.items.length}</td>
      <td>${money(soTotal(so))}</td>
      <td><span class="badge ${soStatusBadgeClass(so.status)}">${soStatusLabel(so.status)}</span></td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="View" data-view-so="${so.id}">👁️</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No sales orders yet</td></tr>`;
}

function setupSoRowActions() {
  document.querySelector("#soTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-so]");
    if (viewBtn) viewSO(Number(viewBtn.dataset.viewSo));
  });
}

function viewSO(id) {
  const so = salesOrders.find(x => x.id === id);
  if (!so) return;

  const itemRows = so.items.map(i => `
    <tr>
      <td>${i.name}</td>
      <td>${i.qty}</td>
      <td>${i.deliveredQty || 0}</td>
      <td>${money(i.unitPrice)}</td>
      <td>${money(i.qty * i.unitPrice)}</td>
    </tr>
  `).join("");

  document.getElementById("soDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${so.soNumber}</h2>
        <div class="detail-sub">${companyName(so.companyId)}${so.contactId ? " · " + contactName(so.contactId) : ""} · ${so.date}</div>
        <div class="detail-sub">Sales Rep: ${employeeName(so.employeeId)}</div>
        <span class="badge ${soStatusBadgeClass(so.status)}">${soStatusLabel(so.status)}</span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Product</th><th>Ordered</th><th>Delivered</th><th>Unit Price</th><th>Line Total</th></tr></thead>
        <tbody>${itemRows}</tbody>
      </table>
    </div>
    <div class="po-total-row" style="margin-top:14px;">
      <span>Total Order Value</span>
      <b>${money(soTotal(so))}</b>
    </div>
    ${so.quotationId ? `<div class="detail-section"><h4>Source</h4><p class="detail-desc">Converted from quotation.</p></div>` : ""}
    ${so.notes ? `<div class="detail-section"><h4>Notes</h4><p class="detail-desc">${so.notes}</p></div>` : ""}
  `;

  const actions = document.getElementById("soDetailActions");
  let html = `<button type="button" class="btn-ghost" data-close="soDetailModalOverlay">Close</button>`;
  if (so.status === "confirmed") {
    html += `<button type="button" class="btn-danger" id="soCancelBtn">🗑️ Cancel Order</button>`;
  }
  if (so.status === "confirmed" || so.status === "partially_delivered") {
    html += `<button type="button" class="btn-primary" id="soDeliverBtn">📤 Deliver Order</button>`;
  }
  actions.innerHTML = html;

  if (so.status === "confirmed") {
    document.getElementById("soCancelBtn").onclick = () => {
      showConfirm(`Cancel ${so.soNumber}? This action cannot be undone.`, () => {
        so.status = "cancelled";
        closeModal("soDetailModalOverlay");
        refreshSalesView();
      });
    };
  }

  if (so.status === "confirmed" || so.status === "partially_delivered") {
    document.getElementById("soDeliverBtn").onclick = () => {
      closeModal("soDetailModalOverlay");
      openDeliveryModal(so.id);
    };
  }

  openModal("soDetailModalOverlay");
}

// ---------- Delivery (Sales Order → stock out) ----------

let currentDeliverySoId = null;

function populateDeliveryWarehouseSelect() {
  document.getElementById("dv-warehouse").innerHTML = warehouses.map(w => `<option value="${w.name}">${w.name}</option>`).join("");
}

function renderDeliveryLineItems(soId) {
  const so = salesOrders.find(x => x.id === soId);
  const container = document.getElementById("deliveryLineItems");
  if (!so) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <div class="grn-line-row">
      <div class="line-item-static"><b>Product</b></div>
      <div class="line-item-static"><b>Ordered</b></div>
      <div class="line-item-static"><b>Remaining</b></div>
      <div class="line-item-static"><b>Deliver Now</b></div>
    </div>
  ` + so.items.map((i, idx) => {
    const remaining = i.qty - (i.deliveredQty || 0);
    const product = products.find(p => p.sku === i.sku);
    const available = product ? product.stock : 0;
    const maxDeliver = Math.max(0, Math.min(remaining, available));
    return `
      <div class="grn-line-row" data-dv-index="${idx}">
        <div class="line-item-static">${i.name}</div>
        <div class="line-item-static">${i.qty}</div>
        <div class="line-item-static">${remaining} <span style="color:var(--text-muted); font-size:11px;">(${available} in stock)</span></div>
        <input type="number" class="dv-line-qty" min="0" max="${maxDeliver}" value="${maxDeliver}" ${maxDeliver <= 0 ? "disabled" : ""}>
      </div>
    `;
  }).join("");
}

function openDeliveryModal(soId) {
  const so = salesOrders.find(x => x.id === soId);
  if (!so) return;
  currentDeliverySoId = soId;
  populateDeliveryWarehouseSelect();
  renderDeliveryLineItems(soId);
  openModal("deliveryModalOverlay");
}

function setupDelivery() {
  document.getElementById("deliveryForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const so = salesOrders.find(x => x.id === currentDeliverySoId);
    if (!so) return;

    const warehouse = document.getElementById("dv-warehouse").value;
    const rows = document.querySelectorAll("#deliveryLineItems .grn-line-row[data-dv-index]");
    const deliveredItems = [];

    for (const row of rows) {
      const idx = Number(row.dataset.dvIndex);
      const input = row.querySelector(".dv-line-qty");
      const deliverQty = Number(input.value) || 0;
      if (deliverQty <= 0) continue;

      const item = so.items[idx];
      const remaining = item.qty - (item.deliveredQty || 0);
      const product = products.find(p => p.sku === item.sku);
      const available = product ? product.stock : 0;
      const actualQty = Math.min(deliverQty, remaining, available);
      if (actualQty <= 0) continue;

      item.deliveredQty = (item.deliveredQty || 0) + actualQty;
      if (product) {
        product.stock = Math.max(0, product.stock - actualQty);
      }

      deliveredItems.push({ sku: item.sku, name: item.name, qty: actualQty });

      stockMovements.unshift({
        id: movementIdCounter++,
        date: new Date().toISOString().slice(0, 10),
        product: item.name,
        type: "out",
        qty: actualQty,
        warehouse,
        ref: so.soNumber,
      });
    }

    if (deliveredItems.length === 0) {
      showInfo("Enter a quantity greater than 0 for at least one item (make sure there's enough stock).");
      return;
    }

    const fullyDelivered = so.items.every(i => (i.deliveredQty || 0) >= i.qty);
    so.status = fullyDelivered ? "delivered" : "partially_delivered";

    closeModal("deliveryModalOverlay");
    renderMovements();
    refreshCatalogView();
    refreshSalesView();
    saveState();
  });
}

// ---------- Customer Payments ----------

function renderCustomerPaymentTable() {
  const tbody = document.querySelector("#customerPaymentTable tbody");
  const rows = customerPayments.slice().sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(p => {
    const company = companies.find(c => c.id === p.companyId);
    const so = p.soId ? salesOrders.find(x => x.id === p.soId) : null;
    return `
      <tr>
        <td>${p.date}</td>
        <td>${company ? company.name : "—"}</td>
        <td>${so ? so.soNumber : "General"}</td>
        <td>${money(p.amount)}</td>
        <td>${p.method}</td>
        <td>${p.accountId ? accountName(p.accountId) : "—"}</td>
        <td>${p.note || "—"}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm danger" title="Delete" data-delete-customer-payment="${p.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No payments recorded yet</td></tr>`;
}

function populateCpSoSelect(companyId) {
  const select = document.getElementById("cp-so");
  const companySOs = salesOrders.filter(so => so.companyId === Number(companyId) && so.status !== "cancelled");
  select.innerHTML = `<option value="">— General Payment (no SO) —</option>` +
    companySOs.map(so => `<option value="${so.id}">${so.soNumber} · ${money(soTotal(so))}</option>`).join("");
}

function setupAddCustomerPayment() {
  const companyPicker = document.getElementById("cp-company");

  document.getElementById("addCustomerPaymentBtn").addEventListener("click", () => {
    if (companies.length === 0) {
      showInfo("Add a company first before recording a payment.");
      return;
    }
    if (cashAccounts.length === 0) {
      showInfo("Add a cash or bank account first before recording a payment.");
      return;
    }
    document.getElementById("customerPaymentForm").reset();
    setCompanyPickerValue(companyPicker, "");
    populateCpSoSelect("");
    populateAccountSelect("cp-account");
    openModal("customerPaymentModalOverlay");
  });

  setupCompanyPicker(companyPicker, (companyId) => populateCpSoSelect(companyId));

  document.getElementById("customerPaymentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const companyId = getCompanyPickerId(companyPicker);
    if (!companyId) {
      showInfo("Please choose a company.");
      return;
    }

    const amount = Number(document.getElementById("cp-amount").value) || 0;
    if (amount <= 0) return;

    const soIdRaw = document.getElementById("cp-so").value;

    customerPayments.unshift({
      id: customerPaymentIdCounter++,
      companyId,
      soId: soIdRaw ? Number(soIdRaw) : null,
      date: new Date().toISOString().slice(0, 10),
      amount,
      method: document.getElementById("cp-method").value,
      accountId: Number(document.getElementById("cp-account").value),
      note: document.getElementById("cp-note").value.trim(),
    });
    logActivity(`Recorded a customer payment of ${money(amount)}`);

    closeModal("customerPaymentModalOverlay");
    refreshSalesView();
  });
}

function deleteCustomerPayment(id) {
  const p = customerPayments.find(x => x.id === id);
  if (!p) return;
  showConfirm(`Delete this payment of ${money(p.amount)}? This action cannot be undone.`, () => {
    const idx = customerPayments.findIndex(x => x.id === id);
    if (idx > -1) customerPayments.splice(idx, 1);
    refreshSalesView();
  });
}

function setupCustomerPaymentRowActions() {
  document.querySelector("#customerPaymentTable tbody").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-customer-payment]");
    if (deleteBtn) deleteCustomerPayment(Number(deleteBtn.dataset.deleteCustomerPayment));
  });
}

// ---------- Sales Returns ----------

function populateSrCompanySelect() {
  document.getElementById("sr-company").innerHTML = companies.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function openSalesReturnModal() {
  if (companies.length === 0) {
    showInfo("Add a company first before recording a return.");
    return;
  }
  document.getElementById("salesReturnForm").reset();
  populateSrCompanySelect();
  resetReturnLineItems("srLineItems");
  openModal("salesReturnModalOverlay");
}

function setupAddSalesReturn() {
  document.getElementById("addSalesReturnBtn").addEventListener("click", openSalesReturnModal);
  document.getElementById("srAddLineBtn").addEventListener("click", () => addReturnLineRow("srLineItems"));

  document.getElementById("salesReturnForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const companyId = Number(document.getElementById("sr-company").value);
    if (!companyId) return;

    const rows = document.querySelectorAll("#srLineItems .return-line-row");
    const items = [];
    const movementIds = [];
    const returnNumber = `SRT-${8000 + salesReturnIdCounter}`;

    rows.forEach(row => {
      const sku = getProductPickerSku(row.querySelector(".product-picker"));
      const product = products.find(p => p.sku === sku);
      if (!product) return;
      const qty = Number(row.querySelector(".return-line-qty").value) || 0;
      if (qty <= 0) return;

      product.stock += qty;
      const movement = {
        id: movementIdCounter++,
        date: new Date().toISOString().slice(0, 10),
        product: product.name,
        type: "in",
        qty,
        warehouse: warehouses[0] ? warehouses[0].name : "Main Godown",
        ref: returnNumber,
      };
      stockMovements.unshift(movement);
      movementIds.push(movement.id);
      items.push({ sku: product.sku, name: product.name, qty });
    });

    if (items.length === 0) {
      showInfo("Add at least one item with a quantity greater than 0.");
      return;
    }

    const company = companies.find(c => c.id === companyId);
    salesReturns.unshift({
      id: salesReturnIdCounter,
      returnNumber,
      companyId,
      date: new Date().toISOString().slice(0, 10),
      items,
      notes: document.getElementById("sr-notes").value.trim(),
      movementIds,
    });
    salesReturnIdCounter++;

    logActivity(`Recorded a sales return (${returnNumber}) for ${company ? company.name : "a customer"}`);
    closeModal("salesReturnModalOverlay");
    renderMovements();
    refreshCatalogView();
    refreshSalesView();
  });
}

function renderSalesReturnTable() {
  const tbody = document.querySelector("#salesReturnTable tbody");
  const rows = salesReturns.slice().sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(r => {
    const company = companies.find(c => c.id === r.companyId);
    const itemsSummary = r.items.map(i => `${i.name} (${i.qty})`).join(", ");
    return `
      <tr>
        <td>${r.returnNumber}</td>
        <td>${company ? company.name : "—"}</td>
        <td>${r.date}</td>
        <td>${itemsSummary}</td>
        <td>${r.notes || "—"}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm danger" title="Delete" data-delete-sales-return="${r.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6" style="color:var(--text-muted); text-align:center; padding:24px;">No sales returns yet</td></tr>`;
}

function deleteSalesReturn(id) {
  const r = salesReturns.find(x => x.id === id);
  if (!r) return;
  showConfirm(`Delete return ${r.returnNumber}? The returned stock will be removed again.`, () => {
    r.items.forEach(i => {
      const product = products.find(p => p.sku === i.sku);
      if (product) product.stock = Math.max(0, product.stock - i.qty);
    });
    (r.movementIds || []).forEach(mid => {
      const idx = stockMovements.findIndex(m => m.id === mid);
      if (idx > -1) stockMovements.splice(idx, 1);
    });
    const idx = salesReturns.findIndex(x => x.id === id);
    if (idx > -1) salesReturns.splice(idx, 1);
    renderMovements();
    refreshCatalogView();
    refreshSalesView();
  });
}

function setupSalesReturnRowActions() {
  document.querySelector("#salesReturnTable tbody").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-sales-return]");
    if (deleteBtn) deleteSalesReturn(Number(deleteBtn.dataset.deleteSalesReturn));
  });
}

// ---------- Sales module: tabs + search + refresh ----------

function setupSalesTabs() {
  const tabButtons = document.querySelectorAll("#module-sales .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll("#module-sales .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`spanel-${btn.dataset.stab}`).classList.remove("hidden");
    });
  });
}

function setupSalesSearch() {
  document.getElementById("salesSearch").addEventListener("input", (e) => {
    renderCompanies(e.target.value);
    renderQuotes(e.target.value);
    renderSalesOrders(e.target.value);
  });
}

function refreshSalesView() {
  renderSalesStats();
  renderDealBoard();
  renderCompanies(document.getElementById("salesSearch").value);
  renderContacts();
  renderQuotes(document.getElementById("salesSearch").value);
  renderSalesOrders(document.getElementById("salesSearch").value);
  renderCustomerPaymentTable();
  renderSalesReturnTable();
  saveState();
}

function initSalesModule() {
  refreshSalesView();
  setupSalesTabs();
  setupSalesSearch();
  setupContactsSubtabs();
  setupAddCompany();
  setupCompanyRowActions();
  setupAddContact();
  setupContactRowActions();
  setupAddDeal();
  setupDealBoardActions();
  setupAddQuote();
  setupQuoteRowActions();
  setupAddSO();
  setupSoRowActions();
  setupDelivery();
  setupAddCustomerPayment();
  setupCustomerPaymentRowActions();
  setupAddSalesReturn();
  setupSalesReturnRowActions();
}

// =====================================================================
// INSTALLATION & COMMISSIONING MODULE
// =====================================================================

const installations = [];
let installationIdCounter = 1;
let editingInstallationId = null;

function installationStatusBadgeClass(status) {
  return { pending: "pending", scheduled: "approved", in_progress: "partial", completed: "done", cancelled: "rejected" }[status] || "pending";
}

function installationStatusLabel(status) {
  return { pending: "Pending", scheduled: "Scheduled", in_progress: "In Progress", completed: "Completed", cancelled: "Cancelled" }[status] || status;
}

function eligibleInstallationSOs() {
  return salesOrders.filter(so => ["partially_delivered", "delivered"].includes(so.status));
}

// ---------- Searchable sales-order picker (replaces plain <select> for choosing an installation's SO) ----------
// Reuses the .product-picker* CSS (search input + dropdown look) since the layout is identical.

function installationSoLabel(so) {
  return `${so.soNumber} — ${companyName(so.companyId)}`;
}

function installationSoPickerOptionsHtml(term = "") {
  const t = term.trim().toLowerCase();
  const matches = eligibleInstallationSOs()
    .filter(so => !t || so.soNumber.toLowerCase().includes(t) || companyName(so.companyId).toLowerCase().includes(t))
    .slice(0, 30);
  if (matches.length === 0) return `<div class="product-picker-empty">No sales orders found</div>`;
  return matches.map(so => `
    <div class="product-picker-option" data-id="${so.id}">
      <div class="product-picker-option-text">
        <div class="product-picker-option-name">${installationSoLabel(so)}</div>
        <div class="product-picker-option-meta">${money(soTotal(so))} · ${soStatusLabel(so.status)}</div>
      </div>
    </div>
  `).join("");
}

function getInstallationSoPickerId(pickerEl) {
  const val = pickerEl.dataset.selectedId;
  return val ? Number(val) : null;
}

function setInstallationSoPickerValue(pickerEl, id) {
  const so = salesOrders.find(x => x.id === Number(id));
  pickerEl.dataset.selectedId = id || "";
  pickerEl.querySelector(".product-picker-input").value = so ? installationSoLabel(so) : "";
}

// Wires search/select behavior onto a .product-picker element already in the DOM.
function setupInstallationSoPicker(pickerEl) {
  const input = pickerEl.querySelector(".product-picker-input");
  const dropdown = pickerEl.querySelector(".product-picker-dropdown");

  function openDropdown(term) {
    dropdown.innerHTML = installationSoPickerOptionsHtml(term);
    dropdown.classList.remove("hidden");
  }
  function closeDropdown() {
    dropdown.classList.add("hidden");
  }

  input.addEventListener("focus", () => {
    input.select();
    openDropdown("");
  });

  input.addEventListener("input", () => openDropdown(input.value));

  input.addEventListener("blur", () => {
    closeDropdown();
    const so = salesOrders.find(x => x.id === Number(pickerEl.dataset.selectedId));
    input.value = so ? installationSoLabel(so) : "";
  });

  // mousedown (not click) + preventDefault so the option registers before the input's blur fires.
  dropdown.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const option = e.target.closest(".product-picker-option");
    if (!option) return;
    const id = Number(option.dataset.id);
    const so = salesOrders.find(x => x.id === id);
    pickerEl.dataset.selectedId = id;
    input.value = so ? installationSoLabel(so) : "";
    closeDropdown();
  });
}

function populateInstallationEmployeeSelect() {
  document.getElementById("in-employee").innerHTML = `<option value="">— Unassigned —</option>` + employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function openInstallationModal(job = null) {
  if (!job && eligibleInstallationSOs().length === 0) {
    showInfo("No delivered (or partially delivered) sales orders yet — an installation job needs one to start from.");
    return;
  }

  editingInstallationId = job ? job.id : null;
  document.getElementById("installationModalTitle").textContent = job ? "Edit Installation Job" : "New Installation Job";
  document.getElementById("installationSubmitBtn").textContent = job ? "Update Job" : "Save Job";

  document.getElementById("installationForm").reset();
  const soPicker = document.getElementById("in-so");
  setInstallationSoPickerValue(soPicker, job ? job.salesOrderId : "");
  populateInstallationEmployeeSelect();

  if (job) {
    document.getElementById("in-address").value = job.siteAddress;
    document.getElementById("in-date").value = job.scheduledDate || "";
    if (job.assignedEmployeeId) document.getElementById("in-employee").value = job.assignedEmployeeId;
    document.getElementById("in-notes").value = job.notes || "";
  }

  openModal("installationModalOverlay");
}

function editInstallation(id) {
  const job = installations.find(x => x.id === id);
  if (!job) return;
  if (!["pending", "scheduled"].includes(job.status)) {
    showInfo("This job is already in progress or completed and can no longer be edited.");
    return;
  }
  openInstallationModal(job);
}

function setupAddInstallation() {
  setupInstallationSoPicker(document.getElementById("in-so"));
  document.getElementById("addInstallationBtn").addEventListener("click", () => openInstallationModal());

  document.getElementById("installationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const salesOrderId = getInstallationSoPickerId(document.getElementById("in-so"));
    const so = salesOrders.find(x => x.id === salesOrderId);
    if (!so) {
      showInfo("Please choose a sales order.");
      return;
    }

    const siteAddress = document.getElementById("in-address").value.trim();
    if (!siteAddress) return;

    const employeeIdRaw = document.getElementById("in-employee").value;
    const scheduledDate = document.getElementById("in-date").value;
    const assignedEmployeeId = employeeIdRaw ? Number(employeeIdRaw) : null;
    const notes = document.getElementById("in-notes").value.trim();

    if (editingInstallationId) {
      const job = installations.find(j => j.id === editingInstallationId);
      Object.assign(job, { salesOrderId, companyId: so.companyId, contactId: so.contactId, siteAddress, scheduledDate, assignedEmployeeId, notes });
      if (job.status === "pending" && scheduledDate) job.status = "scheduled";
      if (job.status === "scheduled" && !scheduledDate) job.status = "pending";
      editingInstallationId = null;
    } else {
      installations.unshift({
        id: installationIdCounter,
        jobNumber: "INST-" + (5000 + installationIdCounter),
        salesOrderId, companyId: so.companyId, contactId: so.contactId,
        siteAddress, scheduledDate, assignedEmployeeId, notes,
        status: scheduledDate ? "scheduled" : "pending",
        completionNotes: "",
        completedDate: null,
        createdByUsername: currentUser ? currentUser.username : null,
        createdByName: currentUser ? currentUser.name : "Unknown",
        createdAt: new Date().toISOString(),
      });
      installationIdCounter++;
    }

    closeModal("installationModalOverlay");
    refreshInstallationView();
  });
}

function renderInstallationStats() {
  const dateFrom = document.getElementById("installationDateFrom").value;
  const dateTo = document.getElementById("installationDateTo").value;
  const filterActive = !!(dateFrom || dateTo);

  const active = installations.filter(j => ["pending", "scheduled", "in_progress"].includes(j.status)).length;
  const overdue = installations.filter(j => !["completed", "cancelled"].includes(j.status) && j.scheduledDate && j.scheduledDate < todayStr()).length;

  let card1, card3;
  if (filterActive) {
    const rangeLbl = `${dateFrom || "…"} to ${dateTo || "…"}`;
    const scheduledInRange = installations.filter(j => dateInRange(j.scheduledDate, dateFrom, dateTo)).length;
    const completedInRange = installations.filter(j => j.completedDate && dateInRange(j.completedDate, dateFrom, dateTo)).length;
    card1 = { icon: "🔧", value: scheduledInRange, label: `Scheduled (${rangeLbl})`, cls: "" };
    card3 = { icon: "✅", value: completedInRange, label: `Completed (${rangeLbl})`, cls: "good" };
  } else {
    card1 = { icon: "🔧", value: installations.length, label: "Total Installation Jobs", cls: "" };
    card3 = { icon: "✅", value: installations.filter(j => j.status === "completed").length, label: "Completed", cls: "good" };
  }

  const cards = [
    card1,
    { icon: "🚧", value: active, label: "Active Jobs", cls: "" },
    card3,
    { icon: "⚠️", value: overdue, label: "Overdue", cls: overdue > 0 ? "warn" : "" },
  ];

  document.getElementById("installationStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

// Shared by any module list that filters rows by a From/To date range.
// With no range set, everything shows; once a range is set, undated rows are excluded (can't place them in range).
function dateInRange(dateStr, from, to) {
  if (!from && !to) return true;
  if (!dateStr) return false;
  if (from && dateStr < from) return false;
  if (to && dateStr > to) return false;
  return true;
}

function renderInstallationTable() {
  const tbody = document.querySelector("#installationTable tbody");
  const dateFrom = document.getElementById("installationDateFrom").value;
  const dateTo = document.getElementById("installationDateTo").value;
  tbody.innerHTML = installations.filter(j => dateInRange(j.scheduledDate, dateFrom, dateTo)).map(j => {
    const so = salesOrders.find(x => x.id === j.salesOrderId);
    let actions = `<button class="icon-btn-sm" title="View" data-view-installation="${j.id}">👁️</button>`;
    if (["pending", "scheduled"].includes(j.status)) {
      actions += `<button class="icon-btn-sm" title="Edit" data-edit-installation="${j.id}">✏️</button>`;
    }
    actions += `<button class="icon-btn-sm" title="Print Report" data-print-installation="${j.id}">🖨️</button>`;
    actions += `<button class="icon-btn-sm danger" title="Delete" data-delete-installation="${j.id}">🗑️</button>`;

    return `
    <tr>
      <td>${j.jobNumber}</td>
      <td>${companyName(j.companyId)}</td>
      <td>${so ? so.soNumber : "—"}</td>
      <td>${j.siteAddress}</td>
      <td>${j.scheduledDate || "—"}</td>
      <td>${j.assignedEmployeeId ? employeeName(j.assignedEmployeeId) : "—"}</td>
      <td><span class="badge ${installationStatusBadgeClass(j.status)}">${installationStatusLabel(j.status)}</span></td>
      <td><div class="row-actions">${actions}</div></td>
    </tr>
  `;
  }).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No installation jobs yet</td></tr>`;
}

function startInstallation(id) {
  const job = installations.find(x => x.id === id);
  if (!job || !["pending", "scheduled"].includes(job.status)) return;
  job.status = "in_progress";
  logActivity(`Started installation job ${job.jobNumber}`);
  closeModal("installationDetailModalOverlay");
  refreshInstallationView();
}

function completeInstallation(id, completionNotes) {
  const job = installations.find(x => x.id === id);
  if (!job || job.status !== "in_progress") return;
  job.status = "completed";
  job.completedDate = todayStr();
  job.completionNotes = completionNotes;
  logActivity(`Completed installation job ${job.jobNumber}`);
  closeModal("installationDetailModalOverlay");
  refreshInstallationView();
}

function cancelInstallation(id) {
  const job = installations.find(x => x.id === id);
  if (!job || ["completed", "cancelled"].includes(job.status)) return;
  showConfirm(`Cancel installation job ${job.jobNumber}?`, () => {
    job.status = "cancelled";
    logActivity(`Cancelled installation job ${job.jobNumber}`);
    closeModal("installationDetailModalOverlay");
    refreshInstallationView();
  }, "Cancel Job");
}

function deleteInstallation(id) {
  const job = installations.find(x => x.id === id);
  if (!job) return;
  showConfirm(`Delete installation job ${job.jobNumber}? This action cannot be undone.`, () => {
    const idx = installations.findIndex(x => x.id === id);
    if (idx > -1) installations.splice(idx, 1);
    closeModal("installationDetailModalOverlay");
    refreshInstallationView();
  });
}

function viewInstallation(id) {
  const job = installations.find(x => x.id === id);
  if (!job) return;
  const so = salesOrders.find(x => x.id === job.salesOrderId);

  const itemRows = so ? so.items.map((i, idx) => `
    <tr><td>${idx + 1}</td><td>${i.name}</td><td class="num">${i.qty}</td></tr>
  `).join("") : "";

  document.getElementById("installationDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${job.jobNumber}</h2>
        <div class="detail-sub">${companyName(job.companyId)}${job.contactId ? " · " + contactName(job.contactId) : ""}</div>
        <div class="detail-sub">Sales Order: ${so ? so.soNumber : "—"}</div>
        <div class="detail-sub">Created by ${job.createdByName || "—"} · ${formatDateTime(job.createdAt)}</div>
        <span class="badge ${installationStatusBadgeClass(job.status)}">${installationStatusLabel(job.status)}</span>
      </div>
    </div>

    <div class="detail-section">
      <h4>Site Address</h4>
      <p class="detail-desc">${job.siteAddress}</p>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Scheduled Date</span><b>${job.scheduledDate || "—"}</b></div>
      <div class="detail-stat"><span>Technician</span><b>${job.assignedEmployeeId ? employeeName(job.assignedEmployeeId) : "—"}</b></div>
    </div>

    ${itemRows ? `
      <div class="table-wrap">
        <table>
          <thead><tr><th>#</th><th>Item</th><th class="num">Qty</th></tr></thead>
          <tbody>${itemRows}</tbody>
        </table>
      </div>
    ` : ""}

    ${job.notes ? `<div class="detail-section"><h4>Notes</h4><p class="detail-desc">${job.notes}</p></div>` : ""}

    ${job.status === "in_progress" ? `
      <div class="form-row">
        <label>Completion Notes</label>
        <input type="text" id="installationCompletionNotes" placeholder="e.g. Installed and tested, customer signed off">
      </div>
    ` : ""}

    ${job.status === "completed" ? `<div class="detail-section"><h4>Completion Notes</h4><p class="detail-desc">${job.completionNotes || "—"}</p><p class="muted">Completed on ${job.completedDate}</p></div>` : ""}
  `;

  const actions = document.getElementById("installationDetailActions");
  let html = `<button type="button" class="btn-ghost" data-close="installationDetailModalOverlay">Close</button>`;
  if (["pending", "scheduled"].includes(job.status)) {
    html += `<button type="button" class="btn-primary" id="installationStartBtn">▶️ Start Job</button>`;
  }
  if (job.status === "in_progress") {
    html += `<button type="button" class="btn-primary" id="installationCompleteBtn">✅ Mark Completed</button>`;
  }
  html += `<button type="button" class="btn-ghost" id="installationPrintBtn">🖨️ Print Report</button>`;
  if (!["completed", "cancelled"].includes(job.status)) {
    html += `<button type="button" class="btn-danger" id="installationCancelBtn">❌ Cancel Job</button>`;
  }
  html += `<button type="button" class="btn-danger" id="installationDeleteBtn">🗑️ Delete</button>`;
  actions.innerHTML = html;

  if (["pending", "scheduled"].includes(job.status)) {
    document.getElementById("installationStartBtn").onclick = () => startInstallation(job.id);
  }
  if (job.status === "in_progress") {
    document.getElementById("installationCompleteBtn").onclick = () => {
      const notes = document.getElementById("installationCompletionNotes").value.trim();
      completeInstallation(job.id, notes);
    };
  }
  document.getElementById("installationPrintBtn").onclick = () => printInstallation(job.id);
  if (!["completed", "cancelled"].includes(job.status)) {
    document.getElementById("installationCancelBtn").onclick = () => cancelInstallation(job.id);
  }
  document.getElementById("installationDeleteBtn").onclick = () => deleteInstallation(job.id);

  openModal("installationDetailModalOverlay");
}

function setupInstallationRowActions() {
  document.querySelector("#installationTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-installation]");
    const editBtn = e.target.closest("[data-edit-installation]");
    const printBtn = e.target.closest("[data-print-installation]");
    const deleteBtn = e.target.closest("[data-delete-installation]");
    if (editBtn) editInstallation(Number(editBtn.dataset.editInstallation));
    else if (viewBtn) viewInstallation(Number(viewBtn.dataset.viewInstallation));
    else if (printBtn) printInstallation(Number(printBtn.dataset.printInstallation));
    else if (deleteBtn) deleteInstallation(Number(deleteBtn.dataset.deleteInstallation));
  });
}

function buildInstallationPrintHtml(job) {
  const so = salesOrders.find(x => x.id === job.salesOrderId);
  const itemRows = so ? so.items.map((i, idx) => `
    <tr><td>${idx + 1}</td><td>${i.name}</td><td class="num">${i.qty}</td></tr>
  `).join("") : "";

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${job.jobNumber} — Installation Report</title>
<style>${letterheadCss()}</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml("INSTALLATION & COMMISSIONING REPORT", `Job No: <b>${job.jobNumber}</b><br>Scheduled: ${job.scheduledDate || "—"}<br>Completed: ${job.completedDate || "—"}<br>Technician: ${job.assignedEmployeeId ? employeeName(job.assignedEmployeeId) : "—"}`)}

  <div class="print-parties">
    <div class="print-party-label">Site / Customer</div>
    <div class="print-party-name">${companyName(job.companyId)}</div>
    <div class="print-party-detail">
      ${job.contactId ? contactName(job.contactId) + "<br>" : ""}
      ${job.siteAddress}
    </div>
  </div>

  ${itemRows ? `
  <table>
    <thead><tr><th>#</th><th>Item Installed</th><th class="num">Qty</th></tr></thead>
    <tbody>${itemRows}</tbody>
  </table>
  ` : ""}

  ${job.completionNotes ? `<div class="print-notes"><b>Completion Notes</b>${job.completionNotes}</div>` : ""}

  <div class="print-signatures">
    <div class="print-sig-line">Technician Signature — ${COMPANY_INFO.name}</div>
    <div class="print-sig-line">Customer Sign-off</div>
  </div>

  <div class="doc-note">This is a system-generated installation report from ${COMPANY_INFO.name} ERP.</div>
  </div>
</body>
</html>`;
}

function printInstallation(id) {
  const job = installations.find(x => x.id === id);
  if (!job) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildInstallationPrintHtml(job));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

function refreshInstallationView() {
  renderInstallationStats();
  renderInstallationTable();
  saveState();
}

function refreshInstallationDateFilter() {
  renderInstallationStats();
  renderInstallationTable();
}

function setupInstallationDateFilter() {
  document.getElementById("installationDateFrom").addEventListener("change", refreshInstallationDateFilter);
  document.getElementById("installationDateTo").addEventListener("change", refreshInstallationDateFilter);
  document.getElementById("installationDateClear").addEventListener("click", () => {
    document.getElementById("installationDateFrom").value = "";
    document.getElementById("installationDateTo").value = "";
    refreshInstallationDateFilter();
  });
}

function initInstallationModule() {
  refreshInstallationView();
  setupAddInstallation();
  setupInstallationRowActions();
  setupInstallationDateFilter();
}

// =====================================================================
// SERVICE & MAINTENANCE MODULE
// =====================================================================

const serviceTickets = [];
let serviceIdCounter = 1;
let editingServiceId = null;

function serviceTypeLabel(type) {
  return { warranty: "Warranty Complaint", amc: "AMC Visit", repair: "Repair", other: "Other" }[type] || type;
}

function serviceStatusBadgeClass(status) {
  return { open: "pending", in_progress: "partial", resolved: "done", cancelled: "rejected" }[status] || "pending";
}

function serviceStatusLabel(status) {
  return { open: "Open", in_progress: "In Progress", resolved: "Resolved", cancelled: "Cancelled" }[status] || status;
}

function servicePriorityBadgeClass(priority) {
  return { high: "out", medium: "pending", low: "done" }[priority] || "pending";
}

function servicePriorityLabel(priority) {
  return { high: "High", medium: "Medium", low: "Low" }[priority] || priority;
}

function populateServiceCompanySelect() {
  document.getElementById("sv-company").innerHTML = companies.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function updateServiceContactSelect(companyId) {
  const select = document.getElementById("sv-contact");
  const companyContacts = contacts.filter(c => c.companyId === Number(companyId));
  select.innerHTML = `<option value="">— No specific contact —</option>` + companyContacts.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function populateServiceEmployeeSelect() {
  document.getElementById("sv-employee").innerHTML = `<option value="">— Unassigned —</option>` + employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function openServiceModal(ticket = null) {
  if (companies.length === 0) {
    showInfo("Add a company first before creating a service ticket.");
    return;
  }

  editingServiceId = ticket ? ticket.id : null;
  document.getElementById("serviceModalTitle").textContent = ticket ? "Edit Service Ticket" : "New Service Ticket";
  document.getElementById("serviceSubmitBtn").textContent = ticket ? "Update Ticket" : "Save Ticket";

  document.getElementById("serviceForm").reset();
  populateServiceCompanySelect();
  populateServiceEmployeeSelect();

  const productWrap = document.getElementById("sv-product-picker-wrap");
  productWrap.innerHTML = productPickerHtml(ticket ? (ticket.productSku || "") : "");
  setupProductPicker(productWrap.querySelector(".product-picker"), () => {});

  if (ticket) {
    document.getElementById("sv-company").value = ticket.companyId;
    updateServiceContactSelect(ticket.companyId);
    if (ticket.contactId) document.getElementById("sv-contact").value = ticket.contactId;
    document.getElementById("sv-type").value = ticket.type;
    document.getElementById("sv-priority").value = ticket.priority;
    document.getElementById("sv-chargeable").value = ticket.chargeable ? "yes" : "no";
    document.getElementById("sv-cost").value = ticket.cost || 0;
    document.getElementById("sv-issue").value = ticket.issue;
    document.getElementById("sv-date").value = ticket.scheduledDate || "";
    if (ticket.assignedEmployeeId) document.getElementById("sv-employee").value = ticket.assignedEmployeeId;
  } else {
    updateServiceContactSelect(document.getElementById("sv-company").value);
  }

  openModal("serviceModalOverlay");
}

function editService(id) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t) return;
  if (["resolved", "cancelled"].includes(t.status)) {
    showInfo("This ticket is already closed and can no longer be edited.");
    return;
  }
  openServiceModal(t);
}

function setupAddService() {
  document.getElementById("addServiceBtn").addEventListener("click", () => openServiceModal());
  document.getElementById("sv-company").addEventListener("change", (e) => updateServiceContactSelect(e.target.value));

  document.getElementById("serviceForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const companyId = Number(document.getElementById("sv-company").value);
    if (!companyId) return;

    const issue = document.getElementById("sv-issue").value.trim();
    if (!issue) return;

    const contactIdRaw = document.getElementById("sv-contact").value;
    const employeeIdRaw = document.getElementById("sv-employee").value;
    const productPicker = document.getElementById("sv-product-picker-wrap").querySelector(".product-picker");
    const productSku = getProductPickerSku(productPicker) || null;

    const data = {
      companyId,
      contactId: contactIdRaw ? Number(contactIdRaw) : null,
      type: document.getElementById("sv-type").value,
      priority: document.getElementById("sv-priority").value,
      chargeable: document.getElementById("sv-chargeable").value === "yes",
      cost: Number(document.getElementById("sv-cost").value) || 0,
      productSku,
      issue,
      scheduledDate: document.getElementById("sv-date").value,
      assignedEmployeeId: employeeIdRaw ? Number(employeeIdRaw) : null,
    };

    if (editingServiceId) {
      const t = serviceTickets.find(x => x.id === editingServiceId);
      Object.assign(t, data);
      editingServiceId = null;
    } else {
      serviceTickets.unshift({
        id: serviceIdCounter,
        ticketNumber: "SVC-" + (6000 + serviceIdCounter),
        status: "open",
        resolutionNotes: "",
        resolvedAt: null,
        createdByUsername: currentUser ? currentUser.username : null,
        createdByName: currentUser ? currentUser.name : "Unknown",
        createdAt: new Date().toISOString(),
        ...data,
      });
      serviceIdCounter++;
    }

    closeModal("serviceModalOverlay");
    refreshServiceView();
  });
}

function renderServiceStats() {
  const dateFrom = document.getElementById("serviceDateFrom").value;
  const dateTo = document.getElementById("serviceDateTo").value;
  const filterActive = !!(dateFrom || dateTo);

  const open = serviceTickets.filter(t => t.status === "open").length;
  const inProgress = serviceTickets.filter(t => t.status === "in_progress").length;

  let card1, card4;
  if (filterActive) {
    const rangeLbl = `${dateFrom || "…"} to ${dateTo || "…"}`;
    const ticketsInRange = serviceTickets.filter(t => dateInRange(t.scheduledDate, dateFrom, dateTo)).length;
    const resolvedInRange = serviceTickets.filter(t => t.resolvedAt && dateInRange(t.resolvedAt.slice(0, 10), dateFrom, dateTo)).length;
    card1 = { icon: "🛠️", value: ticketsInRange, label: `Tickets (${rangeLbl})`, cls: "" };
    card4 = { icon: "✅", value: resolvedInRange, label: `Resolved (${rangeLbl})`, cls: "good" };
  } else {
    card1 = { icon: "🛠️", value: serviceTickets.length, label: "Total Tickets", cls: "" };
    card4 = { icon: "✅", value: serviceTickets.filter(t => t.status === "resolved").length, label: "Resolved", cls: "good" };
  }

  const cards = [
    card1,
    { icon: "🟡", value: open, label: "Open", cls: open > 0 ? "warn" : "" },
    { icon: "🔧", value: inProgress, label: "In Progress", cls: "" },
    card4,
  ];

  document.getElementById("serviceStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

function renderServiceTable() {
  const tbody = document.querySelector("#serviceTable tbody");
  const dateFrom = document.getElementById("serviceDateFrom").value;
  const dateTo = document.getElementById("serviceDateTo").value;
  tbody.innerHTML = serviceTickets.filter(t => dateInRange(t.scheduledDate, dateFrom, dateTo)).map(t => {
    let actions = `<button class="icon-btn-sm" title="View" data-view-service="${t.id}">👁️</button>`;
    if (!["resolved", "cancelled"].includes(t.status)) {
      actions += `<button class="icon-btn-sm" title="Edit" data-edit-service="${t.id}">✏️</button>`;
    }
    actions += `<button class="icon-btn-sm" title="Print Report" data-print-service="${t.id}">🖨️</button>`;
    actions += `<button class="icon-btn-sm danger" title="Delete" data-delete-service="${t.id}">🗑️</button>`;

    return `
    <tr>
      <td>${t.ticketNumber}</td>
      <td>${companyName(t.companyId)}</td>
      <td>${serviceTypeLabel(t.type)}</td>
      <td>${t.issue}</td>
      <td><span class="badge ${servicePriorityBadgeClass(t.priority)}">${servicePriorityLabel(t.priority)}</span></td>
      <td>${t.assignedEmployeeId ? employeeName(t.assignedEmployeeId) : "—"}</td>
      <td><span class="badge ${serviceStatusBadgeClass(t.status)}">${serviceStatusLabel(t.status)}</span></td>
      <td><div class="row-actions">${actions}</div></td>
    </tr>
  `;
  }).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No service tickets yet</td></tr>`;
}

function startService(id) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t || t.status !== "open") return;
  t.status = "in_progress";
  logActivity(`Started service ticket ${t.ticketNumber}`);
  closeModal("serviceDetailModalOverlay");
  refreshServiceView();
}

function resolveService(id, resolutionNotes, chargeable, cost) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t || !["open", "in_progress"].includes(t.status)) return;
  t.status = "resolved";
  t.resolutionNotes = resolutionNotes;
  t.chargeable = chargeable;
  t.cost = chargeable ? cost : 0;
  t.resolvedAt = new Date().toISOString();
  logActivity(`Resolved service ticket ${t.ticketNumber}`);
  closeModal("serviceDetailModalOverlay");
  refreshServiceView();
}

function cancelService(id) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t || ["resolved", "cancelled"].includes(t.status)) return;
  showConfirm(`Cancel ticket ${t.ticketNumber}?`, () => {
    t.status = "cancelled";
    logActivity(`Cancelled service ticket ${t.ticketNumber}`);
    closeModal("serviceDetailModalOverlay");
    refreshServiceView();
  }, "Cancel Ticket");
}

function deleteService(id) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t) return;
  showConfirm(`Delete ticket ${t.ticketNumber}? This action cannot be undone.`, () => {
    const idx = serviceTickets.findIndex(x => x.id === id);
    if (idx > -1) serviceTickets.splice(idx, 1);
    closeModal("serviceDetailModalOverlay");
    refreshServiceView();
  });
}

function viewService(id) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t) return;
  const product = t.productSku ? products.find(p => p.sku === t.productSku) : null;

  document.getElementById("serviceDetailContent").innerHTML = `
    <div class="detail-top">
      <div>
        <h2 class="detail-title">${t.ticketNumber}</h2>
        <div class="detail-sub">${companyName(t.companyId)}${t.contactId ? " · " + contactName(t.contactId) : ""}</div>
        <div class="detail-sub">${serviceTypeLabel(t.type)}${product ? " · " + product.name : ""}</div>
        <div class="detail-sub">Created by ${t.createdByName || "—"} · ${formatDateTime(t.createdAt)}</div>
        <span class="badge ${serviceStatusBadgeClass(t.status)}">${serviceStatusLabel(t.status)}</span>
        <span class="badge ${servicePriorityBadgeClass(t.priority)}">${servicePriorityLabel(t.priority)} Priority</span>
      </div>
    </div>

    <div class="detail-section">
      <h4>Issue</h4>
      <p class="detail-desc">${t.issue}</p>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>Scheduled Date</span><b>${t.scheduledDate || "—"}</b></div>
      <div class="detail-stat"><span>Technician</span><b>${t.assignedEmployeeId ? employeeName(t.assignedEmployeeId) : "—"}</b></div>
      <div class="detail-stat"><span>Charge</span><b>${t.chargeable ? money(t.cost) : "Free"}</b></div>
    </div>

    ${["open", "in_progress"].includes(t.status) ? `
      <div class="form-row">
        <label>Resolution Notes</label>
        <input type="text" id="serviceResolutionNotes" placeholder="e.g. Replaced compressor capacitor, tested and working">
      </div>
      <div class="form-row form-row-split">
        <div>
          <label>Chargeable?</label>
          <select id="serviceChargeable">
            <option value="no" ${!t.chargeable ? "selected" : ""}>No (Under Warranty / Free)</option>
            <option value="yes" ${t.chargeable ? "selected" : ""}>Yes</option>
          </select>
        </div>
        <div>
          <label>Cost (৳, if chargeable)</label>
          <input type="number" id="serviceCost" min="0" value="${t.cost || 0}">
        </div>
      </div>
    ` : ""}

    ${t.status === "resolved" ? `
      <div class="detail-section"><h4>Resolution Notes</h4><p class="detail-desc">${t.resolutionNotes || "—"}</p></div>
      <div class="detail-stats">
        <div class="detail-stat"><span>Chargeable</span><b>${t.chargeable ? money(t.cost) : "No"}</b></div>
        <div class="detail-stat"><span>Resolved</span><b>${formatDateTime(t.resolvedAt)}</b></div>
      </div>
    ` : ""}
  `;

  const actions = document.getElementById("serviceDetailActions");
  let html = `<button type="button" class="btn-ghost" data-close="serviceDetailModalOverlay">Close</button>`;
  if (t.status === "open") {
    html += `<button type="button" class="btn-primary" id="serviceStartBtn">🔧 Start Work</button>`;
  }
  if (["open", "in_progress"].includes(t.status)) {
    html += `<button type="button" class="btn-primary" id="serviceResolveBtn">✅ Mark Resolved</button>`;
    html += `<button type="button" class="btn-danger" id="serviceCancelBtn">❌ Cancel Ticket</button>`;
  }
  html += `<button type="button" class="btn-ghost" id="servicePrintBtn">🖨️ Print Report</button>`;
  html += `<button type="button" class="btn-danger" id="serviceDeleteBtn">🗑️ Delete</button>`;
  actions.innerHTML = html;

  if (t.status === "open") {
    document.getElementById("serviceStartBtn").onclick = () => startService(t.id);
  }
  if (["open", "in_progress"].includes(t.status)) {
    document.getElementById("serviceResolveBtn").onclick = () => {
      const notes = document.getElementById("serviceResolutionNotes").value.trim();
      const chargeable = document.getElementById("serviceChargeable").value === "yes";
      const cost = Number(document.getElementById("serviceCost").value) || 0;
      resolveService(t.id, notes, chargeable, cost);
    };
    document.getElementById("serviceCancelBtn").onclick = () => cancelService(t.id);
  }
  document.getElementById("servicePrintBtn").onclick = () => printService(t.id);
  document.getElementById("serviceDeleteBtn").onclick = () => deleteService(t.id);

  openModal("serviceDetailModalOverlay");
}

function setupServiceRowActions() {
  document.querySelector("#serviceTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-service]");
    const editBtn = e.target.closest("[data-edit-service]");
    const printBtn = e.target.closest("[data-print-service]");
    const deleteBtn = e.target.closest("[data-delete-service]");
    if (editBtn) editService(Number(editBtn.dataset.editService));
    else if (viewBtn) viewService(Number(viewBtn.dataset.viewService));
    else if (printBtn) printService(Number(printBtn.dataset.printService));
    else if (deleteBtn) deleteService(Number(deleteBtn.dataset.deleteService));
  });
}

function buildServicePrintHtml(t) {
  const product = t.productSku ? products.find(p => p.sku === t.productSku) : null;

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${t.ticketNumber} — Service Report</title>
<style>${letterheadCss()}</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml("SERVICE REPORT", `Ticket No: <b>${t.ticketNumber}</b><br>Type: ${serviceTypeLabel(t.type)}<br>Resolved: ${formatDateTime(t.resolvedAt)}<br>Technician: ${t.assignedEmployeeId ? employeeName(t.assignedEmployeeId) : "—"}`)}

  <div class="print-parties">
    <div class="print-party-label">Customer</div>
    <div class="print-party-name">${companyName(t.companyId)}</div>
    <div class="print-party-detail">
      ${t.contactId ? contactName(t.contactId) + "<br>" : ""}
      ${product ? "Equipment: " + product.name : ""}
    </div>
  </div>

  <div class="print-notes"><b>Reported Issue</b>${t.issue}</div>
  ${t.resolutionNotes ? `<div class="print-notes"><b>Resolution</b>${t.resolutionNotes}</div>` : ""}

  <div class="print-total-row">
    <div class="print-total-box">
      <div class="print-total-line">
        <span>${t.chargeable ? "Amount Charged" : "Charge"}</span>
        <span>${t.chargeable ? money(t.cost) : "Free (Warranty)"}</span>
      </div>
    </div>
  </div>

  <div class="print-signatures">
    <div class="print-sig-line">Technician Signature — ${COMPANY_INFO.name}</div>
    <div class="print-sig-line">Customer Acknowledgement</div>
  </div>

  <div class="doc-note">This is a system-generated service report from ${COMPANY_INFO.name} ERP.</div>
  </div>
</body>
</html>`;
}

function printService(id) {
  const t = serviceTickets.find(x => x.id === id);
  if (!t) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildServicePrintHtml(t));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

function refreshServiceView() {
  renderServiceStats();
  renderServiceTable();
  saveState();
}

function refreshServiceDateFilter() {
  renderServiceStats();
  renderServiceTable();
}

function setupServiceDateFilter() {
  document.getElementById("serviceDateFrom").addEventListener("change", refreshServiceDateFilter);
  document.getElementById("serviceDateTo").addEventListener("change", refreshServiceDateFilter);
  document.getElementById("serviceDateClear").addEventListener("click", () => {
    document.getElementById("serviceDateFrom").value = "";
    document.getElementById("serviceDateTo").value = "";
    refreshServiceDateFilter();
  });
}

function initServiceModule() {
  refreshServiceView();
  setupAddService();
  setupServiceRowActions();
  setupServiceDateFilter();
}

// =====================================================================
// ACCOUNTS MODULE — cash/bank balances, income/expense transactions
// =====================================================================

const cashAccounts = [
  { id: 1, name: "Petty Cash", type: "cash", openingBalance: 10000 },
  { id: 2, name: "Main Cash", type: "cash", openingBalance: 200000 },
  { id: 3, name: "Bank Account", type: "bank", openingBalance: 1000000 },
];
let cashAccountIdCounter = 4;
let editingCashAccountId = null;

const expenseCategories = [
  { name: "Sales Revenue", kind: "income" },
  { name: "Customer Payment", kind: "income" },
  { name: "Capital Deposit", kind: "income" },
  { name: "Other Income", kind: "income" },
  { name: "Vendor Payment", kind: "expense" },
  { name: "Salary", kind: "expense" },
  { name: "Conveyance", kind: "expense" },
  { name: "Rent", kind: "expense" },
  { name: "Utilities", kind: "expense" },
  { name: "Office Supplies", kind: "expense" },
  { name: "Maintenance", kind: "expense" },
  { name: "Owner's Withdrawal", kind: "expense" },
  { name: "Petty Cash Expense", kind: "expense" },
  { name: "Other Expense", kind: "expense" },
];

const transactions = [];
let transactionIdCounter = 1;
let editingTransactionId = null;

function accountName(id) {
  const a = cashAccounts.find(x => x.id === id);
  return a ? a.name : "—";
}

function populateAccountSelect(selectId) {
  document.getElementById(selectId).innerHTML =
    cashAccounts.map(a => `<option value="${a.id}">${a.name}</option>`).join("");
}

// Vendor payments, paid salary entries and paid conveyance bills already live in their own
// modules — pull them in as read-only ledger lines instead of duplicating the data here.
function derivedTransactions() {
  const list = [];

  vendorPayments.forEach(p => {
    const vendor = vendors.find(v => v.id === p.vendorId);
    list.push({
      id: `vp-${p.id}`,
      date: p.date,
      type: "expense",
      category: "Vendor Payment",
      accountId: p.accountId || null,
      amount: p.amount,
      description: `Payment to ${vendor ? vendor.name : "Vendor"}${p.note ? " — " + p.note : ""} (${p.method})`,
      source: "Purchase",
      editable: false,
    });
  });

  salarySheets.forEach(s => {
    s.entries.forEach(entry => {
      if (!entry.paid) return;
      const t = computeSheetEntryTotals(entry);
      list.push({
        id: `sal-${s.id}-${entry.employeeId}`,
        date: entry.paidDate || s.createdDate,
        type: "expense",
        category: "Salary",
        accountId: entry.paidAccountId || null,
        amount: t.netSalary,
        description: `Salary — ${entry.employeeName} (${s.title})`,
        source: "HR",
        editable: false,
      });
    });
  });

  conveyanceBills.forEach(b => {
    if (b.status !== "paid") return;
    list.push({
      id: `cv-${b.id}`,
      date: b.date,
      type: "expense",
      category: "Conveyance",
      accountId: b.paidAccountId || null,
      amount: conveyanceLegTotal(b),
      description: `Conveyance — ${b.employeeName} (${b.purpose})`,
      source: "Conveyance",
      editable: false,
    });
  });

  customerPayments.forEach(p => {
    const company = companies.find(c => c.id === p.companyId);
    const so = p.soId ? salesOrders.find(x => x.id === p.soId) : null;
    list.push({
      id: `cp-${p.id}`,
      date: p.date,
      type: "income",
      category: "Customer Payment",
      accountId: p.accountId || null,
      amount: p.amount,
      description: `Payment from ${company ? company.name : "Customer"}${so ? " — " + so.soNumber : ""}${p.note ? " — " + p.note : ""} (${p.method})`,
      source: "Sales",
      editable: false,
    });
  });

  return list;
}

function allTransactions() {
  const manual = transactions.map(t => ({ ...t, editable: true, source: "Manual" }));
  return [...manual, ...derivedTransactions()].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function accountBalance(accountId) {
  const account = cashAccounts.find(a => a.id === accountId);
  if (!account) return 0;
  let balance = account.openingBalance || 0;
  allTransactions().forEach(t => {
    if (t.accountId !== accountId) return;
    balance += t.type === "income" ? t.amount : -t.amount;
  });
  return balance;
}

// Blocks an expense/payment from being recorded against an account that doesn't have
// enough money in it — deposit into that Cash & Bank account first, then it can be spent.
// excludeManualTxId: when editing an existing manual transaction, undo its own old effect
// on the account first so a same-amount (or smaller) edit isn't falsely blocked.
function ensureSufficientBalance(accountId, amount, excludeManualTxId = null) {
  let available = accountBalance(accountId);
  if (excludeManualTxId != null) {
    const old = transactions.find(t => t.id === excludeManualTxId);
    if (old && old.accountId === accountId) {
      available += old.type === "income" ? -old.amount : old.amount;
    }
  }
  if (available < amount) {
    showInfo(
      `Insufficient balance in "${accountName(accountId)}" — available ${money(available)}, but this needs ${money(amount)}. ` +
      `Deposit money into that account first (Accounts → Cash & Bank), then try again.`
    );
    return false;
  }
  return true;
}

let accountsDateRange = { active: false };
let transactionAccountFilter = null; // set via a Cash & Bank card's "View History" link

function renderAccountsStats() {
  const all = allTransactions().filter(t => inDateRange(t.date, accountsDateRange));
  const totalIncome = all.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpense = all.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const net = totalIncome - totalExpense;
  const totalCash = cashAccounts.reduce((s, a) => s + accountBalance(a.id), 0);
  const periodSuffix = accountsDateRange.active ? ` (${accountsDateRange.label})` : "";

  const cards = [
    { icon: "📈", value: money(totalIncome), label: `Total Income${periodSuffix}`, cls: "good" },
    { icon: "📉", value: money(totalExpense), label: `Total Expense${periodSuffix}`, cls: "" },
    { icon: "💰", value: money(net), label: `Net (Income − Expense)${periodSuffix}`, cls: net >= 0 ? "good" : "warn" },
    { icon: "🏦", value: money(totalCash), label: "Cash & Bank on Hand", cls: "" },
  ];

  document.getElementById("accountsStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

function renderCategoryTotalsTable() {
  const all = allTransactions().filter(t => inDateRange(t.date, accountsDateRange));
  const tbody = document.querySelector("#categoryTotalsTable tbody");

  tbody.innerHTML = expenseCategories.map(cat => {
    const total = all.filter(t => t.category === cat.name).reduce((s, t) => s + t.amount, 0);
    return `
      <tr>
        <td>${cat.name}</td>
        <td><span class="badge ${cat.kind === "income" ? "in" : "outmove"}">${cat.kind === "income" ? "Income" : "Expense"}</span></td>
        <td>${money(total)}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm danger" title="Delete Category" data-delete-exp-category="${cat.name}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="4" style="color:var(--text-muted); text-align:center; padding:24px;">No categories yet</td></tr>`;
}

function setupAddExpCategory() {
  document.getElementById("addExpCategoryBtn").addEventListener("click", () => {
    document.getElementById("expCategoryForm").reset();
    openModal("expCategoryModalOverlay");
  });

  document.getElementById("expCategoryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("ec-name").value.trim();
    if (!name) return;
    if (expenseCategories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      showInfo(`Category "${name}" already exists.`);
      return;
    }
    expenseCategories.push({ name, kind: document.getElementById("ec-kind").value });
    closeModal("expCategoryModalOverlay");
    refreshAccountsView();
  });
}

function deleteExpCategory(name) {
  const inUse = allTransactions().some(t => t.category === name);
  if (inUse) {
    showInfo(`"${name}" is used by existing transactions and can't be deleted. Remove those transactions first.`);
    return;
  }
  showConfirm(`Delete category "${name}"?`, () => {
    const idx = expenseCategories.findIndex(c => c.name === name);
    if (idx > -1) expenseCategories.splice(idx, 1);
    refreshAccountsView();
  });
}

function setupCategoryTotalsRowActions() {
  document.querySelector("#categoryTotalsTable tbody").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-exp-category]");
    if (deleteBtn) deleteExpCategory(deleteBtn.dataset.deleteExpCategory);
  });
}

function renderCashAccounts() {
  const grid = document.getElementById("cashAccountGrid");
  grid.innerHTML = cashAccounts.map(a => `
    <div class="warehouse-card">
      <div class="warehouse-card-actions">
        <button class="icon-btn-sm" title="Edit" data-edit-cash-account="${a.id}">✏️</button>
        <button class="icon-btn-sm danger" title="Delete" data-delete-cash-account="${a.id}">🗑️</button>
      </div>
      <h3>${a.name}</h3>
      <p>${a.type === "cash" ? "Cash" : "Bank"}</p>
      <div class="warehouse-stat"><span>Balance</span><b>${money(accountBalance(a.id))}</b></div>
      <div class="cash-account-actions">
        <button class="btn-ghost" data-deposit-account="${a.id}">💰 Deposit</button>
        <button class="btn-ghost" data-withdraw-account="${a.id}">💸 Withdraw</button>
      </div>
      <button class="cash-account-history-link" data-history-account="${a.id}">🔍 View History</button>
    </div>
  `).join("") || `<p class="muted">No accounts yet — add one to get started.</p>`;
}

function openCashAccountModal(account = null) {
  editingCashAccountId = account ? account.id : null;
  document.getElementById("cashAccountModalTitle").textContent = account ? "Edit Account" : "New Account";
  document.getElementById("cashAccountSubmitBtn").textContent = account ? "Update Account" : "Save Account";
  document.getElementById("cashAccountForm").reset();
  if (account) {
    document.getElementById("ca-name").value = account.name;
    document.getElementById("ca-type").value = account.type;
    document.getElementById("ca-opening").value = account.openingBalance;
  }
  openModal("cashAccountModalOverlay");
}

function editCashAccount(id) {
  const a = cashAccounts.find(x => x.id === id);
  if (a) openCashAccountModal(a);
}

function deleteCashAccount(id) {
  const a = cashAccounts.find(x => x.id === id);
  if (!a) return;
  const inUse = transactions.some(t => t.accountId === id);
  if (inUse) {
    showInfo(`"${a.name}" has transactions recorded against it and can't be deleted.`);
    return;
  }
  showConfirm(`Delete account "${a.name}"?`, () => {
    const idx = cashAccounts.findIndex(x => x.id === id);
    if (idx > -1) cashAccounts.splice(idx, 1);
    refreshAccountsView();
  });
}

function setupAddCashAccount() {
  document.getElementById("addCashAccountBtn").addEventListener("click", () => openCashAccountModal());

  document.getElementById("cashAccountForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("ca-name").value.trim();
    if (!name) return;

    const data = {
      name,
      type: document.getElementById("ca-type").value,
      openingBalance: Number(document.getElementById("ca-opening").value) || 0,
    };

    if (editingCashAccountId) {
      Object.assign(cashAccounts.find(a => a.id === editingCashAccountId), data);
      editingCashAccountId = null;
    } else {
      cashAccounts.push({ id: cashAccountIdCounter++, ...data });
    }

    closeModal("cashAccountModalOverlay");
    refreshAccountsView();
  });
}

function setupCashAccountCardActions() {
  document.getElementById("cashAccountGrid").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-cash-account]");
    const deleteBtn = e.target.closest("[data-delete-cash-account]");
    const depositBtn = e.target.closest("[data-deposit-account]");
    const withdrawBtn = e.target.closest("[data-withdraw-account]");
    const historyBtn = e.target.closest("[data-history-account]");
    if (editBtn) editCashAccount(Number(editBtn.dataset.editCashAccount));
    else if (deleteBtn) deleteCashAccount(Number(deleteBtn.dataset.deleteCashAccount));
    else if (depositBtn) {
      openTransactionModal(null, {
        type: "income",
        accountId: Number(depositBtn.dataset.depositAccount),
        category: "Capital Deposit",
      });
    } else if (withdrawBtn) {
      openTransactionModal(null, {
        type: "expense",
        accountId: Number(withdrawBtn.dataset.withdrawAccount),
        category: "Owner's Withdrawal",
      });
    } else if (historyBtn) {
      viewAccountHistory(Number(historyBtn.dataset.historyAccount));
    }
  });
}

function populateTransactionCategorySelect() {
  const type = document.getElementById("tx-type").value;
  document.getElementById("tx-category").innerHTML = expenseCategories
    .filter(c => c.kind === type)
    .map(c => `<option value="${c.name}">${c.name}</option>`).join("");
}

function populateTransactionAccountSelect() {
  populateAccountSelect("tx-account");
}

// presets: used by the Cash & Bank cards' Deposit/Withdraw buttons to pre-fill
// type, account and category so the user only has to type an amount and note.
function openTransactionModal(tx = null, presets = null) {
  if (cashAccounts.length === 0) {
    showInfo("Add a cash or bank account first before recording a transaction.");
    return;
  }

  editingTransactionId = tx ? tx.id : null;
  const isDeposit = presets && presets.type === "income";
  const isWithdraw = presets && presets.type === "expense";
  document.getElementById("transactionModalTitle").textContent = tx
    ? "Edit Transaction"
    : isDeposit ? "Deposit Money" : isWithdraw ? "Withdraw Money" : "New Transaction";
  document.getElementById("transactionSubmitBtn").textContent = tx
    ? "Update Transaction"
    : isDeposit ? "Save Deposit" : isWithdraw ? "Save Withdrawal" : "Save Transaction";

  document.getElementById("transactionForm").reset();
  document.getElementById("tx-date").value = tx ? tx.date : todayStr();
  document.getElementById("tx-type").value = tx ? tx.type : (presets ? presets.type : "expense");
  populateTransactionCategorySelect();
  populateTransactionAccountSelect();

  if (tx) {
    document.getElementById("tx-category").value = tx.category;
    document.getElementById("tx-account").value = tx.accountId;
    document.getElementById("tx-amount").value = tx.amount;
    document.getElementById("tx-description").value = tx.description || "";
  } else if (presets) {
    if (presets.category) document.getElementById("tx-category").value = presets.category;
    if (presets.accountId) document.getElementById("tx-account").value = presets.accountId;
  }

  openModal("transactionModalOverlay");
}

function editTransaction(id) {
  const t = transactions.find(x => x.id === id);
  if (t) openTransactionModal(t);
}

function deleteTransaction(id) {
  const t = transactions.find(x => x.id === id);
  if (!t) return;
  showConfirm(`Delete this transaction (${money(t.amount)} — ${t.category})? This action cannot be undone.`, () => {
    const idx = transactions.findIndex(x => x.id === id);
    if (idx > -1) transactions.splice(idx, 1);
    refreshAccountsView();
  });
}

function setupAddTransaction() {
  document.getElementById("addTransactionBtn").addEventListener("click", () => openTransactionModal());
  document.getElementById("tx-type").addEventListener("change", populateTransactionCategorySelect);

  document.getElementById("transactionForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const category = document.getElementById("tx-category").value;
    if (!category) return;
    const accountId = Number(document.getElementById("tx-account").value);
    if (!accountId) return;
    const amount = Number(document.getElementById("tx-amount").value) || 0;
    if (amount <= 0) return;
    const type = document.getElementById("tx-type").value;

    if (type === "expense" && !ensureSufficientBalance(accountId, amount, editingTransactionId)) return;

    const data = {
      date: document.getElementById("tx-date").value || todayStr(),
      type,
      category,
      accountId,
      amount,
      description: document.getElementById("tx-description").value.trim(),
    };

    if (editingTransactionId) {
      Object.assign(transactions.find(t => t.id === editingTransactionId), data);
      editingTransactionId = null;
    } else {
      transactions.unshift({
        id: transactionIdCounter,
        createdByUsername: currentUser ? currentUser.username : null,
        createdByName: currentUser ? currentUser.name : "Unknown",
        createdAt: new Date().toISOString(),
        ...data,
      });
      transactionIdCounter++;
    }

    closeModal("transactionModalOverlay");
    refreshAccountsView();
  });
}

function renderTransactionTable() {
  const tbody = document.querySelector("#transactionTable tbody");
  let all = allTransactions();
  if (transactionAccountFilter != null) {
    all = all.filter(t => t.accountId === transactionAccountFilter);
  }

  const note = document.getElementById("transactionFilterNote");
  const clearBtn = document.getElementById("clearTransactionFilterBtn");
  if (transactionAccountFilter != null) {
    note.textContent = `Showing transactions for: ${accountName(transactionAccountFilter)}`;
    clearBtn.classList.remove("hidden");
  } else {
    note.textContent = "All money in and out — vendor payments, salary and conveyance paid elsewhere are pulled in automatically";
    clearBtn.classList.add("hidden");
  }

  tbody.innerHTML = all.map(t => {
    let actions;
    if (t.editable) {
      actions = `<button class="icon-btn-sm" title="Edit" data-edit-transaction="${t.id}">✏️</button>` +
        `<button class="icon-btn-sm danger" title="Delete" data-delete-transaction="${t.id}">🗑️</button>`;
    } else {
      actions = `<span class="muted" style="font-size:11px;">via ${t.source}</span>`;
    }
    return `
      <tr>
        <td>${t.date}</td>
        <td>${t.category}</td>
        <td>${t.accountId ? accountName(t.accountId) : "—"}</td>
        <td><span class="badge ${t.type === "income" ? "in" : "outmove"}">${t.type === "income" ? "Income" : "Expense"}</span></td>
        <td>${money(t.amount)}</td>
        <td>${t.description || "—"}</td>
        <td><div class="row-actions">${actions}</div></td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">${transactionAccountFilter != null ? "No transactions for this account yet" : "No transactions yet"}</td></tr>`;
}

function setupTransactionRowActions() {
  document.querySelector("#transactionTable tbody").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-transaction]");
    const deleteBtn = e.target.closest("[data-delete-transaction]");
    if (editBtn) editTransaction(Number(editBtn.dataset.editTransaction));
    else if (deleteBtn) deleteTransaction(Number(deleteBtn.dataset.deleteTransaction));
  });
}

// Jumps to the Transactions tab filtered down to one account's deposits/withdrawals —
// wired to each Cash & Bank card's "View History" link.
function viewAccountHistory(accountId) {
  transactionAccountFilter = accountId;
  renderTransactionTable();
  document.querySelector('#module-accounts .tab-btn[data-atab="transactions"]').click();
}

function setupClearTransactionFilter() {
  document.getElementById("clearTransactionFilterBtn").addEventListener("click", () => {
    transactionAccountFilter = null;
    renderTransactionTable();
  });
}

function setupAccountsTabs() {
  const tabButtons = document.querySelectorAll("#module-accounts .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll("#module-accounts .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`apanel-${btn.dataset.atab}`).classList.remove("hidden");
    });
  });
}

function refreshAccountsView() {
  renderAccountsStats();
  renderCategoryTotalsTable();
  renderCashAccounts();
  renderTransactionTable();
  saveState();
}

function initAccountsModule() {
  refreshAccountsView();
  setupAccountsTabs();
  setupAddExpCategory();
  setupCategoryTotalsRowActions();
  setupAddCashAccount();
  setupCashAccountCardActions();
  setupAddTransaction();
  setupTransactionRowActions();
  setupClearTransactionFilter();
  setupModuleDateFilter("accountsDateFilter", (range) => {
    accountsDateRange = range;
    renderAccountsStats();
    renderCategoryTotalsTable();
  });
}

// =====================================================================
// EMPLOYEES & REPORTS MODULE
// =====================================================================

// ---------- Mock data ----------

const employees = [
  { id: 1, name: "Imran Kabir", role: "Senior Sales Executive", phone: "01711-200001", email: "imran@banfozz.com", joinDate: "2024-03-01", baseSalary: 45000 },
  { id: 2, name: "Nusrat Jahan", role: "Sales Executive", phone: "01811-200002", email: "nusrat@banfozz.com", joinDate: "2024-11-15", baseSalary: 32000 },
  { id: 3, name: "Shariful Islam", role: "Sales Manager", phone: "01911-200003", email: "sharif@banfozz.com", joinDate: "2023-06-10", baseSalary: 60000 },
];
let employeeIdCounter = 4;

const salarySheets = [
  {
    id: 1,
    title: "Salary sheet for the month of July 2026",
    monthKey: "2026-07",
    createdDate: "2026-08-01",
    entries: [
      { employeeId: 1, employeeName: "Imran Kabir", role: "Senior Sales Executive", baseSalary: 45000, absentDays: 0, otHours: 0, paid: true, paidDate: "2026-08-02", paidMethod: "Bank Transfer", paidAccountId: 3 },
      { employeeId: 2, employeeName: "Nusrat Jahan", role: "Sales Executive", baseSalary: 32000, absentDays: 1, otHours: 0, paid: true, paidDate: "2026-08-02", paidMethod: "Bank Transfer", paidAccountId: 3 },
      { employeeId: 3, employeeName: "Shariful Islam", role: "Sales Manager", baseSalary: 60000, absentDays: 0, otHours: 4, paid: true, paidDate: "2026-08-02", paidMethod: "Bank Transfer", paidAccountId: 3 },
    ],
  },
  {
    id: 2,
    title: "Salary sheet for the month of August 2026",
    monthKey: "2026-08",
    createdDate: "2026-08-14",
    entries: [
      { employeeId: 1, employeeName: "Imran Kabir", role: "Senior Sales Executive", baseSalary: 45000, absentDays: 2, otHours: 5, paid: false, paidDate: null, paidMethod: null, paidAccountId: null },
      { employeeId: 2, employeeName: "Nusrat Jahan", role: "Sales Executive", baseSalary: 32000, absentDays: 1, otHours: 1.5, paid: true, paidDate: "2026-08-13", paidMethod: "Cash", paidAccountId: 2 },
      { employeeId: 3, employeeName: "Shariful Islam", role: "Sales Manager", baseSalary: 60000, absentDays: 0, otHours: 6, paid: false, paidDate: null, paidMethod: null, paidAccountId: null },
    ],
  },
];
let salarySheetIdCounter = 3;

const STANDARD_WORK_HOURS = 8;
const OT_MULTIPLIER = 1.5;
const STANDARD_MONTH_DAYS = 30;

// ---------- Helpers: month periods ----------

function monthKeyOf(dateStr) {
  return dateStr.slice(0, 7);
}

function currentMonthKey() {
  return new Date().toISOString().slice(0, 10).slice(0, 7);
}

function previousMonthKey() {
  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() - 1);
  return d.toISOString().slice(0, 7);
}

function monthLabel(key) {
  const [y, m] = key.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function salesOrdersInMonth(monthKey, companyFilter = "all") {
  return salesOrders.filter(so => {
    if (so.status === "cancelled") return false;
    if (monthKeyOf(so.date) !== monthKey) return false;
    if (companyFilter !== "all" && so.companyId !== Number(companyFilter)) return false;
    return true;
  });
}

function employeeMonthSales(employeeId, monthKey, companyFilter = "all") {
  return salesOrdersInMonth(monthKey, companyFilter)
    .filter(so => so.employeeId === employeeId)
    .reduce((s, so) => s + soTotal(so), 0);
}

function employeeMonthOrderCount(employeeId, monthKey, companyFilter = "all") {
  return salesOrdersInMonth(monthKey, companyFilter).filter(so => so.employeeId === employeeId).length;
}

function employeeMonthItems(employeeId, monthKey, companyFilter = "all") {
  const orders = salesOrdersInMonth(monthKey, companyFilter).filter(so => so.employeeId === employeeId);
  const itemMap = {};
  orders.forEach(so => {
    so.items.forEach(i => {
      if (!itemMap[i.name]) itemMap[i.name] = { qty: 0, value: 0 };
      itemMap[i.name].qty += i.qty;
      itemMap[i.name].value += i.qty * i.unitPrice;
    });
  });
  return Object.entries(itemMap).map(([name, v]) => ({ name, qty: v.qty, value: v.value }));
}

function currentReportCompanyFilter() {
  const el = document.getElementById("reportCompanyFilter");
  return el ? el.value : "all";
}

// ---------- Report period toggle (Monthly / Yearly / Custom date range) ----------

let reportPeriodType = "monthly"; // "monthly" | "yearly" | "custom"

function currentYearKey() {
  return String(new Date().getFullYear());
}

function previousYearKey() {
  return String(new Date().getFullYear() - 1);
}

function monthLastDate(monthKey) {
  const [y, m] = monthKey.split("-").map(Number);
  return new Date(y, m, 0).toISOString().slice(0, 10);
}

function formatDisplayDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

function rangeLabel(from, to) {
  return from === to ? formatDisplayDate(from) : `${formatDisplayDate(from)} – ${formatDisplayDate(to)}`;
}

// Same-length range immediately before [from, to] — used for the "last period" comparison.
function previousRangeOf(from, to) {
  const fromDate = new Date(from + "T00:00:00");
  const toDate = new Date(to + "T00:00:00");
  const lengthMs = toDate - fromDate;
  const prevTo = new Date(fromDate.getTime() - 86400000);
  const prevFrom = new Date(prevTo.getTime() - lengthMs);
  return { from: prevFrom.toISOString().slice(0, 10), to: prevTo.toISOString().slice(0, 10) };
}

// Every mode (monthly/yearly/custom) resolves to one shape: { from, to, label } — explicit dates always shown.
function currentReportRange() {
  if (reportPeriodType === "custom") {
    const fromEl = document.getElementById("reportRangeFrom");
    const toEl = document.getElementById("reportRangeTo");
    const from = (fromEl && fromEl.value) || todayStr();
    const to = (toEl && toEl.value) || todayStr();
    return { from, to, label: rangeLabel(from, to) };
  }
  if (reportPeriodType === "yearly") {
    const y = currentYearKey();
    return { from: `${y}-01-01`, to: `${y}-12-31`, label: y };
  }
  const mk = currentMonthKey();
  return { from: `${mk}-01`, to: monthLastDate(mk), label: monthLabel(mk) };
}

function previousReportRange() {
  if (reportPeriodType === "custom") {
    const current = currentReportRange();
    const prev = previousRangeOf(current.from, current.to);
    return { ...prev, label: rangeLabel(prev.from, prev.to) };
  }
  if (reportPeriodType === "yearly") {
    const y = previousYearKey();
    return { from: `${y}-01-01`, to: `${y}-12-31`, label: y };
  }
  const mk = previousMonthKey();
  return { from: `${mk}-01`, to: monthLastDate(mk), label: monthLabel(mk) };
}

function salesOrdersInRange(range, companyFilter = "all") {
  return salesOrders.filter(so => {
    if (so.status === "cancelled") return false;
    if (so.date < range.from || so.date > range.to) return false;
    if (companyFilter !== "all" && so.companyId !== Number(companyFilter)) return false;
    return true;
  });
}

function employeeRangeSales(employeeId, range, companyFilter = "all") {
  return salesOrdersInRange(range, companyFilter).filter(so => so.employeeId === employeeId).reduce((s, so) => s + soTotal(so), 0);
}

function employeeRangeOrderCount(employeeId, range, companyFilter = "all") {
  return salesOrdersInRange(range, companyFilter).filter(so => so.employeeId === employeeId).length;
}

function reportPeriodWord() {
  return reportPeriodType === "yearly" ? "Year" : reportPeriodType === "custom" ? "Period" : "Month";
}

function renderSalesReportSection() {
  renderReportsStats();
  renderCompareChart();
  renderEmployeeReportTable();
  renderTopProductsTable();
  renderTopCustomersTable();
}

function setupReportPeriodToggle() {
  document.querySelectorAll("#reportPeriodToggle [data-rperiod]").forEach(btn => {
    btn.addEventListener("click", () => {
      reportPeriodType = btn.dataset.rperiod;
      document.querySelectorAll("#reportPeriodToggle [data-rperiod]").forEach(b => b.classList.toggle("active", b === btn));
      document.getElementById("reportCustomRange").classList.toggle("hidden", reportPeriodType !== "custom");
      if (reportPeriodType === "custom") {
        const fromEl = document.getElementById("reportRangeFrom");
        const toEl = document.getElementById("reportRangeTo");
        if (!fromEl.value) fromEl.value = `${currentMonthKey()}-01`;
        if (!toEl.value) toEl.value = todayStr();
      }
      renderSalesReportSection();
    });
  });

  ["reportRangeFrom", "reportRangeTo"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
      if (reportPeriodType !== "custom") return;
      renderSalesReportSection();
    });
  });
}

// ---------- Render: top stat cards ----------

function reportComparisonTitle() {
  if (reportPeriodType === "yearly") return "Yearly Sales Comparison";
  if (reportPeriodType === "custom") return "Custom Range Sales Comparison";
  return "Monthly Sales Comparison";
}

function renderReportsStats() {
  const companyFilter = currentReportCompanyFilter();
  const thisRange = currentReportRange();
  const lastRange = previousReportRange();
  const word = reportPeriodWord();

  const thisTotal = salesOrdersInRange(thisRange, companyFilter).reduce((s, so) => s + soTotal(so), 0);
  const lastTotal = salesOrdersInRange(lastRange, companyFilter).reduce((s, so) => s + soTotal(so), 0);

  let topEmployee = null;
  let topValue = -1;
  employees.forEach(e => {
    const val = employeeRangeSales(e.id, thisRange, companyFilter);
    if (val > topValue) {
      topValue = val;
      topEmployee = e;
    }
  });

  const cards = [
    { icon: "👥", value: employees.length, label: "Total Employees", cls: "" },
    { icon: "💵", value: money(thisTotal), label: `This ${word} Sales (${thisRange.label})`, cls: "good" },
    { icon: "📅", value: money(lastTotal), label: `Last ${word} Sales (${lastRange.label})`, cls: "" },
    { icon: "🏆", value: topEmployee && topValue > 0 ? topEmployee.name : "—", label: `Top Performer This ${word}`, cls: "" },
  ];

  document.getElementById("reportsStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

// ---------- Render: period comparison chart ----------

function renderCompareChart() {
  const companyFilter = currentReportCompanyFilter();
  const thisRange = currentReportRange();
  const lastRange = previousReportRange();

  const thisTotal = salesOrdersInRange(thisRange, companyFilter).reduce((s, so) => s + soTotal(so), 0);
  const lastTotal = salesOrdersInRange(lastRange, companyFilter).reduce((s, so) => s + soTotal(so), 0);

  const maxVal = Math.max(thisTotal, lastTotal, 1);
  const maxHeight = 180;
  const lastHeight = Math.max(6, Math.round((lastTotal / maxVal) * maxHeight));
  const thisHeight = Math.max(6, Math.round((thisTotal / maxVal) * maxHeight));

  let changeHtml = `<span class="compare-change flat">No prior data</span>`;
  if (lastTotal > 0) {
    const pct = ((thisTotal - lastTotal) / lastTotal) * 100;
    const up = pct >= 0;
    changeHtml = `<span class="compare-change ${up ? "up" : "down"}">${up ? "▲" : "▼"} ${Math.abs(pct).toFixed(1)}%</span>`;
  } else if (thisTotal > 0) {
    changeHtml = `<span class="compare-change up">▲ New activity</span>`;
  }

  document.getElementById("compareChart").innerHTML = `
    <div class="compare-header">
      <div>
        <h3>${reportComparisonTitle()}</h3>
        <p class="muted">${lastRange.label} vs ${thisRange.label}</p>
      </div>
      ${changeHtml}
    </div>
    <div class="compare-bars">
      <div class="compare-bar-col">
        <div class="compare-bar-value">${money(lastTotal)}</div>
        <div class="compare-bar" style="height:${lastHeight}px;"></div>
        <div class="compare-bar-label">${lastRange.label}</div>
      </div>
      <div class="compare-bar-col this-month">
        <div class="compare-bar-value">${money(thisTotal)}</div>
        <div class="compare-bar" style="height:${thisHeight}px;"></div>
        <div class="compare-bar-label">${thisRange.label}</div>
      </div>
    </div>
  `;
}

// ---------- Render: employee performance report table ----------

function renderEmployeeReportTable() {
  const companyFilter = currentReportCompanyFilter();
  const thisRange = currentReportRange();
  const lastRange = previousReportRange();
  const word = reportPeriodWord();

  document.getElementById("repColThisSales").textContent = `This ${word} Sales`;
  document.getElementById("repColThisOrders").textContent = `This ${word} Orders`;
  document.getElementById("repColLastSales").textContent = `Last ${word} Sales`;
  document.getElementById("repColChange").textContent = reportPeriodType === "yearly" ? "YoY Change" : reportPeriodType === "custom" ? "Change" : "MoM Change";

  const tbody = document.querySelector("#employeeReportTable tbody");

  tbody.innerHTML = employees.map(e => {
    const thisSales = employeeRangeSales(e.id, thisRange, companyFilter);
    const thisOrders = employeeRangeOrderCount(e.id, thisRange, companyFilter);
    const lastSales = employeeRangeSales(e.id, lastRange, companyFilter);

    let changeText = "—";
    let changeClass = "";
    if (lastSales > 0) {
      const pct = ((thisSales - lastSales) / lastSales) * 100;
      changeText = (pct >= 0 ? "+" : "") + pct.toFixed(1) + "%";
      changeClass = pct >= 0 ? "text-success" : "text-danger";
    } else if (thisSales > 0) {
      changeText = "New";
      changeClass = "text-success";
    }

    return `
      <tr>
        <td>${e.name}</td>
        <td>${e.role || "—"}</td>
        <td>${money(thisSales)}</td>
        <td>${thisOrders}</td>
        <td>${money(lastSales)}</td>
        <td class="${changeClass}">${changeText}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm" title="View" data-view-employee="${e.id}">👁️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No employees yet</td></tr>`;
}

// ---------- Render: Top Products / Top Customers leaderboards ----------

function rankBadge(idx) {
  return idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`;
}

function productSalesInRange(range, companyFilter = "all") {
  const map = {};
  salesOrdersInRange(range, companyFilter).forEach(so => {
    so.items.forEach(i => {
      if (!map[i.sku]) map[i.sku] = { sku: i.sku, name: i.name, qty: 0, revenue: 0 };
      map[i.sku].qty += i.qty;
      map[i.sku].revenue += i.qty * i.unitPrice;
    });
  });
  return Object.values(map).sort((a, b) => b.revenue - a.revenue);
}

function customerSalesInRange(range, companyFilter = "all") {
  const map = {};
  salesOrdersInRange(range, companyFilter).forEach(so => {
    if (!map[so.companyId]) map[so.companyId] = { companyId: so.companyId, orders: 0, revenue: 0 };
    map[so.companyId].orders += 1;
    map[so.companyId].revenue += soTotal(so);
  });
  return Object.values(map).sort((a, b) => b.revenue - a.revenue);
}

function renderTopProductsTable() {
  const companyFilter = currentReportCompanyFilter();
  const range = currentReportRange();
  document.getElementById("topProductsRangeLabel").textContent = range.label;

  const rows = productSalesInRange(range, companyFilter).slice(0, 10);
  const maxRevenue = rows.length ? rows[0].revenue : 0;

  document.querySelector("#topProductsTable tbody").innerHTML = rows.map((r, idx) => {
    const product = products.find(p => p.sku === r.sku);
    const pct = maxRevenue > 0 ? Math.round((r.revenue / maxRevenue) * 100) : 0;
    return `
      <tr>
        <td class="rank-badge">${rankBadge(idx)}</td>
        <td>
          <div class="product-name-cell">
            ${product ? productThumbHtml(product, 28) : ""}
            <span>${r.name}</span>
          </div>
        </td>
        <td class="num">${r.qty}</td>
        <td class="num">${money(r.revenue)}</td>
        <td><div class="rank-bar-track"><div class="rank-bar-fill" style="width:${pct}%"></div></div></td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="5" style="color:var(--text-muted); text-align:center; padding:24px;">No sales in this period</td></tr>`;
}

function renderTopCustomersTable() {
  const companyFilter = currentReportCompanyFilter();
  const range = currentReportRange();
  document.getElementById("topCustomersRangeLabel").textContent = range.label;

  const rows = customerSalesInRange(range, companyFilter).slice(0, 10);
  const maxRevenue = rows.length ? rows[0].revenue : 0;

  document.querySelector("#topCustomersTable tbody").innerHTML = rows.map((r, idx) => {
    const company = companies.find(c => c.id === r.companyId);
    const pct = maxRevenue > 0 ? Math.round((r.revenue / maxRevenue) * 100) : 0;
    const outstanding = customerOutstanding(r.companyId);
    return `
      <tr>
        <td class="rank-badge">${rankBadge(idx)}</td>
        <td>${company ? company.name : "—"}</td>
        <td class="num">${r.orders}</td>
        <td class="num">${money(r.revenue)}</td>
        <td class="num ${outstanding > 0 ? "text-danger" : "text-success"}">${money(outstanding)}</td>
        <td><div class="rank-bar-track"><div class="rank-bar-fill" style="width:${pct}%"></div></div></td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6" style="color:var(--text-muted); text-align:center; padding:24px;">No sales in this period</td></tr>`;
}

function populateReportCompanyFilter() {
  const select = document.getElementById("reportCompanyFilter");
  const current = select.value || "all";
  select.innerHTML = `<option value="all">All Companies</option>` + companies.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  if ([...select.options].some(o => o.value === current)) select.value = current;
}

function setupReportCompanyFilter() {
  document.getElementById("reportCompanyFilter").addEventListener("change", () => {
    renderSalesReportSection();
  });
}

// ---------- Render: Monthly Dues (salary due by month + vendor baki) ----------

function renderSalaryDueTable() {
  const tbody = document.querySelector("#salaryDueTable tbody");
  const rows = salarySheets.slice().sort((a, b) => b.monthKey.localeCompare(a.monthKey));

  tbody.innerHTML = rows.map(sheet => {
    const t = sheetTotals(sheet);
    return `
      <tr>
        <td>${monthLabel(sheet.monthKey)}</td>
        <td>${money(t.total)}</td>
        <td class="text-success">${money(t.paid)}</td>
        <td class="${t.due > 0 ? "text-danger" : "text-success"}">${money(t.due)}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="4" style="color:var(--text-muted); text-align:center; padding:24px;">No salary sheets yet</td></tr>`;
}

function renderVendorDueTable() {
  const tbody = document.querySelector("#vendorDueTable tbody");
  const thisKey = currentMonthKey();

  tbody.innerHTML = vendors.map(v => {
    const monthPurchases = purchaseOrders
      .filter(po => po.vendorId === v.id && monthKeyOf(po.date) === thisKey && ["approved", "partially_received", "received"].includes(po.status))
      .reduce((s, po) => s + poTotal(po), 0);
    const monthPayments = vendorPayments
      .filter(p => p.vendorId === v.id && monthKeyOf(p.date) === thisKey)
      .reduce((s, p) => s + p.amount, 0);
    const outstanding = vendorOutstanding(v.id);
    return `
      <tr>
        <td>
          <div class="product-name-cell">
            ${vendorLogoHtml(v, 28)}
            <span>${v.name}</span>
          </div>
        </td>
        <td>${money(monthPurchases)}</td>
        <td class="text-success">${money(monthPayments)}</td>
        <td class="${outstanding > 0 ? "text-danger" : "text-success"}">${money(outstanding)}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="4" style="color:var(--text-muted); text-align:center; padding:24px;">No vendors yet</td></tr>`;
}

// ---------- Full report print/PDF ----------

function buildFullReportPrintHtml() {
  const companyFilter = currentReportCompanyFilter();
  const filterCompany = companyFilter !== "all" ? companies.find(c => c.id === Number(companyFilter)) : null;
  const thisRange = currentReportRange();
  const lastRange = previousReportRange();
  const word = reportPeriodWord();

  const thisTotal = salesOrdersInRange(thisRange, companyFilter).reduce((s, so) => s + soTotal(so), 0);
  const lastTotal = salesOrdersInRange(lastRange, companyFilter).reduce((s, so) => s + soTotal(so), 0);

  let changeText = "No prior data";
  if (lastTotal > 0) {
    const pct = ((thisTotal - lastTotal) / lastTotal) * 100;
    changeText = `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
  } else if (thisTotal > 0) {
    changeText = "New activity";
  }

  let topEmployee = null;
  let topValue = -1;
  employees.forEach(e => {
    const val = employeeRangeSales(e.id, thisRange, companyFilter);
    if (val > topValue) { topValue = val; topEmployee = e; }
  });

  const statCardsHtml = [
    { label: "Total Employees", value: employees.length },
    { label: `This ${word} Sales (${thisRange.label})`, value: money(thisTotal) },
    { label: `Last ${word} Sales (${lastRange.label})`, value: money(lastTotal) },
    { label: `Top Performer This ${word}`, value: topEmployee && topValue > 0 ? topEmployee.name : "—" },
  ].map(c => `
    <div class="report-stat-box">
      <div class="report-stat-value">${c.value}</div>
      <div class="report-stat-label">${c.label}</div>
    </div>
  `).join("");

  const employeeReportRows = employees.map(e => {
    const eThisSales = employeeRangeSales(e.id, thisRange, companyFilter);
    const eThisOrders = employeeRangeOrderCount(e.id, thisRange, companyFilter);
    const eLastSales = employeeRangeSales(e.id, lastRange, companyFilter);
    let eChange = "—";
    if (eLastSales > 0) {
      const pct = ((eThisSales - eLastSales) / eLastSales) * 100;
      eChange = (pct >= 0 ? "+" : "") + pct.toFixed(1) + "%";
    } else if (eThisSales > 0) {
      eChange = "New";
    }
    return `
      <tr>
        <td>${e.name}</td>
        <td>${e.role || "—"}</td>
        <td class="num">${money(eThisSales)}</td>
        <td class="num">${eThisOrders}</td>
        <td class="num">${money(eLastSales)}</td>
        <td class="num">${eChange}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6" style="text-align:center; color:#999;">No employees yet</td></tr>`;

  const directoryRows = employees.map(e => `
    <tr>
      <td>${e.name}</td>
      <td>${e.role || "—"}</td>
      <td>${e.phone || "—"}</td>
      <td>${e.email || "—"}</td>
      <td>${e.joinDate || "—"}</td>
    </tr>
  `).join("") || `<tr><td colspan="5" style="text-align:center; color:#999;">No employees yet</td></tr>`;

  const topProducts = productSalesInRange(thisRange, companyFilter).slice(0, 10);
  const topProductRows = topProducts.map((r, idx) => `
    <tr>
      <td>${rankBadge(idx)}</td>
      <td>${r.name}</td>
      <td class="num">${r.qty}</td>
      <td class="num">${money(r.revenue)}</td>
    </tr>
  `).join("") || `<tr><td colspan="4" style="text-align:center; color:#999;">No sales in this period</td></tr>`;

  const topCustomers = customerSalesInRange(thisRange, companyFilter).slice(0, 10);
  const topCustomerRows = topCustomers.map((r, idx) => {
    const company = companies.find(c => c.id === r.companyId);
    const outstanding = customerOutstanding(r.companyId);
    return `
    <tr>
      <td>${rankBadge(idx)}</td>
      <td>${company ? company.name : "—"}</td>
      <td class="num">${r.orders}</td>
      <td class="num">${money(r.revenue)}</td>
      <td class="num">${money(outstanding)}</td>
    </tr>
  `;
  }).join("") || `<tr><td colspan="5" style="text-align:center; color:#999;">No sales in this period</td></tr>`;

  const generatedAt = new Date().toLocaleString("en-BD", { dateStyle: "medium", timeStyle: "short" });

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Full Report — ${COMPANY_INFO.name} — ${generatedAt}</title>
<style>
${letterheadCss()}
  h2.report-section-title { font-size: 15px; font-weight: 800; margin: 34px 0 14px; padding-bottom: 8px; border-bottom: 2px solid #eee; }
  .report-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 10px; }
  .report-stat-box { border: 1px solid #eee; border-radius: 10px; padding: 14px; text-align: center; }
  .report-stat-value { font-size: 18px; font-weight: 800; }
  .report-stat-label { font-size: 10.5px; color: #888; margin-top: 4px; }
  .report-compare-line { display: flex; justify-content: space-between; font-size: 13px; padding: 10px 0; border-bottom: 1px solid #eee; }
  tbody td { padding: 10px 8px; font-size: 12.5px; }
  .doc-content.page-break { break-after: page; page-break-after: always; }
</style>
</head>
<body>
  ${letterheadBackgroundHtml()}

  <div class="doc-content page-break">

  ${letterheadDocTitleHtml("FULL BUSINESS REPORT", `Generated: ${generatedAt}<br>${filterCompany ? `Company: ${filterCompany.name}` : "All Companies"}`)}

  <div class="report-stats-grid">
    ${statCardsHtml}
  </div>

  <h2 class="report-section-title">${reportComparisonTitle()}</h2>
  <div class="report-compare-line"><span>${lastRange.label}</span><span>${money(lastTotal)}</span></div>
  <div class="report-compare-line"><span>${thisRange.label}</span><span>${money(thisTotal)}</span></div>
  <div class="report-compare-line"><span>Change</span><span>${changeText}</span></div>

  <h2 class="report-section-title">Employee Sales Performance</h2>
  <table>
    <thead>
      <tr>
        <th>Employee</th>
        <th>Role</th>
        <th class="num">This ${word} Sales</th>
        <th class="num">This ${word} Orders</th>
        <th class="num">Last ${word} Sales</th>
        <th class="num">${reportPeriodType === "yearly" ? "YoY Change" : "MoM Change"}</th>
      </tr>
    </thead>
    <tbody>${employeeReportRows}</tbody>
  </table>

  </div>

  <div class="doc-content page-break">

  <h2 class="report-section-title">🏆 Top Products</h2>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Product</th>
        <th class="num">Qty Sold</th>
        <th class="num">Revenue</th>
      </tr>
    </thead>
    <tbody>${topProductRows}</tbody>
  </table>

  <h2 class="report-section-title">👑 Top Customers</h2>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Company</th>
        <th class="num">Orders</th>
        <th class="num">Revenue</th>
        <th class="num">Outstanding</th>
      </tr>
    </thead>
    <tbody>${topCustomerRows}</tbody>
  </table>

  </div>

  <div class="doc-content">

  <h2 class="report-section-title">Employee Directory</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Joined</th>
      </tr>
    </thead>
    <tbody>${directoryRows}</tbody>
  </table>

  <div class="doc-note">This is a system-generated full report from ${COMPANY_INFO.name} ERP · ${generatedAt}</div>
  </div>
</body>
</html>`;
}

function printFullReport() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildFullReportPrintHtml());
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

function setupFullReportDownload() {
  document.getElementById("downloadFullReportBtn").addEventListener("click", printFullReport);
}

// ---------- Employees table + CRUD ----------

function employeePhotoHtml(e, size = 32) {
  if (e.photo) {
    return `<img class="product-thumb" src="${e.photo}" alt="" style="width:${size}px;height:${size}px;">`;
  }
  return `<div class="product-thumb-placeholder" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.4)}px;">${(e.name || "?").charAt(0).toUpperCase()}</div>`;
}

function renderEmployees(searchTerm = "") {
  const tbody = document.querySelector("#employeeTable tbody");
  const term = searchTerm.trim().toLowerCase();
  const thisKey = currentMonthKey();
  const rows = employees.filter(e => !term || e.name.toLowerCase().includes(term));

  tbody.innerHTML = rows.map(e => `
    <tr>
      <td>
        <div class="product-name-cell">
          ${employeePhotoHtml(e, 32)}
          <span class="product-name-link" data-view-employee="${e.id}">${e.name}</span>
        </div>
      </td>
      <td>${e.role || "—"}</td>
      <td>${e.phone || "—"}</td>
      <td>${e.email || "—"}</td>
      <td>${e.joinDate || "—"}</td>
      <td>${money(employeeMonthSales(e.id, thisKey, "all"))}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="View" data-view-employee="${e.id}">👁️</button>
          <button class="icon-btn-sm" title="Edit" data-edit-employee="${e.id}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-employee="${e.id}">🗑️</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No employees found</td></tr>`;
}

let editingEmployeeId = null;
let pendingEmployeePhoto = null;
let employeeDocIndex = 0;
let employeeDocFiles = {};

function updateEmployeePhotoPreview() {
  const preview = document.getElementById("e-photo-preview");
  preview.innerHTML = pendingEmployeePhoto
    ? `<img src="${pendingEmployeePhoto}" alt="">`
    : `<span class="image-preview-placeholder">No photo</span>`;
}

function employeeDocRowHtml(index, doc = {}) {
  return `
    <div class="line-item-row doc-line-row" data-doc-index="${index}">
      <input type="text" class="doc-name-input" placeholder="Document name (e.g. NID Copy)" value="${doc.name || ""}">
      <div class="doc-file-cell">
        <input type="file" class="doc-file-input hidden" accept="application/pdf,image/*">
        <button type="button" class="btn-ghost doc-file-pick-btn">📎 Choose File</button>
        <span class="doc-file-name muted">${doc.fileName || "No file chosen"}</span>
      </div>
      <button type="button" class="line-item-remove" title="Remove">✕</button>
    </div>
  `;
}

function addEmployeeDocRow(doc = {}) {
  const container = document.getElementById("employeeDocuments");
  const index = employeeDocIndex++;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = employeeDocRowHtml(index, doc).trim();
  const row = wrapper.firstElementChild;
  container.appendChild(row);

  if (doc.fileData) {
    employeeDocFiles[index] = { fileName: doc.fileName, fileType: doc.fileType, fileData: doc.fileData };
  }

  const fileInput = row.querySelector(".doc-file-input");
  const fileNameSpan = row.querySelector(".doc-file-name");

  row.querySelector(".doc-file-pick-btn").addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      employeeDocFiles[index] = { fileName: file.name, fileType: file.type, fileData: reader.result };
      fileNameSpan.textContent = file.name;
    };
    reader.readAsDataURL(file);
  });

  row.querySelector(".line-item-remove").addEventListener("click", () => {
    delete employeeDocFiles[index];
    row.remove();
  });
}

function resetEmployeeDocs(docs = []) {
  document.getElementById("employeeDocuments").innerHTML = "";
  employeeDocIndex = 0;
  employeeDocFiles = {};
  docs.forEach(doc => addEmployeeDocRow(doc));
}

function populateEmployeeReportsToSelect(excludeId = null) {
  const select = document.getElementById("e-reportsto");
  const options = employees.filter(x => x.id !== excludeId);
  select.innerHTML = `<option value="">— No Reporting Boss —</option>` +
    options.map(x => `<option value="${x.id}">${x.name}${x.role ? " · " + x.role : ""}</option>`).join("");
}

function fillEmployeeForm(e) {
  document.getElementById("e-name").value = e.name;
  document.getElementById("e-role").value = e.role || "";
  document.getElementById("e-phone").value = e.phone || "";
  document.getElementById("e-email").value = e.email || "";
  document.getElementById("e-joindate").value = e.joinDate || "";
  document.getElementById("e-salary").value = e.baseSalary || 0;
  populateEmployeeReportsToSelect(e.id);
  document.getElementById("e-reportsto").value = e.reportsTo || "";
  pendingEmployeePhoto = e.photo || null;
  updateEmployeePhotoPreview();
  resetEmployeeDocs(e.documents || []);
}

function openNewEmployeeModal() {
  editingEmployeeId = null;
  document.querySelector("#employeeModalOverlay .modal-header h3").textContent = "Add New Employee";
  document.querySelector("#employeeForm button[type=submit]").textContent = "Save Employee";
  document.getElementById("employeeForm").reset();
  populateEmployeeReportsToSelect();
  pendingEmployeePhoto = null;
  updateEmployeePhotoPreview();
  resetEmployeeDocs();
  openModal("employeeModalOverlay");
}

function refreshEmployeeDependents() {
  refreshReportsView();
  if (typeof refreshHrView === "function") refreshHrView();
}

function setupAddEmployee() {
  document.getElementById("addEmployeeBtn").addEventListener("click", openNewEmployeeModal);

  document.getElementById("e-photo-pick").addEventListener("click", () => document.getElementById("e-photo").click());

  document.getElementById("e-photo").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingEmployeePhoto = reader.result;
      updateEmployeePhotoPreview();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("e-photo-remove").addEventListener("click", () => {
    pendingEmployeePhoto = null;
    document.getElementById("e-photo").value = "";
    updateEmployeePhotoPreview();
  });

  document.getElementById("employeeAddDocBtn").addEventListener("click", () => addEmployeeDocRow());

  document.getElementById("employeeForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("e-name").value.trim();
    if (!name) return;

    const documents = [];
    document.querySelectorAll("#employeeDocuments .doc-line-row").forEach(row => {
      const index = Number(row.dataset.docIndex);
      const docName = row.querySelector(".doc-name-input").value.trim();
      const fileInfo = employeeDocFiles[index];
      if (!docName && !fileInfo) return;
      documents.push({
        name: docName || (fileInfo ? fileInfo.fileName : "Document"),
        fileName: fileInfo ? fileInfo.fileName : null,
        fileType: fileInfo ? fileInfo.fileType : null,
        fileData: fileInfo ? fileInfo.fileData : null,
      });
    });

    const reportsToRaw = document.getElementById("e-reportsto").value;

    const data = {
      name,
      photo: pendingEmployeePhoto,
      role: document.getElementById("e-role").value.trim(),
      phone: document.getElementById("e-phone").value.trim(),
      email: document.getElementById("e-email").value.trim(),
      joinDate: document.getElementById("e-joindate").value,
      baseSalary: Number(document.getElementById("e-salary").value) || 0,
      reportsTo: reportsToRaw ? Number(reportsToRaw) : null,
      documents,
    };

    if (editingEmployeeId) {
      Object.assign(employees.find(x => x.id === editingEmployeeId), data);
    } else {
      employees.push({ id: employeeIdCounter++, ...data });
    }

    editingEmployeeId = null;
    closeModal("employeeModalOverlay");
    refreshEmployeeDependents();
  });
}

function editEmployee(id) {
  const e = employees.find(x => x.id === id);
  if (!e) return;
  editingEmployeeId = id;
  document.querySelector("#employeeModalOverlay .modal-header h3").textContent = "Edit Employee";
  document.querySelector("#employeeForm button[type=submit]").textContent = "Update Employee";
  fillEmployeeForm(e);
  openModal("employeeModalOverlay");
}

function deleteEmployee(id) {
  const e = employees.find(x => x.id === id);
  if (!e) return;

  const inUse = deals.some(d => d.employeeId === id) || quotations.some(q => q.employeeId === id) ||
    salesOrders.some(so => so.employeeId === id) || salarySheets.some(s => s.entries.some(en => en.employeeId === id));
  if (inUse) {
    showInfo(`"${e.name}" is linked to existing deals, quotations, sales orders or salary sheets and can't be deleted. Remove those first.`);
    return;
  }

  showConfirm(`Delete employee "${e.name}"? This action cannot be undone.`, () => {
    const idx = employees.findIndex(x => x.id === id);
    if (idx > -1) employees.splice(idx, 1);
    employees.forEach(x => { if (x.reportsTo === id) x.reportsTo = null; });
    closeModal("employeeDetailModalOverlay");
    refreshEmployeeDependents();
  });
}

function viewEmployee(id) {
  const e = employees.find(x => x.id === id);
  if (!e) return;

  const thisKey = currentMonthKey();
  const lastKey = previousMonthKey();
  const thisSales = employeeMonthSales(id, thisKey, "all");
  const lastSales = employeeMonthSales(id, lastKey, "all");
  const thisItems = employeeMonthItems(id, thisKey, "all");

  const itemRows = thisItems.map(i => `
    <div class="history-row">
      <span class="badge done">${i.qty} sold</span>
      <span class="history-qty">${i.name}</span>
      <span class="history-meta">${money(i.value)}</span>
      <span class="history-date"></span>
    </div>
  `).join("") || `<p class="muted">No sales recorded this month yet.</p>`;

  const employeeSOs = salesOrders.filter(so => so.employeeId === id && so.status !== "cancelled").slice().sort((a, b) => b.id - a.id);
  const soRows = employeeSOs.map(so => `
    <div class="history-row">
      <span class="badge ${soStatusBadgeClass(so.status)}">${soStatusLabel(so.status)}</span>
      <span class="history-qty">${so.soNumber}</span>
      <span class="history-meta">${companyName(so.companyId)} · ${money(soTotal(so))}</span>
      <span class="history-date">${so.date}</span>
    </div>
  `).join("") || `<p class="muted">No sales orders yet.</p>`;

  const employeeSheetEntries = [];
  salarySheets.forEach(s => {
    const entry = s.entries.find(en => en.employeeId === id);
    if (entry) employeeSheetEntries.push({ sheet: s, entry });
  });
  employeeSheetEntries.sort((a, b) => b.sheet.id - a.sheet.id);

  const sheetRows = employeeSheetEntries.map(({ sheet, entry }) => {
    const totals = computeSheetEntryTotals(entry);
    return `
      <div class="history-row">
        <span class="badge ${entry.paid ? "done" : "pending"}">${entry.paid ? "Paid" : "Due"}</span>
        <span class="history-qty">${sheet.title}</span>
        <span class="history-meta">${money(totals.netSalary)}</span>
        <span class="history-date">${sheet.createdDate}</span>
      </div>
    `;
  }).join("") || `<p class="muted">No salary sheets include this employee yet.</p>`;

  const docRows = (e.documents || []).filter(d => d.fileData).map(d => `
    <div class="history-row">
      <span class="badge in">📎</span>
      <span class="history-qty">${d.name}</span>
      <span class="history-meta"><a href="${d.fileData}" target="_blank" download="${d.fileName || d.name}" style="color: var(--accent);">View / Download</a></span>
      <span class="history-date"></span>
    </div>
  `).join("") || `<p class="muted">No documents uploaded yet.</p>`;

  document.getElementById("employeeDetailContent").innerHTML = `
    <div class="detail-top">
      ${e.photo
        ? `<img class="product-detail-image" src="${e.photo}" alt="">`
        : `<div class="product-detail-image-placeholder">${e.name.charAt(0).toUpperCase()}</div>`}
      <div>
        <h2 class="detail-title">${e.name}</h2>
        <div class="detail-sub">${e.role || "—"}${e.phone ? " · " + e.phone : ""}</div>
        ${e.email ? `<div class="detail-sub">${e.email}</div>` : ""}
        ${e.joinDate ? `<div class="detail-sub">Joined: ${e.joinDate}</div>` : ""}
        ${e.reportsTo ? `<div class="detail-sub">Reports to: ${(employees.find(x => x.id === e.reportsTo) || {}).name || "—"}</div>` : ""}
      </div>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><span>This Month Sales</span><b>${money(thisSales)}</b></div>
      <div class="detail-stat"><span>Last Month Sales</span><b>${money(lastSales)}</b></div>
      <div class="detail-stat"><span>Total Sales Orders</span><b>${employeeSOs.length}</b></div>
      <div class="detail-stat"><span>Monthly Salary</span><b>${money(e.baseSalary || 0)}</b></div>
    </div>

    <div class="detail-section"><h4>Documents</h4><div class="history-list">${docRows}</div></div>
    <div class="detail-section"><h4>Salary Sheets</h4><div class="history-list">${sheetRows}</div></div>
    <div class="detail-section"><h4>Items Sold This Month</h4><div class="history-list">${itemRows}</div></div>
    <div class="detail-section"><h4>Sales Order History</h4><div class="history-list">${soRows}</div></div>
  `;

  document.getElementById("employeeDetailEditBtn").onclick = () => {
    closeModal("employeeDetailModalOverlay");
    editEmployee(e.id);
  };
  document.getElementById("employeeDeleteBtn").onclick = () => deleteEmployee(e.id);
  document.getElementById("employeeSalarySheetBtn").onclick = () => {
    if (employeeSheetEntries.length === 0) {
      showInfo("No salary sheet has been created for this employee yet. Create one from HR → Salary Sheets.");
      return;
    }
    const latest = employeeSheetEntries[0];
    printPayslip(latest.sheet.id, latest.entry.employeeId);
  };

  openModal("employeeDetailModalOverlay");
}

function setupEmployeeRowActions() {
  document.querySelector("#employeeTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-employee]");
    const editBtn = e.target.closest("[data-edit-employee]");
    const deleteBtn = e.target.closest("[data-delete-employee]");
    if (viewBtn) viewEmployee(Number(viewBtn.dataset.viewEmployee));
    else if (editBtn) editEmployee(Number(editBtn.dataset.editEmployee));
    else if (deleteBtn) deleteEmployee(Number(deleteBtn.dataset.deleteEmployee));
  });
}

function setupEmployeeReportRowActions() {
  document.querySelector("#employeeReportTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-employee]");
    if (viewBtn) viewEmployee(Number(viewBtn.dataset.viewEmployee));
  });
}

// ---------- Reports module: tabs + search + refresh ----------

function setupReportsTabs() {
  const tabButtons = document.querySelectorAll("#module-reports .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll("#module-reports .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`rpanel-${btn.dataset.rtab}`).classList.remove("hidden");
    });
  });
}

function setupReportsSearch() {
  document.getElementById("reportsSearch").addEventListener("input", (e) => {
    renderEmployees(e.target.value);
  });
}

function refreshReportsView() {
  populateReportCompanyFilter();
  renderEmployees(document.getElementById("reportsSearch").value);
  renderSalesReportSection();
  renderSalaryDueTable();
  renderVendorDueTable();
  saveState();
}

function initReportsModule() {
  refreshReportsView();
  setupReportsTabs();
  setupReportsSearch();
  setupReportCompanyFilter();
  setupReportPeriodToggle();
  setupAddEmployee();
  setupEmployeeRowActions();
  setupEmployeeReportRowActions();
  setupFullReportDownload();
}

// =====================================================================
// HR DEPARTMENT MODULE
// =====================================================================

// ---------- Helpers: dates + payroll math ----------

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function currentYearMonth() {
  const d = new Date();
  return { year: d.getFullYear(), month: d.getMonth() + 1, key: d.toISOString().slice(0, 7) };
}

function isEmployedInMonth(employee, year, month) {
  if (!employee.joinDate) return true;
  const [jy, jm] = employee.joinDate.split("-").map(Number);
  const joinMonthKey = `${jy}-${String(jm).padStart(2, "0")}`;
  const monthKey = `${year}-${String(month).padStart(2, "0")}`;
  return joinMonthKey <= monthKey;
}

function preJoinAbsentDays(employee, year, month) {
  if (!employee.joinDate) return 0;
  const [jy, jm, jd] = employee.joinDate.split("-").map(Number);
  const joinMonthKey = `${jy}-${String(jm).padStart(2, "0")}`;
  const monthKey = `${year}-${String(month).padStart(2, "0")}`;
  if (joinMonthKey !== monthKey) return 0;
  return Math.max(0, jd - 1);
}

function computeSheetEntryTotals(entry) {
  const dailyRate = entry.baseSalary / STANDARD_MONTH_DAYS;
  const hourlyRate = dailyRate / STANDARD_WORK_HOURS;
  const deduction = dailyRate * (entry.absentDays || 0);
  const otPay = (entry.otHours || 0) * hourlyRate * OT_MULTIPLIER;
  const netSalary = Math.max(0, entry.baseSalary - deduction + otPay);
  return { dailyRate, hourlyRate, deduction, otPay, netSalary };
}

function sheetTotals(sheet) {
  let total = 0;
  let paid = 0;
  let due = 0;
  sheet.entries.forEach(entry => {
    const t = computeSheetEntryTotals(entry);
    total += t.netSalary;
    if (entry.paid) paid += t.netSalary;
    else due += t.netSalary;
  });
  return { total, paid, due };
}

function buildSheetEntryForEmployee(employee, monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return {
    employeeId: employee.id,
    employeeName: employee.name,
    role: employee.role || "",
    baseSalary: employee.baseSalary || 0,
    absentDays: preJoinAbsentDays(employee, year, month),
    otHours: 0,
    paid: false,
    paidDate: null,
    paidMethod: null,
    paidAccountId: null,
  };
}

function suggestedSheetTitle(monthKey) {
  return `Salary sheet for the month of ${monthLabel(monthKey)}`;
}

function generatePayrollMonthOptions() {
  const { year: cy, month: cm } = currentYearMonth();
  let earliestY = cy;
  let earliestM = cm;

  employees.forEach(e => {
    if (e.joinDate) {
      const [jy, jm] = e.joinDate.split("-").map(Number);
      if (jy < earliestY || (jy === earliestY && jm < earliestM)) {
        earliestY = jy;
        earliestM = jm;
      }
    }
  });

  const maxMonthsBack = 24;
  const months = [];
  let y = cy;
  let m = cm;
  for (let i = 0; i < maxMonthsBack; i++) {
    months.push(`${y}-${String(m).padStart(2, "0")}`);
    if (y === earliestY && m === earliestM) break;
    m -= 1;
    if (m === 0) {
      m = 12;
      y -= 1;
    }
  }
  return months;
}

// ---------- Render: HR stat cards ----------

function renderHrStats() {
  const totalEmployees = employees.length;
  const totalSheets = salarySheets.length;
  let totalPaid = 0;
  let totalDue = 0;
  salarySheets.forEach(s => {
    const t = sheetTotals(s);
    totalPaid += t.paid;
    totalDue += t.due;
  });

  const cards = [
    { icon: "🧑‍💼", value: totalEmployees, label: "Total Employees", cls: "" },
    { icon: "🧾", value: totalSheets, label: "Salary Sheets Created", cls: "" },
    { icon: "✅", value: money(totalPaid), label: "Total Salary Paid", cls: "good" },
    { icon: "⏳", value: money(totalDue), label: "Total Salary Due", cls: totalDue > 0 ? "warn" : "" },
  ];

  document.getElementById("hrStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

// ---------- Employees tab (HR) ----------

function refreshHrEmployeesTable() {
  const tbody = document.querySelector("#hrEmployeeTable tbody");
  tbody.innerHTML = employees.map(e => `
    <tr>
      <td>
        <div class="product-name-cell">
          ${employeePhotoHtml(e, 32)}
          <span class="product-name-link" data-view-employee="${e.id}">${e.name}</span>
        </div>
      </td>
      <td>${e.role || "—"}</td>
      <td>${e.phone || "—"}</td>
      <td>${money(e.baseSalary || 0)}</td>
      <td>${e.joinDate || "—"}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="View" data-view-employee="${e.id}">👁️</button>
          <button class="icon-btn-sm" title="Edit" data-edit-employee="${e.id}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-employee="${e.id}">🗑️</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="6" style="color:var(--text-muted); text-align:center; padding:24px;">No employees yet</td></tr>`;
}

function setupHrAddEmployee() {
  document.getElementById("addEmployeeBtnHr").addEventListener("click", openNewEmployeeModal);
}

function setupHrEmployeeRowActions() {
  document.querySelector("#hrEmployeeTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-employee]");
    const editBtn = e.target.closest("[data-edit-employee]");
    const deleteBtn = e.target.closest("[data-delete-employee]");
    if (viewBtn) viewEmployee(Number(viewBtn.dataset.viewEmployee));
    else if (editBtn) editEmployee(Number(editBtn.dataset.editEmployee));
    else if (deleteBtn) deleteEmployee(Number(deleteBtn.dataset.deleteEmployee));
  });
}

// ---------- Salary Sheets tab ----------

function populateSalarySheetMonthSelect() {
  const select = document.getElementById("ss-month");
  const months = generatePayrollMonthOptions();
  select.innerHTML = months.map(k => `<option value="${k}">${monthLabel(k)}</option>`).join("");
}

function setupAddSalarySheet() {
  document.getElementById("addSalarySheetBtn").addEventListener("click", () => {
    if (employees.length === 0) {
      showInfo("Add an employee first before creating a salary sheet.");
      return;
    }
    populateSalarySheetMonthSelect();
    const monthKey = document.getElementById("ss-month").value;
    document.getElementById("ss-title").value = suggestedSheetTitle(monthKey);
    openModal("salarySheetModalOverlay");
  });

  document.getElementById("ss-month").addEventListener("change", (e) => {
    document.getElementById("ss-title").value = suggestedSheetTitle(e.target.value);
  });

  document.getElementById("salarySheetForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const monthKey = document.getElementById("ss-month").value;
    const title = document.getElementById("ss-title").value.trim();
    if (!title) return;

    salarySheets.unshift({
      id: salarySheetIdCounter++,
      title,
      monthKey,
      createdDate: todayStr(),
      entries: [],
    });

    closeModal("salarySheetModalOverlay");
    renderSalarySheetTable();
    renderHrStats();
    viewSalarySheet(salarySheets[0].id);
  });
}

function renderSalarySheetTable() {
  const tbody = document.querySelector("#salarySheetTable tbody");
  const rows = salarySheets.slice().sort((a, b) => b.id - a.id);

  tbody.innerHTML = rows.map(s => {
    const t = sheetTotals(s);
    return `
      <tr>
        <td><span class="product-name-link" data-view-sheet="${s.id}">${s.title}</span></td>
        <td>${monthLabel(s.monthKey)}</td>
        <td>${s.entries.length}</td>
        <td>${money(t.total)}</td>
        <td class="text-success">${money(t.paid)}</td>
        <td class="text-danger">${money(t.due)}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn-sm" title="View" data-view-sheet="${s.id}">👁️</button>
            <button class="icon-btn-sm danger" title="Delete" data-delete-sheet="${s.id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" style="color:var(--text-muted); text-align:center; padding:24px;">No salary sheets yet — create one to get started</td></tr>`;
}

function setupSalarySheetRowActions() {
  document.querySelector("#salarySheetTable tbody").addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-sheet]");
    const deleteBtn = e.target.closest("[data-delete-sheet]");
    if (viewBtn) viewSalarySheet(Number(viewBtn.dataset.viewSheet));
    else if (deleteBtn) deleteSalarySheet(Number(deleteBtn.dataset.deleteSheet));
  });
}

function deleteSalarySheet(id) {
  const s = salarySheets.find(x => x.id === id);
  if (!s) return;
  showConfirm(`Delete "${s.title}"? This action cannot be undone.`, () => {
    const idx = salarySheets.findIndex(x => x.id === id);
    if (idx > -1) salarySheets.splice(idx, 1);
    renderSalarySheetTable();
    renderHrStats();
  });
}

let currentSheetDetailId = null;

function viewSalarySheet(id) {
  currentSheetDetailId = id;
  renderSalarySheetDetailTable(id);
  openModal("salarySheetDetailModalOverlay");
}

function populateSheetAddEmployeeSelect(sheet) {
  const select = document.getElementById("sheetAddEmployeeSelect");
  const [year, month] = sheet.monthKey.split("-").map(Number);
  const addedIds = new Set(sheet.entries.map(en => en.employeeId));

  const available = employees.filter(e => isEmployedInMonth(e, year, month) && !addedIds.has(e.id));

  if (available.length === 0) {
    select.innerHTML = `<option value="">— No more employees to add —</option>`;
    select.disabled = true;
  } else {
    select.disabled = false;
    select.innerHTML = available.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
  }
}

function renderSalarySheetDetailTable(id) {
  const sheet = salarySheets.find(s => s.id === id);
  if (!sheet) return;

  document.getElementById("salarySheetDetailTitle").textContent = sheet.title;
  const t = sheetTotals(sheet);
  document.getElementById("salarySheetDetailMeta").textContent =
    `${monthLabel(sheet.monthKey)} · ${sheet.entries.length} employees · Total ${money(t.total)} · Paid ${money(t.paid)} · Due ${money(t.due)}`;

  populateSheetAddEmployeeSelect(sheet);

  const tbody = document.querySelector("#salarySheetDetailTable tbody");
  tbody.innerHTML = sheet.entries.map(entry => {
    const totals = computeSheetEntryTotals(entry);
    const statusHtml = entry.paid
      ? `<span class="badge done">Paid</span><div class="payroll-paid-date">${entry.paidDate} · ${entry.paidMethod}${entry.paidAccountId ? " · " + accountName(entry.paidAccountId) : ""}</div>`
      : `<span class="badge pending">Due</span>`;
    const actionHtml = entry.paid
      ? `<div class="row-actions">
          <button class="icon-btn-sm" title="Payslip" data-print-entry="${entry.employeeId}">🖨️</button>
          <button class="icon-btn-sm danger" title="Undo — Mark as Due" data-unpay-entry="${entry.employeeId}">↩️</button>
        </div>`
      : `<div class="row-actions">
          <button class="icon-btn-sm" title="Payslip" data-print-entry="${entry.employeeId}">🖨️</button>
          <button class="payroll-pay-btn" data-pay-entry="${entry.employeeId}">💰 Pay</button>
          <button class="icon-btn-sm danger" title="Remove from sheet" data-remove-entry="${entry.employeeId}">🗑️</button>
        </div>`;

    return `
      <tr>
        <td>${entry.employeeName}</td>
        <td>${money(entry.baseSalary)}</td>
        <td>${money(totals.dailyRate)}</td>
        <td><input type="number" class="sheet-absent-input" min="0" value="${entry.absentDays}" data-employee-id="${entry.employeeId}"></td>
        <td class="text-danger">${totals.deduction > 0 ? "− " + money(totals.deduction) : money(0)}</td>
        <td><input type="number" class="sheet-ot-input" min="0" step="0.5" value="${entry.otHours}" data-employee-id="${entry.employeeId}"></td>
        <td class="text-success">${totals.otPay > 0 ? "+ " + money(totals.otPay) : money(0)}</td>
        <td><b>${money(totals.netSalary)}</b></td>
        <td>${statusHtml}</td>
        <td>${actionHtml}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="10" style="color:var(--text-muted); text-align:center; padding:24px;">No employees added yet — use "+ Add Employee" above.</td></tr>`;
}

function addEmployeeToSheet(sheetId, employeeId) {
  const sheet = salarySheets.find(s => s.id === sheetId);
  if (!sheet) return;
  const emp = employees.find(e => e.id === employeeId);
  if (!emp) return;
  if (sheet.entries.some(en => en.employeeId === employeeId)) return;

  sheet.entries.push(buildSheetEntryForEmployee(emp, sheet.monthKey));

  renderSalarySheetDetailTable(sheet.id);
  renderSalarySheetTable();
  renderHrStats();
}

function removeEmployeeFromSheet(sheetId, employeeId) {
  const sheet = salarySheets.find(s => s.id === sheetId);
  if (!sheet) return;
  const entry = sheet.entries.find(en => en.employeeId === employeeId);
  if (!entry) return;

  showConfirm(`Remove ${entry.employeeName} from "${sheet.title}"?`, () => {
    const idx = sheet.entries.findIndex(en => en.employeeId === employeeId);
    if (idx > -1) sheet.entries.splice(idx, 1);
    renderSalarySheetDetailTable(sheet.id);
    renderSalarySheetTable();
    renderHrStats();
  }, "Remove");
}

function setupSalarySheetDetailActions() {
  const tbody = document.querySelector("#salarySheetDetailTable tbody");

  tbody.addEventListener("change", (e) => {
    const absentInput = e.target.closest(".sheet-absent-input");
    const otInput = e.target.closest(".sheet-ot-input");
    if (!absentInput && !otInput) return;

    const sheet = salarySheets.find(s => s.id === currentSheetDetailId);
    if (!sheet) return;
    const employeeId = Number((absentInput || otInput).dataset.employeeId);
    const entry = sheet.entries.find(en => en.employeeId === employeeId);
    if (!entry) return;

    if (absentInput) entry.absentDays = Number(absentInput.value) || 0;
    if (otInput) entry.otHours = Number(otInput.value) || 0;

    renderSalarySheetDetailTable(currentSheetDetailId);
    renderSalarySheetTable();
    renderHrStats();
  });

  tbody.addEventListener("click", (e) => {
    const payBtn = e.target.closest("[data-pay-entry]");
    const unpayBtn = e.target.closest("[data-unpay-entry]");
    const printBtn = e.target.closest("[data-print-entry]");
    const removeBtn = e.target.closest("[data-remove-entry]");
    if (payBtn) openPaySalaryModal(currentSheetDetailId, Number(payBtn.dataset.payEntry));
    else if (unpayBtn) unpaySalaryEntry(currentSheetDetailId, Number(unpayBtn.dataset.unpayEntry));
    else if (printBtn) printPayslip(currentSheetDetailId, Number(printBtn.dataset.printEntry));
    else if (removeBtn) removeEmployeeFromSheet(currentSheetDetailId, Number(removeBtn.dataset.removeEntry));
  });

  document.getElementById("sheetAddEmployeeBtn").addEventListener("click", () => {
    const select = document.getElementById("sheetAddEmployeeSelect");
    if (!select.value) return;
    addEmployeeToSheet(currentSheetDetailId, Number(select.value));
  });

  document.getElementById("salarySheetDeleteBtn").addEventListener("click", () => {
    if (currentSheetDetailId == null) return;
    const sheet = salarySheets.find(s => s.id === currentSheetDetailId);
    if (!sheet) return;
    showConfirm(`Delete "${sheet.title}"? This action cannot be undone.`, () => {
      const idx = salarySheets.findIndex(s => s.id === currentSheetDetailId);
      if (idx > -1) salarySheets.splice(idx, 1);
      closeModal("salarySheetDetailModalOverlay");
      renderSalarySheetTable();
      renderHrStats();
    });
  });

  document.getElementById("salarySheetPrintAllBtn").addEventListener("click", () => {
    if (currentSheetDetailId != null) printWholeSheet(currentSheetDetailId);
  });
}

let currentPaySheetId = null;
let currentPayEmployeeId = null;

function openPaySalaryModal(sheetId, employeeId) {
  if (cashAccounts.length === 0) {
    showInfo("Add a cash or bank account first before paying salary.");
    return;
  }
  const sheet = salarySheets.find(s => s.id === sheetId);
  if (!sheet) return;
  const entry = sheet.entries.find(en => en.employeeId === employeeId);
  if (!entry) return;
  const totals = computeSheetEntryTotals(entry);

  currentPaySheetId = sheetId;
  currentPayEmployeeId = employeeId;

  document.getElementById("ps-employee-name").value = entry.employeeName;
  document.getElementById("ps-month").value = sheet.title;
  document.getElementById("ps-amount").value = Math.round(totals.netSalary);
  document.getElementById("ps-date").value = todayStr();
  document.getElementById("ps-method").value = "Bank Transfer";
  populateAccountSelect("ps-account");

  openModal("paySalaryModalOverlay");
}

function setupPaySalary() {
  document.getElementById("paySalaryForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const sheet = salarySheets.find(s => s.id === currentPaySheetId);
    if (!sheet) return;
    const entry = sheet.entries.find(en => en.employeeId === currentPayEmployeeId);
    if (!entry) return;

    const amount = computeSheetEntryTotals(entry).netSalary;
    const accountId = Number(document.getElementById("ps-account").value);
    if (!ensureSufficientBalance(accountId, amount)) return;

    entry.paid = true;
    entry.paidDate = document.getElementById("ps-date").value || todayStr();
    entry.paidMethod = document.getElementById("ps-method").value;
    entry.paidAccountId = accountId;

    closeModal("paySalaryModalOverlay");
    renderSalarySheetDetailTable(sheet.id);
    renderSalarySheetTable();
    renderHrStats();
  });
}

function unpaySalaryEntry(sheetId, employeeId) {
  const sheet = salarySheets.find(s => s.id === sheetId);
  if (!sheet) return;
  const entry = sheet.entries.find(en => en.employeeId === employeeId);
  if (!entry) return;

  showConfirm(`Mark ${entry.employeeName}'s salary in "${sheet.title}" as Due again?`, () => {
    entry.paid = false;
    entry.paidDate = null;
    entry.paidMethod = null;
    entry.paidAccountId = null;
    renderSalarySheetDetailTable(sheet.id);
    renderSalarySheetTable();
    renderHrStats();
  }, "Mark as Due");
}

// ---------- Salary sheet print / PDF ----------

function payslipStyles() {
  return `
${letterheadCss()}
  tbody td { padding: 12px 8px; font-size: 13px; }
  td.num { text-align: right; }
  .print-total-box { min-width: 280px; }
  .row-neg td.num { color: #d33; }
  .row-pos td.num { color: #1a9e5c; }
  .print-status-stamp { display: inline-block; margin-top: 10px; padding: 5px 14px; border-radius: 999px; font-size: 12px; font-weight: 800; letter-spacing: 0.04em; }
  .print-status-stamp.paid { background: #e6f9ee; color: #1a9e5c; }
  .print-status-stamp.due { background: #fdecea; color: #d33; }
  `;
}

function buildPayslipHtml(sheet, entry) {
  const totals = computeSheetEntryTotals(entry);
  const stampHtml = `<div style="text-align:right;">${entry.paid
    ? `<span class="print-status-stamp paid">PAID — ${entry.paidDate}</span>`
    : `<span class="print-status-stamp due">PAYMENT DUE</span>`}</div>`;

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${sheet.title} — ${entry.employeeName}</title>
<style>${payslipStyles()}</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml("SALARY SHEET", `${sheet.title}<br>Employee: ${entry.employeeName}<br>Role: ${entry.role || "—"}`, stampHtml)}

  <table>
    <tbody>
      <tr><td>Base Monthly Salary</td><td class="num">${money(entry.baseSalary)}</td></tr>
      <tr><td>Standard Days per Month</td><td class="num">${STANDARD_MONTH_DAYS}</td></tr>
      <tr><td>Per-Day Rate</td><td class="num">${money(totals.dailyRate)}</td></tr>
      <tr><td>Absent Days</td><td class="num">${entry.absentDays}</td></tr>
      <tr class="row-neg"><td>Absence Deduction</td><td class="num">− ${money(totals.deduction)}</td></tr>
      <tr><td>Overtime Hours</td><td class="num">${entry.otHours} hrs</td></tr>
      <tr><td>Overtime Rate (per hour, ${OT_MULTIPLIER}×)</td><td class="num">${money(totals.hourlyRate * OT_MULTIPLIER)}</td></tr>
      <tr class="row-pos"><td>Overtime Pay</td><td class="num">+ ${money(totals.otPay)}</td></tr>
    </tbody>
  </table>

  <div class="print-total-row">
    <div class="print-total-box">
      <div class="print-total-line">
        <span>Net Salary Payable</span>
        <span>${money(totals.netSalary)}</span>
      </div>
    </div>
  </div>

  <div class="print-signatures">
    <div class="print-sig-line">Prepared By — HR Department, ${COMPANY_INFO.name}</div>
    <div class="print-sig-line">Employee Signature</div>
  </div>

  <div class="doc-note">This is a system-generated salary sheet from ${COMPANY_INFO.name} ERP.</div>
  </div>
</body>
</html>`;
}

function printPayslip(sheetId, employeeId) {
  const sheet = salarySheets.find(s => s.id === sheetId);
  if (!sheet) return;
  const entry = sheet.entries.find(en => en.employeeId === employeeId);
  if (!entry) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildPayslipHtml(sheet, entry));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

function buildWholeSheetPrintHtml(sheet) {
  const t = sheetTotals(sheet);
  const rows = sheet.entries.map(entry => {
    const totals = computeSheetEntryTotals(entry);
    return `
      <tr>
        <td>${entry.employeeName}</td>
        <td>${entry.role || "—"}</td>
        <td class="num">${money(entry.baseSalary)}</td>
        <td class="num">${entry.absentDays}</td>
        <td class="num">− ${money(totals.deduction)}</td>
        <td class="num">${entry.otHours} hrs</td>
        <td class="num">+ ${money(totals.otPay)}</td>
        <td class="num"><b>${money(totals.netSalary)}</b></td>
        <td>${entry.paid ? "Paid" : "Due"}</td>
      </tr>
    `;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${sheet.title}</title>
<style>
${letterheadCss()}
  table { font-size: 12px; }
  thead th { font-size: 10.5px; padding: 8px 6px; }
  tbody td { padding: 9px 6px; font-size: 12px; }
  tfoot td { padding: 12px 6px; font-weight: 800; border-top: 2px solid #1a1a2e; }
</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml(sheet.title, `Month: ${monthLabel(sheet.monthKey)}<br>Created: ${sheet.createdDate}<br>Employees: ${sheet.entries.length}`)}

  <table>
    <thead>
      <tr>
        <th>Employee</th><th>Role</th><th class="num">Base Salary</th><th class="num">Absent</th>
        <th class="num">Deduction</th><th class="num">OT Hrs</th><th class="num">OT Pay</th><th class="num">Net Salary</th><th>Status</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
    <tfoot>
      <tr>
        <td colspan="7">Total Payroll</td>
        <td class="num">${money(t.total)}</td>
        <td>Paid: ${money(t.paid)} · Due: ${money(t.due)}</td>
      </tr>
    </tfoot>
  </table>
  <div class="print-signatures">
    <div class="print-sig-line">Prepared By — HR Department</div>
    <div class="print-sig-line">Approved By — Managing Director</div>
  </div>
  <div class="doc-note">This is a system-generated salary sheet from ${COMPANY_INFO.name} ERP.</div>
  </div>
</body>
</html>`;
}

function printWholeSheet(sheetId) {
  const sheet = salarySheets.find(s => s.id === sheetId);
  if (!sheet) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildWholeSheetPrintHtml(sheet));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

// ---------- Conveyance Bills ----------

const conveyanceBills = [
  {
    id: 1,
    date: "2026-08-05",
    employeeId: 1,
    employeeName: "Imran Kabir",
    designation: "Senior Sales Executive",
    purpose: "Client site visit — Sylhet branch",
    status: "pending",
    legs: [
      { from: "Dhaka Office", to: "Gabtoli Bus Station", amount: 150 },
      { from: "Gabtoli Bus Station", to: "Sylhet Bus Stand", amount: 650 },
      { from: "Sylhet Bus Stand", to: "Client Office", amount: 120 },
    ],
  },
];
let conveyanceBillIdCounter = 2;
let conveyanceLegIndex = 0;
let editingConveyanceId = null;

function conveyanceLegTotal(bill) {
  return bill.legs.reduce((sum, leg) => sum + (Number(leg.amount) || 0), 0);
}

function conveyanceRouteSummary(bill) {
  if (!bill.legs.length) return "—";
  return [bill.legs[0].from, ...bill.legs.map(l => l.to)].join(" → ");
}

function conveyanceLegRowHtml(index, leg = {}) {
  return `
    <div class="line-item-row conv-line-row" data-line-index="${index}">
      <input type="text" class="conv-leg-from" placeholder="From (e.g. Dhaka Office)" value="${leg.from || ""}">
      <input type="text" class="conv-leg-to" placeholder="To (e.g. Gabtoli Bus Station)" value="${leg.to || ""}">
      <input type="number" class="conv-leg-amount" min="0" placeholder="Amount" value="${leg.amount ?? ""}">
      <button type="button" class="line-item-remove" title="Remove">✕</button>
    </div>
  `;
}

function updateConveyanceTotal() {
  const rows = document.querySelectorAll("#conveyanceLegs .line-item-row");
  let total = 0;
  rows.forEach(row => {
    total += Number(row.querySelector(".conv-leg-amount").value) || 0;
  });
  document.getElementById("conveyanceTotalValue").textContent = money(total);
}

function addConveyanceLegRow(prefill = {}) {
  const container = document.getElementById("conveyanceLegs");
  const index = conveyanceLegIndex++;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = conveyanceLegRowHtml(index, prefill).trim();
  const row = wrapper.firstElementChild;
  container.appendChild(row);

  row.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateConveyanceTotal);
  });

  row.querySelector(".line-item-remove").addEventListener("click", () => {
    row.remove();
    updateConveyanceTotal();
  });

  updateConveyanceTotal();
}

function resetConveyanceLegs(legs = []) {
  document.getElementById("conveyanceLegs").innerHTML = "";
  conveyanceLegIndex = 0;
  if (legs.length) {
    legs.forEach(leg => addConveyanceLegRow(leg));
  } else {
    addConveyanceLegRow();
  }
  updateConveyanceTotal();
}

function populateConveyanceEmployeeSelect() {
  document.getElementById("cv-employee").innerHTML = employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function openConveyanceModal(bill = null) {
  if (employees.length === 0) {
    showInfo("Add an employee first before creating a conveyance bill.");
    return;
  }

  editingConveyanceId = bill ? bill.id : null;
  document.getElementById("conveyanceModalTitle").textContent = bill ? "Edit Conveyance Bill" : "New Conveyance Bill";
  document.getElementById("conveyanceSubmitBtn").textContent = bill ? "Update Conveyance Bill" : "Save Conveyance Bill";

  document.getElementById("conveyanceForm").reset();
  populateConveyanceEmployeeSelect();

  if (bill) {
    document.getElementById("cv-date").value = bill.date;
    document.getElementById("cv-employee").value = bill.employeeId;
    document.getElementById("cv-designation").value = bill.designation || "";
    document.getElementById("cv-purpose").value = bill.purpose;
    resetConveyanceLegs(bill.legs);
  } else {
    document.getElementById("cv-date").value = todayStr();
    const firstEmployee = employees[0];
    document.getElementById("cv-designation").value = firstEmployee ? (firstEmployee.role || "") : "";
    resetConveyanceLegs();
  }

  openModal("conveyanceModalOverlay");
}

function setupAddConveyance() {
  document.getElementById("addConveyanceBtn").addEventListener("click", () => openConveyanceModal());
  document.getElementById("conveyanceAddLegBtn").addEventListener("click", () => addConveyanceLegRow());

  document.getElementById("cv-employee").addEventListener("change", (e) => {
    const emp = employees.find(x => x.id === Number(e.target.value));
    document.getElementById("cv-designation").value = emp ? (emp.role || "") : "";
  });

  document.getElementById("conveyanceForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const employeeId = Number(document.getElementById("cv-employee").value);
    const employee = employees.find(x => x.id === employeeId);
    if (!employee) return;

    const rows = document.querySelectorAll("#conveyanceLegs .line-item-row");
    const legs = [];
    rows.forEach(row => {
      const from = row.querySelector(".conv-leg-from").value.trim();
      const to = row.querySelector(".conv-leg-to").value.trim();
      const amount = Number(row.querySelector(".conv-leg-amount").value) || 0;
      if (!from && !to) return;
      legs.push({ from, to, amount });
    });

    if (legs.length === 0) {
      showInfo("Add at least one From → To leg with an amount.");
      return;
    }

    const data = {
      date: document.getElementById("cv-date").value,
      employeeId,
      employeeName: employee.name,
      designation: document.getElementById("cv-designation").value.trim(),
      purpose: document.getElementById("cv-purpose").value.trim(),
      legs,
    };

    if (editingConveyanceId) {
      const bill = conveyanceBills.find(b => b.id === editingConveyanceId);
      Object.assign(bill, data);
    } else {
      conveyanceBills.unshift({ id: conveyanceBillIdCounter++, status: "pending", ...data });
    }

    editingConveyanceId = null;
    closeModal("conveyanceModalOverlay");
    refreshConveyanceView();
  });
}

function conveyanceStatusBadgeClass(status) {
  return { pending: "pending", approved: "approved", paid: "done", rejected: "rejected" }[status] || "pending";
}

function conveyanceStatusLabel(status) {
  return { pending: "Pending Approval", approved: "Approved", paid: "Paid", rejected: "Rejected" }[status] || status;
}

function renderConveyanceStats() {
  const period = document.getElementById("conveyanceFilterPeriod").value;
  const billsInPeriod = conveyanceBills.filter(b => isDateInPeriod(b.date, period));

  const total = billsInPeriod.length;
  const pending = billsInPeriod.filter(b => b.status === "pending").length;
  const approvedAmount = billsInPeriod.filter(b => b.status === "approved").reduce((s, b) => s + conveyanceLegTotal(b), 0);
  const paidAmount = billsInPeriod.filter(b => b.status === "paid").reduce((s, b) => s + conveyanceLegTotal(b), 0);

  const cards = [
    { icon: "🧾", value: total, label: "Total Conveyance Bills", cls: "" },
    { icon: "⏳", value: pending, label: "Pending Approval", cls: pending > 0 ? "warn" : "" },
    { icon: "✅", value: money(approvedAmount), label: "Approved — Awaiting Payment", cls: "" },
    { icon: "💰", value: money(paidAmount), label: "Total Paid", cls: "good" },
  ];

  document.getElementById("conveyanceStatsGrid").innerHTML = cards.map(c => `
    <div class="stat-card glass ${c.cls}">
      <span class="stat-icon">${c.icon}</span>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

function isDateInPeriod(dateStr, period) {
  if (!period || period === "all") return true;

  const [y, m, d] = dateStr.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (period === "daily") {
    return target.getTime() === today.getTime();
  }
  if (period === "weekly") {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return target >= startOfWeek && target <= endOfWeek;
  }
  if (period === "monthly") {
    return target.getFullYear() === today.getFullYear() && target.getMonth() === today.getMonth();
  }
  if (period === "yearly") {
    return target.getFullYear() === today.getFullYear();
  }
  return true;
}

function renderConveyanceTable() {
  const tbody = document.querySelector("#conveyanceTable tbody");
  const canApprove = canApproveConveyance();
  const period = document.getElementById("conveyanceFilterPeriod").value;

  tbody.innerHTML = conveyanceBills.filter(b => isDateInPeriod(b.date, period)).map(b => {
    let actions = "";
    if (b.status === "pending") {
      actions += `<button class="icon-btn-sm" title="Edit" data-edit-conveyance="${b.id}">✏️</button>`;
      if (canApprove) {
        actions += `<button class="icon-btn-sm" title="Approve" data-approve-conveyance="${b.id}">✅</button>`;
        actions += `<button class="icon-btn-sm danger" title="Reject" data-reject-conveyance="${b.id}">❌</button>`;
      }
    }
    if (b.status === "approved" && canApprove) {
      actions += `<button class="icon-btn-sm" title="Mark Paid" data-pay-conveyance="${b.id}">💰</button>`;
    }
    actions += `<button class="icon-btn-sm" title="Print" data-print-conveyance="${b.id}">🖨️</button>`;
    actions += `<button class="icon-btn-sm danger" title="Delete" data-delete-conveyance="${b.id}">🗑️</button>`;

    return `
    <tr>
      <td>${b.date}</td>
      <td>${b.employeeName}</td>
      <td>${b.designation || "—"}</td>
      <td>${b.purpose}</td>
      <td>${conveyanceRouteSummary(b)}</td>
      <td>${money(conveyanceLegTotal(b))}</td>
      <td><span class="badge ${conveyanceStatusBadgeClass(b.status)}">${conveyanceStatusLabel(b.status)}</span></td>
      <td>
        <div class="row-actions">${actions}</div>
      </td>
    </tr>
  `;
  }).join("") || `<tr><td colspan="8" style="color:var(--text-muted); text-align:center; padding:24px;">No conveyance bills in this period</td></tr>`;
}

function approveConveyanceBill(id) {
  if (!canApproveConveyance()) return;
  const b = conveyanceBills.find(x => x.id === id);
  if (!b || b.status !== "pending") return;
  b.status = "approved";
  logActivity(`Approved conveyance bill for ${b.employeeName} (${b.date})`);
  refreshConveyanceView();
}

function rejectConveyanceBill(id) {
  if (!canApproveConveyance()) return;
  const b = conveyanceBills.find(x => x.id === id);
  if (!b || b.status !== "pending") return;
  showConfirm(`Reject the conveyance bill for "${b.employeeName}" dated ${b.date}? They won't be paid for this bill.`, () => {
    b.status = "rejected";
    logActivity(`Rejected conveyance bill for ${b.employeeName} (${b.date})`);
    refreshConveyanceView();
  }, "Reject");
}

let currentConveyancePayId = null;

function openConveyancePaidModal(id) {
  if (!canApproveConveyance()) return;
  const b = conveyanceBills.find(x => x.id === id);
  if (!b || b.status !== "approved") return;
  if (cashAccounts.length === 0) {
    showInfo("Add a cash or bank account first before paying a conveyance bill.");
    return;
  }
  currentConveyancePayId = id;
  populateAccountSelect("cvp-account");
  openModal("conveyancePaidModalOverlay");
}

function setupConveyancePaidModal() {
  document.getElementById("conveyancePaidForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const b = conveyanceBills.find(x => x.id === currentConveyancePayId);
    if (!b || b.status !== "approved") return;

    const accountId = Number(document.getElementById("cvp-account").value);
    if (!ensureSufficientBalance(accountId, conveyanceLegTotal(b))) return;

    b.status = "paid";
    b.paidAccountId = accountId;
    logActivity(`Marked conveyance bill for ${b.employeeName} (${b.date}) as paid`);

    closeModal("conveyancePaidModalOverlay");
    refreshConveyanceView();
  });
}

function deleteConveyanceBill(id) {
  const b = conveyanceBills.find(x => x.id === id);
  if (!b) return;
  showConfirm(`Delete the conveyance bill for "${b.employeeName}" dated ${b.date}? This action cannot be undone.`, () => {
    const idx = conveyanceBills.findIndex(x => x.id === id);
    if (idx > -1) conveyanceBills.splice(idx, 1);
    refreshConveyanceView();
  });
}

function setupConveyanceRowActions() {
  document.querySelector("#conveyanceTable tbody").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-conveyance]");
    const approveBtn = e.target.closest("[data-approve-conveyance]");
    const rejectBtn = e.target.closest("[data-reject-conveyance]");
    const payBtn = e.target.closest("[data-pay-conveyance]");
    const printBtn = e.target.closest("[data-print-conveyance]");
    const deleteBtn = e.target.closest("[data-delete-conveyance]");
    if (editBtn) {
      const bill = conveyanceBills.find(x => x.id === Number(editBtn.dataset.editConveyance));
      if (bill) openConveyanceModal(bill);
    } else if (approveBtn) {
      approveConveyanceBill(Number(approveBtn.dataset.approveConveyance));
    } else if (rejectBtn) {
      rejectConveyanceBill(Number(rejectBtn.dataset.rejectConveyance));
    } else if (payBtn) {
      openConveyancePaidModal(Number(payBtn.dataset.payConveyance));
    } else if (printBtn) {
      printConveyanceBill(Number(printBtn.dataset.printConveyance));
    } else if (deleteBtn) {
      deleteConveyanceBill(Number(deleteBtn.dataset.deleteConveyance));
    }
  });
}

function buildConveyancePrintHtml(bill) {
  const total = conveyanceLegTotal(bill);

  const legRows = bill.legs.map((leg, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td>${leg.from}</td>
      <td>${leg.to}</td>
      <td class="num">${money(leg.amount)}</td>
    </tr>
  `).join("");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Conveyance Bill — ${bill.employeeName} — ${bill.date}</title>
<style>${letterheadCss()}</style>
</head>
<body>
  ${letterheadBackgroundHtml()}
  <div class="doc-content">

  ${letterheadDocTitleHtml("CONVEYANCE BILL", `Date: ${bill.date}<br>Bill No: CV-${String(bill.id).padStart(4, "0")}`)}

  <div class="print-parties">
    <div class="print-party-label">Employee</div>
    <div class="print-party-name">${bill.employeeName}</div>
    <div class="print-party-detail">
      ${bill.designation ? bill.designation + "<br>" : ""}
      Purpose: ${bill.purpose}
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>From</th>
        <th>To</th>
        <th class="num">Amount</th>
      </tr>
    </thead>
    <tbody>
      ${legRows}
    </tbody>
  </table>

  <div class="print-total-row">
    <div class="print-total-box">
      <div class="print-total-line">
        <span>Total</span>
        <span>${money(total)}</span>
      </div>
    </div>
  </div>

  <div class="print-signatures">
    <div class="print-sig-line">Employee Signature</div>
    <div class="print-sig-line">Approved By</div>
  </div>

  <div class="doc-note">This is a system-generated conveyance bill from ${COMPANY_INFO.name} ERP.</div>
  </div>
</body>
</html>`;
}

function printConveyanceBill(id) {
  const bill = conveyanceBills.find(x => x.id === id);
  if (!bill) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showInfo("Your browser blocked the print window. Please allow pop-ups for this page and try again.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildConveyancePrintHtml(bill));
  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}

function refreshConveyanceView() {
  renderConveyanceStats();
  renderConveyanceTable();
  saveState();
}

function initConveyanceModule() {
  refreshConveyanceView();
  setupAddConveyance();
  setupConveyanceRowActions();
  setupConveyancePaidModal();
  document.getElementById("conveyanceFilterPeriod").addEventListener("change", () => {
    renderConveyanceStats();
    renderConveyanceTable();
  });
}

// ---------- HR module: tabs + refresh + init ----------

function setupHrTabs() {
  const tabButtons = document.querySelectorAll("#module-hr .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll("#module-hr .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`hpanel-${btn.dataset.htab}`).classList.remove("hidden");
    });
  });
}

function refreshHrView() {
  renderHrStats();
  refreshHrEmployeesTable();
  renderSalarySheetTable();
  saveState();
}

function initHrModule() {
  refreshHrView();
  setupHrTabs();
  setupHrAddEmployee();
  setupHrEmployeeRowActions();
  setupAddSalarySheet();
  setupSalarySheetRowActions();
  setupSalarySheetDetailActions();
  setupPaySalary();
}

// =====================================================================
// PERSISTENCE (localStorage — keeps data across page refreshes)
// =====================================================================

const STATE_KEY = "banfozzErpState";
const STATE_VERSION = 12;

function collectState() {
  return {
    version: STATE_VERSION,
    categories, products, stockMovements, rawMaterials, warehouses,
    movementIdCounter, rawMaterialIdCounter, warehouseIdCounter,
    vendors, purchaseOrders, goodsReceipts, vendorPayments, vendorReturns,
    vendorIdCounter, poIdCounter, grnIdCounter, paymentIdCounter, vendorReturnIdCounter,
    companies, contacts, deals, quotations, salesOrders, customerPayments, salesReturns,
    companyIdCounter, contactIdCounter, dealIdCounter, quoteIdCounter, soIdCounter, customerPaymentIdCounter, salesReturnIdCounter,
    installations, installationIdCounter,
    serviceTickets, serviceIdCounter,
    cashAccounts, cashAccountIdCounter,
    expenseCategories,
    transactions, transactionIdCounter,
    employees, salarySheets, conveyanceBills,
    employeeIdCounter, salarySheetIdCounter, conveyanceBillIdCounter,
    companyInfo: COMPANY_INFO,
    users: USERS,
    activityLog, activityLogIdCounter,
  };
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(collectState()));
  } catch (err) {
    // localStorage unavailable (private browsing, quota, etc.) — skip silently
  }
  updateNotifDot();
}

function replaceArrayContents(target, source) {
  if (!Array.isArray(target) || !Array.isArray(source)) return;
  target.length = 0;
  target.push(...source);
}

function loadState() {
  let raw;
  try {
    raw = localStorage.getItem(STATE_KEY);
  } catch (err) {
    return false;
  }
  if (!raw) return false;

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch (err) {
    return false;
  }

  if (saved.version !== STATE_VERSION) {
    // Saved data is from an older, incompatible data model — start fresh from the current seed data.
    try {
      localStorage.removeItem(STATE_KEY);
    } catch (err) {
      // ignore
    }
    return false;
  }

  restoreState(saved);
  return true;
}

function restoreState(saved) {
  replaceArrayContents(categories, saved.categories);
  replaceArrayContents(products, saved.products);
  replaceArrayContents(stockMovements, saved.stockMovements);
  replaceArrayContents(rawMaterials, saved.rawMaterials);
  replaceArrayContents(warehouses, saved.warehouses);
  replaceArrayContents(vendors, saved.vendors);
  replaceArrayContents(purchaseOrders, saved.purchaseOrders);
  replaceArrayContents(goodsReceipts, saved.goodsReceipts);
  replaceArrayContents(vendorPayments, saved.vendorPayments);
  replaceArrayContents(vendorReturns, saved.vendorReturns);
  replaceArrayContents(companies, saved.companies);
  replaceArrayContents(contacts, saved.contacts);
  replaceArrayContents(deals, saved.deals);
  replaceArrayContents(quotations, saved.quotations);
  replaceArrayContents(salesOrders, saved.salesOrders);
  replaceArrayContents(customerPayments, saved.customerPayments);
  replaceArrayContents(salesReturns, saved.salesReturns);
  replaceArrayContents(installations, saved.installations);
  replaceArrayContents(serviceTickets, saved.serviceTickets);
  replaceArrayContents(cashAccounts, saved.cashAccounts);
  replaceArrayContents(expenseCategories, saved.expenseCategories);
  replaceArrayContents(transactions, saved.transactions);
  replaceArrayContents(employees, saved.employees);
  replaceArrayContents(salarySheets, saved.salarySheets);
  replaceArrayContents(conveyanceBills, saved.conveyanceBills);

  if (typeof saved.movementIdCounter === "number") movementIdCounter = saved.movementIdCounter;
  if (typeof saved.rawMaterialIdCounter === "number") rawMaterialIdCounter = saved.rawMaterialIdCounter;
  if (typeof saved.warehouseIdCounter === "number") warehouseIdCounter = saved.warehouseIdCounter;
  if (typeof saved.vendorIdCounter === "number") vendorIdCounter = saved.vendorIdCounter;
  if (typeof saved.poIdCounter === "number") poIdCounter = saved.poIdCounter;
  if (typeof saved.grnIdCounter === "number") grnIdCounter = saved.grnIdCounter;
  if (typeof saved.paymentIdCounter === "number") paymentIdCounter = saved.paymentIdCounter;
  if (typeof saved.vendorReturnIdCounter === "number") vendorReturnIdCounter = saved.vendorReturnIdCounter;
  if (typeof saved.companyIdCounter === "number") companyIdCounter = saved.companyIdCounter;
  if (typeof saved.contactIdCounter === "number") contactIdCounter = saved.contactIdCounter;
  if (typeof saved.dealIdCounter === "number") dealIdCounter = saved.dealIdCounter;
  if (typeof saved.quoteIdCounter === "number") quoteIdCounter = saved.quoteIdCounter;
  if (typeof saved.soIdCounter === "number") soIdCounter = saved.soIdCounter;
  if (typeof saved.customerPaymentIdCounter === "number") customerPaymentIdCounter = saved.customerPaymentIdCounter;
  if (typeof saved.salesReturnIdCounter === "number") salesReturnIdCounter = saved.salesReturnIdCounter;
  if (typeof saved.installationIdCounter === "number") installationIdCounter = saved.installationIdCounter;
  if (typeof saved.serviceIdCounter === "number") serviceIdCounter = saved.serviceIdCounter;
  if (typeof saved.cashAccountIdCounter === "number") cashAccountIdCounter = saved.cashAccountIdCounter;
  if (typeof saved.transactionIdCounter === "number") transactionIdCounter = saved.transactionIdCounter;
  if (typeof saved.employeeIdCounter === "number") employeeIdCounter = saved.employeeIdCounter;
  if (typeof saved.salarySheetIdCounter === "number") salarySheetIdCounter = saved.salarySheetIdCounter;
  if (typeof saved.conveyanceBillIdCounter === "number") conveyanceBillIdCounter = saved.conveyanceBillIdCounter;
  if (saved.companyInfo) Object.assign(COMPANY_INFO, saved.companyInfo);
  const usersLookValid = Array.isArray(saved.users) && saved.users.length > 0 &&
    saved.users.every(u => u && u.username && u.password && u.role && u.name);
  if (usersLookValid) {
    replaceArrayContents(USERS, saved.users);
  }
  replaceArrayContents(activityLog, saved.activityLog);
  if (typeof saved.activityLogIdCounter === "number") activityLogIdCounter = saved.activityLogIdCounter;
}

function setupAutosave() {
  setInterval(saveState, 2000);
  window.addEventListener("beforeunload", saveState);
  window.addEventListener("pagehide", saveState);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveState();
  });
}

// =====================================================================
// THEME — light / dark mode toggle
// =====================================================================

const THEME_KEY = "banfozzErpTheme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.textContent = theme === "light" ? "🌙" : "☀️";
    btn.title = theme === "light" ? "Switch to dark mode" : "Switch to light mode";
  });
  const darkBtn = document.getElementById("themeDarkBtn");
  const lightBtn = document.getElementById("themeLightBtn");
  if (darkBtn) darkBtn.classList.toggle("active", theme === "dark");
  if (lightBtn) lightBtn.classList.toggle("active", theme === "light");
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (err) {
    // localStorage unavailable — theme just won't persist across refresh
  }
}

function setupThemeToggle() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".theme-toggle")) return;
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });

  let saved = "dark";
  try {
    saved = localStorage.getItem(THEME_KEY) || "dark";
  } catch (err) {
    // ignore
  }
  applyTheme(saved);
}

// ---------- Mobile sidebar drawer ----------

function setupMobileSidebar() {
  const btn = document.getElementById("mobileMenuBtn");
  const sidebar = document.querySelector(".sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (!btn || !sidebar || !backdrop) return;

  function closeSidebar() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
  }

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    backdrop.classList.toggle("open");
  });

  backdrop.addEventListener("click", closeSidebar);

  document.querySelectorAll(".nav-item[data-module]").forEach(link => {
    link.addEventListener("click", closeSidebar);
  });
}

// ---------- Notifications ----------

function computeNotifications() {
  const allowed = currentUser ? (ROLE_MODULES[currentUser.role] || []) : [];
  const items = [];

  const outOfStock = products.filter(p => stockStatus(p) === "out").length;
  const lowStock = products.filter(p => stockStatus(p) === "low").length;
  if (outOfStock > 0) items.push({ icon: "🔴", text: `${outOfStock} product(s) out of stock`, module: "inventory" });
  if (lowStock > 0) items.push({ icon: "🟡", text: `${lowStock} product(s) running low on stock`, module: "inventory" });

  const pendingPOs = purchaseOrders.filter(po => po.status === "pending").length;
  if (pendingPOs > 0) items.push({ icon: "📄", text: `${pendingPOs} purchase order(s) awaiting approval`, module: "purchase" });

  const pendingConveyance = conveyanceBills.filter(b => b.status === "pending").length;
  if (pendingConveyance > 0) items.push({ icon: "🚌", text: `${pendingConveyance} conveyance bill(s) awaiting approval`, module: "conveyance" });

  const overdueInstall = installations.filter(j => !["completed", "cancelled"].includes(j.status) && j.scheduledDate && j.scheduledDate < todayStr()).length;
  if (overdueInstall > 0) items.push({ icon: "⚠️", text: `${overdueInstall} installation job(s) overdue`, module: "installation" });

  const openTickets = serviceTickets.filter(t => t.status === "open").length;
  if (openTickets > 0) items.push({ icon: "🛠️", text: `${openTickets} open service ticket(s)`, module: "service" });

  return items.filter(n => allowed.includes(n.module));
}

function updateNotifDot() {
  const hasNotifs = computeNotifications().length > 0;
  document.querySelectorAll(".notif-dot").forEach(dot => dot.classList.toggle("hidden", !hasNotifs));
}

function renderNotifPanel() {
  const items = computeNotifications();
  document.getElementById("notifPanelList").innerHTML = items.map(n => `
    <div class="notif-item" data-notif-module="${n.module}">
      <span>${n.icon}</span>
      <span>${n.text}</span>
    </div>
  `).join("") || `<div class="notif-empty">You're all caught up 🎉</div>`;
  updateNotifDot();
}

function setupNotifPanel() {
  const panel = document.getElementById("notifPanel");
  if (!panel) return;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".notif-btn");
    if (btn) {
      renderNotifPanel();
      panel.classList.toggle("hidden");
      return;
    }
    if (!e.target.closest("#notifPanel")) {
      panel.classList.add("hidden");
    }
  });

  panel.addEventListener("click", (e) => {
    const item = e.target.closest("[data-notif-module]");
    if (!item) return;
    const link = document.querySelector(`.nav-item[data-module="${item.dataset.notifModule}"]`);
    if (link) link.click();
    panel.classList.add("hidden");
  });
}

// ---------- CSV exports ----------

function setupCsvExports() {
  const productsBtn = document.getElementById("exportProductsCsvBtn");
  if (productsBtn) productsBtn.addEventListener("click", () => {
    downloadCSV("products.csv",
      ["SKU", "Name", "Category", "Unit", "Stock", "Price", "Status"],
      products.map(p => [p.sku, p.name, p.category, p.unit, p.stock, p.price, stockStatus(p)])
    );
  });

  const vendorsBtn = document.getElementById("exportVendorsCsvBtn");
  if (vendorsBtn) vendorsBtn.addEventListener("click", () => {
    downloadCSV("vendors.csv",
      ["Vendor", "Contact Person", "Phone", "Total Purchase", "Paid", "Outstanding"],
      vendors.map(v => [v.name, v.contact || "", v.phone || "", vendorPayable(v.id), vendorPaid(v.id), vendorOutstanding(v.id)])
    );
  });

  const companiesBtn = document.getElementById("exportCompaniesCsvBtn");
  if (companiesBtn) companiesBtn.addEventListener("click", () => {
    downloadCSV("companies.csv",
      ["Company", "Industry", "Phone", "Total Sales", "Paid", "Outstanding"],
      companies.map(c => [c.name, c.industry || "", c.phone || "", companySalesValue(c.id), customerPaid(c.id), customerOutstanding(c.id)])
    );
  });

  const soBtn = document.getElementById("exportSoCsvBtn");
  if (soBtn) soBtn.addEventListener("click", () => {
    downloadCSV("sales_orders.csv",
      ["SO No", "Company", "Date", "Total Value", "Status"],
      salesOrders.map(so => [so.soNumber, companyName(so.companyId), so.date, soTotal(so), soStatusLabel(so.status)])
    );
  });

  const txBtn = document.getElementById("exportTransactionsCsvBtn");
  if (txBtn) txBtn.addEventListener("click", () => {
    let all = allTransactions();
    if (transactionAccountFilter != null) all = all.filter(t => t.accountId === transactionAccountFilter);
    downloadCSV("transactions.csv",
      ["Date", "Category", "Account", "Type", "Amount", "Description", "Source"],
      all.map(t => [t.date, t.category, t.accountId ? accountName(t.accountId) : "", t.type, t.amount, t.description, t.source])
    );
  });
}

// =====================================================================
// AUTH — role-based login (client-side only, no backend)
// =====================================================================

const USERS = [
  { username: "owner", password: "owner123", role: "owner", name: "Sabiha", employeeId: null },
  { username: "admin", password: "admin123", role: "admin", name: "Admin", employeeId: null },
  { username: "salesmanager", password: "salesmgr123", role: "sales_manager", name: "Sales Manager", employeeId: null },
  { username: "hr", password: "hr123", role: "accounts_hr", name: "Accounts & HR Desk", employeeId: null },
  { username: "sales", password: "sales123", role: "executive", name: "Sales Executive", employeeId: null },
];

const ROLE_LABELS = {
  owner: "Super Admin",
  admin: "Admin",
  sales_manager: "Sales Manager",
  accounts_hr: "Accounts & HR",
  executive: "Executive",
};

// Browsers with data saved before the role rework still have users on the old role keys
// (manager/hr/sales) — remap them so existing accounts keep working under the new roles.
// The Warehouse Staff role/dashboard was removed entirely, so any saved account on it is dropped.
const ROLE_KEY_MIGRATION = { manager: "admin", hr: "accounts_hr", sales: "executive" };

function migrateUserRoles() {
  let changed = false;
  USERS.forEach(u => {
    if (ROLE_KEY_MIGRATION[u.role]) {
      u.role = ROLE_KEY_MIGRATION[u.role];
      changed = true;
    }
  });
  if (!USERS.some(u => u.role === "sales_manager")) {
    USERS.push({ username: "salesmanager", password: "salesmgr123", role: "sales_manager", name: "Sales Manager", employeeId: null });
    changed = true;
  }
  const beforeCount = USERS.length;
  replaceArrayContents(USERS, USERS.filter(u => u.role !== "warehouse"));
  if (USERS.length !== beforeCount) changed = true;
  if (changed) saveState();
}

// ---------- Activity / audit log ----------

const activityLog = [];
let activityLogIdCounter = 1;

function logActivity(action) {
  activityLog.unshift({
    id: activityLogIdCounter++,
    timestamp: new Date().toISOString(),
    username: currentUser ? currentUser.username : "system",
    name: currentUser ? currentUser.name : "System",
    role: currentUser ? currentUser.role : "",
    action,
  });
  if (activityLog.length > 500) activityLog.length = 500;
}

const ROLE_MODULES = {
  owner: ["inventory", "purchase", "sales", "installation", "service", "accounts", "hr", "conveyance", "reports", "settings"],
  admin: ["inventory", "purchase", "sales", "installation", "service", "accounts", "hr", "conveyance", "reports", "settings"],
  sales_manager: ["inventory", "purchase", "sales", "installation", "service", "conveyance", "reports"],
  accounts_hr: ["accounts", "hr", "conveyance", "reports"],
  executive: ["sales", "installation", "reports", "inventory", "conveyance"],
};

// Every role can submit a conveyance bill — only these roles can approve/reject/mark paid.
const CONVEYANCE_APPROVER_ROLES = ["owner", "admin", "accounts_hr"];

function canApproveConveyance() {
  return !!currentUser && CONVEYANCE_APPROVER_ROLES.includes(currentUser.role);
}

// Only the Owner can delete a quotation — everyone else can create/edit/view but not delete.
function canDeleteQuotation() {
  return !!currentUser && currentUser.role === "owner";
}

let currentUser = null;

// ---------- Local authentication (session remembered in localStorage) ----------

const SESSION_KEY = "banfozzErpSession";

function saveSession(user) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username: user.username }));
  } catch (err) {
    // localStorage unavailable — session just won't persist across refresh
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (err) {
    // ignore
  }
}

function firstAllowedModule(role) {
  return (ROLE_MODULES[role] || [])[0] || null;
}

function refreshModuleView(module) {
  if (module === "sales") refreshSalesView();
  if (module === "installation") refreshInstallationView();
  if (module === "service") refreshServiceView();
  if (module === "accounts") refreshAccountsView();
  if (module === "reports") refreshReportsView();
  if (module === "hr") refreshHrView();
  if (module === "conveyance") refreshConveyanceView();
  if (module === "settings") refreshSettingsView();
}

function applyRolePermissions() {
  const allowed = ROLE_MODULES[currentUser.role] || [];

  document.querySelectorAll(".nav-item[data-module]").forEach(link => {
    link.classList.toggle("role-hidden", !allowed.includes(link.dataset.module));
  });

  document.body.className = document.body.className.replace(/\brole-\S+/g, "").trim();
  document.body.classList.add(`role-${currentUser.role}`);

  const activeLink = document.querySelector(".nav-item[data-module].active");
  const activeModule = activeLink ? activeLink.dataset.module : null;

  if (!activeModule || !allowed.includes(activeModule)) {
    const target = firstAllowedModule(currentUser.role);
    if (target) {
      document.querySelectorAll(".nav-item[data-module]").forEach(l => l.classList.remove("active"));
      document.querySelectorAll(".module-page").forEach(p => p.classList.add("hidden"));
      const link = document.querySelector(`.nav-item[data-module="${target}"]`);
      const page = document.getElementById(`module-${target}`);
      if (link) link.classList.add("active");
      if (page) page.classList.remove("hidden");
      refreshModuleView(target);
    }
  }
}

// Only the Super Admin can back up, restore, or reset all data.
function applyDataBackupRestriction() {
  const tabBtn = document.querySelector('#module-settings .tab-btn[data-stab="data"]');
  if (tabBtn) tabBtn.classList.toggle("hidden", currentUser.role !== "owner");
}

function updateUserChips() {
  document.querySelectorAll(".user-chip").forEach(chip => {
    chip.querySelector(".avatar").textContent = currentUser.name.charAt(0).toUpperCase();
    chip.querySelector("span").textContent = `${currentUser.name} · ${ROLE_LABELS[currentUser.role] || currentUser.role}`;
    chip.title = "Click to log out";
  });
}

function setupUserChipLogout() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".user-chip")) {
      showConfirm("Log out of Banfozz ERP?", () => {
        clearSession();
        window.location.reload();
      }, "Log Out");
    }
  });
}

function showApp(user) {
  currentUser = user;
  saveSession(user);
  document.getElementById("loginOverlay").classList.add("hidden");
  document.getElementById("appRoot").classList.remove("hidden");
  updateUserChips();
  applyRolePermissions();
  applyDataBackupRestriction();
  updateNotifDot();
  logActivity("Logged in");
}

function setupLogin() {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;
    const errorEl = document.getElementById("loginError");

    const user = USERS.find(u => u.username.toLowerCase() === username && u.password === password);

    if (!user) {
      errorEl.textContent = "Invalid username or password.";
      errorEl.classList.remove("hidden");
      return;
    }

    errorEl.classList.add("hidden");
    document.getElementById("loginForm").reset();
    showApp(user);
  });
}

function initAuth() {
  setupLogin();
  setupUserChipLogout();

  const session = loadSession();
  if (session) {
    const user = USERS.find(u => u.username === session.username);
    if (user) showApp(user);
  }
}

// =====================================================================
// SETTINGS MODULE — company profile, user accounts, appearance, backup
// =====================================================================

let pendingCompanyLogo = null;

function updateCompanyLogoPreview() {
  const preview = document.getElementById("cp-logo-preview");
  preview.innerHTML = pendingCompanyLogo
    ? `<img src="${pendingCompanyLogo}" alt="">`
    : `<span class="image-preview-placeholder">No logo</span>`;
}

function populateCompanyProfileForm() {
  document.getElementById("cp-name").value = COMPANY_INFO.name;
  document.getElementById("cp-tagline").value = COMPANY_INFO.tagline;
  document.getElementById("cp-address").value = COMPANY_INFO.address;
  document.getElementById("cp-phone").value = COMPANY_INFO.phone;
  document.getElementById("cp-email").value = COMPANY_INFO.email;
  document.getElementById("cp-website").value = COMPANY_INFO.website || "";
  pendingCompanyLogo = COMPANY_INFO.logo || null;
  updateCompanyLogoPreview();
}

function setupCompanyProfileForm() {
  document.getElementById("cp-logo-pick").addEventListener("click", () => document.getElementById("cp-logo").click());

  document.getElementById("cp-logo").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingCompanyLogo = reader.result;
      updateCompanyLogoPreview();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("cp-logo-remove").addEventListener("click", () => {
    pendingCompanyLogo = null;
    document.getElementById("cp-logo").value = "";
    updateCompanyLogoPreview();
  });

  document.getElementById("companyProfileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    COMPANY_INFO.name = document.getElementById("cp-name").value.trim() || COMPANY_INFO.name;
    COMPANY_INFO.logo = pendingCompanyLogo;
    COMPANY_INFO.tagline = document.getElementById("cp-tagline").value.trim();
    COMPANY_INFO.address = document.getElementById("cp-address").value.trim();
    COMPANY_INFO.phone = document.getElementById("cp-phone").value.trim();
    COMPANY_INFO.email = document.getElementById("cp-email").value.trim();
    COMPANY_INFO.website = document.getElementById("cp-website").value.trim();
    updateBrandMarks();
    saveState();
    showInfo("Company profile updated — it will appear on newly printed documents.");
  });
}

let editingUserAccountUsername = null;

function renderUserAccountTable() {
  const tbody = document.querySelector("#userAccountTable tbody");
  tbody.innerHTML = USERS.map(u => {
    const emp = u.employeeId ? employees.find(e => e.id === u.employeeId) : null;
    return `
    <tr>
      <td>${u.username}</td>
      <td>${u.name}</td>
      <td>${emp ? emp.name : "—"}</td>
      <td>${ROLE_LABELS[u.role] || u.role}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn-sm" title="Edit" data-edit-user-account="${u.username}">✏️</button>
          <button class="icon-btn-sm danger" title="Delete" data-delete-user-account="${u.username}">🗑️</button>
        </div>
      </td>
    </tr>
  `;
  }).join("");
}

function populateUserEmployeeSelect() {
  document.getElementById("ua-employee").innerHTML = `<option value="">— Not linked to an employee —</option>` +
    employees.map(e => `<option value="${e.id}">${e.name}</option>`).join("");
}

function openUserAccountModal(user = null) {
  editingUserAccountUsername = user ? user.username : null;
  document.getElementById("userAccountModalTitle").textContent = user ? `Edit ${user.username}` : "New User";
  document.getElementById("userAccountSubmitBtn").textContent = user ? "Update User" : "Create User";

  document.getElementById("userAccountForm").reset();
  populateUserEmployeeSelect();

  const usernameInput = document.getElementById("ua-username");
  const passwordInput = document.getElementById("ua-password");
  usernameInput.disabled = !!user;
  passwordInput.placeholder = user ? "Leave blank to keep current password" : "Set a password";

  if (user) {
    usernameInput.value = user.username;
    if (user.employeeId) document.getElementById("ua-employee").value = user.employeeId;
    document.getElementById("ua-name").value = user.name;
    document.getElementById("ua-role").value = user.role;
  }

  openModal("userAccountModalOverlay");
}

function editUserAccount(username) {
  const u = USERS.find(x => x.username === username);
  if (u) openUserAccountModal(u);
}

function deleteUserAccount(username) {
  const u = USERS.find(x => x.username === username);
  if (!u) return;

  if (currentUser && currentUser.username === username) {
    showInfo("You can't delete the account you're currently logged in as.");
    return;
  }

  const otherOwners = USERS.filter(x => x.role === "owner" && x.username !== username);
  if (u.role === "owner" && otherOwners.length === 0) {
    showInfo("At least one Owner account must remain — add another Owner before deleting this one.");
    return;
  }

  showConfirm(`Delete user "${u.username}"? This action cannot be undone.`, () => {
    const idx = USERS.findIndex(x => x.username === username);
    if (idx > -1) USERS.splice(idx, 1);
    logActivity(`Deleted user account "${username}"`);
    renderUserAccountTable();
    saveState();
  });
}

function setupUserAccountActions() {
  document.getElementById("addUserAccountBtn").addEventListener("click", () => openUserAccountModal());

  document.getElementById("ua-employee").addEventListener("change", (e) => {
    const emp = employees.find(x => x.id === Number(e.target.value));
    if (emp) document.getElementById("ua-name").value = emp.name;
  });

  document.querySelector("#userAccountTable tbody").addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-user-account]");
    const deleteBtn = e.target.closest("[data-delete-user-account]");
    if (editBtn) editUserAccount(editBtn.dataset.editUserAccount);
    else if (deleteBtn) deleteUserAccount(deleteBtn.dataset.deleteUserAccount);
  });

  document.getElementById("userAccountForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("ua-name").value.trim();
    if (!name) return;

    const role = document.getElementById("ua-role").value;
    const employeeIdRaw = document.getElementById("ua-employee").value;
    const employeeId = employeeIdRaw ? Number(employeeIdRaw) : null;
    const password = document.getElementById("ua-password").value;

    if (editingUserAccountUsername) {
      const u = USERS.find(x => x.username === editingUserAccountUsername);
      if (!u) return;
      u.name = name;
      u.role = role;
      u.employeeId = employeeId;
      if (password) u.password = password;

      if (currentUser && currentUser.username === u.username) {
        currentUser.name = u.name;
        currentUser.role = u.role;
        updateUserChips();
        applyRolePermissions();
        applyDataBackupRestriction();
      }
    } else {
      const username = document.getElementById("ua-username").value.trim().toLowerCase();
      if (!username) return;
      if (USERS.some(x => x.username === username)) {
        showInfo(`Username "${username}" is already taken.`);
        return;
      }
      if (!password) {
        showInfo("Set a password for the new user.");
        return;
      }
      USERS.push({ username, password, role, name, employeeId });
      logActivity(`Created user account "${username}" (${ROLE_LABELS[role] || role})`);
    }

    editingUserAccountUsername = null;
    closeModal("userAccountModalOverlay");
    renderUserAccountTable();
    saveState();
  });
}

function setupSettingsAppearance() {
  document.getElementById("themeDarkBtn").addEventListener("click", () => applyTheme("dark"));
  document.getElementById("themeLightBtn").addEventListener("click", () => applyTheme("light"));
}

function exportDataBackup() {
  const data = collectState();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `banfozz-backup-${todayStr()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importDataBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let saved;
    try {
      saved = JSON.parse(reader.result);
    } catch (err) {
      showInfo("This file isn't a valid backup — couldn't read it as JSON.");
      return;
    }
    if (!saved || typeof saved !== "object" || !Array.isArray(saved.products)) {
      showInfo("This doesn't look like a Banfozz ERP backup file.");
      return;
    }

    const versionNote = saved.version !== STATE_VERSION
      ? " This backup is from an older version of the app — some newer fields may not be restored."
      : "";

    showConfirm(`Import this backup? It will replace all current data in the app.${versionNote}`, () => {
      restoreState(saved);
      saveState();
      showInfo("Backup imported successfully. Reloading...");
      setTimeout(() => window.location.reload(), 900);
    }, "Import");
  };
  reader.readAsText(file);
}

function resetAllData() {
  showConfirm("Reset ALL data in this app? This cannot be undone — everything will go back to the default demo data.", () => {
    try {
      localStorage.removeItem(STATE_KEY);
    } catch (err) {
      // ignore
    }
    window.location.reload();
  }, "Reset Everything");
}

function setupDataBackup() {
  document.getElementById("exportDataBtn").addEventListener("click", exportDataBackup);
  document.getElementById("importDataBtn").addEventListener("click", () => document.getElementById("importDataInput").click());
  document.getElementById("importDataInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) importDataBackup(file);
    e.target.value = "";
  });
  document.getElementById("resetDataBtn").addEventListener("click", resetAllData);
}

function setupSettingsTabs() {
  const tabButtons = document.querySelectorAll("#module-settings .tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll("#module-settings .panel").forEach(p => p.classList.add("hidden"));
      document.getElementById(`spanel-${btn.dataset.stab}`).classList.remove("hidden");
    });
  });
}

function renderActivityLogTable() {
  const tbody = document.querySelector("#activityLogTable tbody");
  tbody.innerHTML = activityLog.map(a => `
    <tr>
      <td>${formatDateTime(a.timestamp)}</td>
      <td>${a.name}</td>
      <td>${ROLE_LABELS[a.role] || a.role || "—"}</td>
      <td>${a.action}</td>
    </tr>
  `).join("") || `<tr><td colspan="4" style="color:var(--text-muted); text-align:center; padding:24px;">No activity recorded yet</td></tr>`;
}

function refreshSettingsView() {
  populateCompanyProfileForm();
  renderUserAccountTable();
  renderActivityLogTable();
  updateBrandMarks();
}

function initSettingsModule() {
  refreshSettingsView();
  setupSettingsTabs();
  setupCompanyProfileForm();
  setupUserAccountActions();
  setupSettingsAppearance();
  setupDataBackup();
}

// ---------- Init ----------

function init() {
  setupThemeToggle();
  setupMobileSidebar();
  setupNotifPanel();
  setupCsvExports();
  loadState();
  migrateUserRoles();
  renderStats();
  renderCategoryFilter();
  populateCategorySelect();
  renderCatalog();
  renderCategoryGrid();
  renderMovements();
  renderRawMaterials();
  renderLowStock();
  renderWarehouses();
  renderValuation();
  setupTabs();
  setupFilters();
  setupModalDismiss();
  setupConfirmModal();
  setupAddProduct();
  setupAddMovement();
  setupProductRowActions("#catalogTable tbody");
  setupProductRowActions("#categoryProductTable tbody");
  setupCatalogSubtabs();
  setupAddCategory();
  setupMovementRowActions();
  setupAddRawMaterial();
  setupRawMaterialRowActions();
  setupAddWarehouse();
  setupWarehouseCardActions();
  setupLowStockActions();
  setupModuleNav();
  initPurchaseModule();
  initSalesModule();
  initInstallationModule();
  initServiceModule();
  initAccountsModule();
  initReportsModule();
  initHrModule();
  initConveyanceModule();
  initSettingsModule();
  setupAutosave();
  initAuth();
}

document.addEventListener("DOMContentLoaded", init);
