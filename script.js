
// ============================================
// 🌶️ BẾP VIỆT NGON - SCRIPT.JS (Full Version)
// ============================================

// 1️⃣ DỮ LIỆU CÁC MÓN ĂN
const recipes = [
  {
    id: "pho-bo",
    name: "Phở Bò Hà Nội",
    img: "/images/pho-bo.webp",
    desc: "Món ăn truyền thống Việt Nam với hương vị đậm đà, nước dùng thơm ngon.",
    time: "45 phút",
    difficulty: "Trung bình",
    servings: 2,
    ingredients: [
      "500g bánh phở",
      "300g thịt bò thăn",
      "1 củ hành tây",
      "Gừng, quế, hoa hồi",
      "Nước dùng xương bò",
      "Hành lá, rau thơm, chanh, ớt"
    ],
    steps: [
      "Hầm xương bò với gừng, hành, quế, hoa hồi trong 2 tiếng.",
      "Trụng bánh phở qua nước sôi, cho ra tô.",
      "Thái lát mỏng thịt bò thăn, xếp lên trên.",
      "Chan nước dùng nóng, thêm hành lá, rau thơm, chanh và ớt."
    ],
  },
  {
    id: "banh-mi",
    name: "Bánh Mì Thịt Nướng",
    img: "/images/banh-mi.webp",
    desc: "Ổ bánh mì giòn rụm với thịt nướng thơm lừng, rau dưa chua cay hấp dẫn.",
    time: "25 phút",
    difficulty: "Dễ",
    servings: 1,
    ingredients: [
      "1 ổ bánh mì",
      "150g thịt heo nướng",
      "Rau dưa chua, dưa leo, pate",
      "Nước tương, tương ớt, hành ngò"
    ],
    steps: [
      "Nướng thịt heo cho vàng đều.",
      "Bổ đôi bánh mì, phết pate và tương ớt.",
      "Xếp thịt, rau dưa chua, hành ngò vào bánh mì.",
      "Thưởng thức khi còn nóng giòn."
    ],
  },
  {
    id: "com-tam",
    name: "Cơm Tấm Sườn Bì Chả",
    img: "/images/com-tam.webp",
    desc: "Món ăn đặc sản Sài Gòn, đậm đà hương vị với sườn nướng và bì chả thơm ngon.",
    time: "40 phút",
    difficulty: "Trung bình",
    servings: 1,
    ingredients: [
      "1 chén cơm tấm",
      "1 miếng sườn nướng",
      "1 miếng chả trứng hấp",
      "Bì heo, nước mắm chua ngọt",
      "Dưa leo, cà chua, trứng ốp la"
    ],
    steps: [
      "Ướp sườn với hành, tỏi, nước mắm, đường và nướng vàng.",
      "Hấp chả trứng, luộc trứng ốp la.",
      "Dọn cơm ra đĩa, xếp sườn, bì, chả, trứng và rau kèm theo.",
      "Chan nước mắm chua ngọt và thưởng thức."
    ],
  },
  {
    id: "goi-cuon",
    name: "Gỏi Cuốn Tôm Thịt",
    img: "/images/goi-cuon.webp",
    desc: "Món ăn thanh mát, ít dầu mỡ, phù hợp cho bữa nhẹ hoặc ăn kiêng.",
    time: "20 phút",
    difficulty: "Dễ",
    servings: 2,
    ingredients: [
      "Bánh tráng",
      "Tôm luộc, thịt heo luộc",
      "Bún tươi, rau sống, hẹ",
      "Nước chấm: tương hột, đậu phộng, ớt"
    ],
    steps: [
      "Chuẩn bị nguyên liệu, cắt tôm và thịt lát mỏng.",
      "Nhúng bánh tráng qua nước cho mềm.",
      "Xếp rau, bún, tôm, thịt và cuộn chặt tay.",
      "Chấm với nước tương đậu phộng."
    ],
  },
  {
    id: "bun-bo",
    name: "Bún Bò Huế",
    img: "/images/bun-bo.webp",
    desc: "Đậm đà hương vị miền Trung với sả, mắm ruốc và nước dùng cay nồng.",
    time: "60 phút",
    difficulty: "Khó",
    servings: 4,
    ingredients: [
      "500g bún tươi",
      "500g thịt bò và giò heo",
      "Sả, mắm ruốc, ớt, hành tây",
      "Hành lá, rau sống"
    ],
    steps: [
      "Hầm giò heo, nấu nước dùng với sả, mắm ruốc.",
      "Trụng bún, xếp vào tô.",
      "Thêm thịt bò, chan nước dùng nóng.",
      "Ăn kèm rau sống, chanh, ớt."
    ],
  },
];

// 2️⃣ HÀM HỖ TRỢ
const appRoot = document.getElementById("app");

function fadeTransition(callback) {
  appRoot.classList.add("fade-out");
  setTimeout(() => {
    callback();
    appRoot.classList.remove("fade-out");
    appRoot.classList.add("fade-in");
    setTimeout(() => appRoot.classList.remove("fade-in"), 400);
  }, 400);
}
.fade-out { opacity: 0; transition: opacity 0.4s ease; }
.fade-in { opacity: 1; transition: opacity 0.4s ease; }

.toast {
  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
  background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px;
  border-radius: 10px; opacity: 0; transition: opacity .3s ease;
}
.toast.show { opacity: 1; }

.btn { background: #f87171; color: white; padding: 8px 16px; border-radius: 8px; cursor: pointer; }
.btn:hover { background: #ef4444; }

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => toast.remove(), 3000);
}

// 3️⃣ HIỂN THỊ DANH SÁCH MÓN
function renderRecipeList() {
  fadeTransition(() => {
    appRoot.innerHTML = `
      <div class="recipe-list grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        ${recipes
          .map(
            (r) => `
          <div class="recipe-card cursor-pointer" data-id="${r.id}">
            <img src="${r.img}" alt="${r.name}" title="${r.name}" loading="lazy" />
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">${r.name}</h3>
              <p class="text-gray-600 text-sm">${r.desc}</p>
            </div>
          </div>`
          )
          .join("")}
      </div>
    `;

    document.querySelectorAll(".recipe-card").forEach((card) =>
      card.addEventListener("click", () => {
        location.hash = card.dataset.id;
      })
    );
  });
}

// 4️⃣ HIỂN THỊ CHI TIẾT MÓN
function renderRecipeDetail(id) {
  const r = recipes.find((item) => item.id === id);
  if (!r) return renderRecipeList();

  fadeTransition(() => {
    appRoot.innerHTML = `
      <div class="recipe-detail space-y-6">
        <img src="${r.img}" alt="${r.name}" class="w-full h-64 object-cover rounded-2xl" />
        <h2 class="text-3xl font-bold">${r.name}</h2>
        <p class="text-gray-600">${r.desc}</p>
        <ul class="text-sm text-gray-500">
          <li>⏱️ Thời gian: ${r.time}</li>
          <li>🍳 Độ khó: ${r.difficulty}</li>
          <li>👥 Khẩu phần: ${r.servings}</li>
        </ul>
        <div>
          <h3 class="font-semibold text-xl mb-2">Nguyên liệu</h3>
          <ul class="list-disc pl-6">${r.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div>
        <div>
          <h3 class="font-semibold text-xl mb-2">Cách làm</h3>
          <ol class="list-decimal pl-6 space-y-1">${r.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
        </div>
        <div class="flex flex-wrap gap-3 mt-4">
          <button class="btn back">⬅ Quay lại</button>
          <button class="btn save">💾 Lưu món</button>
          <button class="btn print">🖨 In</button>
          <button class="btn share">🔗 Chia sẻ</button>
        </div>
      </div>
    `;

    document.querySelector(".btn.back").onclick = () => {
      history.pushState("", document.title, window.location.pathname);
      renderRecipeList();
    };

    document.querySelector(".btn.save").onclick = () => {
      saveRecipe(r.id);
      showToast("✅ Đã lưu công thức vào sổ tay!");
    };

    document.querySelector(".btn.print").onclick = () => window.print();

    document.querySelector(".btn.share").onclick = async () => {
      const url = window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        showToast("🔗 Đã sao chép liên kết công thức!");
      } catch {
        showToast("❌ Không thể sao chép liên kết!");
      }
    };
  });
}

// 5️⃣ LOCALSTORAGE: LƯU CÔNG THỨC
function saveRecipe(id) {
  let saved = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
  if (!saved.includes(id)) saved.push(id);
  localStorage.setItem("savedRecipes", JSON.stringify(saved));
}

// 6️⃣ FORM NEWSLETTER GIẢ LẬP
function initNewsletter() {
<form id="newsletter-form" class="mt-8 flex gap-2 justify-center">
  <input type="email" placeholder="Nhập email..." class="border rounded px-3 py-2" />
  <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded">Đăng ký</button>
</form>

  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (email.trim() === "") return showToast("⚠️ Vui lòng nhập email!");
    showToast("📩 Đã đăng ký nhận công thức mới!");
    form.reset();
  });
}

// 7️⃣ ĐIỀU HƯỚNG THEO HASH
function handleHash() {
  const id = location.hash.replace("#", "");
  if (id) renderRecipeDetail(id);
  else renderRecipeList();
}

// 8️⃣ KHỞI TẠO APP
window.addEventListener("DOMContentLoaded", () => {
  initNewsletter();
  handleHash();
  window.addEventListener("hashchange", handleHash);
});

// 💅 CSS hiệu ứng fade (chèn thêm trong style.css)
/*
.fade-out { opacity: 0; transition: opacity 0.4s ease; }
.fade-in { opacity: 1; transition: opacity 0.4s ease; }
.toast {
  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
  background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px;
  border-radius: 10px; opacity: 0; transition: opacity .3s ease;
}
.toast.show { opacity: 1; }
.btn { background: #f87171; color: white; padding: 8px 16px; border-radius: 8px; cursor: pointer; }
.btn:hover { background: #ef4444; }
*/
//rating//
const rating = document.getElementById("ratingContainer");
if (rating) {
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = "⭐";
    star.classList.add("cursor-pointer");
    star.onclick = () => showToast(`Bạn đánh giá ${i} sao!`);
    rating.appendChild(star);
  }
}




