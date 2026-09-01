/*
 * Catálogo profissional Climax Performance - Versão Completa (50 Produtos)
 * Produtos, nomes, preços e descrições demonstrativos de alto padrão.
 */

if (typeof products === 'undefined') {
  var products = [];
}

products.push(
  // --- CALÇADOS (18 produtos) ---
  {
    id: 201,
    name: "Apex Runner X1",
    cat: "Calçados",
    price: 699.9,
    old: 799.9,
    tag: "-13%",
    desc: "Tênis de corrida com entressola responsiva, cabedal respirável e sola de borracha de alta durabilidade.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 202,
    name: "Velocity Carbon Pro",
    cat: "Calçados",
    price: 999.9,
    old: null,
    tag: "Premium",
    desc: "Tênis de alta performance para maratonas com entressola responsiva e amortecimento avançado.",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 203,
    name: "Pulse Trainer Elite",
    cat: "Calçados",
    price: 649.9,
    old: 729.9,
    tag: "-11%",
    desc: "Tênis versátil para academia com estabilidade reforçada, sola de borracha e suporte de arco.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 204,
    name: "CrossFit Motion TR",
    cat: "Calçados",
    price: 599.9,
    old: null,
    tag: "Novo",
    desc: "Tênis para treino funcional com sola plana antiderrapante, estabilidade lateral e cabedal respirável.",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 205,
    name: "Urban Walk Essential",
    cat: "Calçados",
    price: 399.9,
    old: 459.9,
    tag: "-13%",
    desc: "Tênis para caminhada leve com amortecimento macio, construção leve e tecido respirável.",
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 206,
    name: "Endurance Trail GTX",
    cat: "Calçados",
    price: 849.9,
    old: null,
    tag: "Premium",
    desc: "Tênis para trilha com sola de borracha tracionada, proteção contra detritos e cabedal resistente.",
    img: "https://images.unsplash.com/photo-1514989940723-e8e5ef6ab5c4?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 207,
    name: "Court Master Pro",
    cat: "Calçados",
    price: 579.9,
    old: 649.9,
    tag: "-10%",
    desc: "Tênis para quadra com suporte lateral aprimorado, sola de borracha e amortecimento de impacto.",
    img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 208,
    name: "Gravity Lift Trainer",
    cat: "Calçados",
    price: 729.9,
    old: null,
    tag: "Novo",
    desc: "Tênis para musculação pesada com base firme, suporte de arco e entressola de alta estabilidade.",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 209,
    name: "AeroSprint Speed",
    cat: "Calçados",
    price: 679.9,
    old: 749.9,
    tag: "-9%",
    desc: "Tênis de corrida leve com cabedal respirável, entressola responsiva e sola de alta aderência.",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 210,
    name: "FlexFit Gym One",
    cat: "Calçados",
    price: 499.9,
    old: null,
    tag: "Popular",
    desc: "Tênis para academia com flexibilidade avançada, construção leve e tecido respirável.",
    img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 211,
    name: "Terrain Explorer TR",
    cat: "Calçados",
    price: 799.9,
    old: 899.9,
    tag: "-11%",
    desc: "Tênis para trilha com sola de borracha tracionada e proteção reforçada contra impactos.",
    img: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 212,
    name: "MetCon Stability X",
    cat: "Calçados",
    price: 749.9,
    old: null,
    tag: "Premium",
    desc: "Tênis para treino funcional com base larga, estabilidade máxima e sola de borracha aderente.",
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 213,
    name: "Stellar Court Flex",
    cat: "Calçados",
    price: 549.9,
    old: 619.9,
    tag: "-11%",
    desc: "Tênis para quadra com amortecimento focado em saltos, suporte lateral e cabedal respirável.",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 214,
    name: "Stride Comfort Walk",
    cat: "Calçados",
    price: 429.9,
    old: null,
    tag: "Novo",
    desc: "Tênis para caminhada com palmilha anatômica, construção leve e amortecimento prolongado.",
    img: "https://images.unsplash.com/photo-1556637640-2c80d3201be8?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 215,
    name: "Apex Marathon V2",
    cat: "Calçados",
    price: 899.9,
    old: 999.9,
    tag: "-10%",
    desc: "Tênis de corrida de longa distância com entressola responsiva e cabedal em malha ultra leve.",
    img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 216,
    name: "HyperLift Cross",
    cat: "Calçados",
    price: 689.9,
    old: null,
    tag: "Premium",
    desc: "Tênis para treino funcional e levantamento de peso com sola rígida e estabilidade superior.",
    img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 217,
    name: "TrailMaster Pro",
    cat: "Calçados",
    price: 829.9,
    old: 919.9,
    tag: "-9%",
    desc: "Tênis para trilha resistente à água com sola tracionada e biqueira reforçada.",
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 218,
    name: "Omni Court Grip",
    cat: "Calçados",
    price: 599.9,
    old: null,
    tag: "Novo",
    desc: "Tênis para quadra poliesportiva com sola de borracha anti-risco e suporte lateral anatômico.",
    img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=85"
  },

  // --- MASCULINO (16 produtos) ---
  {
    id: 301,
    name: "AeroFlex Pro Tee",
    cat: "Masculino",
    price: 189.9,
    old: 229.9,
    tag: "-17%",
    desc: "Camiseta dry-fit de alta performance com tecido respirável e tecnologia de secagem rápida.",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 302,
    name: "Velocity Tech Shorts",
    cat: "Masculino",
    price: 169.9,
    old: null,
    tag: "Novo",
    desc: "Short de corrida com tecido leve, elasticidade e ventilação estratégica nas laterais.",
    img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 303,
    name: "Apex Training Jacket",
    cat: "Masculino",
    price: 419.9,
    old: 489.9,
    tag: "-14%",
    desc: "Jaqueta esportiva corta-vento com construção leve, punhos elásticos e bolsos com zíper.",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 304,
    name: "Core Motion Pants",
    cat: "Masculino",
    price: 289.9,
    old: null,
    tag: "Premium",
    desc: "Calça esportiva em tecido com elasticidade, modelagem afunilada e conforto térmico.",
    img: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 305,
    name: "Titan Performance Polo",
    cat: "Masculino",
    price: 219.9,
    old: 259.9,
    tag: "-15%",
    desc: "Camisa polo esportiva com tecido respirável e tratamento antimicrobiano.",
    img: "https://images.unsplash.com/photo-1625910513411-828bf449750b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 306,
    name: "Urban Run Hoodie",
    cat: "Masculino",
    price: 379.9,
    old: null,
    tag: "Novo",
    desc: "Moletom esportivo com capuz ajustável, tecido de toque macio e bolso canguru funcional.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 307,
    name: "Aero Seamless Longsleeve",
    cat: "Masculino",
    price: 239.9,
    old: 279.9,
    tag: "-14%",
    desc: "Blusa de manga longa sem costura com tecnologia dry-fit e alta elasticidade para treinos intensos.",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 308,
    name: "Velocity Track Pants",
    cat: "Masculino",
    price: 319.9,
    old: null,
    tag: "Premium",
    desc: "Calça esportiva para treino com zíper na barra, tecido flexível e secagem rápida.",
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 309,
    name: "IronLift Workout Shorts",
    cat: "Masculino",
    price: 149.9,
    old: 189.9,
    tag: "-21%",
    desc: "Short de treino com bolsos seguros, cós elástico e costuras reforçadas anti-atrito.",
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 310,
    name: "Stride Elite Singlet",
    cat: "Masculino",
    price: 129.9,
    old: null,
    tag: "Novo",
    desc: "Regata esportiva de corrida ultraleve com ventilação nas costas e secagem rápida.",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 311,
    name: "Matrix Thermal Set",
    cat: "Masculino",
    price: 459.9,
    old: 529.9,
    tag: "-13%",
    desc: "Conjunto de treino térmico com blusa e calça de compressão moderada e isolamento leve.",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 312,
    name: "Prime Dry-Fit Tee",
    cat: "Masculino",
    price: 159.9,
    old: null,
    tag: "Popular",
    desc: "Camiseta dry-fit básica com caimento atlético e tecido respirável de alta durabilidade.",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 313,
    name: "StormShield Windbreaker",
    cat: "Masculino",
    price: 399.9,
    old: 459.9,
    tag: "-13%",
    desc: "Jaqueta esportiva corta-vento com tratamento hidrorrepelente leve e capuz integrado.",
    img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 314,
    name: "FlexMotion Jogger",
    cat: "Masculino",
    price: 329.9,
    old: null,
    tag: "Premium",
    desc: "Moletom esportivo calça jogger com tecido macio, elasticidade e bolsos utilitários.",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 315,
    name: "Dynamic Muscle Tank",
    cat: "Masculino",
    price: 139.9,
    old: 169.9,
    tag: "-17%",
    desc: "Regata esportiva cavada com tecido respirável e liberdade total de movimento para musculação.",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 316,
    name: "Alpha Training Suit",
    cat: "Masculino",
    price: 489.9,
    old: null,
    tag: "Novo",
    desc: "Conjunto de treino completo com jaqueta e calça em tecido técnico leve e elástico.",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85"
  },

  // --- FEMININO (16 produtos) ---
  {
    id: 401,
    name: "Pulse Training Top",
    cat: "Feminino",
    price: 179.9,
    old: 219.9,
    tag: "-18%",
    desc: "Top esportivo com sustentação média, bojo removível e tecido respirável de secagem rápida.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 402,
    name: "Sculpt Motion Legging",
    cat: "Feminino",
    price: 289.9,
    old: null,
    tag: "Premium",
    desc: "Legging de compressão equilibrada com cintura alta, tecido com elasticidade e proteção contra atrito.",
    img: "https://images.unsplash.com/photo-1506629905607-d9f3d9a7a4a1?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 403,
    name: "AeroForm Training Set",
    cat: "Feminino",
    price: 449.9,
    old: 519.9,
    tag: "-13%",
    desc: "Conjunto fitness composto por top de alta sustentação e legging de cintura alta empina bumbum.",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 404,
    name: "Motion Flow Jacket",
    cat: "Feminino",
    price: 399.9,
    old: null,
    tag: "Novo",
    desc: "Jaqueta esportiva feminina leve com silhueta anatômica, capuz e tecido respirável.",
    img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 405,
    name: "Elevate Running Shorts",
    cat: "Feminino",
    price: 159.9,
    old: 189.9,
    tag: "-15%",
    desc: "Short esportivo de corrida com cós elástico, short interno de compressão e tecido ultraleve.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 406,
    name: "Luxe Training Sweatshirt",
    cat: "Feminino",
    price: 349.9,
    old: null,
    tag: "Premium",
    desc: "Moletom esportivo de toque macio com modelagem confortável e visual clean para pós-treino.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 407,
    name: "Sculpt Pro Bodysuit",
    cat: "Feminino",
    price: 329.9,
    old: 389.9,
    tag: "-15%",
    desc: "Body esportivo de alta performance com modelagem anatômica, compressão e toque suave.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 408,
    name: "AeroLite Running Tee",
    cat: "Feminino",
    price: 169.9,
    old: 199.9,
    tag: "-15%",
    desc: "Camiseta dry-fit de corrida feminina com ventilação estratégica nas costas e secagem rápida.",
    img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fb1b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 409,
    name: "Vibe Mesh Tank",
    cat: "Feminino",
    price: 139.9,
    old: null,
    tag: "Novo",
    desc: "Regata esportiva feminina em tecido telado altamente respirável para treinos intensos.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 410,
    name: "Flex High-Waist Legging",
    cat: "Feminino",
    price: 259.9,
    old: 299.9,
    tag: "-13%",
    desc: "Legging de cintura alta com tecido com elasticidade, costuras reforçadas e zero transparência.",
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 411,
    name: "Power Impact Sports Bra",
    cat: "Feminino",
    price: 199.9,
    old: null,
    tag: "Premium",
    desc: "Top esportivo de alta sustentação para corrida e crossfit com alças ajustáveis.",
    img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 412,
    name: "Urban Cozy Hoodie",
    cat: "Feminino",
    price: 369.9,
    old: 429.9,
    tag: "-14%",
    desc: "Moletom esportivo com capuz, toque aveludado interno e design moderno para o dia a dia.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 413,
    name: "Swift Motion Biker Shorts",
    cat: "Feminino",
    price: 179.9,
    old: null,
    tag: "Novo",
    desc: "Short biker esportivo de cintura alta com compressão moderada e tecido com elasticidade.",
    img: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 414,
    name: "Elite Performance Set",
    cat: "Feminino",
    price: 479.9,
    old: 549.9,
    tag: "-13%",
    desc: "Conjunto fitness premium com regata dry-fit e legging texturizada de alta sustentação.",
    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 415,
    name: "Aura Lightweight Windbreaker",
    cat: "Feminino",
    price: 389.9,
    old: null,
    tag: "Premium",
    desc: "Jaqueta corta-vento leve e compacta com proteção UV e ventilação nas costas.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 416,
    name: "Core Comfort Sweatpants",
    cat: "Feminino",
    price: 299.9,
    old: 349.9,
    tag: "-14%",
    desc: "Calça moletom esportiva feminina com cintura elástica ajustável e bolsos laterais.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85"
  }
);

// Atualiza as grades e vitrines imediatamente se as funções existirem no sistema
if (typeof render === "function") render();
if (typeof renderFeaturedProducts === "function") renderFeaturedProducts();
