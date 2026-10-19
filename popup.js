// ================= 四分化健身计划数据 =================
// 训练消耗估算（kcal）：训练日大肌群约 500kcal，休息日轻度活动约 80kcal
const TRAIN_COST = {
  chest: 520,    // 胸+三头 约 60-70 分钟大重量训练
  back: 540,     // 背+二头 引体/硬拉类 多关节消耗大
  shoulder: 420, // 肩+腹 中小重量+核心
  leg: 620,      // 腿+臀 深蹲硬拉 全身消耗最大
  rest: 80       // 休息日 轻度活动
};

// 每天部位对应训练成本键
const MUSCLE_COST_KEY = ['chest', 'back', 'shoulder', 'leg', 'rest', 'rest', 'rest'];

const weekPlan = [
  {
    day: '周一', type: '训练日', muscle: '胸 + 三头肌', icon: '💪',
    recTime: '上午 9:00',
    equipment: [
      { name: '平板杠铃卧推', icon: '🏋️', sets: 4, reps: '8-10', rest: '90秒' },
      { name: '上斜哑铃飞鸟', icon: '🪶', sets: 4, reps: '10-12', rest: '60秒' },
      { name: '绳索下压（三头）', icon: '🔗', sets: 4, reps: '12-15', rest: '60秒' },
      { name: '双杠臂屈伸', icon: '🤸', sets: 3, reps: '力竭', rest: '90秒' }
    ],
    meals: {
      breakfast: { time: '7:30', emoji: '🌅', title: '早餐',
        items: ['全麦面包 2 片', '鸡蛋 3 个', '牛奶 250ml', '香蕉 1 根'] },
      lunch: { time: '12:00', emoji: '☀️', title: '午餐',
        items: ['糙米饭 1 碗', '鸡胸肉 150g', '西兰花', '牛油果半个'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['三文鱼 150g', '红薯 1 个', '菠菜沙拉', '坚果一小把'] }
    },
    tip: '<strong>今日要点：</strong>卧推优先大重量复合动作，三头放在胸之后利用预疲劳。注意卧推时肩胛骨收紧。'
  },
  {
    day: '周二', type: '训练日', muscle: '背 + 二头肌', icon: '🦾',
    recTime: '上午 9:00',
    equipment: [
      { name: '引体向上', icon: '🧗', sets: 4, reps: '力竭', rest: '120秒' },
      { name: '高位下拉', icon: '⬇️', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '坐姿划船', icon: '🚣', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '杠铃弯举', icon: '💪', sets: 4, reps: '10-12', rest: '60秒' }
    ],
    meals: {
      breakfast: { time: '7:30', emoji: '🌅', title: '早餐',
        items: ['燕麦粥 1 碗', '蛋白粉 1 勺', '蓝莓适量'] },
      lunch: { time: '12:00', emoji: '☀️', title: '午餐',
        items: ['藜麦饭 1 碗', '牛肉 150g', '芦笋', '橄榄油调味'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['虾仁 150g', '紫薯 1 个', '绿叶蔬菜', '番茄汤'] }
    },
    tip: '<strong>今日要点：</strong>背部训练意念集中，用背阔肌发力。二头弯举保持大臂不动，只动前臂。'
  },
  {
    day: '周三', type: '训练日', muscle: '肩 + 腹', icon: '🙆',
    recTime: '下午 16:00',
    equipment: [
      { name: '坐姿哑铃推肩', icon: '🏋️', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '哑铃侧平举', icon: '✋', sets: 4, reps: '12-15', rest: '60秒' },
      { name: '俯身飞鸟', icon: '🐦', sets: 3, reps: '12', rest: '60秒' },
      { name: '卷腹 + 悬垂举腿', icon: '🌀', sets: 4, reps: '20', rest: '45秒' }
    ],
    meals: {
      breakfast: { time: '7:30', emoji: '🌅', title: '早餐',
        items: ['全麦吐司 2 片', '鸡蛋 2 个', '希腊酸奶 1 杯'] },
      lunch: { time: '12:00', emoji: '☀️', title: '午餐',
        items: ['全麦意面', '金枪鱼罐头', '番茄', '生菜'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['鸡胸肉 150g', '糙米饭半碗', '黄瓜', '紫菜蛋花汤'] }
    },
    tip: '<strong>今日要点：</strong>三角肌前中后束均衡，侧平举是练宽肩关键。腹肌训练每组力竭。'
  },
  {
    day: '周四', type: '训练日', muscle: '腿 + 臀', icon: '🦵',
    recTime: '上午 9:00',
    equipment: [
      { name: '杠铃深蹲', icon: '🏋️', sets: 4, reps: '8-10', rest: '120秒' },
      { name: '腿举机', icon: '🦵', sets: 4, reps: '10-12', rest: '90秒' },
      { name: '罗马尼亚硬拉', icon: '🎯', sets: 4, reps: '8-10', rest: '120秒' },
      { name: '臀推（臀桥）', icon: '🍑', sets: 3, reps: '12', rest: '60秒' }
    ],
    meals: {
      breakfast: { time: '7:30', emoji: '🌅', title: '早餐',
        items: ['燕麦 1 碗', '鸡蛋 2 个', '香蕉 1 根', '花生酱 1 勺'] },
      lunch: { time: '12:00', emoji: '☀️', title: '午餐',
        items: ['米饭 1 碗', '鸡腿肉 150g', '土豆', '胡萝卜'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['牛肉 150g', '全麦意面', '西兰花', '蘑菇汤'] }
    },
    tip: '<strong>今日要点：</strong>腿训量最大，务必充分热身。深蹲膝盖与脚尖方向一致，训练后补充碳水。'
  },
  {
    day: '周五', type: '休息日', muscle: '主动恢复', icon: '🧘',
    recTime: '自由安排',
    equipment: [
      { name: '快走 / 慢跑', icon: '🏃', sets: 1, reps: '30分钟', rest: '-' },
      { name: '泡沫轴放松', icon: '🧴', sets: 1, reps: '15分钟', rest: '-' },
      { name: '全身拉伸', icon: '🤸', sets: 1, reps: '20分钟', rest: '-' }
    ],
    meals: {
      breakfast: { time: '8:00', emoji: '🌅', title: '早餐',
        items: ['全麦面包 2 片', '鸡蛋 1 个', '牛奶 250ml', '苹果 1 个'] },
      lunch: { time: '12:30', emoji: '☀️', title: '午餐',
        items: ['杂粮饭 1 碗', '鱼肉 150g', '炒时蔬', '豆腐汤'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['鸡胸肉沙拉', '玉米 1 根', '酸奶 1 杯'] }
    },
    tip: '<strong>今日要点：</strong>休息日主动恢复，促进血液循环加速乳酸代谢。保证 7-8 小时睡眠。'
  },
  {
    day: '周六', type: '休息日', muscle: '完全休息', icon: '😴',
    recTime: '充分休息',
    equipment: [
      { name: '轻松散步', icon: '🚶', sets: 1, reps: '20分钟', rest: '-' },
      { name: '颈部肩部放松', icon: '💆', sets: 1, reps: '10分钟', rest: '-' },
      { name: '深呼吸冥想', icon: '🧘', sets: 1, reps: '15分钟', rest: '-' }
    ],
    meals: {
      breakfast: { time: '8:30', emoji: '🌅', title: '早餐',
        items: ['燕麦粥', '鸡蛋 1 个', '坚果一小把'] },
      lunch: { time: '12:30', emoji: '☀️', title: '午餐',
        items: ['米饭', '瘦肉 100g', '蔬菜', '紫菜汤'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['清蒸鱼', '红薯', '绿叶蔬菜'] }
    },
    tip: '<strong>今日要点：</strong>让身体彻底恢复。可以做轻度散步，但不要剧烈运动。多喝水保持营养均衡。'
  },
  {
    day: '周日', type: '休息日', muscle: '恢复 + 准备', icon: '📋',
    recTime: '准备下周训练',
    equipment: [
      { name: '动态拉伸', icon: '🤸', sets: 1, reps: '15分钟', rest: '-' },
      { name: '核心激活', icon: '🔥', sets: 2, reps: '15次/组', rest: '45秒' },
      { name: '整理装备', icon: '🎒', sets: 1, reps: '-', rest: '-' }
    ],
    meals: {
      breakfast: { time: '8:00', emoji: '🌅', title: '早餐',
        items: ['全麦吐司', '鸡蛋 2 个', '牛奶', '蓝莓'] },
      lunch: { time: '12:00', emoji: '☀️', title: '午餐',
        items: ['藜麦饭', '鸡胸肉 150g', '西兰花', '牛油果'] },
      dinner: { time: '18:30', emoji: '🌙', title: '晚餐',
        items: ['三文鱼', '糙米', '菠菜', '坚果'] }
    },
    tip: '<strong>今日要点：</strong>明天开始新一轮训练，提前准备装备和补给，做动态拉伸让身体进入状态。'
  }
];

// ================= 鼓励语 =================
const quotes = [
  '每一次举起，都是对软弱的告别。',
  '汗水不会辜负你，肌肉会记住你的努力。',
  '今天多做一组，明天多一分自信。',
  '没有借口，只有结果。',
  '痛苦是暂时的，放弃是永久的。',
  '你流下的每一滴汗，都在塑造更好的自己。',
  '杠铃不会说谎，你的努力它都看得见。',
  '坚持不是因为容易，而是因为值得。',
  '比昨天的自己更强，就是最大的胜利。',
  '健身不是为了取悦谁，而是为了成为更好的自己。'
];

// ================= 工具函数 =================
function getTodayIndex() {
  const jsDay = new Date().getDay();
  return (jsDay + 6) % 7; // 周一=0 ... 周日=6
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function formatDate() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}/${pad(d.getMonth()+1)}/${pad(d.getDate())}`;
}

// ================= 卡路里计算 =================
// Mifflin-St Jeor 公式 — 最准确的 BMR 估算
function calcBMR(gender, age, height, weight) {
  if (gender === 'male') return 10 * weight + 6.25 * height - 5 * age + 5;
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

// 计算每日卡路里目标
// 返回 { bmr, tdee, trainingCost, total, protein, carbs, fat }
function calcCalories(user, dayIdx) {
  const bmr = calcBMR(user.gender, user.age, user.height, user.weight);
  const tdee = Math.round(bmr * user.activity);
  const costKey = MUSCLE_COST_KEY[dayIdx];
  const trainingCost = TRAIN_COST[costKey];

  // 训练日: TDEE 已含基础活动，训练消耗额外叠加
  // 休息日: 训练消耗已算在活动系数里，避免重复计算，但 TRAIN_COST.rest 只有 80
  const trainingDay = weekPlan[dayIdx].type === '训练日';
  const total = trainingDay ? tdee + trainingCost : tdee + trainingCost;

  // 宏量营养素（增肌目标）
  const protein = Math.round(user.weight * 2.2);   // 2.2 g/kg 体重
  const carbs = Math.round(user.weight * 4);        // 4 g/kg
  const fatCals = total - protein * 4 - carbs * 4;
  const fat = Math.max(Math.round(fatCals / 9), Math.round(user.weight * 0.8)); // 至少 0.8 g/kg

  return {
    bmr: Math.round(bmr),
    tdee, trainingCost,
    total, protein, carbs, fat
  };
}

// ================= 设置存储 =================
const STORAGE_KEY = 'dailyfit_settings_v1';

function loadSettings() {
  const defaults = { gender: 'male', age: 25, height: 175, weight: 70, activity: 1.55 };
  try {
    const store = typeof chrome !== 'undefined' && chrome.storage ? chrome.storage.local : localStorage;
    const stored = JSON.parse(store.getItem(STORAGE_KEY) || 'null');
    if (stored && stored.gender) return { ...defaults, ...stored };
  } catch (e) { /* ignore */ }
  return defaults;
}

function saveSettings(s) {
  try {
    const store = typeof chrome !== 'undefined' && chrome.storage ? chrome.storage.local : localStorage;
    store.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch (e) { /* ignore */ }
}

// ================= 渲染 =================
let currentQuoteIdx = 0;

function renderCalories(user, dayIdx) {
  const card = document.getElementById('fitCalorieCard');
  const setup = document.getElementById('fitCalorieSetup');
  const needsSetup = !user.age || !user.height || !user.weight;

  if (needsSetup) {
    document.getElementById('fitCalorieValue').textContent = '请先设置';
    document.getElementById('fitBmrVal').textContent = '--';
    document.getElementById('fitActivityVal').textContent = '--';
    document.getElementById('fitTrainVal').textContent = '--';
    document.getElementById('fitProtein').textContent = '--g';
    document.getElementById('fitCarbs').textContent = '--g';
    document.getElementById('fitFat').textContent = '--g';
    setup.style.display = 'block';
    return;
  }

  const c = calcCalories(user, dayIdx);
  const trainingDay = weekPlan[dayIdx].type === '训练日';
  document.getElementById('fitCalorieValue').textContent = c.total.toLocaleString() + ' kcal';
  document.getElementById('fitBmrVal').textContent = c.bmr;
  document.getElementById('fitActivityVal').textContent = c.tdee;
  document.getElementById('fitTrainVal').textContent = (trainingDay ? '+' : '~') + c.trainingCost;
  document.getElementById('fitProtein').textContent = c.protein + 'g';
  document.getElementById('fitCarbs').textContent = c.carbs + 'g';
  document.getElementById('fitFat').textContent = c.fat + 'g';
  setup.style.display = 'none';
}

function renderToday() {
  const idx = getTodayIndex();
  const p = weekPlan[idx];
  document.getElementById('fitDayTag').textContent = p.day;
  document.getElementById('fitTodayDate').textContent = formatDate();
  document.getElementById('fitMuscleIcon').textContent = p.icon;
  document.getElementById('fitMuscleGroup').textContent = p.muscle;
  document.getElementById('fitTrainType').textContent = p.type;
  document.getElementById('fitRecTime').textContent = p.recTime;

  // 器械
  const equipHtml = p.equipment.map(e => `
    <div class="fit-equip-card">
      <div class="fit-equip-head">
        <div class="fit-equip-ic">${e.icon}</div>
        <div class="fit-equip-name">${escapeHtml(e.name)}</div>
      </div>
      <div class="fit-equip-stats">
        <div class="fit-stat"><div class="fit-stat-label">组数</div><div class="fit-stat-val">${e.sets}</div></div>
        <div class="fit-stat"><div class="fit-stat-label">每组</div><div class="fit-stat-val">${escapeHtml(String(e.reps))}</div></div>
        <div class="fit-stat"><div class="fit-stat-label">间歇</div><div class="fit-stat-val">${escapeHtml(e.rest)}</div></div>
      </div>
    </div>
  `).join('');
  document.getElementById('fitEquipList').innerHTML = equipHtml;

  // 饮食
  const m = p.meals;
  const mealHtml = [m.breakfast, m.lunch, m.dinner].map(meal => `
    <div class="fit-meal-card">
      <div class="fit-meal-head">
        <div class="fit-meal-ic">${meal.emoji}</div>
        <div>
          <div class="fit-meal-title">${meal.title}</div>
          <div class="fit-meal-time">建议 ${meal.time}</div>
        </div>
      </div>
      <ul class="fit-meal-items">
        ${meal.items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('fitMealGrid').innerHTML = mealHtml;

  // 小贴士
  document.getElementById('fitTips').innerHTML = p.tip;

  // 一周总览
  const weekHtml = weekPlan.map((w, i) => `
    <div class="fit-day-cell ${i === idx ? 'today' : ''}">
      <div class="fit-day-name">${w.day}</div>
      <div class="fit-day-emoji">${w.icon}</div>
    </div>
  `).join('');
  document.getElementById('fitWeekGrid').innerHTML = weekHtml;

  // 卡路里
  const user = loadSettings();
  renderCalories(user, idx);
}

function renderQuote() {
  document.getElementById('fitQuote').textContent = quotes[currentQuoteIdx];
}

function nextQuote() {
  let next;
  do { next = Math.floor(Math.random() * quotes.length); } while (quotes.length > 1 && next === currentQuoteIdx);
  currentQuoteIdx = next;
  renderQuote();
}

// ================= 设置面板 =================
function openSettings() {
  const user = loadSettings();
  document.getElementById('fitGender').value = user.gender;
  document.getElementById('fitAge').value = user.age || '';
  document.getElementById('fitHeight').value = user.height || '';
  document.getElementById('fitWeight').value = user.weight || '';
  document.getElementById('fitActivity').value = user.activity;
  document.getElementById('fitSettingsPanel').classList.add('active');
}

function closeSettings() {
  document.getElementById('fitSettingsPanel').classList.remove('active');
}

function handleSaveSettings() {
  const user = {
    gender: document.getElementById('fitGender').value,
    age: parseInt(document.getElementById('fitAge').value) || 0,
    height: parseInt(document.getElementById('fitHeight').value) || 0,
    weight: parseInt(document.getElementById('fitWeight').value) || 0,
    activity: parseFloat(document.getElementById('fitActivity').value) || 1.55
  };
  saveSettings(user);
  closeSettings();
  renderToday();
}

// ================= 初始化 =================
document.addEventListener('DOMContentLoaded', () => {
  renderToday();
  renderQuote();

  // 鼓励语自动切换
  setInterval(nextQuote, 8000);

  document.getElementById('fitQuoteBtn').addEventListener('click', nextQuote);
  document.getElementById('fitSettingsBtn').addEventListener('click', openSettings);
  document.getElementById('fitCancelSettings').addEventListener('click', closeSettings);
  document.getElementById('fitSaveSettings').addEventListener('click', handleSaveSettings);

  // 点面板外关闭
  document.getElementById('fitSettingsPanel').addEventListener('click', e => {
    if (e.target.id === 'fitSettingsPanel') closeSettings();
  });
});
