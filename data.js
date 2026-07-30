/**
 * Solar — 二十四节气完整数据集
 * 节气顺序按黄经划分，始于立春
 */

const solarTerms = [
  {
    name: "立春",
    nameEn: "Beginning of Spring",
    pinyin: "Lì Chūn",
    season: "spring",
    solarLongitude: 315,
    dateRange: "2月3日-5日",
    meaning: "春季开始，东风解冻，蛰虫始振，鱼陟负冰。万物复苏，新的一年农事即将开始。",
    threeHou: ["东风解冻", "蛰虫始振", "鱼陟负冰"],
    poem: {
      title: "立春偶成",
      author: "张栻",
      dynasty: "宋",
      lines: ["律回岁晚冰霜少，", "春到人间草木知。", "便觉眼前生意满，", "东风吹水绿参差。"]
    },
    proverb: "立春一日，百草回芽。",
    foods: ["春饼", "萝卜", "春卷", "五辛盘"],
    healthTips: ["早睡早起，春捂秋冻", "多吃辛甘发散食物", "适当舒展筋骨"],
    climate: "气温回升，乍暖还寒，东风解冻"
  },
  {
    name: "雨水",
    nameEn: "Rain Water",
    pinyin: "Yǔ Shuǐ",
    season: "spring",
    solarLongitude: 330,
    dateRange: "2月18日-20日",
    meaning: "降水开始，雨量渐增。冰雪融化，草木萌动，春雨贵如油。",
    threeHou: ["獭祭鱼", "鸿雁来", "草木萌动"],
    poem: {
      title: "春夜喜雨",
      author: "杜甫",
      dynasty: "唐",
      lines: ["好雨知时节，", "当春乃发生。", "随风潜入夜，", "润物细无声。"]
    },
    proverb: "雨水有雨庄稼好，大春小春一片宝。",
    foods: ["龙须饼", "罐罐肉", "红枣粥"],
    healthTips: ["健脾利湿", "少吃油腻", "注意保暖防倒春寒"],
    climate: "冰雪融化，降水增多，乍暖还寒"
  },
  {
    name: "惊蛰",
    nameEn: "Awakening of Insects",
    pinyin: "Jīng Zhé",
    season: "spring",
    solarLongitude: 345,
    dateRange: "3月5日-7日",
    meaning: "春雷始鸣，惊醒蛰伏的昆虫。万物生机盎然，春耕正式开始。",
    threeHou: ["桃始华", "仓庚鸣", "鹰化为鸠"],
    poem: {
      title: "观田家",
      author: "韦应物",
      dynasty: "唐",
      lines: ["微雨众卉新，", "一雷惊蛰始。", "田家几日闲，", "耕种从此起。"]
    },
    proverb: "惊蛰春雷响，农夫闲转忙。",
    foods: ["梨", "炒豆", "鸡蛋", "醪糟"],
    healthTips: ["养肝护脾", "多吃梨润肺", "适当运动防春困"],
    climate: "春雷乍动，气温回升，雨水增多"
  },
  {
    name: "春分",
    nameEn: "Spring Equinox",
    pinyin: "Chūn Fēn",
    season: "spring",
    solarLongitude: 0,
    dateRange: "3月20日-22日",
    meaning: "昼夜平分，阴阳平衡。燕子归来，雷乃发声，万物生长进入旺盛期。",
    threeHou: ["玄鸟至", "雷乃发声", "始电"],
    poem: {
      title: "春分",
      author: "徐铉",
      dynasty: "宋",
      lines: ["仲春初四日，", "春色正中分。", "绿野徘徊月，", "晴天断续云。"]
    },
    proverb: "春分麦起身，一刻值千金。",
    foods: ["春菜", "汤圆", "太阳糕", "萝卜"],
    healthTips: ["保持阴阳平衡", "饮食清淡", "多晒太阳"],
    climate: "昼夜等长，气温稳定回升，春意盎然"
  },
  {
    name: "清明",
    nameEn: "Clear and Bright",
    pinyin: "Qīng Míng",
    season: "spring",
    solarLongitude: 15,
    dateRange: "4月4日-6日",
    meaning: "天清地明，万物洁净。既是节气也是传统节日，扫墓祭祖，踏青郊游。",
    threeHou: ["桐始华", "田鼠化为鴽", "虹始见"],
    poem: {
      title: "清明",
      author: "杜牧",
      dynasty: "唐",
      lines: ["清明时节雨纷纷，", "路上行人欲断魂。", "借问酒家何处有，", "牧童遥指杏花村。"]
    },
    proverb: "清明前后，种瓜点豆。",
    foods: ["青团", "馓子", "清明果", "清明螺"],
    healthTips: ["疏肝理气", "踏青运动", "注意花粉过敏"],
    climate: "气温升高，雨量增多，春光明媚"
  },
  {
    name: "谷雨",
    nameEn: "Grain Rain",
    pinyin: "Gǔ Yǔ",
    season: "spring",
    solarLongitude: 30,
    dateRange: "4月19日-21日",
    meaning: "雨生百谷，播种移苗。春季最后一个节气，牡丹盛开，茶叶采摘正当时。",
    threeHou: ["萍始生", "鸣鸠拂其羽", "戴胜降于桑"],
    poem: {
      title: "谷雨",
      author: "朱槔",
      dynasty: "宋",
      lines: ["天点纷林际，", "虚檐写梦中。", "明朝知谷雨，", "无策禁花风。"]
    },
    proverb: "谷雨前后，种瓜点豆。",
    foods: ["香椿", "谷雨茶", "春笋", "菠菜"],
    healthTips: ["健脾祛湿", "喝谷雨茶清火", "防花粉过敏"],
    climate: "雨量充足，气温升高，柳絮飞落"
  },
  {
    name: "立夏",
    nameEn: "Beginning of Summer",
    pinyin: "Lì Xià",
    season: "summer",
    solarLongitude: 45,
    dateRange: "5月5日-7日",
    meaning: "夏季开始，万物繁茂。蝼蝈鸣叫，蚯蚓出土，王瓜生长。",
    threeHou: ["蝼蝈鸣", "蚯蚓出", "王瓜生"],
    poem: {
      title: "山亭夏日",
      author: "高骈",
      dynasty: "唐",
      lines: ["绿树阴浓夏日长，", "楼台倒影入池塘。", "水晶帘动微风起，", "满架蔷薇一院香。"]
    },
    proverb: "立夏栽稻子，小满种芝麻。",
    foods: ["立夏蛋", "樱桃", "青梅", "蚕豆"],
    healthTips: ["养心安神", "午休养阳", "清淡饮食"],
    climate: "气温明显升高，雷雨增多，万物生长旺季"
  },
  {
    name: "小满",
    nameEn: "Grain Buds",
    pinyin: "Xiǎo Mǎn",
    season: "summer",
    solarLongitude: 60,
    dateRange: "5月20日-22日",
    meaning: "麦类等夏熟作物籽粒渐满，但未成熟。小满者，物致于此小得盈满。",
    threeHou: ["苦菜秀", "靡草死", "麦秋至"],
    poem: {
      title: "小满",
      author: "欧阳修",
      dynasty: "宋",
      lines: ["夜莺啼绿柳，", "皓月醒长空。", "最爱垄头麦，", "迎风笑落红。"]
    },
    proverb: "小满小满，麦粒渐满。",
    foods: ["苦菜", "杨梅", "枇杷", "荔枝"],
    healthTips: ["清热利湿", "吃苦味食物", "防暑降温准备"],
    climate: "降雨增多，闷热潮湿，麦穗渐满"
  },
  {
    name: "芒种",
    nameEn: "Grain in Ear",
    pinyin: "Máng Zhòng",
    season: "summer",
    solarLongitude: 75,
    dateRange: "6月5日-7日",
    meaning: "有芒的麦子快收，有芒的稻子可种。忙种忙收，农事最为繁忙。",
    threeHou: ["螳螂生", "鵙始鸣", "反舌无声"],
    poem: {
      title: "时雨",
      author: "陆游",
      dynasty: "宋",
      lines: ["时雨及芒种，", "四野皆插秧。", "家家麦饭美，", "处处菱歌长。"]
    },
    proverb: "芒种不种，再种无用。",
    foods: ["青梅酒", "粽子", "鸭肉", "薏米粥"],
    healthTips: ["清热祛湿", "午休养心", "防暑防晒"],
    climate: "气温显著升高，雨量充沛，梅雨季开始"
  },
  {
    name: "夏至",
    nameEn: "Summer Solstice",
    pinyin: "Xià Zhì",
    season: "summer",
    solarLongitude: 90,
    dateRange: "6月21日-22日",
    meaning: "白昼最长，阳气最盛。鹿角解，蝉始鸣，半夏生。阳极阴生。",
    threeHou: ["鹿角解", "蝉始鸣", "半夏生"],
    poem: {
      title: "夏至避暑北池",
      author: "韦应物",
      dynasty: "唐",
      lines: ["昼晷已云极，", "宵漏自此长。", "未及施政教，", "所忧变炎凉。"]
    },
    proverb: "夏至有雨三伏热，重阳无雨一冬晴。",
    foods: ["凉面", "馄饨", "麦粥", "绿豆汤"],
    healthTips: ["养心安神", "午睡养阳", "清淡饮食消暑"],
    climate: "炎热盛夏，白昼最长，雷阵雨频繁"
  },
  {
    name: "小暑",
    nameEn: "Minor Heat",
    pinyin: "Xiǎo Shǔ",
    season: "summer",
    solarLongitude: 105,
    dateRange: "7月6日-8日",
    meaning: "暑为炎热之意，小暑即天气开始炎热，但尚未到达极点。温风至，蟋蟀居宇。",
    threeHou: ["温风至", "蟋蟀居宇", "鹰始鸷"],
    poem: {
      title: "小暑六月节",
      author: "元稹",
      dynasty: "唐",
      lines: ["倏忽温风至，", "因循小暑来。", "竹喧先觉雨，", "山暗已闻雷。"]
    },
    proverb: "小暑过，一日热三分。",
    foods: ["饺子", "藕", "黄鳝", "西瓜"],
    healthTips: ["防暑降温", "多吃清热食物", "避免烈日暴晒"],
    climate: "天气炎热，雷暴频繁，入伏在即"
  },
  {
    name: "大暑",
    nameEn: "Major Heat",
    pinyin: "Dà Shǔ",
    season: "summer",
    solarLongitude: 120,
    dateRange: "7月22日-24日",
    meaning: "一年中最热的时期。湿热交蒸，万物蒸煮。腐草为萤，大雨时行。",
    threeHou: ["腐草为萤", "土润溽暑", "大雨时行"],
    poem: {
      title: "大暑",
      author: "曾几",
      dynasty: "宋",
      lines: ["赤日几时过，", "清风无处寻。", "经书聊枕籍，", "瓜果漫浮沉。"]
    },
    proverb: "大暑热不透，大热在秋后。",
    foods: ["伏茶", "仙草", "冬瓜", "苦瓜"],
    healthTips: ["防暑降温", "多饮温水", "保证充足睡眠"],
    climate: "炎热至极，多雷暴台风，湿热交加"
  },
  {
    name: "立秋",
    nameEn: "Beginning of Autumn",
    pinyin: "Lì Qiū",
    season: "autumn",
    solarLongitude: 135,
    dateRange: "8月7日-9日",
    meaning: "秋季开始，暑去凉来。凉风至，白露降，寒蝉鸣。秋高气爽。",
    threeHou: ["凉风至", "白露降", "寒蝉鸣"],
    poem: {
      title: "立秋",
      author: "刘翰",
      dynasty: "宋",
      lines: ["乳鸦啼散玉屏空，", "一枕新凉一扇风。", "睡起秋声无觅处，", "满阶梧叶月明中。"]
    },
    proverb: "立秋十日遍地红。",
    foods: ["西瓜", "红烧肉", "秋桃", "莲藕"],
    healthTips: ["养肺润燥", "早卧早起", "贴秋膘适度"],
    climate: "暑热渐退，秋凉初起，天高云淡"
  },
  {
    name: "处暑",
    nameEn: "End of Heat",
    pinyin: "Chǔ Shǔ",
    season: "autumn",
    solarLongitude: 150,
    dateRange: "8月22日-24日",
    meaning: "暑气消退，秋意渐浓。鹰乃祭鸟，天地始肃，禾乃登。",
    threeHou: ["鹰乃祭鸟", "天地始肃", "禾乃登"],
    poem: {
      title: "早秋曲江感怀",
      author: "白居易",
      dynasty: "唐",
      lines: ["离离暑云散，", "袅袅凉风起。", "池上秋又来，", "荷花半成子。"]
    },
    proverb: "处暑天还暑，好似秋老虎。",
    foods: ["鸭子", "龙眼", "酸梅汤", "糯米藕"],
    healthTips: ["滋阴润燥", "少食辛辣", "适时增减衣物"],
    climate: "暑气渐消，昼夜温差大，秋燥开始"
  },
  {
    name: "白露",
    nameEn: "White Dew",
    pinyin: "Bái Lù",
    season: "autumn",
    solarLongitude: 165,
    dateRange: "9月7日-9日",
    meaning: "天气转凉，露凝而白。鸿雁来，玄鸟归，群鸟养羞。秋意正浓。",
    threeHou: ["鸿雁来", "玄鸟归", "群鸟养羞"],
    poem: {
      title: "月夜忆舍弟",
      author: "杜甫",
      dynasty: "唐",
      lines: ["戍鼓断人行，", "边秋一雁声。", "露从今夜白，", "月是故乡明。"]
    },
    proverb: "白露秋分夜，一夜凉一夜。",
    foods: ["白露茶", "龙眼", "红薯", "白露米酒"],
    healthTips: ["润肺防燥", "泡脚养生", "适当户外运动"],
    climate: "气温迅速下降，露水凝结，秋高气爽"
  },
  {
    name: "秋分",
    nameEn: "Autumn Equinox",
    pinyin: "Qiū Fēn",
    season: "autumn",
    solarLongitude: 180,
    dateRange: "9月22日-24日",
    meaning: "昼夜平分，阴阳相半。雷始收声，蛰虫坯户，水始涸。丰收时节。",
    threeHou: ["雷始收声", "蛰虫坯户", "水始涸"],
    poem: {
      title: "秋词",
      author: "刘禹锡",
      dynasty: "唐",
      lines: ["自古逢秋悲寂寥，", "我言秋日胜春朝。", "晴空一鹤排云上，", "便引诗情到碧霄。"]
    },
    proverb: "秋分种麦正当时。",
    foods: ["螃蟹", "柿子", "桂花糕", "秋梨"],
    healthTips: ["养肺润燥", "早卧早起", "防秋郁"],
    climate: "昼夜等长，天高气爽，凉意渐深"
  },
  {
    name: "寒露",
    nameEn: "Cold Dew",
    pinyin: "Hán Lù",
    season: "autumn",
    solarLongitude: 195,
    dateRange: "10月8日-9日",
    meaning: "露水更冷，即将结冰。鸿雁来宾，雀入大水为蛤，菊有黄华。",
    threeHou: ["鸿雁来宾", "雀入大水为蛤", "菊有黄华"],
    poem: {
      title: "池上",
      author: "白居易",
      dynasty: "唐",
      lines: ["袅袅凉风动，", "凄凄寒露零。", "兰衰花始白，", "荷破叶犹青。"]
    },
    proverb: "寒露不摘烟，霜打莫怨天。",
    foods: ["芝麻", "花糕", "螃蟹", "柿子"],
    healthTips: ["养阴防燥", "足部保暖", "多喝水润肺"],
    climate: "气温骤降，露水寒凉，秋燥明显"
  },
  {
    name: "霜降",
    nameEn: "Frost Descent",
    pinyin: "Shuāng Jiàng",
    season: "autumn",
    solarLongitude: 210,
    dateRange: "10月23日-24日",
    meaning: "天气渐冷，初霜出现。豺乃祭兽，草木黄落，蛰虫咸俯。秋之终章。",
    threeHou: ["豺乃祭兽", "草木黄落", "蛰虫咸俯"],
    poem: {
      title: "山行",
      author: "杜牧",
      dynasty: "唐",
      lines: ["远上寒山石径斜，", "白云生处有人家。", "停车坐爱枫林晚，", "霜叶红于二月花。"]
    },
    proverb: "霜降见霜，米谷满仓。",
    foods: ["柿子", "萝卜", "栗子", "羊肉"],
    healthTips: ["防寒保暖", "补冬不如补霜降", "保护膝关节"],
    climate: "气温骤降，初霜出现，草木凋零"
  },
  {
    name: "立冬",
    nameEn: "Beginning of Winter",
    pinyin: "Lì Dōng",
    season: "winter",
    solarLongitude: 225,
    dateRange: "11月7日-8日",
    meaning: "冬季开始，万物收藏。水始冰，地始冻，雉入大水为蜃。",
    threeHou: ["水始冰", "地始冻", "雉入大水为蜃"],
    poem: {
      title: "立冬",
      author: "李白",
      dynasty: "唐",
      lines: ["冻笔新诗懒写，", "寒炉美酒时温。", "醉看墨花月白，", "恍疑雪满前村。"]
    },
    proverb: "立冬补冬，补嘴空。",
    foods: ["饺子", "羊肉火锅", "萝卜炖排骨", "糯米"],
    healthTips: ["早卧晚起", "温补肾阳", "注意保暖"],
    climate: "气温骤降，北风渐起，万物收藏"
  },
  {
    name: "小雪",
    nameEn: "Minor Snow",
    pinyin: "Xiǎo Xuě",
    season: "winter",
    solarLongitude: 240,
    dateRange: "11月22日-23日",
    meaning: "开始降雪，但雪量不大。虹藏不见，天气上升，闭塞而成冬。",
    threeHou: ["虹藏不见", "天气上升地气下降", "闭塞而成冬"],
    poem: {
      title: "小雪",
      author: "戴叔伦",
      dynasty: "唐",
      lines: ["花雪随风不厌看，", "更多还肯失林峦。", "愁人正在书窗下，", "一片飞来一片寒。"]
    },
    proverb: "小雪雪满天，来年必丰年。",
    foods: ["糍粑", "腊肉", "腌菜", "羊肉汤"],
    healthTips: ["温补养肾", "防寒保暖", "调节情绪防抑郁"],
    climate: "气温持续走低，开始降雪，干燥寒冷"
  },
  {
    name: "大雪",
    nameEn: "Major Snow",
    pinyin: "Dà Xuě",
    season: "winter",
    solarLongitude: 255,
    dateRange: "12月6日-8日",
    meaning: "降雪量大增，天地苍茫。鹖鴠不鸣，虎始交，荔挺出。",
    threeHou: ["鹖鴠不鸣", "虎始交", "荔挺出"],
    poem: {
      title: "江雪",
      author: "柳宗元",
      dynasty: "唐",
      lines: ["千山鸟飞绝，", "万径人踪灭。", "孤舟蓑笠翁，", "独钓寒江雪。"]
    },
    proverb: "大雪不冻倒春寒。",
    foods: ["红枣糕", "羊肉", "红薯粥", "腌肉"],
    healthTips: ["早卧晚起待日光", "温补助阳", "注意头脚保暖"],
    climate: "降雪增多，冰封大地，严寒加剧"
  },
  {
    name: "冬至",
    nameEn: "Winter Solstice",
    pinyin: "Dōng Zhì",
    season: "winter",
    solarLongitude: 270,
    dateRange: "12月21日-23日",
    meaning: "白昼最短，阴极之至，阳气始生。冬至大如年，传统祭祀和团圆的重要节日。",
    threeHou: ["蚯蚓结", "麋角解", "水泉动"],
    poem: {
      title: "邯郸冬至夜思家",
      author: "白居易",
      dynasty: "唐",
      lines: ["邯郸驿里逢冬至，", "抱膝灯前影伴身。", "想得家中夜深坐，", "还应说着远行人。"]
    },
    proverb: "冬至大如年，人间小团圆。",
    foods: ["饺子", "汤圆", "羊肉", "赤豆粥"],
    healthTips: ["早卧晚起", "养阳补肾", "冬至进补三倍功"],
    climate: "严寒至极，白昼最短，阴极阳生"
  },
  {
    name: "小寒",
    nameEn: "Minor Cold",
    pinyin: "Xiǎo Hán",
    season: "winter",
    solarLongitude: 285,
    dateRange: "1月5日-7日",
    meaning: "天气寒冷，但未到极点。雁北乡，鹊始巢，雉始鸲。三九严寒。",
    threeHou: ["雁北乡", "鹊始巢", "雉始鸲"],
    poem: {
      title: "小寒食舟中作",
      author: "杜甫",
      dynasty: "唐",
      lines: ["佳辰强饮食犹寒，", "隐几萧条带鹖冠。", "春水船如天上坐，", "老年花似雾中看。"]
    },
    proverb: "小寒大寒，冷成冰团。",
    foods: ["腊八粥", "糯米饭", "涮羊肉", "鸡汤"],
    healthTips: ["温阳散寒", "三九贴敷", "防寒保暖重点"],
    climate: "严寒刺骨，滴水成冰，三九时节"
  },
  {
    name: "大寒",
    nameEn: "Major Cold",
    pinyin: "Dà Hán",
    season: "winter",
    solarLongitude: 300,
    dateRange: "1月20日-21日",
    meaning: "一年中最冷时期。鸡始乳，征鸟厉疾，水泽腹坚。寒极必暖，否极泰来。",
    threeHou: ["鸡始乳", "征鸟厉疾", "水泽腹坚"],
    poem: {
      title: "大寒出江陵西门",
      author: "陆游",
      dynasty: "宋",
      lines: ["平明羸马出西门，", "淡日寒云久吐吞。", "不为山川多感慨，", "岁穷游子自消魂。"]
    },
    proverb: "大寒到顶点，日后天渐暖。",
    foods: ["八宝饭", "年糕", "炖羊肉", "红枣桂圆汤"],
    healthTips: ["防寒保暖", "进补收尾", "准备迎春"],
    climate: "极度严寒，冰天雪地，寒极必暖"
  }
];
