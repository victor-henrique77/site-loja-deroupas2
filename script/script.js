const products = [
        {
          id: 1,
          name: "Tênis esportivo",
          cat: "Masculino",
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
      let category = "Todos",
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
      const nav = document.querySelector("#nav"),
        filters = document.querySelector("#filters");
      nav.innerHTML = navItems
        .map((x) => `<button data-nav="${x}">${x}</button>`)
        .join("");
      ["Todos", "Masculino", "Feminino", "Calçados", "Promoções"].forEach(
        (x) => {
          let b = document.createElement("button");
          b.textContent = x;
          b.dataset.cat = x;
          filters.appendChild(b);
        },
      );
      function setCategory(c) {
        category = c === "Promoções" ? "Promoções" : c;
        filters
          .querySelectorAll("button")
          .forEach((b) => b.classList.toggle("active", b.dataset.cat === c));
        nav
          .querySelectorAll("button")
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
      function render() {
        const arr = filtered();
        document.querySelector("#count").textContent =
          `${arr.length} ${arr.length === 1 ? "produto" : "produtos"}`;
        document.querySelector("#grid").innerHTML = arr.length
          ? arr
              .map(
                (p) => `<article class="card" data-id="${p.id}">
  <div class="photo"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="tag">${p.tag}</span><button class="heart ${favorites.has(p.id) ? "liked" : ""}" data-fav="${p.id}" aria-label="Favoritar">${favorites.has(p.id) ? "♥" : "♡"}</button></div>
  <div class="card-body"><div class="category">${p.cat}</div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="price-row"><div class="price">${money(p.price)}${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</div><button class="add" data-add="${p.id}">Adicionar</button></div></div>
 </article>`,
              )
              .join("")
          : `<div class="empty" style="grid-column:1/-1">Nenhum produto encontrado.<br>Tente outra busca ou categoria.</div>`;
      }
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
              return `<div class="cart-item"><img src="${p.img}" alt=""><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty"><button data-minus="${p.id}">−</button><span>${i.qty}</span><button data-plus="${p.id}">+</button></div></div><button class="remove" data-remove="${p.id}">Remover</button></div>`;
            })
            .join("");
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
        document.querySelector("#modalPrice").innerHTML =
          money(selected.price) +
          (selected.old
            ? ` <span class="old">${money(selected.old)}</span>`
            : "");
        document.querySelector("#modalFav").textContent = favorites.has(id)
          ? "♥ Favoritado"
          : "♡ Favoritar";
        document.querySelector("#modalOverlay").classList.add("open");
      }
      function toast(msg) {
        const t = document.querySelector("#toast");
        t.textContent = msg;
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 2200);
      }
      document.addEventListener("click", (e) => {
        const addBtn = e.target.closest("[data-add]"),
          fav = e.target.closest("[data-fav]"),
          card = e.target.closest(".card");
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
          return;
        }
        if (card) openModal(+card.dataset.id);
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
        if (e.target.closest("[data-nav]")) {
          let n = e.target.closest("[data-nav]").dataset.nav;
          if (n === "Carrinho") {
            document.querySelector("#drawer").classList.add("open");
          } else if (n === "Início") {
            setCategory("Todos");
          } else setCategory(n);
        }
      });
      document.querySelector("#filters").addEventListener("click", (e) => {
        if (e.target.dataset.cat) setCategory(e.target.dataset.cat);
      });
      document.querySelector("#search").addEventListener("input", (e) => {
        query = e.target.value;
        render();
      });
      document.querySelector("#sort").addEventListener("change", render);
      document.querySelector("#cartBtn").onclick = () =>
        document.querySelector("#drawer").classList.add("open");
      document.querySelector("#drawerClose").onclick = () =>
        document.querySelector("#drawer").classList.remove("open");
      document.querySelector("#modalClose").onclick = () =>
        document.querySelector("#modalOverlay").classList.remove("open");
      document.querySelector("#modalOverlay").addEventListener("click", (e) => {
        if (e.target.id === "modalOverlay")
          e.currentTarget.classList.remove("open");
      });
      document.querySelector("#favBtn").onclick = () => {
        query = "";
        category = "Todos";
        render();
        toast(`${favorites.size} favorito(s) selecionado(s)`);
        document.querySelector("#grid").scrollIntoView({ behavior: "smooth" });
      };
      document.querySelector("#modalAdd").onclick = () => {
        add(selected.id);
        document.querySelector("#modalOverlay").classList.remove("open");
      };
      document.querySelector("#modalFav").onclick = () => {
        favorites.has(selected.id)
          ? favorites.delete(selected.id)
          : favorites.add(selected.id);
        openModal(selected.id);
        render();
      };
      document.querySelector("#checkout").onclick = () => {
        if (!cart.length) return;
        cart = [];
        updateCart();
        document.querySelector("#drawer").classList.remove("open");
        toast("Pedido realizado com sucesso! Obrigado pela compra.");
      };
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.querySelector("#modalOverlay").classList.remove("open");
          document.querySelector("#drawer").classList.remove("open");
        }
      });
      setCategory("Todos");
      updateCart();