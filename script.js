// ====================
// Data công thức
// ====================
const recipes = [
  {
    slug: "pho-bo",
    title: "Phở bò Hà Nội",
    img: "https://picsum.photos/400/300?random=1",
    desc: "Phở bò truyền thống với nước dùng trong, thơm ngọt.",
    ingredients: ["500g thịt bò", "1kg xương bò", "1 củ gừng", "1 củ hành", "Bánh phở", "Gia vị"],
    steps: [
      "Hầm xương lấy nước dùng trong khoảng 6 tiếng.",
      "Nướng gừng, hành rồi cho vào nồi nước dùng.",
      "Thịt bò thái lát mỏng.",
      "Chần bánh phở, xếp thịt bò, chan nước dùng, thêm rau thơm."
    ]
  },
  {
    slug: "banh-mi-thit-nuong",
    title: "Bánh mì thịt nướng",
    img: "https://picsum.photos/400/300?random=2",
    desc: "Bánh mì giòn, thịt nướng thơm lừng, ăn kèm rau sống.",
    ingredients: ["Bánh mì", "300g thịt heo nướng", "Dưa leo", "Rau sống", "Nước sốt"],
    steps: [
      "Ướp thịt heo với gia vị, nướng than hoa.",
      "Bổ dọc ổ bánh mì, cho thịt, dưa leo và rau sống vào.",
      "Chan thêm nước sốt, thưởng thức nóng."
    ]
  }
];

// ====================
// Trang index.html
// ====================
const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");

if (grid && searchInput) {
  function renderRecipes(list) {
    grid.innerHTML = "";
    list.forEach(r => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-xl shadow hover:shadow-lg transition p-4";
      card.innerHTML = `
        <a href="recipe.html?slug=${r.slug}">
          <img src="${r.img}" alt="${r.title}" class="rounded-lg mb-3 w-full h-48 object-cover"/>
          <h4 class="font-semibold text-lg mb-2">${r.title}</h4>
          <p class="text-gray-600 text-sm">${r.desc}</p>
        </a>
      `;
      grid.appendChild(card);
    });
  }

  renderRecipes(recipes);

  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filtered = recipes.filter(r =>
      r.title.toLowerCase().includes(value)
    );
    renderRecipes(filtered);
  });
}

// ====================
// Trang recipe.html
// ====================
const detailContainer = document.getElementById("recipeDetail");
if (detailContainer) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const recipe = recipes.find(r => r.slug === slug);

  if (recipe) {
    detailContainer.innerHTML = `
      <h2 class="text-3xl font-bold mb-4">${recipe.title}</h2>
      <img src="${recipe.img}" alt="${recipe.title}" class="rounded-lg mb-6 w-full max-h-96 object-cover"/>
      <p class="mb-6 text-gray-700">${recipe.desc}</p>
      <h3 class="text-xl font-semibold mb-2">Nguyên liệu</h3>
      <ul class="list-disc ml-6 mb-6">
        ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
      </ul>
      <h3 class="text-xl font-semibold mb-2">Cách làm</h3>
      <ol class="list-decimal ml-6 space-y-2">
        ${recipe.steps.map(s => `<li>${s}</li>`).join("")}
      </ol>
    `;

    // JSON-LD Recipe Schema
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": recipe.title,
      "image": [recipe.img],
      "author": { "@type": "Person", "name": "Bếp Ẩm Thực" },
      "description": recipe.desc,
      "recipeIngredient": recipe.ingredients,
      "recipeInstructions": recipe.steps.map(step => ({
        "@type": "HowToStep", "text": step
      }))
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // Rating
    const ratingContainer = document.getElementById("ratingContainer");
    if (ratingContainer) {
      const savedRating = localStorage.getItem(`rating-${slug}`) || 0;
      function renderStars(current) {
        ratingContainer.innerHTML = `<span class="mr-2 text-gray-700">Đánh giá:</span>`;
        for (let i = 1; i <= 5; i++) {
          const star = document.createElement("span");
          star.innerHTML = i <= current ? "⭐" : "☆";
          star.className = "cursor-pointer text-xl";
          star.onclick = () => {
            localStorage.setItem(`rating-${slug}`, i);
            renderStars(i);
          };
          ratingContainer.appendChild(star);
        }
      }
      renderStars(savedRating);
    }
  } else {
    detailContainer.innerHTML = `<p class="text-red-500">Không tìm thấy công thức.</p>`;
  }
}
