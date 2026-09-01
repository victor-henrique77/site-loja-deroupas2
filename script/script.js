const products = [
  {
    id: 1,
    name: "Tênis esportivo",
    cat: "Calçados",
    price: 1499.9,
    old: 1899.9,
    tag: "-21%",
    desc: "Tenis confortavel",
    img: "img/tenis esportivo.jpg",
  },
  {
    id: 2,
    name: "Blazer Alfaiataria Soft",
    cat: "Feminino",
    price: 329.9,
    old: 399.9,
    tag: "-17%",
    desc: "Estrutura elegante para produções versáteis.",
    img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Tênis Urban Classic",
    cat: "Calçados",
    price: 219.9,
    old: 269.9,
    tag: "Oferta",
    desc: "Design minimalista para o dia a dia.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Vestido Midi Aura",
    cat: "Feminino",
    price: 279.9,
    old: 329.9,
    tag: "-15%",
    desc: "Silhueta fluida e acabamento sofisticado.",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Jaqueta Denim Raw",
    cat: "Masculino",
    price: 239.9,
    old: null,
    tag: "Novo",
    desc: "Denim encorpado com estética urbana.",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Sandália Minimal",
    cat: "Calçados",
    price: 189.9,
    old: 229.9,
    tag: "-17%",
    desc: "Linhas limpas e conforto para ocasiões especiais.",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Tricot Essential",
    cat: "Feminino",
    price: 159.9,
    old: null,
    tag: "Novo",
    desc: "Textura macia e visual atemporal.",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Calça Chino Classic",
    cat: "Masculino",
    price: 179.9,
    old: 219.9,
    tag: "-18%",
    desc: "Modelagem reta para combinações fáceis.",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85",
  },
];

let currentPage = "home",
  category = "Todos",
  query = "",
  cart = [],
  favorites = new Set(),
  selected = null;

const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const navItems = [
  "Início",
  "Masculino",
  "Feminino",
  "Calçados",
  "Promoções",
  "Carrinho",
];

// ========== NAVEGAÇÃO ==========
function goToPage(page) {
  currentPage = page;
  const home = document.querySelector("#home");
  const shop = document.querySelector("#shop");

  if (page === "home") {
    home.style.display = "";
    shop.style.display = "none";
    window.scrollTo(0, 0);
  } else if (page === "shop") {
    home.style.display = "none";
    shop.style.display = "";
    window.scrollTo(0, 0);
  }
}

function goToCategory(cat) {
  goToPage("shop");
  setCategory(cat);
}

// ========== SETUP HEADER E NAVEGAÇÃO ==========
const nav = document.querySelector("#nav");
nav.innerHTML = navItems
  .map((x) => `<button class="nav-btn" data-nav="${x}">${x}</button>`)
  .join("");

["Todos", "Masculino", "Feminino", "Calçados", "Promoções"].forEach((x) => {
  let b = document.createElement("button");
  b.textContent = x;
  b.dataset.cat = x;
  document.querySelector("#filters").appendChild(b);
});

// ========== CATEGORIAS E FILTROS ==========
function setCategory(c) {
  category = c === "Promoções" ? "Promoções" : c;
  document
    .querySelectorAll("#filters button")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === c));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.nav === c));
  render();
}

function filtered() {
  let arr = products.filter(
    (p) =>
      category === "Todos" ||
      p.cat === category ||
      (category === "Promoções" && p.old),
  );
  if (query)
    arr = arr.filter((p) =>
      (p.name + " " + p.cat + " " + p.desc)
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  let s = document.querySelector("#sort").value;
  if (s === "low") arr.sort((a, b) => a.price - b.price);
  if (s === "high") arr.sort((a, b) => b.price - a.price);
  return arr;
}

// ========== RENDERIZAÇÃO PRODUTOS ==========
function renderCard(p) {
  return `<article class="card" data-id="${p.id}">
    <div class="photo">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <span class="tag">${p.tag}</span>
      <button class="heart ${favorites.has(p.id) ? "liked" : ""}" data-fav="${p.id}" aria-label="Favoritar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${favorites.has(p.id) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
    <div class="card-body">
      <div class="category">${p.cat}</div>
      <h3>${p.name}</h3>
      <div class="desc">${p.desc}</div>
      <div class="price-row">
        <div class="price">${money(p.price)}${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</div>
        <button class="add" data-add="${p.id}">Adicionar</button>
      </div>
    </div>
  </article>`;
}

function render() {
  const arr = filtered();
  document.querySelector("#count").textContent =
    `${arr.length} ${arr.length === 1 ? "produto" : "produtos"}`;
  document.querySelector("#grid").innerHTML = arr.length
    ? arr.map(renderCard).join("")
    : `<div class="empty" style="grid-column:1/-1">Nenhum produto encontrado.<br>Tente outra busca ou categoria.</div>`;
}

function renderFeaturedProducts() {
  const featured = products.slice(0, 4);
  document.querySelector("#featuredGrid").innerHTML = featured
    .map(renderCard)
    .join("");
}

// ========== CARRINHO ==========
function add(id) {
  const item = cart.find((x) => x.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  updateCart();
  toast("Produto adicionado ao carrinho");
}

function updateCart() {
  document.querySelector("#cartBadge").textContent = cart.reduce(
    (s, x) => s + x.qty,
    0,
  );
  const list = document.querySelector("#cartList");
  let total = 0;
  if (!cart.length) {
    list.innerHTML = '<div class="empty">Seu carrinho está vazio.</div>';
  } else {
    list.innerHTML = cart
      .map((i) => {
        let p = products.find((x) => x.id === i.id);
        total += p.price * i.qty;
        return `<div class="cart-item">
          <img src="${p.img}" alt="${p.name}">
          <div>
            <h4>${p.name}</h4>
            <p>${money(p.price)}</p>
            <div class="qty">
              <button data-minus="${p.id}">−</button>
              <span>${i.qty}</span>
              <button data-plus="${p.id}">+</button>
            </div>
          </div>
          <button class="remove" data-remove="${p.id}">Remover</button>
        </div>`;
      })
      .join("");
  }
  document.querySelector("#total").textContent = money(total);
  document.querySelector("#checkout").disabled = !cart.length;
}

// ========== MODAL PRODUTO ==========
function openModal(id) {
  selected = products.find((p) => p.id === id);
  document.querySelector("#modalImg").src = selected.img;
  document.querySelector("#modalImg").alt = selected.name;
  document.querySelector("#modalCat").textContent = selected.cat;
  document.querySelector("#modalTitle").textContent = selected.name;
  document.querySelector("#modalDesc").textContent = selected.desc;
  document.querySelector("#modalPrice").innerHTML =
    money(selected.price) +
    (selected.old ? ` <span class="old">${money(selected.old)}</span>` : "");
  const favBtn = document.querySelector("#modalFav");
  const favText = favBtn.querySelector("#favText");
  if (favorites.has(id)) {
    favBtn.classList.add("liked");
    favText.textContent = "Favoritado";
  } else {
    favBtn.classList.remove("liked");
    favText.textContent = "Favoritar";
  }
  document.querySelector("#modalOverlay").classList.add("open");
}

// ========== TOAST ==========
function toast(msg) {
  const t = document.querySelector("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// ========== EVENT LISTENERS ==========
document.addEventListener("click", (e) => {
  // Cards e Produtos
  const addBtn = e.target.closest("[data-add]");
  const fav = e.target.closest("[data-fav]");
  const card = e.target.closest(".card");

  if (addBtn) {
    e.stopPropagation();
    add(+addBtn.dataset.add);
    return;
  }

  if (fav) {
    e.stopPropagation();
    let id = +fav.dataset.fav;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    render();
    renderFeaturedProducts();
    return;
  }

  if (card) {
    openModal(+card.dataset.id);
  }

  // Carrinho - Quantidade
  if (e.target.closest("[data-plus]")) {
    let id = +e.target.closest("[data-plus]").dataset.plus;
    cart.find((x) => x.id === id).qty++;
    updateCart();
  }

  if (e.target.closest("[data-minus]")) {
    let id = +e.target.closest("[data-minus]").dataset.minus;
    let x = cart.find((x) => x.id === id);
    x.qty--;
    if (x.qty <= 0) cart = cart.filter((i) => i.id !== id);
    updateCart();
  }

  if (e.target.closest("[data-remove]")) {
    let id = +e.target.closest("[data-remove]").dataset.remove;
    cart = cart.filter((i) => i.id !== id);
    updateCart();
  }

  // Navegação
  if (e.target.closest("[data-nav]")) {
    let n = e.target.closest("[data-nav]").dataset.nav;
    if (n === "Carrinho") {
      document.querySelector("#drawer").classList.add("open");
    } else if (n === "Início") {
      goToPage("home");
      category = "Todos";
    } else {
      goToCategory(n);
    }
  }

  // Footer - Navegação
  if (e.target.dataset.section === "home") {
    e.preventDefault();
    goToPage("home");
  }

  if (e.target.dataset.category) {
    e.preventDefault();
    goToCategory(e.target.dataset.category);
  }

  // Home - Categorias
  const catCard = e.target.closest(".category-card");
  if (catCard) {
    const cat = catCard.dataset.category;
    goToCategory(cat);
  }
});

// Filtros
document.querySelector("#filters").addEventListener("click", (e) => {
  if (e.target.dataset.cat) setCategory(e.target.dataset.cat);
});

// Busca
document.querySelector("#search").addEventListener("input", (e) => {
  query = e.target.value;
  render();
});

// Ordenação
document.querySelector("#sort").addEventListener("change", render);

// Carrinho - Botão
document.querySelector("#cartBtn").onclick = () =>
  document.querySelector("#drawer").classList.add("open");

document.querySelector("#drawerClose").onclick = () =>
  document.querySelector("#drawer").classList.remove("open");

// Modal - Fechar
document.querySelector("#modalClose").onclick = () =>
  document.querySelector("#modalOverlay").classList.remove("open");

document.querySelector("#modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") e.currentTarget.classList.remove("open");
});

// Favoritos - Botão
document.querySelector("#favBtn").onclick = () => {
  goToPage("shop");
  query = "";
  category = "Todos";
  render();
  toast(`${favorites.size} favorito(s) selecionado(s)`);
  setTimeout(
    () =>
      document.querySelector("#grid").scrollIntoView({ behavior: "smooth" }),
    100,
  );
};

// Modal - Adicionar
document.querySelector("#modalAdd").onclick = () => {
  add(selected.id);
  document.querySelector("#modalOverlay").classList.remove("open");
};

// Modal - Favoritar
document.querySelector("#modalFav").onclick = () => {
  favorites.has(selected.id)
    ? favorites.delete(selected.id)
    : favorites.add(selected.id);
  openModal(selected.id);
  render();
  renderFeaturedProducts();
};

// Checkout
document.querySelector("#checkout").onclick = () => {
  if (!cart.length) return;
  cart = [];
  updateCart();
  document.querySelector("#drawer").classList.remove("open");
  toast("Pedido realizado com sucesso! Obrigado pela compra.");
};

// Home - CTAs
document.querySelector("#btnShopNow").onclick = () => goToCategory("Todos");
document.querySelector("#btnViewCollection").onclick = () =>
  goToCategory("Todos");
document.querySelector("#btnStartShopping").onclick = () =>
  goToCategory("Todos");

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector("#modalOverlay").classList.remove("open");
    document.querySelector("#drawer").classList.remove("open");
  }
});

// ========== INICIALIZAÇÃO ==========
function init() {
  goToPage("home");
  setCategory("Todos");
  updateCart();
  renderFeaturedProducts();
}

init();
