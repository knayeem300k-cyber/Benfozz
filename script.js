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

function populatePoVendorSelect() {
  const select = document.getElementById("po-vendor");
  select.innerHTML = vendors.map(v => `<option value="${v.id}">${v.name}</option>`).join("");
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
  document.getElementById("addPoBtn").addEventListener("click", () => {
    if (vendors.length === 0) {
      showInfo("Add a vendor first before creating a purchase order.");
      return;
    }
    populatePoVendorSelect();
    document.getElementById("poForm").reset();
    resetPoLineItems();
    openModal("poModalOverlay");
  });

  document.getElementById("poAddLineBtn").addEventListener("click", () => addPoLineRow());

  document.getElementById("poForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const vendorId = Number(document.getElementById("po-vendor").value);
    if (!vendorId) return;

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
    <div class="po-total-row" style="margin-top:14px;">
      <span>Total PO Value</span>
      <b>${money(poTotal(po))}</b>
    </div>
    ${po.notes ? `<div class="detail-section"><h4>Notes</h4><p class="detail-desc">${po.notes}</p></div>` : ""}
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
  if (po.status === "pending" || po.status === "rejected") {
    actionsHtml += `<button type="button" class="btn-danger" id="poDeleteBtn">🗑️ Delete PO</button>`;
  }

  actions.innerHTML = actionsHtml;

  document.getElementById("poPrintBtn").onclick = () => printPurchaseOrder(po.id);

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
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    color: #1a1a2e;
    max-width: 800px;
    margin: 0 auto;
    padding: 48px;
  }
  .print-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 3px solid #5b7dff;
    padding-bottom: 20px;
    margin-bottom: 28px;
  }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  .print-parties { margin-bottom: 30px; }
  .print-party-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 6px; font-weight: 700; }
  .print-party-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .print-party-detail { font-size: 12.5px; color: #555; line-height: 1.6; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  thead th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #888; padding: 10px 8px; border-bottom: 2px solid #ddd; }
  tbody td { padding: 12px 8px; font-size: 13px; border-bottom: 1px solid #eee; }
  td.num, th.num { text-align: right; }
  .print-total-row { display: flex; justify-content: flex-end; margin-bottom: 30px; }
  .print-total-box { min-width: 240px; }
  .print-total-line { display: flex; justify-content: space-between; border-top: 2px solid #1a1a2e; padding-top: 12px; font-size: 17px; font-weight: 800; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  @media print {
    body { padding: 0; }
    @page { margin: 20mm; }
  }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">
        ${COMPANY_INFO.address}<br>
        ${COMPANY_INFO.phone} · ${COMPANY_INFO.email}
      </div>
    </div>
    <div>
      <div class="print-doc-title">PURCHASE ORDER</div>
      <div class="print-doc-meta">
        Date: ${po.date}<br>
        PO No: ${po.poNumber}<br>
        Status: ${poStatusLabel(po.status)}
      </div>
    </div>
  </div>

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

  <div class="print-footer">This is a system-generated purchase order from ${COMPANY_INFO.name} ERP.</div>
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
  const vendorPOs = purchaseOrders.filter(po => po.vendorId === Number(vendorId) && po.status !== "rejected");
  select.innerHTML = `<option value="">— General Payment (no PO) —</option>` +
    vendorPOs.map(po => `<option value="${po.id}">${po.poNumber} · ${money(poTotal(po))}</option>`).join("");
}

function setupAddPayment() {
  document.getElementById("addPaymentBtn").addEventListener("click", () => {
    if (vendors.length === 0) {
      showInfo("Add a vendor first before recording a payment.");
      return;
    }
    if (cashAccounts.length === 0) {
      showInfo("Add a cash or bank account first before recording a payment.");
      return;
    }
    document.getElementById("paymentForm").reset();
    populatePayVendorSelect();
    populatePayPoSelect(document.getElementById("pay-vendor").value);
    populateAccountSelect("pay-account");
    openModal("paymentModalOverlay");
  });

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

function populateVrVendorSelect() {
  document.getElementById("vr-vendor").innerHTML = vendors.map(v => `<option value="${v.id}">${v.name}</option>`).join("");
}

function openVendorReturnModal() {
  if (vendors.length === 0) {
    showInfo("Add a vendor first before recording a return.");
    return;
  }
  document.getElementById("vendorReturnForm").reset();
  populateVrVendorSelect();
  resetReturnLineItems("vrLineItems");
  openModal("vendorReturnModalOverlay");
}

function setupAddVendorReturn() {
  document.getElementById("addVendorReturnBtn").addEventListener("click", openVendorReturnModal);
  document.getElementById("vrAddLineBtn").addEventListener("click", () => addReturnLineRow("vrLineItems"));

  document.getElementById("vendorReturnForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const vendorId = Number(document.getElementById("vr-vendor").value);
    if (!vendorId) return;

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
      <div class="deal-card">
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
        <div class="kanban-cards">${cards}</div>
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

function populateContactCompanySelect() {
  document.getElementById("ct-company").innerHTML = companies.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
}

function fillContactForm(ct) {
  document.getElementById("ct-name").value = ct.name;
  document.getElementById("ct-company").value = ct.companyId;
  document.getElementById("ct-designation").value = ct.designation || "";
  document.getElementById("ct-phone").value = ct.phone || "";
  document.getElementById("ct-email").value = ct.email || "";
}

function setupAddContact() {
  document.getElementById("addContactBtn").addEventListener("click", () => {
    if (companies.length === 0) {
      showInfo("Add a company first before creating a contact.");
      return;
    }
    editingContactId = null;
    document.querySelector("#contactModalOverlay .modal-header h3").textContent = "Add New Contact";
    document.querySelector("#contactForm button[type=submit]").textContent = "Save Contact";
    document.getElementById("contactForm").reset();
    populateContactCompanySelect();
    openModal("contactModalOverlay");
  });

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("ct-name").value.trim();
    if (!name) return;

    const data = {
      name,
      companyId: Number(document.getElementById("ct-company").value),
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
  populateContactCompanySelect();
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
  name: "Banfozz",
  tagline: "Industrial Equipment Trading & Assembly",
  address: "Tejgaon Industrial Area, Dhaka, Bangladesh",
  phone: "+880 1700-000000",
  email: "sales@banfozz.com",
  logo: null,
};

function printLogoHtml() {
  return COMPANY_INFO.logo ? `<img src="${COMPANY_INFO.logo}" alt="" style="height:44px;max-width:160px;object-fit:contain;margin-bottom:8px;display:block;">` : "";
}

function updateBrandMarks() {
  document.querySelectorAll(".brand-mark").forEach(el => {
    el.innerHTML = COMPANY_INFO.logo
      ? `<img src="${COMPANY_INFO.logo}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`
      : COMPANY_INFO.name.charAt(0).toUpperCase();
  });
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
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    color: #1a1a2e;
    max-width: 800px;
    margin: 0 auto;
    padding: 48px;
  }
  .print-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 3px solid #5b7dff;
    padding-bottom: 20px;
    margin-bottom: 28px;
  }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  .print-parties { margin-bottom: 30px; }
  .print-party-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 6px; font-weight: 700; }
  .print-party-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .print-party-detail { font-size: 12.5px; color: #555; line-height: 1.6; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  thead th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #888; padding: 10px 8px; border-bottom: 2px solid #ddd; }
  tbody td { padding: 12px 8px; font-size: 13px; border-bottom: 1px solid #eee; vertical-align: top; }
  td.num, th.num { text-align: right; vertical-align: middle; }
  .print-item { display: flex; align-items: flex-start; gap: 12px; }
  .print-item-img { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; flex-shrink: 0; border: 1px solid #eee; }
  .print-item-img-placeholder { width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0; background: linear-gradient(135deg, #22d3ee, #7c9dff); color: #051025; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 17px; }
  .print-item-name { font-weight: 700; font-size: 13px; color: #1a1a2e; }
  .print-item-desc { font-size: 11px; color: #888; margin-top: 3px; line-height: 1.5; max-width: 320px; }
  .print-total-row { display: flex; justify-content: flex-end; margin-bottom: 30px; }
  .print-total-box { min-width: 240px; }
  .print-total-line { display: flex; justify-content: space-between; border-top: 2px solid #1a1a2e; padding-top: 12px; font-size: 17px; font-weight: 800; }
  .print-notes { font-size: 12.5px; color: #555; margin-bottom: 40px; line-height: 1.7; }
  .print-notes b { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #999; margin-bottom: 6px; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  @media print {
    body { padding: 0; }
    @page { margin: 20mm; }
  }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">
        ${COMPANY_INFO.address}<br>
        ${COMPANY_INFO.phone} · ${COMPANY_INFO.email}
      </div>
    </div>
    <div>
      <div class="print-doc-title">QUOTATION</div>
      <div class="print-doc-meta">
        Quote No: <b>${q.quoteNumber}</b><br>
        Date: ${q.date}<br>
        ${q.validUntil ? `Valid Until: ${q.validUntil}<br>` : ""}
        Prepared By: ${employeeName(q.employeeId)}
      </div>
    </div>
  </div>

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

  <div class="print-footer">Thank you for considering ${COMPANY_INFO.name} for your business.</div>
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

function populateInstallationSoSelect() {
  document.getElementById("in-so").innerHTML = eligibleInstallationSOs()
    .map(so => `<option value="${so.id}">${so.soNumber} — ${companyName(so.companyId)}</option>`).join("");
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
  populateInstallationSoSelect();
  populateInstallationEmployeeSelect();

  if (job) {
    document.getElementById("in-so").value = job.salesOrderId;
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
  document.getElementById("addInstallationBtn").addEventListener("click", () => openInstallationModal());

  document.getElementById("installationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const salesOrderId = Number(document.getElementById("in-so").value);
    const so = salesOrders.find(x => x.id === salesOrderId);
    if (!so) return;

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
    if (j.status === "completed") {
      actions += `<button class="icon-btn-sm" title="Print Report" data-print-installation="${j.id}">🖨️</button>`;
    }
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
  if (job.status === "completed") {
    html += `<button type="button" class="btn-ghost" id="installationPrintBtn">🖨️ Print Report</button>`;
  }
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
  if (job.status === "completed") {
    document.getElementById("installationPrintBtn").onclick = () => printInstallation(job.id);
  }
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
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #1a1a2e; max-width: 800px; margin: 0 auto; padding: 48px; }
  .print-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #5b7dff; padding-bottom: 20px; margin-bottom: 28px; }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
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
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  @media print { body { padding: 0; } @page { margin: 20mm; } }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">${COMPANY_INFO.address}<br>${COMPANY_INFO.phone} · ${COMPANY_INFO.email}</div>
    </div>
    <div>
      <div class="print-doc-title">INSTALLATION & COMMISSIONING REPORT</div>
      <div class="print-doc-meta">
        Job No: <b>${job.jobNumber}</b><br>
        Scheduled: ${job.scheduledDate || "—"}<br>
        Completed: ${job.completedDate || "—"}<br>
        Technician: ${job.assignedEmployeeId ? employeeName(job.assignedEmployeeId) : "—"}
      </div>
    </div>
  </div>

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

  <div class="print-footer">This is a system-generated installation report from ${COMPANY_INFO.name} ERP.</div>
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
        chargeable: false,
        cost: 0,
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
    if (t.status === "resolved") {
      actions += `<button class="icon-btn-sm" title="Print Report" data-print-service="${t.id}">🖨️</button>`;
    }
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
            <option value="no">No (Under Warranty / Free)</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label>Cost (৳, if chargeable)</label>
          <input type="number" id="serviceCost" min="0" value="0">
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
  if (t.status === "resolved") {
    html += `<button type="button" class="btn-ghost" id="servicePrintBtn">🖨️ Print Report</button>`;
  }
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
  if (t.status === "resolved") {
    document.getElementById("servicePrintBtn").onclick = () => printService(t.id);
  }
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
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #1a1a2e; max-width: 800px; margin: 0 auto; padding: 48px; }
  .print-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #5b7dff; padding-bottom: 20px; margin-bottom: 28px; }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  .print-parties { margin-bottom: 30px; }
  .print-party-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 6px; font-weight: 700; }
  .print-party-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .print-party-detail { font-size: 12.5px; color: #555; line-height: 1.6; }
  .print-notes { font-size: 12.5px; color: #555; margin-bottom: 24px; line-height: 1.7; }
  .print-notes b { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #999; margin-bottom: 6px; }
  .print-total-row { display: flex; justify-content: flex-end; margin-bottom: 30px; }
  .print-total-box { min-width: 240px; }
  .print-total-line { display: flex; justify-content: space-between; border-top: 2px solid #1a1a2e; padding-top: 12px; font-size: 17px; font-weight: 800; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  @media print { body { padding: 0; } @page { margin: 20mm; } }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">${COMPANY_INFO.address}<br>${COMPANY_INFO.phone} · ${COMPANY_INFO.email}</div>
    </div>
    <div>
      <div class="print-doc-title">SERVICE REPORT</div>
      <div class="print-doc-meta">
        Ticket No: <b>${t.ticketNumber}</b><br>
        Type: ${serviceTypeLabel(t.type)}<br>
        Resolved: ${formatDateTime(t.resolvedAt)}<br>
        Technician: ${t.assignedEmployeeId ? employeeName(t.assignedEmployeeId) : "—"}
      </div>
    </div>
  </div>

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

  <div class="print-footer">This is a system-generated service report from ${COMPANY_INFO.name} ERP.</div>
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
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    color: #1a1a2e;
    max-width: 860px;
    margin: 0 auto;
    padding: 48px;
  }
  .print-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 3px solid #5b7dff;
    padding-bottom: 20px;
    margin-bottom: 28px;
  }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  h2.report-section-title { font-size: 15px; font-weight: 800; margin: 34px 0 14px; padding-bottom: 8px; border-bottom: 2px solid #eee; }
  .report-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 10px; }
  .report-stat-box { border: 1px solid #eee; border-radius: 10px; padding: 14px; text-align: center; }
  .report-stat-value { font-size: 18px; font-weight: 800; }
  .report-stat-label { font-size: 10.5px; color: #888; margin-top: 4px; }
  .report-compare-line { display: flex; justify-content: space-between; font-size: 13px; padding: 10px 0; border-bottom: 1px solid #eee; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
  thead th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #888; padding: 10px 8px; border-bottom: 2px solid #ddd; }
  tbody td { padding: 10px 8px; font-size: 12.5px; border-bottom: 1px solid #eee; }
  td.num, th.num { text-align: right; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  @media print {
    body { padding: 0; }
    @page { margin: 20mm; }
  }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">
        ${COMPANY_INFO.address}<br>
        ${COMPANY_INFO.phone} · ${COMPANY_INFO.email}
      </div>
    </div>
    <div>
      <div class="print-doc-title">FULL BUSINESS REPORT</div>
      <div class="print-doc-meta">
        Generated: ${generatedAt}<br>
        ${filterCompany ? `Company: ${filterCompany.name}` : "All Companies"}
      </div>
    </div>
  </div>

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

  <div class="print-footer">This is a system-generated full report from ${COMPANY_INFO.name} ERP · ${generatedAt}</div>
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

  let cards = [
    { icon: "🧑‍💼", value: totalEmployees, label: "Total Employees", cls: "" },
    { icon: "🧾", value: totalSheets, label: "Salary Sheets Created", cls: "" },
    { icon: "✅", value: money(totalPaid), label: "Total Salary Paid", cls: "good" },
    { icon: "⏳", value: money(totalDue), label: "Total Salary Due", cls: totalDue > 0 ? "warn" : "" },
  ];

  if (currentUser && currentUser.role === "manager") {
    cards = cards.slice(0, 1);
  }

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
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #1a1a2e; max-width: 800px; margin: 0 auto; padding: 48px; }
  .print-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #5b7dff; padding-bottom: 20px; margin-bottom: 28px; }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  tbody td { padding: 12px 8px; font-size: 13px; border-bottom: 1px solid #eee; }
  td.num { text-align: right; }
  .print-total-row { display: flex; justify-content: flex-end; margin-bottom: 30px; }
  .print-total-box { min-width: 280px; }
  .print-total-line { display: flex; justify-content: space-between; border-top: 2px solid #1a1a2e; padding-top: 12px; font-size: 17px; font-weight: 800; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  .row-neg td.num { color: #d33; }
  .row-pos td.num { color: #1a9e5c; }
  .print-status-stamp { display: inline-block; margin-top: 10px; padding: 5px 14px; border-radius: 999px; font-size: 12px; font-weight: 800; letter-spacing: 0.04em; }
  .print-status-stamp.paid { background: #e6f9ee; color: #1a9e5c; }
  .print-status-stamp.due { background: #fdecea; color: #d33; }
  @media print { body { padding: 0; } @page { margin: 20mm; } }
  `;
}

function buildPayslipHtml(sheet, entry) {
  const totals = computeSheetEntryTotals(entry);

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${sheet.title} — ${entry.employeeName}</title>
<style>${payslipStyles()}</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">
        ${COMPANY_INFO.address}<br>
        ${COMPANY_INFO.phone} · ${COMPANY_INFO.email}
      </div>
    </div>
    <div>
      <div class="print-doc-title">SALARY SHEET</div>
      <div class="print-doc-meta">
        ${sheet.title}<br>
        Employee: ${entry.employeeName}<br>
        Role: ${entry.role || "—"}
      </div>
      <div style="text-align:right;">
        ${entry.paid
          ? `<span class="print-status-stamp paid">PAID — ${entry.paidDate}</span>`
          : `<span class="print-status-stamp due">PAYMENT DUE</span>`}
      </div>
    </div>
  </div>

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

  <div class="print-footer">This is a system-generated salary sheet from ${COMPANY_INFO.name} ERP.</div>
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
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #1a1a2e; max-width: 1000px; margin: 0 auto; padding: 40px; }
  .print-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #5b7dff; padding-bottom: 20px; margin-bottom: 24px; }
  .print-brand-name { font-size: 24px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-doc-title { font-size: 20px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px; }
  thead th { text-align: left; font-size: 10.5px; text-transform: uppercase; color: #888; padding: 8px 6px; border-bottom: 2px solid #ddd; }
  tbody td { padding: 9px 6px; border-bottom: 1px solid #eee; }
  td.num, th.num { text-align: right; }
  tfoot td { padding: 12px 6px; font-weight: 800; border-top: 2px solid #1a1a2e; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 50px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 40px; }
  @media print { body { padding: 0; } @page { margin: 16mm; } }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
    </div>
    <div>
      <div class="print-doc-title">${sheet.title}</div>
      <div class="print-doc-meta">
        Month: ${monthLabel(sheet.monthKey)}<br>
        Created: ${sheet.createdDate}<br>
        Employees: ${sheet.entries.length}
      </div>
    </div>
  </div>
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
  <div class="print-footer">This is a system-generated salary sheet from ${COMPANY_INFO.name} ERP.</div>
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
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    color: #1a1a2e;
    max-width: 800px;
    margin: 0 auto;
    padding: 48px;
  }
  .print-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 3px solid #5b7dff;
    padding-bottom: 20px;
    margin-bottom: 28px;
  }
  .print-brand-name { font-size: 26px; font-weight: 800; }
  .print-brand-tagline { font-size: 12px; color: #666; margin-top: 2px; }
  .print-brand-meta { font-size: 11.5px; color: #888; margin-top: 10px; line-height: 1.6; }
  .print-doc-title { font-size: 22px; font-weight: 800; color: #5b7dff; text-align: right; }
  .print-doc-meta { font-size: 12px; color: #555; text-align: right; margin-top: 6px; line-height: 1.7; }
  .print-parties { margin-bottom: 30px; }
  .print-party-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 6px; font-weight: 700; }
  .print-party-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .print-party-detail { font-size: 12.5px; color: #555; line-height: 1.6; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  thead th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #888; padding: 10px 8px; border-bottom: 2px solid #ddd; }
  tbody td { padding: 12px 8px; font-size: 13px; border-bottom: 1px solid #eee; }
  td.num, th.num { text-align: right; }
  .print-total-row { display: flex; justify-content: flex-end; margin-bottom: 30px; }
  .print-total-box { min-width: 240px; }
  .print-total-line { display: flex; justify-content: space-between; border-top: 2px solid #1a1a2e; padding-top: 12px; font-size: 17px; font-weight: 800; }
  .print-signatures { display: flex; justify-content: space-between; gap: 60px; margin-top: 60px; }
  .print-sig-line { border-top: 1px solid #999; padding-top: 8px; font-size: 11.5px; color: #777; flex: 1; }
  .print-footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 50px; }
  @media print {
    body { padding: 0; }
    @page { margin: 20mm; }
  }
</style>
</head>
<body>
  <div class="print-header">
    <div>
      ${printLogoHtml()}
      <div class="print-brand-name">${COMPANY_INFO.name}</div>
      <div class="print-brand-tagline">${COMPANY_INFO.tagline}</div>
      <div class="print-brand-meta">
        ${COMPANY_INFO.address}<br>
        ${COMPANY_INFO.phone} · ${COMPANY_INFO.email}
      </div>
    </div>
    <div>
      <div class="print-doc-title">CONVEYANCE BILL</div>
      <div class="print-doc-meta">
        Date: ${bill.date}<br>
        Bill No: CV-${String(bill.id).padStart(4, "0")}
      </div>
    </div>
  </div>

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

  <div class="print-footer">This is a system-generated conveyance bill from ${COMPANY_INFO.name} ERP.</div>
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
  { username: "manager", password: "manager123", role: "manager", name: "Manager", employeeId: null },
  { username: "hr", password: "hr123", role: "hr", name: "HR Desk", employeeId: null },
  { username: "sales", password: "sales123", role: "sales", name: "Sales Team", employeeId: null },
  { username: "warehouse", password: "warehouse123", role: "warehouse", name: "Warehouse Staff", employeeId: null },
];

const ROLE_LABELS = {
  owner: "Owner",
  manager: "Manager",
  hr: "HR",
  sales: "Sales",
  warehouse: "Warehouse Staff",
};

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
  manager: ["inventory", "purchase", "sales", "installation", "service", "accounts", "hr", "conveyance", "reports"],
  hr: ["hr", "conveyance", "reports"],
  sales: ["sales", "installation", "reports", "inventory", "conveyance"],
  warehouse: ["inventory", "installation", "service", "conveyance"],
};

// Every role can submit a conveyance bill — only these roles can approve/reject/mark paid.
const CONVEYANCE_APPROVER_ROLES = ["owner", "manager", "hr"];

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

function applyManagerSalaryRestriction() {
  const hide = currentUser.role === "manager";
  const payrollTab = document.querySelector('#module-hr .tab-btn[data-htab="payroll"]');
  if (payrollTab) payrollTab.style.display = hide ? "none" : "";
  renderHrStats();
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
  applyManagerSalaryRestriction();
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
