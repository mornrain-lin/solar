---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: cf93d2ba4252e3fc820ac383cb09c649_0a07c1948baa11f18559525400f8a581
    ReservedCode1: HuchttCS7jLSmin51hISJVCjkLNCzU4RYrpeZMcng0yPfQgq5wLCNFTistPSTgHsfdjpFsdgjHngSPguyhlkNA0RKyF/6AZ+mqCdx6y9dldzph3ZsO77Y+xbeYHqIgozjT16wJpLAzw8ftJV1pw62/3+n7/XcEbdh+1QxhFCgDOge/LkCf5PhWU5lYE=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: cf93d2ba4252e3fc820ac383cb09c649_0a07c1948baa11f18559525400f8a581
    ReservedCode2: HuchttCS7jLSmin51hISJVCjkLNCzU4RYrpeZMcng0yPfQgq5wLCNFTistPSTgHsfdjpFsdgjHngSPguyhlkNA0RKyF/6AZ+mqCdx6y9dldzph3ZsO77Y+xbeYHqIgozjT16wJpLAzw8ftJV1pw62/3+n7/XcEbdh+1QxhFCgDOge/LkCf5PhWU5lYE=
---

# Solar — 二十四节气数字画卷

> *"A digital art piece that brings the ancient Chinese calendar to life through ink-wash aesthetics and modern web technology."*

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-js-yellow.svg)](app.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

Solar 是一个极简纯粹的二十四节气数字艺术项目。它将中国传统水墨美学融入交互式 Web 体验，以 Canvas 粒子水墨背景、SVG 节气圆轮和精美的节气详情卡片，呈现东方文化的诗意与韵律。

## ✨ Features

- 🎨 **水墨粒子背景** — 数百粒子模拟水墨晕染，颜色随季节变化，鼠标微弱交互，30fps 流畅运行
- ☀️ **节气圆轮** — 24 节点环形排列，四季着色，当前节气高亮脉冲，hover 放大
- 📜 **节气详情卡片** — 毛玻璃弹窗，三候、诗词、农谚、美食、养生一应俱全
- 🌸 **四季筛选** — 一键切换春/夏/秋/冬，节点平滑过渡
- 📷 **导出日历** — Canvas 绘制精美节气卡片并导出为 PNG
- 📱 **完美响应式** — 桌面 → 平板 → 手机三档适配
- 🚫 **零依赖** — 纯 HTML/CSS/JS，不引入任何框架或库（Google Fonts 除外）
- 🔍 **完整 SEO** — Open Graph、Twitter Card、语义化标签
- 🖋️ **东方美学** — Ma Shan Zheng 书法字体 + Noto Serif SC 衬线体，呼吸动画，留白呼吸感

## 📸 Screenshots

<!-- TODO: Add screenshots -->
![Solar Screenshot](screenshot.png)

## 🚀 Quick Start

直接打开 `index.html` 即可，无需构建、编译或安装任何依赖。

```bash
# 克隆仓库
git clone https://github.com/your-username/solar.git
cd solar

# 用任意 HTTP 服务器打开（可选）
# Python 3
python -m http.server 8080

# 或直接双击 index.html
```

## 🛠️ Tech Stack

| 技术 | 用途 |
|------|------|
| HTML5 Canvas | 水墨粒子背景动画 |
| SVG | 节气圆轮矢量图形 |
| CSS3 | 动画、毛玻璃、响应式布局 |
| Vanilla JavaScript | 全部交互逻辑 |
| Google Fonts | Ma Shan Zheng + Noto Serif SC |

## 📁 Project Structure

```
solar/
├── index.html      # 主页面，三层结构
├── style.css       # 东方水墨美学样式
├── app.js          # 核心交互逻辑（约 500 行）
├── data.js         # 二十四节气完整数据集
├── favicon.svg     # 极简节气图标
├── README.md       # 项目文档
└── LICENSE         # MIT 许可证
```

## 📖 Data Coverage

24 个节气，每个包含：
- 中英文名称、拼音、所属季节
- 黄经度数、日期范围
- 节气释义
- 三候（物候现象）
- 经典诗词（含标题、作者、朝代、全文）
- 农谚
- 时令美食
- 养生建议
- 气候特征

## 🙏 Acknowledgments

- 节气数据参考《月令七十二候集解》及相关典籍
- 书法字体 [Ma Shan Zheng](https://fonts.google.com/specimen/Ma+Shan+Zheng) by Google Fonts
- 衬线字体 [Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC) by Google Fonts
- 水墨美学灵感源自中国传统山水画

## ⭐ Star History

<!-- TODO: Add star history chart -->
[![Star History Chart](https://api.star-history.com/svg?repos=your-username/solar&type=Date)](https://star-history.com/#your-username/solar&Date)

## 📄 License

MIT © 2026 Solar Contributors
*（内容由AI生成，仅供参考）*
