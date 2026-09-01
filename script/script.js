const products = [
  { id: 1, name: "Apex Runner X1", cat: "Calçados", price: 699.9, old: 799.9, tag: "-13%", desc: "Tênis premium de corrida com entressola responsiva e cabedal respirável.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "Velocity Carbon Pro", cat: "Calçados", price: 899.9, old: 999.9, tag: "-10%", desc: "Tênis de performance fictício com placa de impulso e construção ultraleve.", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "Pulse Trainer Elite", cat: "Calçados", price: 649.9, old: 749.9, tag: "Oferta", desc: "Treino versátil com estabilidade, amortecimento e acabamento premium.", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "Urban Motion 02", cat: "Calçados", price: 579.9, old: null, tag: "Novo", desc: "Silhueta esportiva urbana com conforto para rotina e deslocamentos.", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Aero Court Premium", cat: "Calçados", price: 619.9, old: 699.9, tag: "-11%", desc: "Tênis de quadra com suporte lateral e sola de alta aderência.", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Endurance Trail", cat: "Calçados", price: 749.9, old: null, tag: "Novo", desc: "Modelo para trilhas com proteção reforçada e tração em terrenos variados.", img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85" },
  { id: 7, name: "FlexRun Essential", cat: "Calçados", price: 429.9, old: 499.9, tag: "-14%", desc: "Leve e flexível para caminhadas, academia e corrida recreativa.", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85" },
  { id: 8, name: "Gravity Lift Trainer", cat: "Calçados", price: 559.9, old: null, tag: "Novo", desc: "Treinador de academia com base firme para exercícios de força.", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85" },
  { id: 9, name: "AeroFlex Pro Tee", cat: "Masculino", price: 189.9, old: 229.9, tag: "-17%", desc: "Camiseta técnica de secagem rápida com tecido leve e respirável.", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
  { id: 10, name: "Velocity Tech Shorts", cat: "Masculino", price: 179.9, old: null, tag: "Novo", desc: "Short esportivo com mobilidade elevada e bolso seguro para treino.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85" },
  { id: 11, name: "Apex Training Jacket", cat: "Masculino", price: 389.9, old: 449.9, tag: "-13%", desc: "Jaqueta leve para aquecimento com corte esportivo contemporâneo.", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85" },
  { id: 12, name: "Core Motion Pants", cat: "Masculino", price: 269.9, old: null, tag: "Novo", desc: "Calça de treino premium com elasticidade e acabamento minimalista.", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85" },
  { id: 13, name: "Titan Performance Polo", cat: "Masculino", price: 249.9, old: 289.9, tag: "-14%", desc: "Polo esportiva sofisticada para treino e produções casuais.", img: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85" },
  { id: 14, name: "Urban Run Hoodie", cat: "Masculino", price: 329.9, old: null, tag: "Novo", desc: "Moletom premium de toque macio com estética esportiva urbana.", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85" },
  { id: 15, name: "Aero Seamless Longsleeve", cat: "Masculino", price: 219.9, old: 259.9, tag: "-15%", desc: "Blusa de manga longa sem excesso de costuras para treinos intensos.", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85" },
  { id: 16, name: "Velocity Track Pants", cat: "Masculino", price: 289.9, old: null, tag: "Novo", desc: "Calça esportiva de corte moderno para aquecimento e uso diário.", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85" },
  { id: 17, name: "Pulse Training Top", cat: "Feminino", price: 169.9, old: 199.9, tag: "-15%", desc: "Top de alta sustentação com tecido respirável para treinos dinâmicos.", img: "https://images.unsplash.com/photo-1506629905607-d9f8d0e3f1c5?auto=format&fit=crop&w=900&q=85" },
  { id: 18, name: "Sculpt Motion Legging", cat: "Feminino", price: 299.9, old: 349.9, tag: "-14%", desc: "Legging de compressão equilibrada com cintura alta e acabamento premium.", img: "https://images.unsplash.com/photo-1506629905607-d9f8d0e3f1c5?auto=format&fit=crop&w=900&q=85" },
  { id: 19, name: "AeroForm Training Set", cat: "Feminino", price: 399.9, old: 469.9, tag: "-15%", desc: "Conjunto esportivo com ajuste confortável para academia e funcional.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85" },
  { id: 20, name: "Motion Flow Jacket", cat: "Feminino", price: 369.9, old: null, tag: "Novo", desc: "Jaqueta esportiva leve com silhueta elegante e proteção para aquecimento.", img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=900&q=85" },
  { id: 21, name: "Elevate Running Shorts", cat: "Feminino", price: 179.9, old: 219.9, tag: "-18%", desc: "Short de corrida leve com liberdade de movimento e bolso discreto.", img: "https://images.unsplash.com/photo-1506629905607-d9f8d0e3f1c5?auto=format&fit=crop&w=900&q=85" },
  { id: 22, name: "Luxe Training Sweatshirt", cat: "Feminino", price: 329.9, old: null, tag: "Novo", desc: "Moletom esportivo premium com textura macia e caimento sofisticado.", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85" },
  { id: 23, name: "Sculpt Pro Bodysuit", cat: "Feminino", price: 289.9, old: 339.9, tag: "-15%", desc: "Body esportivo de ajuste anatômico para treinos de alta mobilidade.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85" },
  { id: 24, name: "AeroLite Running Tee", cat: "Feminino", price: 159.9, old: null, tag: "Novo", desc: "Camiseta ultraleve com secagem rápida para corrida e cardio.", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
  { id: 25, name: "Impact Training Tee", cat: "Masculino", price: 199.9, old: 239.9, tag: "-17%", desc: "Camiseta técnica premium para musculação e treinos funcionais.", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=85" },
  { id: 26, name: "Motion Compression Tee", cat: "Masculino", price: 229.9, old: null, tag: "Novo", desc: "Camiseta de compressão com suporte muscular e toque suave.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85" },
  { id: 27, name: "ProForm Training Short", cat: "Masculino", price: 189.9, old: 219.9, tag: "-14%", desc: "Short técnico com tecido elástico e construção pensada para mobilidade.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85" },
  { id: 28, name: "Urban Active Cargo", cat: "Masculino", price: 279.9, old: null, tag: "Novo", desc: "Calça cargo esportiva com múltiplos bolsos e visual contemporâneo.", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85" },
  { id: 29, name: "Balance Yoga Legging", cat: "Feminino", price: 279.9, old: 319.9, tag: "-13%", desc: "Legging de alta elasticidade para yoga, pilates e mobilidade.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85" },
  { id: 30, name: "Motion Ribbed Top", cat: "Feminino", price: 149.9, old: null, tag: "Novo", desc: "Top canelado esportivo com estrutura confortável e visual premium.", img: "https://images.unsplash.com/photo-1506629905607-d9f8d0e3f1c5?auto=format&fit=crop&w=900&q=85" },
  { id: 31, name: "AeroWarm Zip Hoodie", cat: "Masculino", price: 349.9, old: 399.9, tag: "-12%", desc: "Jaqueta com zíper e interior macio para dias frios e aquecimento.", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85" },
  { id: 32, name: "Elite Recovery Jogger", cat: "Feminino", price: 299.9, old: null, tag: "Novo", desc: "Jogger premium para recuperação, aquecimento e rotina confortável.", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85" },
  { id: 33, name: "Apex Cross Trainer", cat: "Calçados", price: 679.9, old: 759.9, tag: "-11%", desc: "Tênis para treino híbrido com estabilidade lateral e amortecimento equilibrado.", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85" },
  { id: 34, name: "Sprint Flow Carbon", cat: "Calçados", price: 949.9, old: 1099.9, tag: "-14%", desc: "Modelo fictício de competição com placa rígida e resposta rápida.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
  { id: 35, name: "Terra Grip Pro", cat: "Calçados", price: 729.9, old: null, tag: "Novo", desc: "Tênis outdoor premium com sola agressiva para trilhas e aventura.", img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85" },
  { id: 36, name: "Court Motion Elite", cat: "Calçados", price: 599.9, old: 679.9, tag: "-12%", desc: "Calçado esportivo para quadra com suporte, leveza e excelente aderência.", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=85" },
  { id: 37, name: "Essential Sport Socks Pack", cat: "Calçados", price: 89.9, old: 109.9, tag: "-18%", desc: "Kit premium de meias esportivas com ajuste anatômico e ventilação.", img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=85" },
  { id: 38, name: "Performance Windbreaker", cat: "Masculino", price: 379.9, old: 439.9, tag: "-14%", desc: "Corta-vento esportivo leve para corrida e atividades ao ar livre.", img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=900&q=85" },
  { id: 39, name: "Aero Performance Bra", cat: "Feminino", price: 199.9, old: 239.9, tag: "-17%", desc: "Top de alta sustentação com estrutura confortável para impacto elevado.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85" },
  { id: 40, name: "Urban Sport Essential", cat: "Masculino", price: 159.9, old: null, tag: "Novo", desc: "Camiseta casual esportiva com acabamento premium para uso diário.", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=85" }
];

let currentPage = "home",
  category = "Todos",
  query = "",
  cart = [],
  favorites = new Set(),
  selected = null;

const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const navItems = ["Início", "Masculino", "Feminino", "Calçados", "Promoções", "Carrinho"];

function goToPage(page) {
  currentPage = page;
  const home = document.querySelector("#home");
  const shop = document.querySelector("#shop");
  if (page === "home") { home.style.display = ""; shop.style.display = "none"; window.scrollTo(0, 0); }
  else if (page === "shop") { home.style.display = "none"; shop.style.display = ""; window.scrollTo(0, 0); }
}

function goToCategory(cat) { goToPage("shop"); setCategory(cat); }

const nav = document.querySelector("#nav");
nav.innerHTML = navItems.map((x) => `<button class="nav-btn" data-nav="${x}">${x}</button>`).join("");

["Todos", "Masculino", "Feminino", "Calçados", "Promoções"].forEach((x) => {
  let b = document.createElement("button");
  b.textContent = x;
  b.dataset.cat = x;
  document.querySelector("#filters").appendChild(b);
});

function setCategory(c) {
  category = c === "Promoções" ? "Promoções" : c;
  document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("active", b.dataset.cat === c));
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.nav === c));
  render();
}

function filtered() {
  let arr = products.filter((p) => category === "Todos" || p.cat === category || (category === "Promoções" && p.old));
  if (query) arr = arr.filter((p) => (p.name + " " + p.cat + " " + p.desc).toLowerCase().includes(query.toLowerCase()));
  let s = document.querySelector("#sort").value;
  if (s === "low") arr.sort((a, b) => a.price - b.price);
  if (s === "high") arr.sort((a, b) => b.price - a.price);
  return arr;
}

function renderCard(p) {
  return `<article class="card" data-id="${p.id}">
    <div class="photo">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <span class="tag">${p.tag}</span>
      <button class="heart ${favorites.has(p.id) ? "liked" : ""}" data-fav="${p.id}" aria-label="Favoritar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${favorites.has(p.id) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
    </div>
    <div class="card-body"><div class="category">${p.cat}</div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="price-row"><div class="price">${money(p.price)}${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</div><button class="add" data-add="${p.id}">Adicionar</button></div></div>
  </article>`;
}

function render() {
  const arr = filtered();
  document.querySelector("#count").textContent = `${arr.length} ${arr.length === 1 ? "produto" : "produtos"}`;
  document.querySelector("#grid").innerHTML = arr.length ? arr.map(renderCard).join("") : `<div class="empty" style="grid-column:1/-1">Nenhum produto encontrado.<br>Tente outra busca ou categoria.</div>`;
}

function renderFeaturedProducts() { document.querySelector("#featuredGrid").innerHTML = products.slice(0, 4).map(renderCard).join(""); }

function add(id) {
  const item = cart.find((x) => x.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  updateCart();
  toast("Produto adicionado ao carrinho");
}

function updateCart() {
  document.querySelector("#cartBadge").textContent = cart.reduce((s, x) => s + x.qty, 0);
  const list = document.querySelector("#cartList");
  let total = 0;
  if (!cart.length) list.innerHTML = '<div class="empty">Seu carrinho está vazio.</div>';
  else {
    list.innerHTML = cart.map((i) => {
      let p = products.find((x) => x.id === i.id);
      total += p.price * i.qty;
      return `<div class="cart-item"><img src="${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty"><button data-minus="${p.id}">−</button><span>${i.qty}</span><button data-plus="${p.id}">+</button></div></div><button class="remove" data-remove="${p.id}">Remover</button></div>`;
    }).join("");
  }
  document.querySelector("#total").textContent = money(total);
  document.querySelector("#checkout").disabled = !cart.length;
}

function openModal(id) {
  selected = products.find((p) => p.id === id);
  document.querySelector("#modalImg").src = selected.img;
  document.querySelector("#modalImg").alt = selected.name;
  document.querySelector("#modalCat").textContent = selected.cat;
  document.querySelector("#modalTitle").textContent = selected.name;
  document.querySelector("#modalDesc").textContent = selected.desc;
  document.querySelector("#modalPrice").innerHTML = money(selected.price) + (selected.old ? ` <span class="old">${money(selected.old)}</span>` : "");
  const favBtn = document.querySelector("#modalFav");
  const favText = favBtn.querySelector("#favText");
  if (favorites.has(id)) { favBtn.classList.add("liked"); favText.textContent = "Favoritado"; }
  else { favBtn.classList.remove("liked"); favText.textContent = "Favoritar"; }
  document.querySelector("#modalOverlay").classList.add("open");
}

function toast(msg) {
  const t = document.querySelector("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]");
  const fav = e.target.closest("[data-fav]");
  const card = e.target.closest(".card");
  if (addBtn) { e.stopPropagation(); add(+addBtn.dataset.add); return; }
  if (fav) { e.stopPropagation(); let id = +fav.dataset.fav; favorites.has(id) ? favorites.delete(id) : favorites.add(id); render(); renderFeaturedProducts(); return; }
  if (card) openModal(+card.dataset.id);
  if (e.target.closest("[data-plus]")) { let id = +e.target.closest("[data-plus]").dataset.plus; cart.find((x) => x.id === id).qty++; updateCart(); }
  if (e.target.closest("[data-minus]")) { let id = +e.target.closest("[data-minus]").dataset.minus; let x = cart.find((x) => x.id === id); x.qty--; if (x.qty <= 0) cart = cart.filter((i) => i.id !== id); updateCart(); }
  if (e.target.closest("[data-remove]")) { let id = +e.target.closest("[data-remove]").dataset.remove; cart = cart.filter((i) => i.id !== id); updateCart(); }
  if (e.target.closest("[data-nav]")) {
    let n = e.target.closest("[data-nav]").dataset.nav;
    if (n === "Carrinho") document.querySelector("#drawer").classList.add("open");
    else if (n === "Início") { goToPage("home"); category = "Todos"; }
    else goToCategory(n);
  }
  if (e.target.dataset.section === "home") { e.preventDefault(); goToPage("home"); }
  if (e.target.dataset.category) { e.preventDefault(); goToCategory(e.target.dataset.category); }
  const catCard = e.target.closest(".category-card");
  if (catCard) goToCategory(catCard.dataset.category);
});

document.querySelector("#filters").addEventListener("click", (e) => { if (e.target.dataset.cat) setCategory(e.target.dataset.cat); });
document.querySelector("#search").addEventListener("input", (e) => { query = e.target.value; render(); });
document.querySelector("#sort").addEventListener("change", render);
document.querySelector("#cartBtn").onclick = () => document.querySelector("#drawer").classList.add("open");
document.querySelector("#drawerClose").onclick = () => document.querySelector("#drawer").classList.remove("open");
document.querySelector("#modalClose").onclick = () => document.querySelector("#modalOverlay").classList.remove("open");
document.querySelector("#modalOverlay").addEventListener("click", (e) => { if (e.target.id === "modalOverlay") e.currentTarget.classList.remove("open"); });
document.querySelector("#favBtn").onclick = () => { goToPage("shop"); query = ""; category = "Todos"; render(); toast(`${favorites.size} favorito(s) selecionado(s)`); setTimeout(() => document.querySelector("#grid").scrollIntoView({ behavior: "smooth" }), 100); };
document.querySelector("#modalAdd").onclick = () => { add(selected.id); document.querySelector("#modalOverlay").classList.remove("open"); };
document.querySelector("#modalFav").onclick = () => { favorites.has(selected.id) ? favorites.delete(selected.id) : favorites.add(selected.id); openModal(selected.id); render(); renderFeaturedProducts(); };
document.querySelector("#checkout").onclick = () => { if (!cart.length) return; cart = []; updateCart(); document.querySelector("#drawer").classList.remove("open"); toast("Pedido realizado com sucesso! Obrigado pela compra."); };
document.querySelector("#btnShopNow").onclick = () => goToCategory("Todos");
document.querySelector("#btnViewCollection").onclick = () => goToCategory("Todos");
document.querySelector("#btnStartShopping").onclick = () => goToCategory("Todos");
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { document.querySelector("#modalOverlay").classList.remove("open"); document.querySelector("#drawer").classList.remove("open"); } });

function init() { goToPage("home"); setCategory("Todos"); updateCart(); renderFeaturedProducts(); }
init();
