/* ============================================
   Level 1: デジタル広告の基礎
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "デジタル広告の基礎",
    icon: "📱",
    description: "デジタル広告の全体像、基本指標、主要プラットフォームを学ぶ",
    modules: [
        {
            id: 101,
            title: "デジタル広告の全体像と歴史",
            duration: "15分",
            content: `
<h2>マス広告からデジタル広告への進化</h2>
<p>広告業界は、新聞・テレビ・ラジオ・雑誌といった<strong>マス4媒体</strong>が長年主流でした。しかし、インターネットの普及により、広告の世界は大きな転換期を迎えています。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>1990年代 - インターネット広告の黎明期</strong>
1996年にYahoo! JAPANがバナー広告を開始。日本初のインターネット広告が登場しました。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>2000年代 - 検索連動型広告の登場</strong>
Google AdWords（現Google Ads）が登場し、「検索する人に広告を出す」という革命的な仕組みが生まれました。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>2010年代 - SNS広告とプログラマティック広告の台頭</strong>
Facebook・Twitter・LINEなどのSNS広告が急成長。RTB（リアルタイム入札）によるプログラマティック広告が主流に。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>2020年代 - デジタル広告がマス広告を逆転</strong>
2021年にインターネット広告費がマス4媒体の広告費を初めて上回りました。動画広告・AI活用が加速しています。
</div>
</div>
</div>

<h2>日本のデジタル広告費の推移</h2>
<p>電通「日本の広告費」によると、日本のインターネット広告費は急速に成長を続けています。</p>

<div class="info-box tip">
<div class="info-box-title">日本のインターネット広告費</div>
<ul>
<li><strong>2019年:</strong> 約2兆1,048億円（テレビ広告費を初めて超過）</li>
<li><strong>2021年:</strong> 約2兆7,052億円（マス4媒体合計を初めて超過）</li>
<li><strong>2023年:</strong> 約3兆3,330億円（総広告費の45.5%）</li>
<li><strong>2024年:</strong> 約3兆6,517億円（過去最高を更新）</li>
</ul>
<p>インターネット広告費は<strong>3兆円を超え</strong>、日本の総広告費の約半分を占めるまでに成長しました。</p>
</div>

<h2>デジタル広告の種類</h2>
<p>デジタル広告にはさまざまな種類があり、それぞれ異なる特徴と用途を持っています。</p>

<table>
<tr><th>広告の種類</th><th>概要</th><th>主なプラットフォーム</th><th>特徴</th></tr>
<tr><td><strong>検索広告（リスティング広告）</strong></td><td>検索結果に表示されるテキスト広告</td><td>Google Ads, Yahoo!広告</td><td>顕在層にリーチ、高CVR</td></tr>
<tr><td><strong>ディスプレイ広告</strong></td><td>Webサイト上に表示されるバナー・画像広告</td><td>GDN, YDA</td><td>認知拡大、リターゲティング</td></tr>
<tr><td><strong>SNS広告</strong></td><td>SNSプラットフォーム上の広告</td><td>Meta, LINE, X, TikTok</td><td>精密なターゲティング</td></tr>
<tr><td><strong>動画広告</strong></td><td>動画コンテンツ内に表示される広告</td><td>YouTube, TVer</td><td>高い訴求力、ブランド認知</td></tr>
<tr><td><strong>ネイティブ広告</strong></td><td>メディアのコンテンツに溶け込む広告</td><td>SmartNews, Gunosy</td><td>自然な見せ方、高CTR</td></tr>
<tr><td><strong>アフィリエイト広告</strong></td><td>成果報酬型の広告</td><td>A8.net, バリューコマース</td><td>成果発生時のみ課金</td></tr>
</table>

<h2>プログラマティック広告の仕組み</h2>
<p>現代のデジタル広告の多くは、<strong>プログラマティック広告</strong>（自動化された広告取引）の仕組みで配信されています。広告主と媒体社の間で、システムが自動的に広告枠の売買を行います。</p>

<div class="visual-box">
<div class="visual-box-title">プログラマティック広告のエコシステム</div>
<div style="font-size:0.85rem;text-align:left;max-width:600px;margin:0 auto;">
<table>
<tr><th>プレイヤー</th><th>正式名称</th><th>役割</th></tr>
<tr><td><strong>DSP</strong></td><td>Demand Side Platform</td><td>広告主側のプラットフォーム。複数の広告枠に対して自動入札を行う</td></tr>
<tr><td><strong>SSP</strong></td><td>Supply Side Platform</td><td>媒体社側のプラットフォーム。広告枠の販売を最適化する</td></tr>
<tr><td><strong>DMP</strong></td><td>Data Management Platform</td><td>ユーザーデータを収集・分析し、ターゲティングに活用する</td></tr>
<tr><td><strong>Ad Exchange</strong></td><td>広告取引市場</td><td>DSPとSSPが広告枠を売買するマーケットプレイス</td></tr>
</table>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">RTB（リアルタイム入札）の流れ</div>
<ol>
<li>ユーザーがWebページにアクセスする</li>
<li>SSPが広告枠情報をAd Exchangeに送信する</li>
<li>DSPがユーザー情報とDMPのデータをもとに<strong>0.1秒以内</strong>に入札額を決定する</li>
<li>最高入札額の広告主の広告が表示される</li>
</ol>
<p>この一連のプロセスが、ページが読み込まれる間にリアルタイムで行われます。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">プライバシー規制の影響</div>
近年、Cookie規制（ITP、GDPR、改正個人情報保護法）の強化により、サードパーティCookieに依存したターゲティングが制限されています。広告業界はファーストパーティデータの活用やコンテキストターゲティングへの移行を進めています。
</div>
            `,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "日本でインターネット広告費がマス4媒体の広告費を初めて上回ったのは何年ですか？",
                    options: ["2019年", "2020年", "2021年", "2023年"],
                    answer: 2,
                    explanation: "2021年にインターネット広告費（約2兆7,052億円）がマス4媒体合計の広告費を初めて超えました。2019年はテレビ広告費を超えた年です。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "DSP（Demand Side Platform）の役割として正しいものはどれですか？",
                    options: ["媒体社の広告枠を管理する", "広告主側に立ち自動入札を行う", "ユーザーデータを収集・分析する", "広告のクリエイティブを制作する"],
                    answer: 1,
                    explanation: "DSPはDemand（需要＝広告主）側のプラットフォームで、複数の広告枠に対して自動的に入札を行う役割を持ちます。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "成果報酬型の広告モデルを持つ広告手法はどれですか？",
                    options: ["検索広告", "ディスプレイ広告", "ネイティブ広告", "アフィリエイト広告"],
                    answer: 3,
                    explanation: "アフィリエイト広告は、商品購入や会員登録などの成果が発生した場合にのみ広告費が発生する成果報酬型の広告です。"
                },
                {
                    id: "q101_4",
                    type: "fill",
                    question: "RTBにおいて、DSPが入札額を決定するまでの時間は約何秒以内ですか？（数字で）",
                    answer: "0.1",
                    explanation: "RTB（リアルタイム入札）では、DSPがユーザー情報とDMPデータをもとに約0.1秒以内に入札額を決定します。"
                }
            ]
        },
        {
            id: 102,
            title: "広告の基本指標（KPI）",
            duration: "18分",
            content: `
<h2>デジタル広告の主要指標</h2>
<p>デジタル広告の運用において、パフォーマンスを正確に測定するためには<strong>KPI（重要業績評価指標）</strong>の理解が不可欠です。ここでは広告運用で頻繁に使用される指標を体系的に学びます。</p>

<h2>リーチとインプレッション</h2>

<h3>インプレッション（Impression / imp）</h3>
<p>広告が<strong>表示された回数</strong>です。1人のユーザーに3回表示されれば、インプレッションは3です。</p>

<h3>リーチ（Reach）</h3>
<p>広告が表示された<strong>ユニークユーザー数</strong>です。1人のユーザーに3回表示されても、リーチは1です。</p>

<h3>フリークエンシー（Frequency）</h3>
<p>1人のユーザーに広告が表示された<strong>平均回数</strong>です。</p>

<div class="info-box formula">
<div class="info-box-title">フリークエンシーの計算式</div>
<p><strong>フリークエンシー = インプレッション ÷ リーチ</strong></p>
<p>例：インプレッション 30,000回 ÷ リーチ 10,000人 = フリークエンシー <strong>3.0回</strong></p>
</div>

<div class="info-box tip">
<div class="info-box-title">実務でのポイント</div>
フリークエンシーが高すぎると「広告疲れ」を起こし、ユーザーの反応が悪くなります。一般的に、ディスプレイ広告では<strong>3〜5回</strong>、動画広告では<strong>2〜3回</strong>がフリークエンシーキャップの目安です。
</div>

<h2>CTR（クリック率）</h2>
<p>広告が表示された回数のうち、何％がクリックされたかを示す指標です。広告クリエイティブの良し悪しを判断する基本指標です。</p>

<div class="info-box formula">
<div class="info-box-title">CTRの計算式</div>
<p><strong>CTR（%）= クリック数 ÷ インプレッション × 100</strong></p>
<p>例：クリック数 500 ÷ インプレッション 50,000 × 100 = CTR <strong>1.0%</strong></p>
</div>

<div class="info-box tip">
<div class="info-box-title">CTRの目安</div>
<ul>
<li>検索広告：<strong>3〜10%</strong>（キーワードの意図により変動）</li>
<li>ディスプレイ広告：<strong>0.1〜0.5%</strong></li>
<li>SNS広告：<strong>0.5〜2.0%</strong></li>
<li>動画広告：<strong>0.5〜3.0%</strong>（形式による）</li>
</ul>
</div>

<h2>CPC（クリック単価）</h2>
<p>1クリックあたりにかかった広告費です。検索広告やSNS広告で主要な課金指標として使われます。</p>

<div class="info-box formula">
<div class="info-box-title">CPCの計算式</div>
<p><strong>CPC = 広告費 ÷ クリック数</strong></p>
<p>例：広告費 100,000円 ÷ クリック数 500 = CPC <strong>200円</strong></p>
</div>

<h2>CPM（インプレッション単価）</h2>
<p>広告を<strong>1,000回表示</strong>するためにかかる費用です。ディスプレイ広告や動画広告で主要な課金指標です。</p>

<div class="info-box formula">
<div class="info-box-title">CPMの計算式</div>
<p><strong>CPM = 広告費 ÷ インプレッション × 1,000</strong></p>
<p>例：広告費 50,000円 ÷ インプレッション 100,000 × 1,000 = CPM <strong>500円</strong></p>
</div>

<h2>CVR（コンバージョン率）</h2>
<p>広告をクリックしたユーザーのうち、何％が<strong>コンバージョン（目標達成）</strong>に至ったかを示す指標です。ランディングページの最適化に直結します。</p>

<div class="info-box formula">
<div class="info-box-title">CVRの計算式</div>
<p><strong>CVR（%）= コンバージョン数 ÷ クリック数 × 100</strong></p>
<p>例：コンバージョン数 20 ÷ クリック数 500 × 100 = CVR <strong>4.0%</strong></p>
</div>

<div class="info-box tip">
<div class="info-box-title">コンバージョンの定義例</div>
<ul>
<li>ECサイト：商品購入</li>
<li>BtoBサイト：資料請求・問い合わせ</li>
<li>アプリ：インストール・会員登録</li>
<li>人材サービス：応募完了</li>
</ul>
コンバージョンの定義は<strong>ビジネスの目的に応じて設定</strong>するもので、業種や案件ごとに異なります。
</div>

<h2>CPA（獲得単価）</h2>
<p>1件のコンバージョンを獲得するためにかかった広告費です。<strong>広告運用の費用対効果</strong>を測る最も重要な指標の一つです。</p>

<div class="info-box formula">
<div class="info-box-title">CPAの計算式</div>
<p><strong>CPA = 広告費 ÷ コンバージョン数</strong></p>
<p>例：広告費 100,000円 ÷ コンバージョン数 20 = CPA <strong>5,000円</strong></p>
<p>別の計算方法：<strong>CPA = CPC ÷ CVR</strong></p>
<p>例：CPC 200円 ÷ CVR 4% = CPA <strong>5,000円</strong></p>
</div>

<h2>ROAS（広告費用対効果）</h2>
<p>投下した広告費に対して、どれだけの<strong>売上</strong>を獲得できたかを示す指標です。ECサイトなど売上が直接計測できるビジネスで重要視されます。</p>

<div class="info-box formula">
<div class="info-box-title">ROASの計算式</div>
<p><strong>ROAS（%）= 売上 ÷ 広告費 × 100</strong></p>
<p>例：売上 500,000円 ÷ 広告費 100,000円 × 100 = ROAS <strong>500%</strong></p>
<p>ROAS 500%は「広告費1円あたり5円の売上」を意味します。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">ROASとROIの違い</div>
<ul>
<li><strong>ROAS</strong> = 売上 ÷ 広告費 × 100（売上ベース）</li>
<li><strong>ROI</strong> = （利益 − 広告費）÷ 広告費 × 100（利益ベース）</li>
</ul>
ROASが高くても、原価率が高ければ利益が出ないこともあります。ROASだけでなくROIも合わせて確認することが重要です。
</div>

<h2>LTV（顧客生涯価値）</h2>
<p>1人の顧客が取引を開始してから終了するまでにもたらす<strong>総収益</strong>です。CPA上限を決める際の基準として使われます。</p>

<div class="info-box formula">
<div class="info-box-title">LTVの計算式</div>
<p><strong>LTV = 平均購入額 × 購入回数 × 継続期間</strong></p>
<p>例：平均購入額 5,000円 × 購入回数 年4回 × 継続期間 3年 = LTV <strong>60,000円</strong></p>
<p>この場合、CPA上限は LTV × 目標利益率で設定されます。</p>
<p>例：LTV 60,000円 × 目標利益率 30% = CPA上限 <strong>18,000円</strong></p>
</div>

<h2>指標の関係性まとめ</h2>
<table>
<tr><th>指標</th><th>計算式</th><th>意味</th><th>改善アクション</th></tr>
<tr><td><strong>CTR</strong></td><td>クリック数 ÷ imp × 100</td><td>広告の訴求力</td><td>広告文・クリエイティブ改善</td></tr>
<tr><td><strong>CPC</strong></td><td>広告費 ÷ クリック数</td><td>集客コスト</td><td>入札調整・品質スコア改善</td></tr>
<tr><td><strong>CPM</strong></td><td>広告費 ÷ imp × 1,000</td><td>露出コスト</td><td>ターゲティング精度向上</td></tr>
<tr><td><strong>CVR</strong></td><td>CV数 ÷ クリック数 × 100</td><td>LP・サイトの成約力</td><td>LP改善・ターゲティング最適化</td></tr>
<tr><td><strong>CPA</strong></td><td>広告費 ÷ CV数</td><td>獲得効率</td><td>CVR改善 or CPC削減</td></tr>
<tr><td><strong>ROAS</strong></td><td>売上 ÷ 広告費 × 100</td><td>売上の投資効率</td><td>客単価向上・CVR改善</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "広告費50,000円でインプレッション100,000回のとき、CPMはいくらですか？",
                    options: ["50円", "200円", "500円", "5,000円"],
                    answer: 2,
                    explanation: "CPM = 広告費 ÷ インプレッション × 1,000 = 50,000 ÷ 100,000 × 1,000 = 500円です。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "広告費100,000円、クリック数500、コンバージョン数20のときCPAはいくらですか？",
                    options: ["200円", "2,000円", "5,000円", "50,000円"],
                    answer: 2,
                    explanation: "CPA = 広告費 ÷ コンバージョン数 = 100,000 ÷ 20 = 5,000円です。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "ROAS 500%の意味として正しいものはどれですか？",
                    options: ["広告費の5倍の利益を得た", "広告費の5倍の売上を得た", "広告費の50%の売上を得た", "広告費1円あたり50円の売上を得た"],
                    answer: 1,
                    explanation: "ROAS 500%は「広告費に対して5倍の売上を得た」（広告費1円あたり5円の売上）という意味です。ROASは売上ベースなので利益ではありません。"
                },
                {
                    id: "q102_4",
                    type: "fill",
                    question: "LTVの計算式を完成させてください: LTV = 平均購入額 × 購入回数 × ＿＿＿＿",
                    answer: "継続期間",
                    explanation: "LTV（顧客生涯価値）= 平均購入額 × 購入回数 × 継続期間 で計算されます。"
                }
            ]
        },
        {
            id: 103,
            title: "広告プラットフォーム概要",
            duration: "15分",
            content: `
<h2>主要デジタル広告プラットフォーム</h2>
<p>デジタル広告は、それぞれ異なる特徴を持つ<strong>プラットフォーム</strong>を通じて配信されます。運用担当者は各プラットフォームの特性を理解し、広告目的やターゲットに応じて最適な媒体を選択する必要があります。</p>

<h2>Google Ads</h2>
<p><strong>世界最大の広告プラットフォーム</strong>で、検索広告・ディスプレイ広告・動画広告（YouTube）・ショッピング広告・アプリ広告など多様な広告フォーマットを提供しています。</p>
<ul>
<li><strong>検索広告:</strong> Google検索結果に表示されるテキスト広告</li>
<li><strong>GDN（Google Display Network）:</strong> 200万以上のWebサイト・アプリに広告を配信</li>
<li><strong>YouTube広告:</strong> 動画プレロール・インストリーム等</li>
<li><strong>P-MAX:</strong> AIが全チャネルを横断的に最適化する自動キャンペーン</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">Google Adsの強み</div>
Google検索は日本の検索エンジンシェアの約<strong>75%</strong>を占めます。検索意図が明確なユーザーにアプローチできるため、高いCVRが期待できます。
</div>

<h2>Yahoo!広告</h2>
<p>日本独自の大規模広告プラットフォームで、Yahoo! JAPANの各種サービスに広告を配信できます。</p>
<ul>
<li><strong>検索広告:</strong> Yahoo! JAPAN検索結果に表示</li>
<li><strong>YDA（Yahoo!ディスプレイ広告）:</strong> Yahoo!ニュース等のサービスに配信</li>
<li>日本のPCユーザーのリーチが特に強い</li>
</ul>

<h2>Meta広告（Facebook / Instagram）</h2>
<p>Facebook・Instagram・Messenger・Audience Networkに広告を配信できます。<strong>詳細なユーザー属性データ</strong>による精密ターゲティングが最大の強みです。</p>
<ul>
<li>年齢・性別・興味関心・行動パターンによるターゲティング</li>
<li>類似オーディエンス（Lookalike）による拡張配信</li>
<li>Advantage+ショッピングキャンペーンによるEC向け自動最適化</li>
</ul>

<h2>LINE広告</h2>
<p>日本国内で<strong>月間アクティブユーザー9,700万人</strong>を超えるLINEプラットフォームに広告を配信します。</p>
<ul>
<li>トークリスト・LINE NEWS・LINE VOOMなどの配信面</li>
<li>幅広い年齢層へのリーチが強み</li>
<li>公式アカウントとの連携で友だち追加広告も可能</li>
</ul>

<h2>X広告（旧Twitter広告）</h2>
<p>リアルタイム性と拡散力が特徴の広告プラットフォームです。</p>
<ul>
<li>プロモツイート・プロモトレンドなど</li>
<li>ハッシュタグを活用したキャンペーン</li>
<li>トレンドやイベントに合わせた即時性のある広告展開が得意</li>
</ul>

<h2>TikTok広告</h2>
<p>ショート動画プラットフォームでの広告配信で、特に<strong>若年層（10〜30代）</strong>へのリーチに強みを持ちます。</p>
<ul>
<li>インフィード広告（おすすめフィードに自然に表示）</li>
<li>TopView広告（アプリ起動時の全画面広告）</li>
<li>ブランドエフェクト・ハッシュタグチャレンジ</li>
</ul>

<h2>プラットフォーム比較表</h2>

<table>
<tr><th>プラットフォーム</th><th>国内MAU</th><th>主なユーザー層</th><th>強み</th><th>主な課金方式</th></tr>
<tr><td><strong>Google Ads</strong></td><td>検索シェア約75%</td><td>全年齢</td><td>検索意図に基づく高CVR</td><td>CPC / CPM / CPV</td></tr>
<tr><td><strong>Yahoo!広告</strong></td><td>約8,500万</td><td>30〜50代中心</td><td>日本独自の大規模リーチ</td><td>CPC / CPM</td></tr>
<tr><td><strong>Meta広告</strong></td><td>約6,000万（FB+IG）</td><td>20〜40代（IG）、30〜50代（FB）</td><td>精密なターゲティング</td><td>CPC / CPM</td></tr>
<tr><td><strong>LINE広告</strong></td><td>約9,700万</td><td>全年齢</td><td>国内最大級のリーチ</td><td>CPC / CPM</td></tr>
<tr><td><strong>X広告</strong></td><td>約6,700万</td><td>20〜40代</td><td>拡散力・リアルタイム性</td><td>CPC / CPM / CPE</td></tr>
<tr><td><strong>TikTok広告</strong></td><td>約2,800万</td><td>10〜30代</td><td>若年層リーチ・高エンゲージメント</td><td>CPM / CPV / oCPM</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">プラットフォーム選定のポイント</div>
<ul>
<li><strong>ターゲット:</strong> 誰に届けたいかでプラットフォームを選ぶ</li>
<li><strong>目的:</strong> 認知拡大ならディスプレイ/動画、コンバージョン獲得なら検索広告</li>
<li><strong>予算:</strong> 最低出稿金額やCPC/CPMの水準を確認する</li>
<li><strong>クリエイティブ:</strong> テキスト/画像/動画など、用意できる素材に合わせる</li>
</ul>
1つのプラットフォームに依存せず、<strong>複数の媒体を組み合わせたメディアミックス</strong>が効果的です。
</div>
            `,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "日本国内で月間アクティブユーザー数が最も多い広告プラットフォームはどれですか？",
                    options: ["Google Ads", "Meta広告", "LINE広告", "Yahoo!広告"],
                    answer: 2,
                    explanation: "LINE広告は国内MAU約9,700万人で、日本で最もユーザー数が多い広告プラットフォームです。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "Meta広告の最大の強みとして正しいものはどれですか？",
                    options: ["検索意図に基づくリーチ", "ユーザー属性データによる精密ターゲティング", "リアルタイム性と拡散力", "若年層への高リーチ"],
                    answer: 1,
                    explanation: "Meta広告は年齢・性別・興味関心・行動パターンなど詳細なユーザー属性データによる精密ターゲティングが最大の強みです。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "Google Adsの自動最適化キャンペーンで、全チャネルを横断的に最適化する機能は何ですか？",
                    options: ["スマートキャンペーン", "P-MAX", "ディスカバリーキャンペーン", "アプリキャンペーン"],
                    answer: 1,
                    explanation: "P-MAX（Performance Max）はAIが検索・ディスプレイ・YouTube・Gmail等の全チャネルを横断的に最適化する自動キャンペーンです。"
                },
                {
                    id: "q103_4",
                    type: "fill",
                    question: "Yahoo!のディスプレイ広告ネットワークの略称は？（アルファベット3文字）",
                    answer: "YDA",
                    explanation: "YDA（Yahoo!ディスプレイ広告）は、Yahoo!ニュースなどYahoo! JAPANの各種サービスに広告を配信するネットワークです。"
                }
            ]
        },
        {
            id: 104,
            title: "広告アカウント構造と入札の基本",
            duration: "15分",
            content: `
<h2>広告アカウントの階層構造</h2>
<p>Google AdsやYahoo!広告をはじめとする多くの広告プラットフォームでは、広告の管理に<strong>階層構造</strong>を採用しています。この構造を正しく理解することが、効果的な広告運用の基盤となります。</p>

<div class="visual-box">
<div class="visual-box-title">広告アカウントの4層構造</div>
<div style="font-size:0.85rem;text-align:left;max-width:550px;margin:0 auto;">
<table>
<tr><th>階層</th><th>役割</th><th>設定項目</th></tr>
<tr><td><strong>アカウント</strong></td><td>広告運用の最上位単位</td><td>支払い情報、アクセス権限、リンク設定</td></tr>
<tr><td><strong>キャンペーン</strong></td><td>予算・配信設定の管理単位</td><td>日予算、配信スケジュール、地域、入札戦略</td></tr>
<tr><td><strong>広告グループ</strong></td><td>ターゲティングの管理単位</td><td>キーワード、ターゲット、入札単価</td></tr>
<tr><td><strong>広告</strong></td><td>ユーザーに表示される実体</td><td>広告文、見出し、説明文、URL、画像・動画</td></tr>
</table>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">構造設計のベストプラクティス</div>
<ul>
<li><strong>キャンペーン:</strong> 予算を分けたい単位で分割する（例：ブランドワード / 一般ワード / 競合ワード）</li>
<li><strong>広告グループ:</strong> テーマ・意図が似たキーワードをまとめる（1広告グループに5〜20キーワードが目安）</li>
<li><strong>広告:</strong> 1つの広告グループに<strong>最低3つ以上</strong>の広告を入れてA/Bテストを行う</li>
</ul>
</div>

<h3>階層構造の具体例</h3>
<p>例えば、ECサイトで靴を販売する場合：</p>

<table>
<tr><th>階層</th><th>具体例</th></tr>
<tr><td>アカウント</td><td>〇〇靴店 Google Ads</td></tr>
<tr><td>キャンペーン①</td><td>ブランドワードキャンペーン（日予算: 5,000円）</td></tr>
<tr><td>　└ 広告グループA</td><td>「〇〇靴店」関連ワード</td></tr>
<tr><td>　　└ 広告</td><td>公式サイトへの誘導広告</td></tr>
<tr><td>キャンペーン②</td><td>一般ワードキャンペーン（日予算: 30,000円）</td></tr>
<tr><td>　└ 広告グループB</td><td>「スニーカー 通販」関連ワード</td></tr>
<tr><td>　　└ 広告</td><td>スニーカー特集ページへの広告</td></tr>
<tr><td>　└ 広告グループC</td><td>「ビジネスシューズ おすすめ」関連ワード</td></tr>
<tr><td>　　└ 広告</td><td>ビジネスシューズ特集ページへの広告</td></tr>
</table>

<h2>入札方式の種類</h2>
<p>広告の掲載順位やインプレッションを獲得するためには、<strong>入札</strong>が必要です。入札方式にはさまざまな種類があり、目的に応じて選択します。</p>

<table>
<tr><th>入札戦略</th><th>概要</th><th>適した目的</th><th>自動/手動</th></tr>
<tr><td><strong>手動CPC</strong></td><td>キーワードごとに入札額を手動設定</td><td>細かいコントロールが必要な場合</td><td>手動</td></tr>
<tr><td><strong>拡張CPC（eCPC）</strong></td><td>手動CPCをベースにAIが入札額を自動調整</td><td>手動+自動のハイブリッド</td><td>半自動</td></tr>
<tr><td><strong>クリック数最大化</strong></td><td>予算内でクリック数を最大化</td><td>トラフィック重視</td><td>自動</td></tr>
<tr><td><strong>インプレッションシェア最大化</strong></td><td>指定したインプレッションシェアを目指す</td><td>ブランド認知・競合対策</td><td>自動</td></tr>
<tr><td><strong>目標CPA</strong></td><td>設定したCPA目標値に向けて自動入札</td><td>コンバージョン数の効率的な獲得</td><td>自動</td></tr>
<tr><td><strong>コンバージョン数最大化</strong></td><td>予算内でコンバージョン数を最大化</td><td>CV数を増やしたい場合</td><td>自動</td></tr>
<tr><td><strong>目標ROAS</strong></td><td>設定したROAS目標値に向けて自動入札</td><td>売上の投資効率を重視するEC</td><td>自動</td></tr>
<tr><td><strong>コンバージョン値最大化</strong></td><td>予算内でコンバージョン値（売上）を最大化</td><td>売上金額を最大化したい場合</td><td>自動</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">自動入札の注意点</div>
自動入札戦略を使うには、十分な<strong>コンバージョンデータ</strong>が必要です。Google Adsでは目標CPA入札に最低<strong>過去30日間で30件以上</strong>のコンバージョンが推奨されています。データが不足している段階では手動CPCから始め、データが蓄積されてから自動入札に移行するのがベストプラクティスです。
</div>

<h2>品質スコアとAd Rank</h2>
<p>Google Adsの検索広告では、<strong>入札額だけでなく広告の品質</strong>も掲載順位に影響します。この仕組みが<strong>品質スコア</strong>と<strong>Ad Rank（広告ランク）</strong>です。</p>

<h3>品質スコアの3つの要素</h3>
<table>
<tr><th>要素</th><th>評価対象</th><th>改善方法</th></tr>
<tr><td><strong>広告の関連性</strong></td><td>キーワードと広告文の一致度</td><td>キーワードを広告文に含める</td></tr>
<tr><td><strong>推定CTR</strong></td><td>広告がクリックされる確率の予測値</td><td>魅力的な広告文の作成</td></tr>
<tr><td><strong>LP（ランディングページ）の品質</strong></td><td>LPの関連性・利便性・読み込み速度</td><td>LP最適化、表示速度改善</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">Ad Rank（広告ランク）の計算式</div>
<p><strong>Ad Rank = 入札額 × 品質スコア（＋広告表示オプション等の効果）</strong></p>
<p>例：</p>
<ul>
<li>広告主A：入札額 300円 × 品質スコア 8 = Ad Rank <strong>2,400</strong></li>
<li>広告主B：入札額 500円 × 品質スコア 4 = Ad Rank <strong>2,000</strong></li>
</ul>
<p>この場合、<strong>入札額が低い広告主Aが上位に掲載</strong>されます。品質スコアを上げることで、低いコストで上位表示が可能になります。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">品質スコアの実務的な目安</div>
<ul>
<li><strong>8〜10:</strong> 優秀。現状維持しつつ入札を最適化</li>
<li><strong>5〜7:</strong> 平均的。広告文やLPの改善余地あり</li>
<li><strong>1〜4:</strong> 要改善。広告の関連性やLPを大幅に見直す</li>
</ul>
品質スコアはキーワードごとに算出されます。アカウント全体ではなく、個々のキーワードに対して改善施策を行うことが重要です。
</div>

<h2>実際のCPC計算</h2>
<p>Google Adsでは、<strong>オークション方式</strong>で実際のCPCが決まります。最高入札額を支払うわけではありません。</p>

<div class="info-box formula">
<div class="info-box-title">実際のCPCの計算式</div>
<p><strong>実際のCPC = 次順位のAd Rank ÷ 自分の品質スコア ＋ 1円</strong></p>
<p>例：次順位のAd Rank 2,000 ÷ 自分の品質スコア 8 ＋ 1円 = 実際のCPC <strong>251円</strong></p>
<p>入札額300円に対して、実際の支払いは251円で済みます。</p>
</div>
            `,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "Google Adsのアカウント構造で、日予算を設定する階層はどれですか？",
                    options: ["アカウント", "キャンペーン", "広告グループ", "広告"],
                    answer: 1,
                    explanation: "日予算はキャンペーン単位で設定します。キャンペーンは予算と配信設定の管理単位です。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "広告主Aの入札額200円・品質スコア10と、広告主Bの入札額400円・品質スコア4の場合、上位に表示されるのはどちらですか？",
                    options: ["広告主A（Ad Rank: 2,000）", "広告主B（Ad Rank: 1,600）", "入札額が高い広告主B", "品質スコアでは判断できない"],
                    answer: 0,
                    explanation: "Ad Rank = 入札額 × 品質スコアで計算します。A: 200×10=2,000、B: 400×4=1,600。Ad Rankが高い広告主Aが上位に表示されます。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "Google Adsで目標CPA入札を使用する際に推奨される最低コンバージョン数は？",
                    options: ["過去30日間で10件以上", "過去30日間で30件以上", "過去30日間で50件以上", "過去30日間で100件以上"],
                    answer: 1,
                    explanation: "Google Adsでは目標CPA入札に最低過去30日間で30件以上のコンバージョンが推奨されています。"
                },
                {
                    id: "q104_4",
                    type: "fill",
                    question: "品質スコアの3要素は「広告の関連性」「推定CTR」とあと1つは何ですか？（LP○○○○）",
                    answer: "LPの品質",
                    explanation: "品質スコアの3要素は「広告の関連性」「推定CTR（予想クリック率）」「LP（ランディングページ）の品質」です。"
                }
            ]
        }
    ]
};
