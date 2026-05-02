const app = document.getElementById('app');
const modal = document.getElementById('wish-modal');
const closeWishBtn = document.getElementById('close-wish');

if (!app || !modal || !closeWishBtn) {
  throw new Error('必要 DOM 節點不存在，請確認 index.html 結構。');
}

const DATA = {
  love_today: [
    { title:'曖昧升溫', badgeLabel:'戀愛運', energy:82, message:'今天的感情氣流偏柔和，特別適合靠近、聊天與交換心意。若你心裡有人，今晚很容易出現小小的互動亮點。', action:'主動傳一句不太重、但帶點溫度的訊息，會比你想像中更有回音。', avoid:'不要急著逼問答案，也別因為一時安靜就自己嚇自己。', blessing:'有些心動，正在很輕很輕地向你走來。' },
    { title:'靜水流深', badgeLabel:'戀愛運', energy:68, message:'今天的戀愛運不是轟轟烈烈型，而是那種慢慢加深、越想越有感的節奏。表面安靜，心裡其實有答案在醞釀。', action:'放慢速度觀察對方的細節，會比急著推進更有收穫。', avoid:'避免反覆解讀對方每一句話，越猜反而越亂。', blessing:'真正想靠近你的人，不會只留下一陣風。' },
    { title:'回光再現', badgeLabel:'戀愛運', energy:74, message:'今天容易想起舊情緒、舊對話，甚至會對某段關係重新有感。這不是壞事，而是提醒你看清自己現在真正想要什麼。', action:'若心裡有話卡著，先誠實面對自己的感受，再決定要不要說。', avoid:'別把懷念直接誤認成適合重新開始。', blessing:'你會越來越知道，誰值得你再一次心動。' },
    { title:'桃花微亮', badgeLabel:'戀愛運', energy:76, message:'今天的桃花能量不算強烈，但很適合從小互動慢慢累積溫度。越自然越容易被注意到。', action:'把自己打理得舒服一點，讓人願意多看你一眼。', avoid:'不要因為怕尷尬就把所有好感都藏起來。', blessing:'最剛好的吸引力，往往來自你自在發光的樣子。' },
    { title:'心門半開', badgeLabel:'戀愛運', energy:63, message:'你今天的感情狀態偏矛盾，一邊想被靠近，一邊又怕太快失去安全感。這會讓節奏有點卡。', action:'先承認自己的猶豫，再選擇一個你能接受的小小靠近。', avoid:'避免一時熱情、一時冷掉，讓對方摸不著你的心。', blessing:'慢慢打開心門，也是一種溫柔的勇敢。' },
    { title:'命運試探中', badgeLabel:'戀愛運', energy:71, message:'今天像是命運在偷偷測試你，會不會為一段在意的關係多往前一步。小機會可能藏在不起眼的瞬間。', action:'留意突然出現的聊天、巧合或再次遇見，它們都可能有意義。', avoid:'不要因為想太多就錯過原本能發生的互動。', blessing:'緣分有時不是降臨，而是被你輕輕接住。' },
    { title:'夜晚更有感', badgeLabel:'戀愛運', energy:79, message:'今天白天的感情流動普通，但越接近晚上，越容易出現情緒交流或心動時刻。夜色會替你放大感受。', action:'把重要訊息留到晚上再說，氣氛會更剛好。', avoid:'不要太早下結論，今天的答案可能會晚一點才出現。', blessing:'有些心意，只會在夜裡慢慢浮上來。' },
    { title:'舊緣未散', badgeLabel:'戀愛運', energy:66, message:'今天容易被熟悉感牽動，可能是舊人、舊記憶，或某種曾經讓你心動的氛圍重新靠近。', action:'分清楚你想念的是人，還是那時候的自己。', avoid:'不要因為一瞬間的懷念，就把界線整個放掉。', blessing:'看清過去，是為了更溫柔地走向新的靠近。' },
    { title:'甜度回升', badgeLabel:'戀愛運', energy:85, message:'今天的戀愛甜度偏高，特別適合互相撒嬌、分享生活，或做一件會讓關係更軟的事情。', action:'多給一點溫柔反應，對方很可能會被你悄悄打動。', avoid:'別故意裝酷，今天其實越真誠越加分。', blessing:'被溫柔對待的你，也會讓世界變得更柔軟。' },
    { title:'慢熱開花', badgeLabel:'戀愛運', energy:70, message:'今天不是一眼決勝負的愛情日，而是適合讓關係慢慢開花的日子。你不需要急，感情正在累積。', action:'保持穩定聯繫，用一致的溫度建立信任感。', avoid:'不要拿別人的進度來催促自己的關係。', blessing:'慢慢盛開的花，也有最久的香氣。' }
  ],
  love_brain: [
    {title:'高敏心動型',badgeLabel:'戀愛腦',energy:87,message:'你今天的戀愛腦指數偏高，特別容易因為一句話、一個眼神，甚至一個已讀時間就開始腦補後續劇情。',action:'把心動當成可愛的小訊號就好，不用急著立刻下結論。',avoid:'避免在情緒高點時連發訊息，或自己腦內加戲到睡不著。',blessing:'你會心動，代表你心裡還有光。'},
    {title:'理智微失守',badgeLabel:'戀愛腦',energy:72,message:'你表面還算冷靜，但只要碰到在意的人，理智其實很容易鬆開一點點。今天的你會比平常更在意對方的反應。',action:'承認自己在意，反而會讓你更穩。',avoid:'不要假裝完全不在乎，最後卻偷偷反覆打開聊天框。',blessing:'有時候承認喜歡，不是輸，是誠實。'},
    {title:'半糖清醒型',badgeLabel:'戀愛腦',energy:58,message:'你今天的戀愛腦不算重，會心動，但還留得住自己的步調。這是很剛好的狀態，既能感受，也不容易失控。',action:'用輕鬆的方式相處，讓感情自然流動。',avoid:'別突然切太冷，讓對方看不懂你的溫度。',blessing:'會愛人，也懂得愛自己，是很難得的平衡。'},
    {title:'已讀放大型',badgeLabel:'戀愛腦',energy:81,message:'你今天很容易把一個小小的回覆節奏無限放大。對方晚回一點，你心裡就已經演到第八集。',action:'當你想重看聊天紀錄第三次時，先去做別的事 10 分鐘。',avoid:'不要拿對方的回覆速度，直接判定自己的重要程度。',blessing:'你的在意是真的，但不需要用焦慮證明。'},
    {title:'表面冷靜派',badgeLabel:'戀愛腦',energy:65,message:'你今天看起來很淡定，實際上只是把情緒藏得很好。內心不是沒波動，而是偷偷翻湧。',action:'允許自己承認：對，你就是有點在意。',avoid:'不要用過度理性壓住所有真實感受。',blessing:'能感受到喜歡，本來就是一種很柔軟的能力。'},
    {title:'深夜加戲型',badgeLabel:'戀愛腦',energy:84,message:'白天還好，一到夜裡你的戀愛腦就會特別活躍，開始反覆回想對話、表情和語氣。',action:'睡前把你真正擔心的事寫下來，會比一直想更有用。',avoid:'不要在半夜情緒最滿的時候做重大感情決定。',blessing:'夜晚會放大情緒，但天亮後你還是會找到平衡。'},
    {title:'嘴硬心軟型',badgeLabel:'戀愛腦',energy:69,message:'你今天的戀愛腦藏在嘴硬裡，明明很在意，卻總想裝得一副還好。這讓你的可愛有點被誤會。',action:'選一個安全的小方式示弱，反而能讓互動更自然。',avoid:'不要老用反話測試對方，最後連自己都委屈。',blessing:'被看懂的你，會比你想像中更值得被疼。'},
    {title:'想太多預備軍',badgeLabel:'戀愛腦',energy:77,message:'你今天的腦袋很容易提前預演失敗結局，還沒發生的事已經先替自己受傷一遍。',action:'提醒自己：感覺是真的，但猜測不一定是真的。',avoid:'別用最壞劇本嚇退自己原本想要的靠近。',blessing:'你值得一段不用一直靠猜的關係。'},
    {title:'穩穩喜歡型',badgeLabel:'戀愛腦',energy:54,message:'今天的你比較像穩穩喜歡型，心裡有暖度，但不會失控。這讓你在感情裡特別有魅力。',action:'繼續保持自己的步調，不用刻意表演熱情。',avoid:'不要因為別人很熱烈，就懷疑自己的喜歡不夠真。',blessing:'平靜的喜歡，也可以很深。'},
    {title:'一秒心軟型',badgeLabel:'戀愛腦',energy:89,message:'只要對方稍微釋出一點好意，你今天就很容易整顆心軟下來。這份柔軟很可愛，但也很需要保護。',action:'先享受被在意的感覺，但記得觀察對方是否真的穩定。',avoid:'不要因為一時甜，就忽略本來存在的問題。',blessing:'願你的心軟，總是被值得的人接住。'}
  ],
  love_think: [
    {title:'有，他想過你',badgeLabel:'心念值',energy:79,message:'今晚的心念回音偏亮，代表對方最近確實有短暫想起你，可能是在某個熟悉場景、某句話，或某個你們共通的片刻裡。',action:'如果你也正想念，不妨用輕鬆的方式釋出一點存在感。',avoid:'別急著把這份回音放大成承諾或結論。',blessing:'被想起的那一刻，心會先微微發光。'},
    {title:'想念很輕，但存在',badgeLabel:'心念值',energy:63,message:'對方對你的心念不是強烈翻湧型，而是偶爾掠過心頭、安靜停留一下的那種。像月光擦過窗邊，不吵，卻在。',action:'先讓自己保持可被靠近的狀態，不要太急著證明什麼。',avoid:'不要因為他沒立刻行動，就全盤否定這份想念。',blessing:'有些思念很安靜，但並不代表不存在。'},
    {title:'此刻更需要等等',badgeLabel:'心念值',energy:48,message:'今晚抽到的回音比較保守，表示對方此刻的注意力不完全在感情上。不是沒有感覺，而是還沒走到能明確靠近的時機。',action:'把注意力先收回自己，照顧好你的節奏。',avoid:'別因為一時沒有回應，就懷疑自己的價值。',blessing:'有些答案晚一點來，不代表它永遠不會來。'},
    {title:'他剛好想起你',badgeLabel:'心念值',energy:75,message:'這份心念回音帶著一點突然性，像是他在不經意的瞬間被某個畫面勾到，於是短短想了你一下。',action:'今天適合自然地出現在對方視線裡，不需要太刻意。',avoid:'別急著要求對方立刻給你更大的反應。',blessing:'有些想念很短，卻足夠讓人記住。'},
    {title:'他心裡有波紋',badgeLabel:'心念值',energy:83,message:'今晚抽到的能量偏強，表示你在對方心裡不只是經過一下，而是曾讓他心裡起過真實的波紋。',action:'若你也在意，可以選擇一個不太重的互動重新接上。',avoid:'不要因為想確認，就突然把情緒丟得太滿。',blessing:'曾被放在心上的人，不會真的沒有痕跡。'},
    {title:'想你，但沒表現出來',badgeLabel:'心念值',energy:70,message:'對方有想過你，只是那份想念目前還停在心裡，還沒有走到行動層面。可能是猶豫，也可能是還在觀察時機。',action:'給彼此一點緩衝空間，不必急著逼出答案。',avoid:'不要把沒行動直接解讀成完全沒感覺。',blessing:'不是所有沉默，都等於空白。'},
    {title:'心念忽近忽遠',badgeLabel:'心念值',energy:57,message:'這份回音有點飄，表示對方的注意力曾落在你身上，但還不夠穩定，時近時遠。',action:'先穩住自己的心，不要跟著對方的節奏起伏太大。',avoid:'別把每一次靠近都當成關係即將定案。',blessing:'你值得被明確想念，而不是反覆試探。'},
    {title:'曾想起你們的片刻',badgeLabel:'心念值',energy:67,message:'對方今晚比較像是想起「你們之間的某個瞬間」，而不是只單純想起你這個人。那個片刻對他仍有溫度。',action:'若要靠近，從共同回憶或輕鬆話題重新開場會更自然。',avoid:'不要太快把回憶浪漫化成完整答案。',blessing:'曾經被珍惜的片刻，會在心裡留很久。'},
    {title:'此刻他更需要時間',badgeLabel:'心念值',energy:52,message:'不是完全沒想過你，而是他的心現在被其他事佔住了大半。你還在他的記憶裡，只是暫時不是最前排。',action:'把期待放輕一點，先把心力留給自己。',avoid:'不要過度追逐一個還沒空回應的人。',blessing:'晚一點被看見，不代表你不值得被看見。'},
    {title:'有種安靜的牽掛',badgeLabel:'心念值',energy:73,message:'這份能量很溫柔，像是對方不一定天天想起你，但只要提到你，心裡仍會有一點特別的停頓。',action:'今天適合讓自己發光，讓那份牽掛有重新靠近的機會。',avoid:'不要急著把安靜的在意逼成轟烈的表態。',blessing:'被輕輕放在心上的感覺，也是一種真實。'}
  ],
  daily: [
    { title:'吉星微亮', badgeLabel:'每日凶吉', energy:78, message:'今天整體偏吉，適合推進卡住的小事。', action:'先完成最重要的一件事，會有連鎖順利感。', avoid:'別拖到太晚才做決定。', blessing:'你的節奏，會把運氣慢慢帶正。' },
    { title:'平衡之日', badgeLabel:'每日凶吉', energy:62, message:'吉凶持平，重點在於你如何分配心力。', action:'把時間留給真正重要的人事物。', avoid:'別被雜訊牽著走。', blessing:'穩住心，就能穩住今天。' },
    { title:'謹慎前行', badgeLabel:'每日凶吉', energy:49, message:'今天能量偏低，適合保守應對。', action:'先整理再行動，避免匆忙。', avoid:'不要逞強接太多任務。', blessing:'慢一點，不代表你會落後。' }
  ],
  work:[
    { title:'效率開光', badgeLabel:'工作運', energy:80, message:'工作節奏順，靈感與執行力都在線。', action:'把最難的一件事先完成。', avoid:'別同時開太多戰線。', blessing:'你專注的樣子，正在發光。'},
    { title:'協作有利', badgeLabel:'工作運', energy:67, message:'今天適合溝通與協作，單打獨鬥反而慢。', action:'主動確認彼此期待，會少很多誤會。', avoid:'不要悶著不問。', blessing:'善意交流會替你開路。'},
    { title:'低調守成', badgeLabel:'工作運', energy:55, message:'適合穩穩做，不宜冒進。', action:'先把既有流程補強。', avoid:'不要衝動答應超出負荷的要求。', blessing:'保留餘裕，就是成熟。'}
  ],
  soul:[
    { title:'把心放回來', badgeLabel:'心靈指引', energy:74, message:'你值得先照顧自己，再照顧世界。', action:'給自己 20 分鐘安靜時間。', avoid:'別把所有責任都攬在身上。', blessing:'你被溫柔對待，也很重要。'},
    { title:'允許慢下來', badgeLabel:'心靈指引', energy:66, message:'慢不是停滯，而是重新對焦。', action:'今天少做一件不必要的事。', avoid:'不要拿效率否定價值。', blessing:'你的存在，本來就有重量。'},
    { title:'鬆開執念', badgeLabel:'心靈指引', energy:52, message:'有些答案需要空間才會出現。', action:'把放不下的事寫下來，暫時交給明天。', avoid:'別逼自己立刻想通。', blessing:'放鬆後，路會自己顯現。'}
  ],
  cosmos:[
    { title:'星軌對齊中', badgeLabel:'宇宙訊息', energy:77, message:'你正在接近一個對的轉彎。', action:'留意今天出現的巧合。', avoid:'不要忽略第一直覺。', blessing:'宇宙正在回應你。'},
    { title:'月光蓄能夜', badgeLabel:'宇宙訊息', energy:64, message:'今晚適合整理心願，讓能量沉澱。', action:'睡前寫下一句你真正想成為的樣子。', avoid:'別把外界期待當成你的答案。', blessing:'你正在成為你想成為的人。'},
    { title:'流星訊號弱', badgeLabel:'宇宙訊息', energy:50, message:'先穩定日常，宇宙訊號會更清楚。', action:'回到生活裡最基本的節奏。', avoid:'不要急著求快。', blessing:'慢慢來，也是一種被守護。'}
  ]
};

const TOPICS = { love_today:'今日戀愛占卜', love_brain:'你的戀愛腦指數', love_think:'他有偷偷想我嗎?', daily:'每日凶吉', work:'工作運勢', soul:'心靈指引', cosmos:'宇宙訊息' };

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const setNav = (active) => document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.nav === active));

function renderHome() {
  setNav('home');
  app.innerHTML = `<section class="card"><h1 class="title">小喵子月蝕占卜室</h1><p class="subtitle">聽見命運給你的回音</p><img class="emblem" src="assets/xiaomiaozi-emblem.svg" alt="小喵子吉祥物"><div class="grid"><button class="option-btn" data-cat="love">戀愛運勢</button><button class="option-btn" data-cat="daily">每日凶吉</button><button class="option-btn" data-cat="work">工作運勢</button><button class="option-btn" data-cat="soul">心靈指引</button></div></section>`;
}
function renderLoveTopics() {
  app.innerHTML = `<section class="card"><h2>戀愛運勢 · 選題</h2><div class="grid"><button class="option-btn" data-topic="love_today">今日戀愛占卜</button><button class="option-btn" data-topic="love_brain">你的戀愛腦指數</button><button class="option-btn" data-topic="love_think">他有偷偷想我嗎?</button></div><button class="primary-btn" id="go-home">返回首頁</button></section>`;
}
function renderRitual(topic) {
  const name = TOPICS[topic] || '儀式';
  app.innerHTML = `<section class="card ritual-wrap"><h2>${name}</h2><p class="small">把指尖放在水晶上，長按 2 秒，讓月光回應你。</p><div class="hold-area"><div class="hold-ring" id="hold-ring"><button class="hold-btn" id="hold-btn"><img src="assets/crystal.svg" alt="水晶"></button></div></div><div class="progress-text" id="progress-text">按住啟動儀式</div><button class="primary-btn" id="back-topic">重選題目</button></section>`;
  attachHold(topic);
}
function renderResult(topic, result) {
  app.innerHTML = `<section class="card result-section"><p class="small">題目：${TOPICS[topic]}</p><span class="result-badge">${result.badgeLabel}</span><h2 class="result-title">${result.title}</h2><div class="result-energy">能量指數：${result.energy}%</div><p><strong>核心訊息：</strong>${result.message}</p><p><strong>適合行動：</strong>${result.action}</p><p><strong>避開事項：</strong>${result.avoid}</p><p><strong>祝福句：</strong>${result.blessing}</p><div class="grid"><button class="primary-btn" id="retry">再抽一次</button><button class="option-btn" id="retopic">重選題目</button></div></section>`;
  document.getElementById('retry').onclick = () => renderRitual(topic);
  document.getElementById('retopic').onclick = () => (topic.startsWith('love_') ? renderLoveTopics() : renderHome());
}
function attachHold(topic) {
  const btn = document.getElementById('hold-btn');
  const ring = document.getElementById('hold-ring');
  const text = document.getElementById('progress-text');
  let startTime = 0;
  let raf = 0;
  let holding = false;

  const update = (now = performance.now()) => {
    if (!holding) return;
    const progress = Math.min(100, Math.floor((now - startTime) / 20));
    ring.style.setProperty('--progress', progress);
    text.textContent = `儀式連結中 ${progress}%`;
    if (progress >= 100) {
      holding = false;
      renderResult(topic, pick(DATA[topic]));
      return;
    }
    raf = requestAnimationFrame(update);
  };

  const start = (event) => {
    event.preventDefault();
    holding = true;
    startTime = performance.now();
    update();
  };

  const stop = () => {
    holding = false;
    cancelAnimationFrame(raf);
    ring.style.setProperty('--progress', 0);
    text.textContent = '按住啟動儀式';
  };

  ['pointerdown', 'mousedown', 'touchstart'].forEach((evt) => btn.addEventListener(evt, start, { passive: false }));
  ['pointerup', 'pointercancel', 'mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach((evt) => btn.addEventListener(evt, stop));
  document.getElementById('back-topic').onclick = () => (topic.startsWith('love_') ? renderLoveTopics() : renderHome());
}

document.addEventListener('click', (e) => {
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.matches('[data-cat="love"]')) return renderLoveTopics();
  if (t.matches('[data-cat="daily"]')) return renderRitual('daily');
  if (t.matches('[data-cat="work"]')) return renderRitual('work');
  if (t.matches('[data-cat="soul"]')) return renderRitual('soul');
  if (t.matches('[data-topic]')) return renderRitual(t.dataset.topic);
  if (t.id === 'go-home') return renderHome();
  if (t.matches('[data-nav="home"]')) return renderHome();
  if (t.matches('[data-nav="ritual"]')) { setNav('ritual'); return renderLoveTopics(); }
  if (t.matches('[data-nav="cosmos"]')) { setNav('cosmos'); return renderRitual('cosmos'); }
  if (t.matches('[data-nav="wish"]')) { setNav('wish'); return modal.classList.remove('hidden'); }
});

closeWishBtn.onclick = () => { modal.classList.add('hidden'); setNav('home'); };
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

renderHome();
