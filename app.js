/**
 * Solar — 二十四节气数字画卷 — 核心交互逻辑
 * 纯前端零依赖 | ~500行
 */

/* ================================================================
   1. Canvas 粒子水墨背景系统
   ================================================================ */
(function () {
  const canvas = document.getElementById("ink-canvas");
  const ctx = canvas.getContext("2d");
  let W, H;
  let particles = [];
  let mouseX = -9999, mouseY = -9999;
  let mouseInfluenceX = 0, mouseInfluenceY = 0;
  const PARTICLE_COUNT = 120;
  const seasonColors = {
    spring: ["rgba(107,142,90,", "rgba(139,172,120,"],
    summer: ["rgba(192,80,58,", "rgba(210,110,80,"],
    autumn: ["rgba(196,149,58,", "rgba(210,170,80,"],
    winter: ["rgba(90,122,142,", "rgba(110,145,165,"]
  };

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class InkParticle {
    constructor() {
      this.reset(true);
    }
    reset(initial) {
      this.x = initial ? Math.random() * W : Math.random() * W;
      this.y = initial ? Math.random() * H : Math.random() * H;
      this.r = Math.random() * 2.5 + 0.5;
      this.maxR = this.r * (Math.random() * 12 + 4);
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
      this.vx = (Math.random() - 0.5) * 0.15;
      this.vy = (Math.random() - 0.5) * 0.15;
      this.growing = true;
    }
    update(season) {
      this.life++;
      // 生命周期：扩散 → 淡出 → 重生
      if (this.growing) {
        this.r += 0.02;
        if (this.r >= this.maxR || this.life > this.maxLife * 0.6) {
          this.growing = false;
        }
      } else {
        this.r -= 0.015;
        if (this.r <= 0.3) {
          this.reset(false);
          return;
        }
      }

      // 鼠标微弱影响
      const dx = this.x - mouseInfluenceX;
      const dy = this.y - mouseInfluenceY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        const force = (200 - dist) / 200 * 0.25;
        this.vx += (dx / dist) * force * 0.05;
        this.vy += (dy / dist) * force * 0.05;
      }

      // 阻尼
      this.vx *= 0.998;
      this.vy *= 0.998;

      this.x += this.vx;
      this.y += this.vy;

      // 边界反弹
      if (this.x < -20) this.x = W + 20;
      if (this.x > W + 20) this.x = -20;
      if (this.y < -20) this.y = H + 20;
      if (this.y > H + 20) this.y = -20;
    }
    draw(ctx, season) {
      const alpha = this.growing
        ? Math.min(0.15, this.life / this.maxLife * 0.15)
        : Math.max(0, (1 - (this.life / this.maxLife)) * 0.15);
      const colors = seasonColors[season] || seasonColors.spring;
      const colorIdx = Math.random() > 0.6 ? 1 : 0;
      ctx.fillStyle = colors[colorIdx] + alpha.toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new InkParticle());
    }
  }

  let currentSeason = "spring";
  let animFrame;
  let lastTime = 0;
  const TARGET_FPS = 30;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;

  function animate(timestamp) {
    animFrame = requestAnimationFrame(animate);
    if (timestamp - lastTime < FRAME_INTERVAL) return;
    lastTime = timestamp;

    // 平滑鼠标影响
    mouseInfluenceX += (mouseX - mouseInfluenceX) * 0.05;
    mouseInfluenceY += (mouseY - mouseInfluenceY) * 0.05;

    ctx.clearRect(0, 0, W, H);

    // 淡底色调
    ctx.fillStyle = "rgba(250,246,240,0.35)";
    ctx.fillRect(0, 0, W, H);

    for (const p of particles) {
      p.update(currentSeason);
      p.draw(ctx, currentSeason);
    }
  }

  resizeCanvas();
  initParticles();
  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
  });

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener("mouseleave", () => {
    mouseX = -9999;
    mouseY = -9999;
  });

  // 暴露接口供外部更新季节
  window._canvasSetSeason = function (s) {
    currentSeason = s;
  };
})();

/* ================================================================
   2. 节气识别：根据当前日期判断所属节气
   ================================================================ */
function getCurrentTermIndex() {
  const now = new Date();
  const y = now.getFullYear();
  // 大约日期映射（取节气中点），由 solarLongitude 排序
  // 使用黄经映射，通过日期估算
  const month = now.getMonth(); // 0-based
  const day = now.getDate();
  const md = month * 100 + day;

  // 精确节气日期（约值，以 2026 年为基准）
  const termDates = [
    { i: 23, m: 105 },  // 小寒 1月5日
    { i: 24, m: 120 },  // 大寒 1月20日
    { i: 0,  m: 203 },  // 立春 2月3日
    { i: 1,  m: 218 },  // 雨水 2月18日
    { i: 2,  m: 305 },  // 惊蛰 3月5日
    { i: 3,  m: 320 },  // 春分 3月20日
    { i: 4,  m: 404 },  // 清明 4月4日
    { i: 5,  m: 419 },  // 谷雨 4月19日
    { i: 6,  m: 505 },  // 立夏 5月5日
    { i: 7,  m: 520 },  // 小满 5月20日
    { i: 8,  m: 605 },  // 芒种 6月5日
    { i: 9,  m: 621 },  // 夏至 6月21日
    { i: 10, m: 706 },  // 小暑 7月6日
    { i: 11, m: 722 },  // 大暑 7月22日
    { i: 12, m: 807 },  // 立秋 8月7日
    { i: 13, m: 822 },  // 处暑 8月22日
    { i: 14, m: 907 },  // 白露 9月7日
    { i: 15, m: 922 },  // 秋分 9月22日
    { i: 16, m: 1008 }, // 寒露 10月8日
    { i: 17, m: 1023 }, // 霜降 10月23日
    { i: 18, m: 1107 }, // 立冬 11月7日
    { i: 19, m: 1122 }, // 小雪 11月22日
    { i: 20, m: 1206 }, // 大雪 12月6日
    { i: 21, m: 1221 }, // 冬至 12月21日
    { i: 22, m: 1222 }, // 冬至附近兜底
  ];

  // 从小到大排序
  termDates.sort((a, b) => a.m - b.m);

  for (let i = termDates.length - 1; i >= 0; i--) {
    if (md >= termDates[i].m) return termDates[i].i % 24;
  }
  // 1月1日–1月4日 → 小寒前，属冬至
  return 21;
}

/* ================================================================
   3. SVG 圆轮动态渲染
   ================================================================ */
const wheelGroup = document.getElementById("wheel-nodes-group");
const wheelSvg = document.getElementById("solar-wheel");
let currentTermIndex = getCurrentTermIndex();
let activeFilter = "all";
let currentNodeIndex = currentTermIndex;

const seasonShort = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬"
};

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}

function renderWheel() {
  if (!wheelGroup) return;
  wheelGroup.innerHTML = "";
  const cx = 200, cy = 200, r = 148;

  solarTerms.forEach((term, i) => {
    const angle = i * (360 / 24);
    const pos = polarToCartesian(cx, cy, r, angle);
    const isActive = i === currentNodeIndex;
    // 筛选
    const visible = (activeFilter === "all" || activeFilter === term.season);
    const opacity = visible ? 1 : 0.2;
    const seasonColor = getComputedStyle(document.documentElement)
      .getPropertyValue(`--${term.season}`).trim() || "#8c8c8c";

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "wheel-node" + (isActive ? " active" : ""));
    g.setAttribute("data-index", i);
    g.setAttribute("data-season", term.season);
    g.style.opacity = opacity;
    g.style.pointerEvents = visible ? "auto" : "none";

    // 主圆点
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pos.x);
    circle.setAttribute("cy", pos.y);
    circle.setAttribute("r", isActive ? 12 : 4.5);
    circle.setAttribute("fill", isActive ? "#fff" : seasonColor);
    circle.setAttribute("stroke", isActive ? seasonColor : "none");
    circle.setAttribute("stroke-width", isActive ? "2" : "0");
    g.appendChild(circle);

    // 当前节点脉冲光环
    if (isActive) {
      const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      pulse.setAttribute("class", "pulse-ring");
      pulse.setAttribute("cx", pos.x);
      pulse.setAttribute("cy", pos.y);
      pulse.setAttribute("r", "14");
      pulse.setAttribute("fill", "none");
      pulse.setAttribute("stroke", seasonColor);
      pulse.setAttribute("stroke-width", "1.5");
      pulse.setAttribute("opacity", "0.6");
      g.appendChild(pulse);
    }

    // 标签
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const labelPos = polarToCartesian(cx, cy, r + 18, angle);
    text.setAttribute("x", labelPos.x);
    text.setAttribute("y", labelPos.y);
    text.setAttribute("fill", isActive ? seasonColor : "var(--ink-light)");
    text.textContent = term.name;
    g.appendChild(text);

    // 点击事件
    g.addEventListener("click", () => openDetail(i));

    wheelGroup.appendChild(g);
  });
}

/* ================================================================
   4. 弹窗系统
   ================================================================ */
const detailModal = document.getElementById("detail-modal");
const detailCard = document.getElementById("detail-card");
const cardContent = document.getElementById("card-content");
const cardClose = document.getElementById("card-close");
let modalTermIndex = -1;

function openDetail(index) {
  modalTermIndex = index;
  const term = solarTerms[index];
  if (!term) return;

  const seasonColors = {
    spring: { bg: "rgba(107,142,90,0.12)", color: "#6b8e5a", label: "春" },
    summer: { bg: "rgba(192,80,58,0.12)", color: "#c0503a", label: "夏" },
    autumn: { bg: "rgba(196,149,58,0.12)", color: "#c4953a", label: "秋" },
    winter: { bg: "rgba(90,122,142,0.12)", color: "#5a7a8e", label: "冬" }
  };
  const s = seasonColors[term.season];

  cardContent.innerHTML = `
    <div class="card-header">
      <div class="card-term-name">${term.name}</div>
      <div class="card-term-en">${term.nameEn}</div>
      <div class="card-term-pinyin">${term.pinyin}</div>
      <span class="card-season-badge season-${term.season}">${s.label}季 · 黄经${term.solarLongitude}°</span>
    </div>
    <div class="card-section">
      <div class="card-section-title">三候</div>
      <ul class="card-hou-list">
        <li>${term.threeHou[0]}</li>
        <li>${term.threeHou[1]}</li>
        <li>${term.threeHou[2]}</li>
      </ul>
    </div>
    <div class="card-section">
      <div class="card-section-title">释义</div>
      <p style="font-size:0.9rem;line-height:1.9;">${term.meaning}</p>
    </div>
    <div class="card-section">
      <div class="card-section-title">诗词</div>
      <div class="card-poem">
        <div class="card-poem-title">《${term.poem.title}》— ${term.poem.author} · ${term.poem.dynasty}</div>
        <div class="card-poem-lines">${term.poem.lines.join("<br>")}</div>
      </div>
    </div>
    <div class="card-section">
      <div class="card-section-title">农谚</div>
      <p style="font-size:0.9rem;color:var(--gold);font-style:italic;">「${term.proverb}」</p>
    </div>
    <div class="card-section">
      <div class="card-section-title">时令美食</div>
      <div class="card-tags">
        ${term.foods.map(f => `<span class="card-tag">${f}</span>`).join("")}
      </div>
    </div>
    <div class="card-section">
      <div class="card-section-title">养生建议</div>
      <div class="card-tags">
        ${term.healthTips.map(h => `<span class="card-tag">${h}</span>`).join("")}
      </div>
    </div>
    <div class="card-nav">
      <button class="card-nav-btn" id="card-share">复制分享文案</button>
      <button class="card-nav-btn" id="card-prev">&larr; 上一个</button>
      <button class="card-nav-btn" id="card-next">下一个 &rarr;</button>
    </div>
  `;

  detailModal.classList.add("show");
  document.body.style.overflow = "hidden";

  // 导航按钮
  document.getElementById("card-prev").addEventListener("click", () => {
    openDetail((modalTermIndex - 1 + 24) % 24);
  });
  document.getElementById("card-next").addEventListener("click", () => {
    openDetail((modalTermIndex + 1) % 24);
  });

  // 分享按钮
  document.getElementById("card-share").addEventListener("click", () => {
    const t = solarTerms[modalTermIndex];
    const text = `【${t.name}】${t.dateRange} | 三候：${t.threeHou.join("、")} | 农谚：${t.proverb} — 来自 Solar 二十四节气数字画卷 https://mornrain.com/solar`;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("card-share");
      const orig = btn.textContent;
      btn.textContent = "已复制!";
      btn.style.color = "var(--gold)";
      setTimeout(() => { btn.textContent = orig; btn.style.color = ""; }, 1500);
    }).catch(() => alert("复制失败，请手动复制"));
  });
}

function closeDetail() {
  detailModal.classList.remove("show");
  document.body.style.overflow = "";
}

cardClose.addEventListener("click", closeDetail);

// 外部点击关闭
detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) closeDetail();
});

// 键盘控制
document.addEventListener("keydown", (e) => {
  if (!detailModal.classList.contains("show")) return;
  if (e.key === "Escape") closeDetail();
  if (e.key === "ArrowLeft") openDetail((modalTermIndex - 1 + 24) % 24);
  if (e.key === "ArrowRight") openDetail((modalTermIndex + 1) % 24);
});

/* ================================================================
   5. 四季筛选
   ================================================================ */
const filterBtns = document.querySelectorAll(".seal-btn[data-filter]");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderWheel();
  });
});

/* ================================================================
   6. 节气总览弹窗
   ================================================================ */
const overviewModal = document.getElementById("overview-modal");
const overviewGrid = document.getElementById("overview-grid");
const overviewClose = document.getElementById("overview-close");

function openOverview() {
  overviewGrid.innerHTML = solarTerms.map((term, i) =>
    `<div class="overview-item ${term.season}" data-index="${i}">
      ${term.name}<br><small style="color:var(--ink-light);">${term.dateRange}</small>
    </div>`
  ).join("");

  overviewModal.classList.add("show");
  document.body.style.overflow = "hidden";

  // 点击跳转详情
  overviewGrid.querySelectorAll(".overview-item").forEach(item => {
    item.addEventListener("click", () => {
      overviewModal.classList.remove("show");
      openDetail(parseInt(item.dataset.index));
    });
  });
}

overviewClose.addEventListener("click", () => {
  overviewModal.classList.remove("show");
  document.body.style.overflow = "";
});

overviewModal.addEventListener("click", (e) => {
  if (e.target === overviewModal) {
    overviewModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

document.getElementById("btn-overview").addEventListener("click", openOverview);

// 键盘关闭总览
document.addEventListener("keydown", (e) => {
  if (overviewModal.classList.contains("show") && e.key === "Escape") {
    overviewModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

/* ================================================================
   7. 导出系统：PNG卡片 + iCal日历
   ================================================================ */
const exportBtn = document.getElementById("btn-export");

// 导出选择浮层
function showExportMenu(x, y) {
  // 移除已有浮层
  const existing = document.querySelector(".export-menu");
  if (existing) existing.remove();

  const menu = document.createElement("div");
  menu.className = "export-menu";
  menu.style.cssText = `
    position:fixed;left:${x}px;top:${y}px;
    background:rgba(250,246,240,0.95);backdrop-filter:blur(12px);
    border:1px solid rgba(196,162,101,0.3);border-radius:4px;
    padding:0.4rem 0;z-index:200;box-shadow:var(--card-shadow);
    min-width:160px;
  `;
  menu.innerHTML = `
    <div class="export-menu-item" data-type="png">🎋 导出 PNG 卡片</div>
    <div class="export-menu-item" data-type="ics">📅 导出 iCal 日历</div>
  `;
  document.body.appendChild(menu);

  // 样式注入
  if (!document.getElementById("export-menu-style")) {
    const style = document.createElement("style");
    style.id = "export-menu-style";
    style.textContent = `
      .export-menu-item {
        padding:0.5rem 1rem;cursor:pointer;font-size:0.85rem;
        color:var(--ink);transition:background var(--transition-normal);
        white-space:nowrap;
      }
      .export-menu-item:hover {background:rgba(196,162,101,0.1);color:var(--gold);}
    `;
    document.head.appendChild(style);
  }

  menu.querySelector('[data-type="png"]').addEventListener("click", () => {
    menu.remove();
    exportPNG();
  });
  menu.querySelector('[data-type="ics"]').addEventListener("click", () => {
    menu.remove();
    exportICS();
  });

  // 点击外部关闭
  const closeMenu = (e) => {
    if (!menu.contains(e.target) && e.target !== exportBtn) {
      menu.remove();
      document.removeEventListener("click", closeMenu);
    }
  };
  setTimeout(() => document.addEventListener("click", closeMenu), 0);
}

exportBtn.addEventListener("click", (e) => {
  const rect = exportBtn.getBoundingClientRect();
  showExportMenu(rect.left, rect.bottom + 4);
});

// PNG 导出（含水印）
function exportPNG() {
  try {
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = 800;
    exportCanvas.height = 1000;
    const exCtx = exportCanvas.getContext("2d");

    // 背景
    exCtx.fillStyle = "#faf6f0";
    exCtx.fillRect(0, 0, 800, 1000);

    const term = solarTerms[currentTermIndex];
    const seasonColor = getComputedStyle(document.documentElement)
      .getPropertyValue(`--${term.season}`).trim();

    // 大字
    exCtx.font = "bold 180px 'Ma Shan Zheng', 'STKaiti', cursive";
    exCtx.fillStyle = "#2c2c2c";
    exCtx.textAlign = "center";
    exCtx.fillText(term.name, 400, 280);

    // 日期
    exCtx.font = "24px 'Noto Serif SC', serif";
    exCtx.fillStyle = "#8c8c8c";
    exCtx.fillText(term.dateRange + " · 黄经" + term.solarLongitude + "°", 400, 330);

    // 圆形装饰环
    exCtx.strokeStyle = "#c4a265";
    exCtx.lineWidth = 1;
    exCtx.beginPath();
    exCtx.arc(400, 490, 150, 0, Math.PI * 2);
    exCtx.stroke();
    exCtx.beginPath();
    exCtx.arc(400, 490, 120, 0, Math.PI * 2);
    exCtx.stroke();

    // 三候
    exCtx.font = "bold 28px 'Ma Shan Zheng', cursive";
    exCtx.fillStyle = "#c4a265";
    exCtx.fillText("三候", 400, 560);

    exCtx.font = "20px 'Noto Serif SC', serif";
    exCtx.fillStyle = "#2c2c2c";
    term.threeHou.forEach((h, idx) => {
      exCtx.fillText(h, 400, 610 + idx * 36);
    });

    // 诗词
    exCtx.font = "20px 'Noto Serif SC', serif";
    exCtx.fillStyle = "#2c2c2c";
    term.poem.lines.forEach((line, idx) => {
      exCtx.fillText(line, 400, 750 + idx * 36);
    });

    // 底部信息
    exCtx.font = "16px 'Noto Serif SC', serif";
    exCtx.fillStyle = "#8c8c8c";
    exCtx.fillText("Solar · 二十四节气数字画卷", 400, 930);
    exCtx.fillText(term.nameEn + " · " + term.pinyin, 400, 960);

    // 水印
    exCtx.font = "12px 'Noto Serif SC', serif";
    exCtx.fillStyle = "rgba(140,140,140,0.35)";
    exCtx.textAlign = "right";
    exCtx.fillText("@mornrain.com", 780, 985);

    // 下载
    const link = document.createElement("a");
    link.download = `solar_${term.name}_${new Date().toISOString().slice(0,10)}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    alert("PNG 导出失败: " + err.message);
  }
}

// iCal 日历导出
function exportICS() {
  try {
    // 2026年节气近似日期（月日）
    const termDates2026 = [
      { i: 23, m: 1, d: 5 },   // 小寒
      { i: 24, m: 1, d: 20 },  // 大寒
      { i: 0,  m: 2, d: 3 },   // 立春
      { i: 1,  m: 2, d: 18 },  // 雨水
      { i: 2,  m: 3, d: 5 },   // 惊蛰
      { i: 3,  m: 3, d: 20 },  // 春分
      { i: 4,  m: 4, d: 4 },   // 清明
      { i: 5,  m: 4, d: 19 },  // 谷雨
      { i: 6,  m: 5, d: 5 },   // 立夏
      { i: 7,  m: 5, d: 20 },  // 小满
      { i: 8,  m: 6, d: 5 },   // 芒种
      { i: 9,  m: 6, d: 21 },  // 夏至
      { i: 10, m: 7, d: 6 },   // 小暑
      { i: 11, m: 7, d: 22 },  // 大暑
      { i: 12, m: 8, d: 7 },   // 立秋
      { i: 13, m: 8, d: 22 },  // 处暑
      { i: 14, m: 9, d: 7 },   // 白露
      { i: 15, m: 9, d: 22 },  // 秋分
      { i: 16, m: 10, d: 8 },  // 寒露
      { i: 17, m: 10, d: 23 }, // 霜降
      { i: 18, m: 11, d: 7 },  // 立冬
      { i: 19, m: 11, d: 22 }, // 小雪
      { i: 20, m: 12, d: 6 },  // 大雪
      { i: 21, m: 12, d: 21 }, // 冬至
      { i: 22, m: 12, d: 22 }, // 重复兜底→用冬至
    ];

    // 去重，按日期排序
    const seen = new Set();
    const unique = [];
    for (const t of termDates2026) {
      const key = `${t.m}-${t.d}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(t);
      }
    }
    unique.sort((a, b) => a.m !== b.m ? a.m - b.m : a.d - b.d);

    const pad = (n) => String(n).padStart(2, "0");

    let ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Solar//二十四节气//ZH",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:二十四节气 (Solar Terms)",
      "X-WR-CALDESC:中国传统二十四节气 · Solar by mornrain",
      "X-WR-TIMEZONE:Asia/Shanghai"
    ];

    for (const t of unique) {
      const term = solarTerms[t.i];
      if (!term) continue;
      const dtStr = `2026${pad(t.m)}${pad(t.d)}`;
      ics.push("BEGIN:VEVENT");
      ics.push(`UID:solar-${term.nameEn.replace(/\s/g,"")}-2026@mornrain.com`);
      ics.push(`DTSTART;VALUE=DATE:${dtStr}`);
      ics.push(`DTEND;VALUE=DATE:${dtStr}`);
      ics.push(`SUMMARY:${term.name} ${term.nameEn}`);
      ics.push(`DESCRIPTION:${term.meaning}\\n三候：${term.threeHou.join("、")}\\n农谚：${term.proverb}\\n— Solar 二十四节气数字画卷`);
      ics.push(`CATEGORIES:节气,${term.season}`);
      ics.push("TRANSP:TRANSPARENT");
      ics.push("END:VEVENT");
    }

    ics.push("END:VCALENDAR");

    const blob = new Blob([ics.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.download = "solar_2026_24terms.ics";
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (err) {
    alert("iCal 导出失败: " + err.message);
  }
}

/* ================================================================
   8. 初始化
   ================================================================ */
function initApp() {
  currentNodeIndex = getCurrentTermIndex();
  const term = solarTerms[currentNodeIndex];

  // 更新 Hero
  document.getElementById("current-term-char").textContent = term.name;
  document.getElementById("term-date").textContent =
    term.dateRange + " · 黄经" + term.solarLongitude + "°";
  document.getElementById("term-phenology").textContent =
    term.threeHou[0] + " · " + term.threeHou[1] + " · " + term.threeHou[2];

  // 更新画布季节
  if (window._canvasSetSeason) {
    window._canvasSetSeason(term.season);
  }

  // 渲染圆轮
  renderWheel();
}

/* ================================================================
   9. 响应式：resize 重算
   ================================================================ */
let resizeDebounce;
window.addEventListener("resize", () => {
  clearTimeout(resizeDebounce);
  resizeDebounce = setTimeout(() => {
    // 圆轮 viewBox 不变，无需重算
    // Canvas 在动画模块中已处理 resize
  }, 200);
});

// 启动应用
if (typeof solarTerms !== "undefined") {
  initApp();
} else {
  window.addEventListener("DOMContentLoaded", initApp);
}
