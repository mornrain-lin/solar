---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: cf93d2ba4252e3fc820ac383cb09c649_e59e23b08b0911f1a093525400287e28
    ReservedCode1: e+MXhuvj08iCJGHbDFaRZ8P3/M0xrnx6dauwHV7YVYtDUn5UslWZrXrfTy9NYUr8hTxOd4neIOVKHjOdVe0EKmOHVhkd82ETvvlQQx8sv8vkNzWBXWEpsL6uqoeYXWDF/HTNkiQC6J7Rms0/vE8jpQ0zp0T6QndhUCNPTG2jvxprBj41ZVbJOv6L/JU=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: cf93d2ba4252e3fc820ac383cb09c649_e59e23b08b0911f1a093525400287e28
    ReservedCode2: e+MXhuvj08iCJGHbDFaRZ8P3/M0xrnx6dauwHV7YVYtDUn5UslWZrXrfTy9NYUr8hTxOd4neIOVKHjOdVe0EKmOHVhkd82ETvvlQQx8sv8vkNzWBXWEpsL6uqoeYXWDF/HTNkiQC6J7Rms0/vE8jpQ0zp0T6QndhUCNPTG2jvxprBj41ZVbJOv6L/JU=
---

# Solar · 二十四节气

<p align="center">
  <img src="assets/favicon.svg" alt="Solar Logo" width="120" />
</p>

<p align="center">
  <strong>精美交互式二十四节气文化体验 · 观天之道 执天之行</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="#"><img src="https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen" alt="GitHub Pages"></a>
  <img src="https://img.shields.io/badge/prs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>

---

## 关于二十四节气

二十四节气是中国古代订立的一种用来指导农事的补充历法，是中华民族劳动人民长期经验的积累成果和智慧的结晶。它将太阳周年运动轨迹划分为 24 等份，每一等份为一个"节气"，始于立春，终于大寒，周而复始。

2016 年 11 月 30 日，二十四节气被正式列入联合国教科文组织人类非物质文化遗产代表作名录。

本项目旨在以现代 Web 技术传承和展示这一古老而精妙的中华文化遗产。

## 功能特性

- **交互式节气圆轮** — 24 个节气以 SVG 环形排列，四季配色（春绿、夏红、秋金、冬蓝），当前节气高亮并伴随脉冲动画。
- **当前节气智能识别** — 根据用户本地日期自动判断并展示当前节气信息。
- **丰富的文化数据** — 每个节气包含：
  - 中文名称、拼音、英文翻译
  - 太阳黄经度数（0°–345°，步长 15°）
  - 公历大致日期范围
  - 三候（初候、二候、三候，每候五日）
  - 经典诗词（含作者、朝代）
  - 农谚俗语
  - 时令食材与美食
  - 传统养生建议
  - 气候特征描述
- **四季粒子特效** — 纯 CSS 动画：春花瓣、夏萤火、秋落叶、冬飘雪，根据当前季节自动切换。
- **iCal 日历导出** — 一键下载全年 24 节气的 `.ics` 文件，可导入 Google Calendar、Apple Calendar、Outlook 等。
- **水墨画美学风格** — 米色宣纸底色、印章红点缀、淡墨晕染渐变、毛笔笔触感边框。
- **响应式设计** — 桌面端三列、平板两列、手机单列自适应。
- **键盘导航** — 左右方向键切换节气，Esc 关闭详情弹窗。
- **零依赖** — 纯 HTML + CSS + 原生 JavaScript，不引入任何框架或 npm 包。

## 二十四节气一览

| 序号 | 节气 | 拼音 | 英文 | 季节 | 太阳黄经 | 公历日期 |
|:---:|------|------|------|:---:|:--------:|----------|
| 1 | 立春 | Lìchūn | Start of Spring | 春 | 315° | 2月3–5日 |
| 2 | 雨水 | Yǔshuǐ | Rain Water | 春 | 330° | 2月18–20日 |
| 3 | 惊蛰 | Jīngzhé | Awakening of Insects | 春 | 345° | 3月5–7日 |
| 4 | 春分 | Chūnfēn | Spring Equinox | 春 | 0° | 3月20–22日 |
| 5 | 清明 | Qīngmíng | Clear and Bright | 春 | 15° | 4月4–6日 |
| 6 | 谷雨 | Gǔyǔ | Grain Rain | 春 | 30° | 4月19–21日 |
| 7 | 立夏 | Lìxià | Start of Summer | 夏 | 45° | 5月5–7日 |
| 8 | 小满 | Xiǎomǎn | Grain Buds | 夏 | 60° | 5月20–22日 |
| 9 | 芒种 | Mángzhòng | Grain in Ear | 夏 | 75° | 6月5–7日 |
| 10 | 夏至 | Xiàzhì | Summer Solstice | 夏 | 90° | 6月21–22日 |
| 11 | 小暑 | Xiǎoshǔ | Minor Heat | 夏 | 105° | 7月6–8日 |
| 12 | 大暑 | Dàshǔ | Major Heat | 夏 | 120° | 7月22–24日 |
| 13 | 立秋 | Lìqiū | Start of Autumn | 秋 | 135° | 8月7–9日 |
| 14 | 处暑 | Chùshǔ | End of Heat | 秋 | 150° | 8月22–24日 |
| 15 | 白露 | Báilù | White Dew | 秋 | 165° | 9月7–9日 |
| 16 | 秋分 | Qiūfēn | Autumn Equinox | 秋 | 180° | 9月22–24日 |
| 17 | 寒露 | Hánlù | Cold Dew | 秋 | 195° | 10月7–9日 |
| 18 | 霜降 | Shuāngjiàng | Frost Descent | 秋 | 210° | 10月23–24日 |
| 19 | 立冬 | Lìdōng | Start of Winter | 冬 | 225° | 11月7–8日 |
| 20 | 小雪 | Xiǎoxuě | Minor Snow | 冬 | 240° | 11月22–23日 |
| 21 | 大雪 | Dàxuě | Major Snow | 冬 | 255° | 12月6–8日 |
| 22 | 冬至 | Dōngzhì | Winter Solstice | 冬 | 270° | 12月21–23日 |
| 23 | 小寒 | Xiǎohán | Minor Cold | 冬 | 285° | 1月5–7日 |
| 24 | 大寒 | Dàhán | Major Cold | 冬 | 300° | 1月20–21日 |

## 快速开始

直接用浏览器打开 `index.html` 即可体验。

```bash
# 或使用任意静态服务
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 项目结构

```
solar/
├── index.html              # 单页应用入口
├── css/
│   └── style.css           # 水墨画风格样式表
├── js/
│   ├── data.js             # 二十四节气完整数据集（核心数据层）
│   ├── app.js              # 主应用逻辑（圆轮渲染、卡片、弹窗、筛选、粒子特效）
│   └── ics-export.js       # iCal 日历导出模块
├── assets/
│   └── favicon.svg         # SVG 矢量图标
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
├── README.md               # 英文 README（面向国际用户）
├── README_zh.md            # 中文 README（你在这里）
└── LICENSE                 # MIT 开源协议
```

## 技术栈

| 层级 | 技术 |
|------|------|
| 结构 | HTML5 语义化标签 |
| 样式 | CSS3（自定义属性、动画、Grid/Flexbox） |
| 逻辑 | 原生 JavaScript (ES6+)，IIFE 模块化 |
| 字体 | Google Fonts: Noto Serif SC（思源宋体）、Ma Shan Zheng（马善政体） |
| 部署 | GitHub Pages + GitHub Actions 自动部署 |
| 依赖 | **零依赖** |

## 数据来源

节气数据综合参考以下权威资料：

- 《中国天文年历》（紫金山天文台）
- 《月令七十二候集解》（元代 · 吴澄）
- 《淮南子 · 天文训》
- 《全唐诗》、《全宋诗》等古典诗词总集
- 中国农业博物馆二十四节气专题资料

## 部署到 GitHub Pages

### 自动部署（推荐）

项目已配置 `.github/workflows/deploy.yml`，只需：

1. Fork 本仓库
2. 在仓库 Settings → Pages 中，Source 选择 **GitHub Actions**
3. Push 到 `main` 分支，GitHub Actions 会自动部署

### 手动部署

```bash
# 1. 在仓库 Settings → Pages 中启用 GitHub Pages
# 2. Source 选择 main 分支，目录选择 / (root)
# 3. 保存，几分钟后即可通过 https://<username>.github.io/solar 访问
```

## 本地开发

无需任何构建工具或依赖安装：

```bash
# 用任意浏览器打开
open index.html

# 或用 Python 简单 HTTP 服务（支持热刷新）
python -m http.server 8000
```

修改 `js/data.js` 即可扩展或修正节气数据，所有页面内容均为数据驱动。

## 贡献指南

欢迎贡献！以下是可以参与的方向：

- **数据完善**：补充更多诗词、农谚、地方民俗变体
- **多语言**：完善英文翻译，添加日语、韩语等语言支持
- **功能增强**：农历日历集成、天气数据联动、种植指导
- **无障碍**：改进键盘导航和屏幕阅读器支持
- **视觉优化**：改进动画效果、添加更多主题

提交 PR 前请先开 Issue 讨论你的想法。

### 代码规范

- JavaScript：ES6+ 标准，使用 IIFE 避免全局污染
- CSS：使用 CSS 自定义属性，类名使用 kebab-case
- HTML：语义化标签，lang 属性正确
- 所有注释使用中文或英文均可，保持文件内一致

## 致谢

- 字体：Google Fonts 提供的 Noto Serif SC 和 Ma Shan Zheng
- 灵感来源：中国传统水墨画、故宫博物院色彩体系
- 所有为传承中华文化做出贡献的人们

## License

[MIT](LICENSE) © 2026 Solar Project

---

<p align="center">
  传承中华智慧，致敬古老文明
</p>
*（内容由AI生成，仅供参考）*
