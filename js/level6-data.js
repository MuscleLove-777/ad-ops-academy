/* ============================================
   Level 6: 広告戦略と応用
   ============================================ */
const LEVEL6_DATA = {
    id: 6,
    title: "広告戦略と応用",
    icon: "🚀",
    description: "広告戦略立案、予算配分、AI活用、最新トレンドを学ぶ",
    modules: [
        {
            id: 601,
            title: "広告戦略立案とメディアプランニング",
            duration: "17分",
            content: `
<h2>マーケティングファネルと広告手法</h2>
<p>効果的な広告戦略を立案するためには、ユーザーの<strong>購買意思決定プロセス</strong>を理解し、各段階に適した広告手法を選択する必要があります。マーケティングファネルは、ユーザーが商品・サービスを認知してから購入・推奨に至るまでの流れを示します。</p>

<table>
<tr><th>ファネル段階</th><th>ユーザー心理</th><th>適した広告手法</th><th>主要KPI</th></tr>
<tr><td>認知</td><td>「こんな商品があるんだ」</td><td>ディスプレイ広告、YouTube広告、SNS広告（リーチ目的）</td><td>リーチ数、インプレッション数、CPM</td></tr>
<tr><td>興味</td><td>「もう少し知りたい」</td><td>動画広告（詳細説明）、記事LP、SNS広告（エンゲージメント目的）</td><td>動画視聴率、エンゲージメント率、CTR</td></tr>
<tr><td>検討</td><td>「比較して決めたい」</td><td>リスティング広告、リターゲティング、比較サイト広告</td><td>クリック数、CPC、サイト滞在時間</td></tr>
<tr><td>購買</td><td>「買おう/申し込もう」</td><td>リターゲティング（カート放棄）、ブランドキーワード広告</td><td>CV数、CPA、ROAS</td></tr>
<tr><td>推奨</td><td>「人にも勧めたい」</td><td>UGC活用広告、SNSシェア促進、レビュー誘導</td><td>紹介数、口コミ数、LTV</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">フルファネル戦略の重要性</div>
多くの広告運用者は「検討→購買」のみ（いわゆる刈り取り施策）に集中しがちですが、<strong>認知→興味→検討→購買→推奨</strong>の全段階をカバーする「フルファネル戦略」が持続的な成長には不可欠です。認知層を広げなければ、検討・購買層はいずれ枯渇します。
</div>

<h2>カスタマージャーニー設計</h2>
<p>カスタマージャーニーとは、ユーザーが商品・サービスを認知してから購入・リピートに至るまでの<strong>一連の体験の流れ</strong>を可視化したものです。</p>

<h3>カスタマージャーニーマップの構成要素</h3>
<ul>
<li><strong>ペルソナ:</strong> ターゲットユーザーの具体像（年齢、職業、悩み、情報収集手段）</li>
<li><strong>段階:</strong> 認知→興味→検討→購入→利用→推奨</li>
<li><strong>行動:</strong> 各段階でユーザーが取る具体的な行動</li>
<li><strong>タッチポイント:</strong> ユーザーとの接触点（広告、SNS、店舗、メール等）</li>
<li><strong>感情:</strong> 各段階でのユーザーの感情や不安</li>
<li><strong>施策:</strong> 各タッチポイントで実施する広告・マーケティング施策</li>
</ul>

<div class="info-box success">
<div class="info-box-title">カスタマージャーニーの例：オンライン英会話</div>
<ol>
<li><strong>認知:</strong> Instagram広告で「3ヶ月で英語が話せる」バナーを見る</li>
<li><strong>興味:</strong> YouTube広告で受講者インタビュー動画を視聴</li>
<li><strong>検討:</strong> 「オンライン英会話 比較」で検索→リスティング広告をクリック→LPを閲覧</li>
<li><strong>購入:</strong> リターゲティング広告で「無料体験レッスン」の訴求→申し込み</li>
<li><strong>推奨:</strong> 受講後の満足度調査→SNSシェア→友人紹介キャンペーン</li>
</ol>
</div>

<h2>メディアプラン作成手順</h2>
<p>メディアプランとは、広告戦略を具体的な<strong>媒体選定・予算配分・スケジュール</strong>に落とし込んだ実行計画です。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>目標設定</strong>
KGI（最終目標）とKPI（中間指標）を数値で定義。例：月間CV100件、CPA5,000円以内、ROAS400%以上。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>ターゲット分析</strong>
ペルソナを設定し、ターゲットの行動パターン・メディア接触傾向を把握。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>媒体選定</strong>
ファネル段階×ターゲット属性から最適な広告媒体を選択。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>予算配分</strong>
各媒体への予算配分を決定。過去の実績データや業界ベンチマークを参考に。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>スケジュール策定</strong>
配信期間、クリエイティブ制作・入稿スケジュール、レビュータイミングを設定。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>KPIシミュレーション</strong>
想定インプレッション数、CTR、CVRからCV数・CPAを試算し、目標達成可能性を検証。
</div>
</div>
</div>

<h2>ブランディング広告 vs パフォーマンス広告</h2>
<p>広告施策は大きく<strong>ブランディング広告</strong>と<strong>パフォーマンス広告</strong>に分類されます。</p>

<table>
<tr><th>項目</th><th>ブランディング広告</th><th>パフォーマンス広告</th></tr>
<tr><td>目的</td><td>認知拡大・ブランドイメージ向上</td><td>CV獲得・売上直結</td></tr>
<tr><td>KPI</td><td>リーチ、認知率、好意度、視聴率</td><td>CV数、CPA、ROAS</td></tr>
<tr><td>主な手法</td><td>テレビCM、YouTube動画、純広告</td><td>リスティング、リターゲティング、アフィリエイト</td></tr>
<tr><td>効果測定</td><td>ブランドリフト調査、サーチリフト</td><td>コンバージョントラッキング</td></tr>
<tr><td>費用</td><td>比較的高額（CPMベース）</td><td>成果連動型が多い（CPCベース）</td></tr>
<tr><td>効果発現</td><td>中長期的</td><td>短期的</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">両者のバランスが重要</div>
パフォーマンス広告だけでは新規顧客の母集団が枯渇し、CPAが高騰します。一方、ブランディング広告だけでは短期的な売上が確保できません。<strong>70:30</strong>（パフォーマンス:ブランディング）を出発点に、事業フェーズに応じて調整するのが一般的です。
</div>
            `,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "マーケティングファネルの「検討」段階に最も適した広告手法はどれですか？",
                    options: ["YouTube広告（リーチ目的）", "ディスプレイ広告（認知目的）", "リスティング広告・リターゲティング", "UGC活用広告"],
                    answer: 2,
                    explanation: "「検討」段階のユーザーは積極的に比較・検討しているため、検索意図に応じたリスティング広告やサイト訪問者へのリターゲティングが最も効果的です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "カスタマージャーニーマップの構成要素に含まれないものはどれですか？",
                    options: ["ペルソナ", "競合企業の財務情報", "タッチポイント", "ユーザーの感情"],
                    answer: 1,
                    explanation: "カスタマージャーニーマップはペルソナ、行動、タッチポイント、感情、施策等で構成されます。競合企業の財務情報は含みません。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "パフォーマンス広告とブランディング広告の予算比率の一般的な出発点はどれですか？",
                    options: ["50:50", "70:30（パフォーマンス:ブランディング）", "90:10（パフォーマンス:ブランディング）", "30:70（パフォーマンス:ブランディング）"],
                    answer: 1,
                    explanation: "一般的にはパフォーマンス広告70%:ブランディング広告30%を出発点として、事業フェーズに応じて調整します。"
                },
                {
                    id: "q601_4",
                    type: "fill",
                    question: "広告戦略を具体的な媒体選定・予算配分・スケジュールに落とし込んだ実行計画のことを何と呼びますか？",
                    answer: "メディアプラン",
                    explanation: "メディアプランは目標設定、ターゲット分析、媒体選定、予算配分、スケジュール策定、KPIシミュレーションを含む実行計画です。"
                }
            ]
        },
        {
            id: 602,
            title: "予算配分と広告運用マネジメント",
            duration: "16分",
            content: `
<h2>広告予算の算出方法</h2>
<p>広告予算の決定は広告運用の出発点です。代表的な予算算出法を理解し、自社に適した方法を選択しましょう。</p>

<table>
<tr><th>算出法</th><th>計算方法</th><th>メリット</th><th>デメリット</th></tr>
<tr><td>売上比率法</td><td>売上の一定割合（例：5〜15%）を広告費に充当</td><td>シンプル。売上に連動するため経営が安定</td><td>新規事業や成長期には売上が少なく投資不足になりやすい</td></tr>
<tr><td>目標CPA逆算法</td><td>目標CV数 × 目標CPA = 広告予算</td><td>成果目標から逆算するため合理的</td><td>過去のCPAデータがないと目標設定が困難</td></tr>
<tr><td>競合ベンチマーク法</td><td>競合の広告出稿量をツール等で推定し参考にする</td><td>市場での競争力を意識した予算設定</td><td>競合の正確な広告費は推定が困難</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">目標CPA逆算法の計算例</div>
<p><strong>目標CV数：月100件</strong></p>
<p><strong>目標CPA：5,000円</strong></p>
<p><strong>広告予算 = 100件 × 5,000円 = 500,000円/月</strong></p>
<p>さらに想定CTR 2%、想定CVR 3%から逆算すると、必要クリック数 = 100 / 0.03 ≒ 3,334クリック、必要インプレッション数 = 3,334 / 0.02 ≒ 166,700impとなります。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">実務でのアプローチ</div>
実務では複数の算出法を組み合わせて検討します。例えば、目標CPA逆算法でベースラインを決め、売上比率法で上限を確認し、競合ベンチマーク法で市場の中での妥当性を検証する、といったアプローチが有効です。
</div>

<h2>日次・週次・月次チェックリスト</h2>
<p>広告運用は設定して終わりではなく、<strong>継続的なモニタリングと改善</strong>が不可欠です。</p>

<h3>日次チェック</h3>
<ul>
<li>配信量（インプレッション・クリック数）に異常がないか</li>
<li>予算消化ペースは適正か（日予算の超過・未消化）</li>
<li>CPCの急激な変動がないか</li>
<li>広告の不承認・ポリシー違反がないか</li>
<li>ランディングページが正常に表示されているか</li>
</ul>

<h3>週次チェック</h3>
<ul>
<li>CV数・CPA・ROASの推移（前週比）</li>
<li>キーワード別・広告グループ別のパフォーマンス</li>
<li>検索語句レポートの確認と除外キーワードの追加</li>
<li>オーディエンスセグメント別のパフォーマンス</li>
<li>クリエイティブ別の成果比較とA/Bテスト判定</li>
</ul>

<h3>月次チェック</h3>
<ul>
<li>月間KPI達成状況の集計と報告書作成</li>
<li>予算消化状況と翌月の予算計画</li>
<li>競合動向の分析（オークションインサイト等）</li>
<li>中長期的なトレンド分析（3ヶ月推移等）</li>
<li>次月のキャンペーン計画・クリエイティブ更新計画</li>
</ul>

<h2>Looker Studioダッシュボード設計</h2>
<p>Looker Studio（旧Googleデータポータル）は、<strong>無料で使えるBIツール</strong>で、複数の広告プラットフォームやGA4のデータを1つのダッシュボードに統合できます。</p>

<h3>効果的なダッシュボードの構成要素</h3>
<ul>
<li><strong>サマリーセクション:</strong> 全体のKPI（CV数、CPA、ROAS、消化額）をスコアカードで一目で把握</li>
<li><strong>トレンドチャート:</strong> 日次・週次のKPI推移を折れ線グラフで可視化</li>
<li><strong>媒体別比較:</strong> Google Ads、Meta、LINE等の媒体別パフォーマンスを棒グラフで比較</li>
<li><strong>キャンペーン別テーブル:</strong> キャンペーンごとの詳細数値を一覧表示</li>
<li><strong>フィルター:</strong> 期間、媒体、キャンペーンで絞り込みできるインタラクティブフィルター</li>
</ul>

<div class="info-box success">
<div class="info-box-title">Looker Studioの接続先</div>
<p>Looker StudioはGoogle Ads、GA4に標準コネクタで接続可能です。Meta AdsやLINE広告などGoogle以外の媒体データは、スプレッドシート経由またはサードパーティコネクタ（Supermetrics、Databeat等）を使って接続します。</p>
</div>

<h2>インハウス vs 代理店</h2>
<p>広告運用をどこで行うかは、組織の成長フェーズやリソースに応じた重要な経営判断です。</p>

<table>
<tr><th>項目</th><th>インハウス運用</th><th>代理店運用</th></tr>
<tr><td>コスト</td><td>人件費（固定費）中心。広告費の手数料なし</td><td>広告費の15〜25%が手数料として発生</td></tr>
<tr><td>スピード</td><td>社内判断で即座に変更可能</td><td>依頼→確認→実行のリードタイムが発生</td></tr>
<tr><td>ナレッジ</td><td>社内にノウハウが蓄積される</td><td>代理店依存。担当者変更リスクあり</td></tr>
<tr><td>専門性</td><td>1社の広告のみ担当。視野が狭くなりがち</td><td>多業種の知見・最新情報を持つ</td></tr>
<tr><td>媒体連携</td><td>媒体との直接的な関係構築が必要</td><td>媒体の営業担当がつきやすい。ベータ機能の早期利用</td></tr>
<tr><td>適するケース</td><td>広告費月500万円以上。専任人材を確保できる場合</td><td>広告運用の立ち上げ期。社内リソースが不足する場合</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">ハイブリッドモデル</div>
近年は「戦略・方針はインハウスで策定し、運用実務は代理店に委託する」<strong>ハイブリッドモデル</strong>も増えています。代理店に丸投げするのではなく、KPI設定・戦略策定・レポート評価を社内で行い、日次の運用オペレーションを代理店に任せるスタイルです。
</div>
            `,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "「目標CV数100件 × 目標CPA5,000円 = 広告予算50万円」という計算方法は何と呼ばれますか？",
                    options: ["売上比率法", "目標CPA逆算法", "競合ベンチマーク法", "限界利益法"],
                    answer: 1,
                    explanation: "目標CPA逆算法は、目標とするCV数と目標CPAから逆算して広告予算を算出する方法です。成果目標から合理的に予算を決められます。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "日次チェックで確認すべき項目として最も重要なものはどれですか？",
                    options: ["月間KPI達成状況", "競合動向の分析", "予算消化ペースと配信量の異常", "翌月のキャンペーン計画"],
                    answer: 2,
                    explanation: "日次では予算消化ペースや配信量（インプレッション・クリック数）の異常、CPCの急激な変動、広告の不承認がないかを確認します。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "インハウス運用と代理店運用の比較で正しいものはどれですか？",
                    options: ["インハウスは代理店より常にコストが高い", "代理店は広告費の15〜25%の手数料が一般的", "インハウスは専門性が代理店より常に高い", "代理店はスピードが常にインハウスより速い"],
                    answer: 1,
                    explanation: "代理店への広告運用委託では、一般的に広告費の15〜25%が手数料として発生します。インハウスでは手数料は不要ですが、人件費が固定費として発生します。"
                },
                {
                    id: "q602_4",
                    type: "fill",
                    question: "複数の広告プラットフォームのデータを統合してダッシュボードを作成できるGoogleの無料BIツールの名称は？",
                    answer: "Looker Studio",
                    explanation: "Looker Studio（旧Googleデータポータル）はGoogle Ads、GA4等のデータを統合し、インタラクティブなダッシュボードを無料で作成できるBIツールです。"
                }
            ]
        },
        {
            id: 603,
            title: "広告自動化とAI活用",
            duration: "16分",
            content: `
<h2>Google Ads自動化機能</h2>
<p>Google Adsは広告運用の効率化のために多くの<strong>自動化機能</strong>を提供しています。これらの機能を理解し、適切に活用することが現代の広告運用者に求められるスキルです。</p>

<h3>P-MAX（Performance Max）キャンペーン</h3>
<p>P-MAXはGoogleのすべての広告枠（検索、ディスプレイ、YouTube、Gmail、Discover、マップ）に<strong>1つのキャンペーンから横断的に配信</strong>できる自動化キャンペーンです。</p>

<table>
<tr><th>項目</th><th>P-MAXの特徴</th></tr>
<tr><td>配信面</td><td>Googleの全広告枠（検索、ディスプレイ、YouTube、Gmail、Discover、マップ）</td></tr>
<tr><td>入札</td><td>完全自動（コンバージョンベースの入札のみ）</td></tr>
<tr><td>ターゲティング</td><td>AI自動最適化（オーディエンスシグナルで方向性を指定可能）</td></tr>
<tr><td>クリエイティブ</td><td>複数のアセット（テキスト、画像、動画）を登録→AIが最適な組み合わせを生成</td></tr>
<tr><td>注意点</td><td>配信面ごとの詳細制御が困難。レポート粒度が粗い</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">P-MAX活用の注意点</div>
<ul>
<li>P-MAXは便利だが「ブラックボックス」化しやすい。配信面別の成果が見えにくい</li>
<li>検索キャンペーンと併用する場合、ブランドキーワードの除外設定を忘れずに</li>
<li>オーディエンスシグナル（自社顧客リスト、カスタムオーディエンス等）を必ず設定すること</li>
<li>十分なコンバージョンデータ（目安：月30CV以上）がないと最適化が困難</li>
</ul>
</div>

<h3>自動入札ルール</h3>
<p>Google Adsの<strong>自動ルール</strong>機能を使えば、特定の条件に基づいて入札額の変更、キャンペーンの一時停止、予算の変更などを自動化できます。</p>
<ul>
<li>例：「CPAが目標の150%を超えたらキャンペーンを一時停止」</li>
<li>例：「CTRが1%未満のキーワードを自動で停止」</li>
<li>例：「毎週月曜日にレポートをメールで自動送信」</li>
</ul>

<h3>Google Adsスクリプト</h3>
<p>Google Adsスクリプトは<strong>JavaScript</strong>で記述する自動化プログラムで、より高度なカスタム自動化を実現できます。</p>
<ul>
<li>異常値の自動検知とアラート送信</li>
<li>外部データ（スプレッドシート、天気API等）と連動した入札調整</li>
<li>カスタムレポートの自動生成と共有</li>
<li>大量のキーワード・広告の一括管理</li>
</ul>

<h2>Meta Advantage+</h2>
<p>Meta（Facebook/Instagram）も<strong>Advantage+</strong>というAI自動化機能を積極的に展開しています。</p>

<h3>主なAdvantage+機能</h3>
<table>
<tr><th>機能名</th><th>内容</th></tr>
<tr><td>Advantage+ ショッピングキャンペーン</td><td>EC向けの全自動キャンペーン。カタログから自動でクリエイティブ生成</td></tr>
<tr><td>Advantage+ クリエイティブ</td><td>画像のトリミング、テキスト配置、背景の自動最適化</td></tr>
<tr><td>Advantage+ オーディエンス</td><td>広告セットのターゲティングをAIに任せ、幅広い層に自動配信</td></tr>
<tr><td>Advantage+ 配置</td><td>Facebook、Instagram、Messenger、Audience Networkへの配信割合を自動最適化</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">Advantage+活用のコツ</div>
Advantage+ショッピングキャンペーンは従来のMeta広告キャンペーンと比較して<strong>設定項目が大幅に簡略化</strong>されており、特にEC事業者に効果的です。ただし、既存顧客と新規顧客の予算配分を「既存顧客の予算上限」設定で適切にコントロールすることが重要です。
</div>

<h2>生成AIによるクリエイティブ制作</h2>
<p>ChatGPT、Claude、MidJourney、DALL-Eなどの<strong>生成AI</strong>は広告クリエイティブの制作プロセスを大きく変えています。</p>

<h3>活用シーン</h3>
<ul>
<li><strong>広告コピーの大量生成:</strong> ターゲット×訴求軸×トーンの組み合わせで多数のバリエーションを生成</li>
<li><strong>画像クリエイティブ:</strong> AI画像生成ツールでバナー・広告画像を素早く制作</li>
<li><strong>動画スクリプト:</strong> 動画広告のナレーション・構成案の自動生成</li>
<li><strong>LP構成案:</strong> ターゲット・商品情報からLP構成案を自動提案</li>
<li><strong>A/Bテスト仮説の生成:</strong> 現状の広告データからテスト仮説を自動提案</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">生成AI活用の注意点</div>
<ul>
<li>AIが生成した広告コピーは必ず<strong>薬機法・景品表示法</strong>等の法規制に適合しているか人間が確認</li>
<li>AI画像の著作権・商標権に注意（商用利用可能なツールを使用する）</li>
<li>AIの出力をそのまま使わず、ブランドトーンに合わせた編集を行う</li>
<li>個人情報や社内機密情報をAIに入力しない</li>
</ul>
</div>

<h2>MCC管理とフィード自動化</h2>

<h3>MCC（マイ クライアント センター）</h3>
<p>MCCは<strong>複数のGoogle Adsアカウントを一元管理</strong>するための上位アカウントです。代理店や複数事業を持つ企業が利用します。</p>
<ul>
<li>複数アカウントの横断的なパフォーマンス確認</li>
<li>アカウント間のコンバージョンアクション共有</li>
<li>一括操作（入札変更、広告作成等）</li>
<li>アカウント別のアクセス権限管理</li>
</ul>

<h3>商品フィード自動化</h3>
<p>ショッピング広告やP-MAXで使用する<strong>商品フィード</strong>（Merchant Center）を自動化することで、大量のSKUを持つECサイトの広告運用を効率化できます。</p>
<ul>
<li><strong>自動フィード取得:</strong> WebサイトのURLからGoogleが自動でフィードを生成</li>
<li><strong>スプレッドシート連携:</strong> Googleスプレッドシートからフィードデータを自動同期</li>
<li><strong>API連携:</strong> Content API for Shoppingで在庫・価格をリアルタイム反映</li>
<li><strong>フィード管理ツール:</strong> dfplus.io、EC Boosterなどの専用ツールで最適化</li>
</ul>

<div class="info-box success">
<div class="info-box-title">自動化の優先順位</div>
<p>広告運用の自動化は以下の順序で進めるのが効果的です。</p>
<ol>
<li><strong>自動入札:</strong> 最もインパクトが大きく導入も容易</li>
<li><strong>レポート自動化:</strong> Looker Studio等でダッシュボードを構築</li>
<li><strong>ルール設定:</strong> 異常値検知やアラートの自動化</li>
<li><strong>P-MAX/Advantage+:</strong> キャンペーン構造の自動化</li>
<li><strong>スクリプト/API:</strong> 高度なカスタム自動化</li>
</ol>
</div>
            `,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "P-MAX（Performance Max）キャンペーンの特徴として正しいものはどれですか？",
                    options: ["検索広告のみに配信される", "手動入札のみ対応", "Googleの全広告枠に横断配信できる", "クリエイティブは1種類のみ登録可能"],
                    answer: 2,
                    explanation: "P-MAXはGoogleの全広告枠（検索、ディスプレイ、YouTube、Gmail、Discover、マップ）に1つのキャンペーンから横断的に配信できるのが最大の特徴です。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "MetaのAdvantage+ショッピングキャンペーンが特に効果的な業態はどれですか？",
                    options: ["BtoB企業", "EC事業者", "不動産業", "公共機関"],
                    answer: 1,
                    explanation: "Advantage+ショッピングキャンペーンはEC向けの全自動キャンペーンで、カタログから自動でクリエイティブを生成するため、特にEC事業者に効果的です。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "生成AIを広告クリエイティブに活用する際の注意点として最も重要なものはどれですか？",
                    options: ["AIの出力をそのまま使う", "著作権は気にしなくてよい", "法規制への適合を人間が確認する", "個人情報をAIに入力してパーソナライズする"],
                    answer: 2,
                    explanation: "AIが生成した広告コピーは薬機法・景品表示法等の法規制に適合しているか、必ず人間が確認する必要があります。"
                },
                {
                    id: "q603_4",
                    type: "fill",
                    question: "複数のGoogle Adsアカウントを一元管理するための上位アカウントの略称は？（アルファベット3文字）",
                    answer: "MCC",
                    explanation: "MCC（マイ クライアント センター）は複数のGoogle Adsアカウントを横断的に管理するための上位アカウントです。代理店や複数事業を持つ企業が利用します。"
                }
            ]
        },
        {
            id: 604,
            title: "最新トレンドと法規制",
            duration: "18分",
            content: `
<h2>Cookieレス時代への対応</h2>
<p>サードパーティCookieの廃止・制限が各ブラウザで進行しています。広告運用者はこの変化に対応するための<strong>新しい計測・ターゲティング手法</strong>を理解する必要があります。</p>

<h3>ファーストパーティデータの活用</h3>
<p>サードパーティCookieに依存しない<strong>ファーストパーティデータ</strong>（自社で直接収集したデータ）の重要性が高まっています。</p>
<ul>
<li><strong>会員データ:</strong> メールアドレス、購買履歴、行動データ</li>
<li><strong>CRMデータ:</strong> 顧客属性、問い合わせ履歴、LTV</li>
<li><strong>カスタマーマッチ:</strong> Google Adsで自社顧客リストをアップロードし、類似ユーザーに広告配信</li>
<li><strong>カスタムオーディエンス:</strong> Metaで顧客リストから類似オーディエンスを作成</li>
</ul>

<h3>サーバーサイドタギング</h3>
<p>従来のクライアントサイド（ブラウザ上）でのタグ処理を、<strong>サーバー側で処理する</strong>仕組みです。</p>
<ul>
<li>ブラウザのCookie制限やアドブロッカーの影響を受けにくい</li>
<li>GTMサーバーコンテナを使用して実装</li>
<li>データの精度向上とページ読み込み速度の改善</li>
<li>導入にはサーバー構築・運用のコストが発生</li>
</ul>

<h3>コンバージョンAPI（CAPI）</h3>
<p>各広告プラットフォームが提供する<strong>サーバーサイドのイベント送信API</strong>です。</p>

<table>
<tr><th>プラットフォーム</th><th>API名称</th><th>特徴</th></tr>
<tr><td>Meta</td><td>Conversions API（CAPI）</td><td>ピクセルとの併用でデータの冗長性を確保。Event Match Quality（EMQ）スコアで品質を可視化</td></tr>
<tr><td>Google Ads</td><td>拡張コンバージョン</td><td>ハッシュ化したファーストパーティデータ（メール等）をGoogleに送信</td></tr>
<tr><td>LINE</td><td>LINE Conversion API</td><td>サーバーサイドでのコンバージョン計測。2023年提供開始</td></tr>
<tr><td>TikTok</td><td>Events API</td><td>サーバーサイドでのイベント送信</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">CAPIの導入優先度</div>
まずは<strong>Meta CAPI</strong>の導入を優先しましょう。iOS14+のATTによるCookie制限の影響がMeta広告で最も大きく、CAPI導入によるデータ復旧効果が高いためです。Googleは自社エコシステム内でのデータ連携が強いため、次の優先度とするのが一般的です。
</div>

<h2>AI広告の未来</h2>
<p>AIの進化により、広告運用のあり方は急速に変化しています。今後の主要トレンドを理解しておきましょう。</p>

<h3>AIによる広告自動生成</h3>
<ul>
<li>Google Adsの<strong>自動生成アセット:</strong> AIが広告テキストやイメージを自動で生成・テスト</li>
<li>Meta Advantage+クリエイティブの<strong>背景生成・テキスト最適化</strong></li>
<li>テキスト・画像・動画すべてをAIが生成する時代が近づいている</li>
</ul>

<h3>予測分析の活用</h3>
<ul>
<li><strong>予測オーディエンス:</strong> GA4で「購入する可能性が高いユーザー」「離脱する可能性が高いユーザー」を自動予測</li>
<li><strong>予測LTV:</strong> 機械学習で顧客の将来的な生涯価値を予測し、入札に反映</li>
<li><strong>需要予測:</strong> 過去データから将来の需要を予測し、予算配分を最適化</li>
</ul>

<h3>会話型広告</h3>
<ul>
<li>ChatGPTのようなAIチャットを広告内に組み込み、ユーザーと対話しながら商品を推薦</li>
<li>Google AIが検索広告に会話型体験を統合する動きも進行中</li>
<li>チャットボット×リターゲティングの組み合わせ</li>
</ul>

<h2>CTV（コネクテッドTV）広告</h2>
<p>CTV広告は、<strong>インターネットに接続されたテレビ</strong>（スマートTV、ストリーミングデバイス等）に配信される動画広告です。</p>

<h3>CTVの特徴</h3>
<ul>
<li><strong>大画面で視聴:</strong> スマートフォンよりも高い広告視認性</li>
<li><strong>精密なターゲティング:</strong> デジタル広告の強みを活かした精密なターゲティングが可能</li>
<li><strong>高い完視聴率:</strong> スキップされにくく、90%以上の完視聴率</li>
<li><strong>成長市場:</strong> Netflix、Amazon Prime、TVerなどの広告付きプランの拡大に伴い急成長</li>
</ul>

<div class="info-box success">
<div class="info-box-title">CTV広告の配信プラットフォーム</div>
<ul>
<li><strong>YouTube CTV:</strong> Google Adsから配信可能。テレビ画面でのYouTube視聴者にリーチ</li>
<li><strong>TVer広告:</strong> 民放公式の見逃し配信サービス。日本国内で高い到達力</li>
<li><strong>Netflix広告:</strong> 広告付きプランの導入により広告配信が可能に</li>
<li><strong>Amazon Fire TV:</strong> Amazon DSPを通じて配信</li>
</ul>
</div>

<h2>広告に関する法規制</h2>
<p>広告運用者は、広告表現に関する<strong>法律や規制</strong>を理解し、コンプライアンスを遵守する必要があります。違反すると企業の信頼失墜や行政処分につながります。</p>

<table>
<tr><th>法律</th><th>主な規制内容</th><th>違反例</th></tr>
<tr><td>景品表示法</td><td>優良誤認・有利誤認の禁止。不当な表示で消費者を誤認させることを禁止</td><td>「業界No.1」と根拠なく表示。「今だけ50%OFF」が常時表示</td></tr>
<tr><td>薬機法</td><td>医薬品・化粧品・健康食品等の広告規制。効能効果の誇大表現禁止</td><td>健康食品で「がんが治る」。化粧品で「シワが消える」</td></tr>
<tr><td>特定商取引法</td><td>通信販売における表示義務。返品条件、販売者情報の明示</td><td>定期購入の条件を小さく表示。解約条件を隠す</td></tr>
<tr><td>ステマ規制</td><td>2023年10月施行。広告であることの明示義務（「PR」「広告」等の表記）</td><td>インフルエンサーに報酬を払って「広告」表記なしで投稿させる</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">特に注意すべきポイント</div>
<ul>
<li><strong>アフィリエイト広告:</strong> 2023年の景品表示法改正により、広告主がアフィリエイターの表示にも責任を負うことが明確化</li>
<li><strong>ステマ規制:</strong> 2023年10月から「一般消費者が事業者の表示であることを判別することが困難である表示」が不当表示として規制</li>
<li><strong>ダークパターン:</strong> ユーザーを意図的に誤誘導するUI設計（例：解約ボタンを見つけにくくする）も問題視される傾向</li>
<li><strong>個人情報保護法:</strong> 2022年改正で、Cookie等の「個人関連情報」の第三者提供に本人同意が必要に</li>
</ul>
</div>

<h2>広告運用者のキャリアパス</h2>
<p>広告運用のスキルを基盤に、さまざまなキャリアの方向性があります。</p>

<h3>主なキャリアパス</h3>
<ul>
<li><strong>広告運用スペシャリスト:</strong> 特定媒体の深い専門性を持つ運用のエキスパート</li>
<li><strong>アカウントマネージャー:</strong> クライアント折衝・戦略提案を行うフロント担当</li>
<li><strong>マーケティングマネージャー:</strong> 広告に限らずマーケティング全体を統括</li>
<li><strong>データアナリスト:</strong> 広告データ分析からビジネスインサイトを導出</li>
<li><strong>マーケティングコンサルタント:</strong> 独立してマーケティング戦略のコンサルティング</li>
<li><strong>事業責任者（CMO）:</strong> マーケティング部門のトップとして経営に参画</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">キャリアアップのポイント</div>
<ul>
<li><strong>認定資格:</strong> Google広告認定資格、Meta Blueprint認定を取得</li>
<li><strong>T字型スキル:</strong> 1つの媒体を深く極めつつ、他媒体・周辺領域の知識も広げる</li>
<li><strong>数字で語る力:</strong> 施策の成果を定量的に説明できるスキルが重要</li>
<li><strong>最新情報のキャッチアップ:</strong> 広告業界は変化が速い。公式ブログ、セミナー、コミュニティで常に学び続ける</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "サードパーティCookie規制への対応として正しくないものはどれですか？",
                    options: ["ファーストパーティデータの活用を強化する", "サーバーサイドタギングを導入する", "サードパーティCookieへの依存を高める", "コンバージョンAPIを導入する"],
                    answer: 2,
                    explanation: "サードパーティCookieは廃止・制限が進んでいるため、依存を高めるのは逆効果です。ファーストパーティデータ、サーバーサイドタギング、CAPIなどの代替手段に移行する必要があります。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "2023年10月に日本で施行された、広告であることの明示を義務付ける規制はどれですか？",
                    options: ["薬機法改正", "ステマ規制", "個人情報保護法改正", "特定商取引法改正"],
                    answer: 1,
                    explanation: "2023年10月から「ステルスマーケティング規制」が施行され、広告であることをユーザーが判別できるよう「PR」「広告」等の表記を明示する義務が課されました。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "CTV（コネクテッドTV）広告の特徴として正しくないものはどれですか？",
                    options: ["大画面で視認性が高い", "デジタルならではの精密なターゲティング", "完視聴率が高い", "クリック課金（CPC）が基本"],
                    answer: 3,
                    explanation: "CTV広告は大画面表示・精密ターゲティング・高い完視聴率が特徴ですが、テレビ視聴中にクリックする仕組みではないため、CPC課金ではなくCPM課金やCPCV課金が基本です。"
                },
                {
                    id: "q604_4",
                    type: "fill",
                    question: "MetaがCookie制限に対応するために提供しているサーバーサイドのイベント送信APIの名称は？（英語で）",
                    answer: "Conversions API",
                    explanation: "Conversions API（CAPI）はMetaが提供するサーバーサイドのイベント送信APIです。Metaピクセルとの併用でデータの冗長性を確保し、Cookie制限の影響を軽減します。"
                }
            ]
        }
    ]
};
