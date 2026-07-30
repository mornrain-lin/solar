# Solar �?二十四节气数字画�?| by mornrain-lin

> *"A digital art piece that brings the ancient Chinese calendar to life through ink-wash aesthetics and modern web technology."*

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-js-yellow.svg)](app.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

**开发�?*: [mornrain-lin](https://github.com/mornrain-lin)
**网站**: [mornrain.com](https://mornrain.com) | [mornrain.cn](https://mornrain.cn)

Solar 是一个极简纯粹的二十四节气数字艺术项目。它将中国传统水墨美学融入交互式 Web 体验，以 Canvas 粒子水墨背景、SVG 节气圆轮和精美的节气详情卡片，呈现东方文化的诗意与韵律�?
## 文化背景

二十四节气起源于黄河流域，是中国古代农耕文明的智慧结晶。它将太阳周年视运动轨迹划分�?24 等份，每 15° 为一节气，精准反映了季节、物候、气候的变化规律�?016 年，"二十四节�?被正式列入联合国教科文组织人类非物质文化遗产代表作名录，成为世界公认的时间知识体系�?
> **在线体验**: [https://mornrain.com/solar](https://mornrain.com/solar)

## �?Features

- 🎨 **水墨粒子背景** �?数百粒子模拟水墨晕染，颜色随季节变化，鼠标微弱交互，30fps 流畅运行
- ☀�?**节气圆轮** �?24 节点环形排列，四季着色，当前节气高亮脉冲，hover 放大
- 📜 **节气详情卡片** �?毛玻璃弹窗，三候、诗词、农谚、美食、养生一应俱�?- 🌸 **四季筛�?* �?一键切换春/�?�?冬，节点平滑过渡
- 📷 **导出日历** �?Canvas 绘制精美节气卡片并导出为 PNG
- 🗓�?**72候完整数�?* �?每个节气的三候物候现象，源自《月令七十二候集解�?- 🖼�?**节气卡片导出** �?Canvas 绘制精美节气卡片，一键导�?PNG 分享
- ⌨️ **键盘导航** �?�?�?切换节气，Esc 关闭弹窗，流畅操�?- 🌐 **iCal 日历** �?导出全年24节气事件到系统日�?- 📱 **完美响应�?* �?桌面 �?平板 �?手机三档适配
- 🚫 **零依�?* �?�?HTML/CSS/JS，不引入任何框架或库（Google Fonts 除外�?- 🔍 **完整 SEO** �?Open Graph、Twitter Card、语义化标签
- 🖋�?**东方美学** �?Ma Shan Zheng 书法字体 + Noto Serif SC 衬线体，呼吸动画，留白呼吸感

## 📸 Screenshots

<!-- TODO: Add hero screenshot -->
![Hero Screenshot](screenshot-hero.png)

<!-- TODO: Add wheel screenshot -->
![Wheel Screenshot](screenshot-wheel.png)

<!-- TODO: Add detail card screenshot -->
![Detail Card Screenshot](screenshot-detail.png)

<!-- TODO: Add mobile screenshot -->
![Mobile Screenshot](screenshot-mobile.png)

## 🚀 Quick Start

直接打开 `index.html` 即可，无需构建、编译或安装任何依赖�?
```bash
# 克隆仓库
git clone https://github.com/mornrain-lin/solar.git
cd solar

# 用任�?HTTP 服务器打开（可选）
# Python 3
python -m http.server 8080

# 或直接双�?index.html
```

## 🛠�?Tech Stack

| 技�?| 用�?|
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
├── app.js          # 核心交互逻辑
├── data.js         # 二十四节气完整数据集
├── favicon.svg     # 极简节气图标
├── README.md       # 项目文档
└── LICENSE         # MIT 许可�?```

## 📖 Data Coverage

24 个节气，每个包含�?- 中英文名称、拼音、所属季�?- 黄经度数、日期范�?- 节气释义
- 三候（物候现象）
- 经典诗词（含标题、作者、朝代、全文）
- 农谚
- 时令美食
- 养生建议
- 气候特�?
## 🙏 Acknowledgments

- 节气数据参考《月令七十二候集解》及相关典籍
- 书法字体 [Ma Shan Zheng](https://fonts.google.com/specimen/Ma+Shan+Zheng) by Google Fonts
- 衬线字体 [Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC) by Google Fonts
- 水墨美学灵感源自中国传统山水�?
## �?Star History

<!-- TODO: Add star history chart -->
[![Star History Chart](https://api.star-history.com/svg?repos=mornrain-lin/solar&type=Date)](https://star-history.com/#mornrain-lin/solar&Date)

## 📄 License

MIT © 2026 mornrain-lin 贡献�?