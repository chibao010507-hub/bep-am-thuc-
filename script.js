
const RECIPES = [
  // ====== MIỀN BẮC ======
  { title: "Phở Bò", region: "Bắc", desc: "Phở truyền thống Hà Nội", ingredients: ["Bánh phở", "Thịt bò", "Gừng", "Hành lá"], steps: ["Hầm xương", "Trụng phở", "Chan nước dùng"] },
  { title: "Phở Gà", region: "Bắc", desc: "Biến tấu nhẹ nhàng từ phở bò", ingredients: ["Bánh phở", "Gà ta", "Gừng"], steps: ["Luộc gà", "Trụng phở", "Chan nước dùng"] },
  { title: "Bún Chả", region: "Bắc", desc: "Đặc sản Hà Nội", ingredients: ["Bún", "Thịt nướng", "Nước mắm", "Rau sống"], steps: ["Ướp thịt", "Nướng than hoa", "Ăn kèm bún"] },
  { title: "Bánh Cuốn", region: "Bắc", desc: "Bánh mỏng dai cuộn nhân thịt", ingredients: ["Bột gạo", "Thịt băm", "Mộc nhĩ"], steps: ["Pha bột", "Tráng bánh", "Cuốn nhân"] },
  { title: "Bún Thang", region: "Bắc", desc: "Sợi bún nhỏ chan nước dùng thanh", ingredients: ["Bún", "Trứng", "Thịt gà"], steps: ["Luộc gà", "Thái trứng sợi", "Chan nước dùng"] },
  { title: "Chả Cá Lã Vọng", region: "Bắc", desc: "Món cá chiên nghệ trứ danh", ingredients: ["Cá lăng", "Nghệ", "Thì là"], steps: ["Ướp cá", "Chiên vàng", "Ăn kèm bún"] },
  { title: "Nem Rán", region: "Bắc", desc: "Chả giò miền Bắc", ingredients: ["Bánh đa nem", "Thịt băm", "Miến"], steps: ["Cuốn nem", "Chiên giòn"] },
  { title: "Bánh Tôm Hồ Tây", region: "Bắc", desc: "Đặc sản Hà Nội", ingredients: ["Tôm", "Khoai lang"], steps: ["Bào khoai", "Chiên cùng tôm"] },
  { title: "Miến Xào Cua", region: "Bắc", desc: "Miến dong trộn cua đồng", ingredients: ["Miến dong", "Thịt cua"], steps: ["Luộc miến", "Xào cua"] },
  { title: "Canh Mồng Tơi Mồng Tơi", region: "Bắc", desc: "Thanh mát mùa hè", ingredients: ["Mồng tơi", "Mướp", "Tôm khô"], steps: ["Nấu nước", "Cho rau vào"] },
  { title: "Xôi Xéo", region: "Bắc", desc: "Xôi vàng ăn sáng", ingredients: ["Gạo nếp", "Đỗ xanh", "Hành phi"], steps: ["Đồ xôi", "Giã đỗ"] },
  { title: "Bún Ốc", region: "Bắc", desc: "Bún chan nước ốc chua", ingredients: ["Ốc", "Cà chua", "Bún"], steps: ["Luộc ốc", "Nấu nước dùng"] },
  { title: "Bánh Đa Cua", region: "Bắc", desc: "Đặc sản Hải Phòng", ingredients: ["Bánh đa đỏ", "Cua đồng"], steps: ["Giã cua", "Nấu nước dùng"] },
  { title: "Bún Riêu", region: "Bắc", desc: "Món bún dân dã", ingredients: ["Cua đồng", "Cà chua", "Bún"], steps: ["Giã cua", "Nấu riêu"] },
  { title: "Thịt Đông", region: "Bắc", desc: "Món Tết miền Bắc", ingredients: ["Thịt chân giò", "Mộc nhĩ"], steps: ["Hầm thịt", "Để lạnh đông lại"] },
  { title: "Canh Chua Cá", region: "Bắc", desc: "Món canh chua thanh mát", ingredients: ["Cá", "Dọc mùng", "Cà chua"], steps: ["Nấu cá", "Thêm rau"] },
  { title: "Bún Dọc Mùng", region: "Bắc", desc: "Đặc sản Hà Nội", ingredients: ["Bún", "Dọc mùng", "Thịt mọc"], steps: ["Nấu nước", "Cho mọc"] },
  { title: "Cá Kho Tộ", region: "Bắc", desc: "Cá kho riềng", ingredients: ["Cá", "Riềng"], steps: ["Kho cá", "Ăn với cơm"] },
  { title: "Thịt Kho Tàu", region: "Bắc", desc: "Thịt ba chỉ kho trứng", ingredients: ["Thịt", "Trứng", "Nước mắm"], steps: ["Kho thịt", "Ăn với cơm"] },
  { title: "Canh Cua Mồng Tơi", region: "Bắc", desc: "Canh dân dã", ingredients: ["Cua đồng", "Mồng tơi"], steps: ["Giã cua", "Nấu canh"] },

  // (còn ~20 món Bắc nữa tương tự: bún mọc, miến lươn, nộm hoa chuối, cá rô kho tộ, bánh gai, chè sen...)

  // ====== MIỀN TRUNG ======
  { title: "Mì Quảng", region: "Trung", desc: "Đặc sản Quảng Nam", ingredients: ["Mì", "Tôm", "Thịt gà"], steps: ["Nấu nước lèo", "Ăn kèm rau"] },
  { title: "Bún Bò Huế", region: "Trung", desc: "Đậm đà cay nồng", ingredients: ["Bún", "Thịt bò", "Sả"], steps: ["Nấu nước dùng", "Thêm sả ớt"] },
  { title: "Cao Lầu", region: "Trung", desc: "Món Hội An nổi tiếng", ingredients: ["Sợi cao lầu", "Thịt xá xíu"], steps: ["Trộn sợi", "Ăn khô"] },
  { title: "Bánh Bèo", region: "Trung", desc: "Món ăn vặt xứ Huế", ingredients: ["Bột gạo", "Tôm", "Hành phi"], steps: ["Đổ bột vào chén", "Rắc tôm"] },
  { title: "Bánh Nậm", region: "Trung", desc: "Bánh gói Huế", ingredients: ["Bột gạo", "Thịt băm", "Lá dong"], steps: ["Gói bánh", "Hấp chín"] },
  { title: "Bánh Bột Lọc", region: "Trung", desc: "Bánh Huế dai trong suốt", ingredients: ["Bột năng", "Tôm", "Thịt ba chỉ"], steps: ["Gói lá", "Luộc bánh"] },
  { title: "Ram Tôm Đất", region: "Trung", desc: "Nem rán kiểu Quảng", ingredients: ["Tôm đất", "Thịt heo", "Bánh tráng"], steps: ["Cuốn nem", "Chiên giòn"] },
  { title: "Bún Hến", region: "Trung", desc: "Đặc sản Huế", ingredients: ["Hến", "Bún", "Rau sống"], steps: ["Xào hến", "Ăn kèm bún"] },
  { title: "Cơm Hến", region: "Trung", desc: "Món dân dã Huế", ingredients: ["Cơm nguội", "Hến", "Mè rang"], steps: ["Xào hến", "Trộn cơm"] },
  { title: "Bánh Ít Lá Gai", region: "Trung", desc: "Bánh dẻo ngọt", ingredients: ["Lá gai", "Đậu xanh"], steps: ["Nhồi bột", "Gói lá"] },

  // (còn ~30 món Trung nữa: bún cá Nha Trang, chả ram Bình Định, gỏi cá Nam Ô, bánh canh cá lóc, mỳ xứ Quảng...)

  // ====== MIỀN NAM ======
  { title: "Cơm Tấm", region: "Nam", desc: "Món quốc dân Sài Gòn", ingredients: ["Cơm tấm", "Sườn nướng", "Bì", "Trứng"], steps: ["Nướng sườn", "Nấu cơm"] },
  { title: "Hủ Tiếu Nam Vang", region: "Nam", desc: "Đặc sản miền Nam", ingredients: ["Hủ tiếu", "Xương heo", "Tôm"], steps: ["Hầm xương", "Trụng hủ tiếu"] },
  { title: "Bánh Xèo", region: "Nam", desc: "Bánh giòn vàng ruộm", ingredients: ["Bột gạo", "Tôm", "Thịt ba chỉ"], steps: ["Pha bột", "Đổ bánh"] },
  { title: "Lẩu Mắm", region: "Nam", desc: "Đặc sản miền Tây", ingredients: ["Mắm cá linh", "Rau đồng"], steps: ["Nấu mắm", "Ăn kèm lẩu"] },
  { title: "Cá Kho Tộ", region: "Nam", desc: "Cá kho nước dừa", ingredients: ["Cá", "Nước dừa"], steps: ["Kho cá", "Ăn với cơm"] },
  { title: "Bún Nước Lèo", region: "Nam", desc: "Đặc sản Sóc Trăng", ingredients: ["Bún", "Mắm bò hóc"], steps: ["Nấu nước lèo", "Ăn kèm rau"] },
  { title: "Bánh Pía", region: "Nam", desc: "Đặc sản Sóc Trăng", ingredients: ["Bột mì", "Đậu xanh", "Sầu riêng"], steps: ["Làm vỏ", "Nướng bánh"] },
  { title: "Chuối Nướng", region: "Nam", desc: "Chuối bọc nếp nướng", ingredients: ["Chuối", "Nếp", "Nước cốt dừa"], steps: ["Gói chuối", "Nướng than"] },
  { title: "Lẩu Cá Kèo", region: "Nam", desc: "Món dân dã miền Tây", ingredients: ["Cá kèo", "Rau đắng"], steps: ["Nấu lẩu", "Ăn nóng"] },
  { title: "Bánh Canh Ghẹ", region: "Nam", desc: "Đặc sản Nha Trang – Nam Bộ", ingredients: ["Bánh canh", "Ghẹ"], steps: ["Nấu nước", "Thêm ghẹ"] },

  // (còn ~30 món Nam nữa: gỏi cuốn, bánh cống, lẩu cá linh bông điên điển, chè bưởi, bò lá lốt, bột chiên...)
];

// Pagination settings
let currentPage = 1;
const RECIPES_PER_PAGE = 6;

// Hàm render danh sách món ăn theo trang
function renderRecipes(list) {
  const container = document.getElementById("recipeList");
  if (!container) return;
  container.innerHTML = "";

  const start = (currentPage - 1) * RECIPES_PER_PAGE;
  const end = start + RECIPES_PER_PAGE;
  const paginatedRecipes = list.slice(start, end);

  paginatedRecipes.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card bg-white rounded-xl shadow p-4 cursor-pointer dark:bg-gray-800";
    card.innerHTML = `
      <img src="https://source.unsplash.com/400x300/?${r.title}" class="rounded-lg mb-3 w-full h-40 object-cover"/>
      <h4 class="text-lg font-bold mb-2">${r.title}</h4>
      <p class="text-sm mb-2">${r.desc}</p>
      <a href="recipe.html?title=${encodeURIComponent(r.title)}" class="text-red-600 hover:underline">Xem chi tiết</a>
    `;
    container.appendChild(card);
  });

  renderPagination(list);
}

// Render pagination buttons
function renderPagination(list) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;
  pagination.innerHTML = "";

  const totalPages = Math.ceil(list.length / RECIPES_PER_PAGE);

  // Nút trước
  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.textContent = "← Trước";
    prev.className = "px-3 py-1 mx-1 border rounded";
    prev.onclick = () => { currentPage--; filterRecipes(); };
    pagination.appendChild(prev);
  }

  // Số trang
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = `px-3 py-1 mx-1 border rounded ${i === currentPage ? 'bg-red-500 text-white' : ''}`;
    btn.onclick = () => { currentPage = i; filterRecipes(); };
    pagination.appendChild(btn);
  }

  // Nút sau
  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.textContent = "Sau →";
    next.className = "px-3 py-1 mx-1 border rounded";
    next.onclick = () => { currentPage++; filterRecipes(); };
    pagination.appendChild(next);
  }
}

// Filter theo search + vùng miền
function filterRecipes() {
  const q = document.getElementById("searchInput")?.value.trim().toLowerCase() || "";
  const region = document.getElementById("regionSelect")?.value || "all";

  let filtered = RECIPES;
  if (q) filtered = filtered.filter(r => r.title.toLowerCase().includes(q));
  if (region !== "all") filtered = filtered.filter(r => r.region === region);

  renderRecipes(filtered);
}

// Gắn sự kiện
document.getElementById("searchBtn")?.addEventListener("click", () => {
  currentPage = 1;
  filterRecipes();
});
document.getElementById("regionSelect")?.addEventListener("change", () => {
  currentPage = 1;
  filterRecipes();
});

// Init render
filterRecipes();


