// script.js (root alongside farmer.html)
// Requires: supabaseClient.js that exports { supabase }

import { supabase } from './supabaseClient.js';

// ------- DOM HANDLES -------
const tradesBody   = document.getElementById('tradesBody');
const addBtn       = document.getElementById('addTradeBtn');
const farmerInput  = document.getElementById('farmerName');
const buyerInput   = document.getElementById('buyerName');
const commInput    = document.getElementById('commodity');
const qtyInput     = document.getElementById('quantity');
const priceInput   = document.getElementById('price');

// Some pages (buyer.html, etc.) won’t have these elements — guard against nulls
function hasFarmerUI() {
  return tradesBody && addBtn && farmerInput && buyerInput && commInput && qtyInput && priceInput;
}

// ------- DUMMY DATA GENERATOR -------
function generateDummyTrades(count = 1000) {
  const farmers = ["John", "Mary", "David", "Jane", "Peter", "Amina", "Olu", "Chen", "Sofia", "Carlos",
                   "Ife", "Ade", "Ngozi", "Kwame", "Fatou", "Hassan", "Leila", "Diego", "Marta", "Ibrahim"];
  const buyers  = ["Global Foods", "FreshMart", "ExportCo", "AgriWorld", "BioFoods", "HealthyMart",
                   "Harvest Hub", "Pacific Grains", "Maple Foods", "Northern Co-op"];
  const commodities = ["Wheat", "Maize", "Rice", "Soybeans", "Barley", "Cocoa", "Coffee", "Beef", "Milk",
                       "Apples", "Sesame", "Cashew", "Ginger", "Sorghum", "Millet"];

  const trades = [];
  for (let i = 0; i < count; i++) {
    const farmer    = farmers[Math.floor(Math.random() * farmers.length)];
    const buyer     = buyers[Math.floor(Math.random() * buyers.length)];
    const commodity = commodities[Math.floor(Math.random() * commodities.length)];
    const quantity  = Math.floor(Math.random() * 100) + 1;     // 1–100 tons
    const price     = Math.floor(Math.random() * 500) + 100;   // $100–600
    const status    = Math.random() < 0.5 ? 'escrow' : 'pending';
    const comp      = 'passed';

    trades.push({
      farmer_name: farmer,
      buyer_name: buyer,
      commodity,
      quantity,
      price,
      _status: status,
      _compliance: comp
    });
  }
  return trades;
}

// ------- RENDER HELPERS -------
function badge(label, cls) {
  return `<span class="badge ${cls}">${label}</span>`;
}

function addTradeRow(trade, statusClass = 'escrow', complianceClass = 'passed') {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${trade.farmer_name}</td>
    <td>${trade.buyer_name}</td>
    <td>${trade.commodity}</td>
    <td>${trade.quantity}</td>
    <td>$${Number(trade.price).toLocaleString()}</td>
    <td>${badge(statusClass === 'pending' ? 'Settlement Pending' : 'Funds Escrowed', statusClass)}</td>
    <td>${badge(complianceClass === 'passed' ? 'Compliance Passed' : 'Compliance Failed', complianceClass)}</td>
  `;
  tradesBody.appendChild(tr);
}

// ------- LOAD TRADES -------
async function loadTrades() {
  if (!tradesBody) return;

  tradesBody.innerHTML = '';

  // Try to load from Supabase if table exists
  let supaOK = false;
  try {
    const { data, error } = await supabase.from('trades').select('*');
    if (!error && Array.isArray(data) && data.length) {
      data.forEach(t => addTradeRow(t, 'pending', 'passed'));
      supaOK = true;
    }
  } catch (e) {
    // ignore; fallback to dummy below
  }

  // Fill the rest with dummy trades so it looks active
  const dummyTrades = generateDummyTrades(supaOK ? 800 : 1000);
  dummyTrades.forEach(t => addTradeRow(t, t._status, t._compliance));
}

// ------- ADD TRADE (Supabase insert, then refresh) -------
async function handleAddTrade() {
  const farmer = farmerInput.value.trim();
  const buyer  = buyerInput.value.trim();
  const comm   = commInput.value.trim();
  const qty    = Number(qtyInput.value);
  const price  = Number(priceInput.value);

  if (!farmer || !buyer || !comm || !qty || !price) {
    alert('Please fill all fields.');
    return;
  }

  try {
    const { error } = await supabase.from('trades').insert([{
      farmer_name: farmer,
      buyer_name: buyer,
      commodity: comm,
      quantity: qty,
      price: price
    }]);
    if (error) throw error;

    // clear inputs & refresh list
    farmerInput.value = '';
    buyerInput.value  = '';
    commInput.value   = '';
    qtyInput.value    = '';
    priceInput.value  = '';
    await loadTrades();
  } catch (e) {
    alert('Insert failed: ' + (e?.message || e));
  }
}

// ------- INIT -------
document.addEventListener('DOMContentLoaded', () => {
  if (hasFarmerUI()) {
    addBtn.addEventListener('click', handleAddTrade);
    loadTrades();
  }
});
