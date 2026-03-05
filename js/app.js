/* ============================================
   広告運用アカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('ad-ops-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('ad-ops-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('ad-ops-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('ad-ops-progress', JSON.stringify(this.progress)); localStorage.setItem('ad-ops-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>広告運用アカデミーへようこそ</h2>
            <p>デジタル広告運用の基礎知識からプラットフォーム別戦略、分析・最適化まで体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>デジタル広告運用の基礎から戦略までマスターしました。<br>実務に活かしていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('ad-ops-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('ad-ops-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('ad-ops-progress'); localStorage.removeItem('ad-ops-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: '基本指標', terms: [
                { name: 'CPC', desc: 'Cost Per Click（クリック単価）。広告1クリックあたりの費用' },
                { name: 'CPM', desc: 'Cost Per Mille（インプレッション単価）。広告1,000回表示あたりの費用' },
                { name: 'CTR', desc: 'Click Through Rate（クリック率）。表示回数に対するクリック数の割合' },
                { name: 'CVR', desc: 'Conversion Rate（コンバージョン率）。クリック数に対するコンバージョン数の割合' },
                { name: 'CPA', desc: 'Cost Per Acquisition（顧客獲得単価）。1件のコンバージョンを獲得するためにかかった費用' },
                { name: 'ROAS', desc: 'Return On Ad Spend（広告費用対効果）。広告費に対する売上の割合' },
                { name: 'LTV', desc: 'Life Time Value（顧客生涯価値）。1顧客が生涯を通じてもたらす利益の総額' },
                { name: 'インプレッション', desc: '広告が画面上に表示された回数' },
                { name: 'リーチ', desc: '広告が表示されたユニークユーザー数' },
                { name: 'フリークエンシー', desc: '1ユーザーあたりの平均広告表示回数' },
            ]},
            { category: 'プラットフォーム', terms: [
                { name: 'Google Ads', desc: 'Google検索・ディスプレイ・YouTube等に広告配信できるプラットフォーム' },
                { name: 'Yahoo!広告', desc: 'Yahoo! JAPAN検索・ディスプレイネットワークに広告配信できるプラットフォーム' },
                { name: 'Meta広告', desc: 'Facebook・Instagram・Messenger等に広告配信できるプラットフォーム' },
                { name: 'LINE広告', desc: 'LINEアプリ内のタイムライン・ニュース等に広告配信できるプラットフォーム' },
                { name: 'X広告', desc: 'X（旧Twitter）のタイムラインや検索結果に広告配信できるプラットフォーム' },
                { name: 'TikTok広告', desc: 'TikTokのフィードやリール内に動画広告を配信できるプラットフォーム' },
            ]},
            { category: 'ターゲティング', terms: [
                { name: 'リマーケティング', desc: 'サイト訪問者など過去に接触したユーザーに再度広告を配信する手法' },
                { name: '類似オーディエンス', desc: '既存顧客に似た特徴を持つ新規ユーザーをターゲティングする手法' },
                { name: 'カスタムセグメント', desc: '検索キーワードやURL等の行動データに基づいてユーザーを分類するターゲティング' },
                { name: 'デモグラフィック', desc: '年齢・性別・世帯収入など人口統計情報に基づくターゲティング' },
            ]},
            { category: '分析・計測', terms: [
                { name: 'GA4', desc: 'Google Analytics 4。Googleの最新ウェブ解析ツールで、イベントベースの計測モデルを採用' },
                { name: 'コンバージョン', desc: '広告の目的となるユーザーアクション（購入、申込み、問合せなど）' },
                { name: 'アトリビューション', desc: 'コンバージョンに至るまでの各広告接点への貢献度を評価する分析手法' },
                { name: 'UTMパラメータ', desc: 'URLに付与するトラッキング用パラメータ。流入元・メディア・キャンペーンなどを識別' },
            ]},
            { category: '広告フォーマット', terms: [
                { name: 'RSA', desc: 'Responsive Search Ads（レスポンシブ検索広告）。複数の見出し・説明文を自動組合せする検索広告' },
                { name: 'レスポンシブディスプレイ', desc: '画像・見出し・説明文を自動的に組み合わせて最適なレイアウトで表示するディスプレイ広告' },
                { name: 'カルーセル', desc: '複数の画像やカードを横スクロールで表示できる広告フォーマット' },
                { name: 'インストリーム', desc: 'YouTube等の動画コンテンツの前後や途中に再生される動画広告' },
            ]},
            { category: '自動化・AI', terms: [
                { name: 'P-MAX', desc: 'Performance Max。Google Adsの全チャネルにAIで自動配信する統合キャンペーン' },
                { name: 'Advantage+', desc: 'Meta広告のAI活用型キャンペーン。ターゲティングやクリエイティブを自動最適化' },
                { name: '自動入札', desc: 'AIが目標に基づいて入札額を自動調整する機能。目標CPA・目標ROAS等の戦略がある' },
                { name: 'CAPI', desc: 'Conversions API（コンバージョンAPI）。サーバー経由でコンバージョンデータを送信する計測手法' },
            ]}
        ];
        const colors = { '基本指標': '#ea580c', 'プラットフォーム': '#0891b2', 'ターゲティング': '#7c3aed', '分析・計測': '#059669', '広告フォーマット': '#dc2626', '自動化・AI': '#d97706' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">デジタル広告運用に関する重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
