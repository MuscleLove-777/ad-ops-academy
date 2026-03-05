/* ============================================
   Level 3: ディスプレイ広告・SNS広告
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "ディスプレイ広告・SNS広告",
    icon: "🖼️",
    description: "GDN、YDA、Meta広告、LINE広告、X広告の運用を学ぶ",
    modules: [
        {
            id: 301,
            title: "GDN（Googleディスプレイネットワーク）",
            duration: "15分",
            content: `
<h2>GDNの仕組み</h2>
<p>Googleディスプレイネットワーク（GDN）は、<strong>200万以上のウェブサイト、65万以上のアプリ、Gmail、YouTube</strong>を含む世界最大級のディスプレイ広告ネットワークです。インターネットユーザーの<strong>約90%</strong>にリーチできるとされています。</p>

<div class="info-box tip">
<div class="info-box-title">GDNの基本構造</div>
<ul>
<li><strong>配信面:</strong> ニュースサイト、ブログ、アプリ、Gmail、YouTube</li>
<li><strong>課金方式:</strong> CPC（クリック課金）またはCPM（インプレッション課金）</li>
<li><strong>平均CPC:</strong> 約30〜80円（業種により変動）</li>
<li><strong>平均CTR:</strong> 約0.35〜0.50%</li>
</ul>
</div>

<h2>ターゲティング手法</h2>
<p>GDNは豊富なターゲティングオプションを提供し、目的に応じた精密な配信が可能です。</p>

<table>
<tr><th>カテゴリ</th><th>手法</th><th>概要</th></tr>
<tr><td rowspan="3">オーディエンス系</td><td>アフィニティ</td><td>興味・関心カテゴリ（旅行好き、料理好き等）</td></tr>
<tr><td>購買意向の強いオーディエンス</td><td>特定商品の購入を検討中のユーザー</td></tr>
<tr><td>カスタムオーディエンス</td><td>キーワード・URL・アプリを基に独自セグメント作成</td></tr>
<tr><td rowspan="2">コンテンツ系</td><td>トピック</td><td>特定トピックに関連するページに配信</td></tr>
<tr><td>プレースメント</td><td>指定したサイト・アプリに直接配信</td></tr>
<tr><td rowspan="2">ユーザー属性</td><td>デモグラフィック</td><td>年齢・性別・世帯年収・子供の有無</td></tr>
<tr><td>リマーケティング</td><td>サイト訪問者・動画視聴者への再配信</td></tr>
</table>

<h2>バナーサイズ一覧</h2>
<p>GDNで利用できる主要なバナーサイズは以下の通りです。配信面によって最適なサイズが異なるため、<strong>複数サイズを用意する</strong>ことが推奨されます。</p>

<table>
<tr><th>サイズ（px）</th><th>名称</th><th>配信面</th><th>推奨度</th></tr>
<tr><td>300 x 250</td><td>ミディアムレクタングル</td><td>PC・モバイル両対応</td><td>必須</td></tr>
<tr><td>728 x 90</td><td>リーダーボード</td><td>PC上部</td><td>必須</td></tr>
<tr><td>160 x 600</td><td>ワイドスカイスクレイパー</td><td>PCサイドバー</td><td>推奨</td></tr>
<tr><td>320 x 50</td><td>モバイルバナー</td><td>スマートフォン</td><td>必須</td></tr>
<tr><td>336 x 280</td><td>ラージレクタングル</td><td>PC・モバイル</td><td>推奨</td></tr>
<tr><td>970 x 250</td><td>ビルボード</td><td>PCメイン上部</td><td>任意</td></tr>
<tr><td>320 x 100</td><td>ラージモバイルバナー</td><td>スマートフォン</td><td>推奨</td></tr>
</table>

<h2>レスポンシブディスプレイ広告</h2>
<p>レスポンシブディスプレイ広告（RDA）は、複数の画像・見出し・説明文を入稿すると、<strong>Googleが自動的に最適な組み合わせ</strong>を生成して配信するフォーマットです。</p>

<div class="info-box success">
<div class="info-box-title">RDAのメリット</div>
<ul>
<li><strong>工数削減:</strong> 個別バナーを何種類も制作する必要がない</li>
<li><strong>自動最適化:</strong> 配信面・ユーザーに合わせて最適な組み合わせを自動選択</li>
<li><strong>配信面の拡大:</strong> あらゆるサイズの広告枠に対応できる</li>
<li><strong>入稿素材:</strong> 横長画像（1.91:1）、スクエア画像（1:1）、ロゴ、見出し（最大5個）、説明文（最大5個）</li>
</ul>
</div>

<h2>P-MAXキャンペーン</h2>
<p>P-MAX（Performance Max）は2021年に登場した<strong>Google広告の全配信面を横断</strong>するキャンペーンタイプです。検索、ディスプレイ、YouTube、Gmail、Discover、マップの全てに一つのキャンペーンから配信できます。</p>

<div class="info-box warning">
<div class="info-box-title">P-MAXの注意点</div>
<ul>
<li>配信面やターゲティングの<strong>個別制御が限定的</strong></li>
<li>パフォーマンスの内訳（どの配信面で成果が出ているか）が<strong>見えにくい</strong></li>
<li>十分なコンバージョンデータ（月30件以上推奨）がないと最適化が難しい</li>
<li>既存の検索キャンペーンと<strong>併用が推奨</strong>される</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "GDNがリーチできるインターネットユーザーの割合は約何%とされていますか？",
                    options: ["約50%", "約70%", "約90%", "約99%"],
                    answer: 2,
                    explanation: "GDNは200万以上のウェブサイトを含むネットワークで、インターネットユーザーの約90%にリーチできるとされています。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "GDNのバナーサイズで「ミディアムレクタングル」と呼ばれるサイズはどれですか？",
                    options: ["728 x 90", "300 x 250", "160 x 600", "320 x 50"],
                    answer: 1,
                    explanation: "300 x 250がミディアムレクタングルです。PC・モバイル両対応で、GDNにおいて最も基本的なサイズの一つです。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "P-MAXキャンペーンの特徴として正しいものはどれですか？",
                    options: ["検索広告のみに配信される", "Google広告の全配信面を横断して配信できる", "ディスプレイ広告専用のキャンペーンである", "手動入札のみ対応している"],
                    answer: 1,
                    explanation: "P-MAXは検索、ディスプレイ、YouTube、Gmail、Discover、マップの全配信面に一つのキャンペーンから配信できます。"
                },
                {
                    id: "q301_4",
                    type: "fill",
                    question: "複数の画像・見出し・説明文からGoogleが自動的に最適な組み合わせを生成するディスプレイ広告フォーマットの略称は？（アルファベット3文字）",
                    answer: "RDA",
                    explanation: "RDA（レスポンシブディスプレイ広告）は、入稿した素材からGoogleが自動的に最適な広告を生成して配信するフォーマットです。"
                }
            ]
        },
        {
            id: 302,
            title: "YDA・LINE広告",
            duration: "15分",
            content: `
<h2>YDA（Yahoo!ディスプレイ広告）</h2>
<p>YDA（旧YDN）はYahoo! JAPANが提供するディスプレイ広告プラットフォームです。Yahoo! JAPANトップページやYahoo!ニュースなど、<strong>月間アクティブユーザー約8,400万人</strong>を誇る国内最大級のメディアネットワークに配信できます。</p>

<h3>YDAの主要配信面</h3>
<table>
<tr><th>配信面</th><th>特徴</th><th>主なユーザー層</th></tr>
<tr><td>Yahoo! JAPANトップ</td><td>国内最大級のPV。ブランディングに最適</td><td>30〜60代中心</td></tr>
<tr><td>Yahoo!ニュース</td><td>ニュース記事間に掲載。高い視認性</td><td>幅広い年齢層</td></tr>
<tr><td>Yahoo!メール</td><td>メール一覧画面に配信</td><td>ビジネス層</td></tr>
<tr><td>Yahoo!知恵袋</td><td>Q&Aコンテンツの間に掲載</td><td>若年〜中年層</td></tr>
<tr><td>提携パートナーサイト</td><td>朝日新聞デジタル等の大手メディア</td><td>メディアにより異なる</td></tr>
</table>

<h3>サーチキーワードターゲティング</h3>
<p>YDA独自の強力な機能として<strong>サーチキーワードターゲティング</strong>があります。これはユーザーが<strong>Yahoo!で過去に検索したキーワード</strong>に基づいてディスプレイ広告を配信する手法です。</p>

<div class="info-box tip">
<div class="info-box-title">サーチキーワードターゲティングの活用例</div>
<ul>
<li>「転職」と検索したユーザーに転職サイトのバナーを配信</li>
<li>「ダイエット サプリ」と検索したユーザーに健康食品の広告を表示</li>
<li>検索広告ではカバーしきれない<strong>潜在層への訴求</strong>に有効</li>
<li>リスティング広告（検索連動型）よりもCPCが安い傾向</li>
</ul>
</div>

<h2>LINE広告</h2>
<p>LINE広告は<strong>国内月間アクティブユーザー9,700万人以上</strong>を持つLINEに配信できる広告プラットフォームです。他のSNSではリーチしにくい層にもアプローチでき、日本市場では極めて重要な媒体です。</p>

<h3>LINE広告の配信面</h3>
<table>
<tr><th>配信面</th><th>概要</th><th>特徴</th></tr>
<tr><td>トークリスト</td><td>LINEのトーク一覧画面上部</td><td>最も高いインプレッション。DAU率が非常に高い</td></tr>
<tr><td>LINE NEWS</td><td>ニュースタブ内の記事間</td><td>情報感度の高いユーザーにリーチ</td></tr>
<tr><td>LINE VOOM</td><td>旧タイムライン。動画中心フィード</td><td>動画広告に最適。幅広い年齢層</td></tr>
<tr><td>LINEマンガ</td><td>マンガアプリ内</td><td>10〜30代の若年層</td></tr>
<tr><td>LINEポイント</td><td>ポイントメディア内</td><td>ポイントインセンティブによる高い実行率</td></tr>
<tr><td>LINE広告ネットワーク</td><td>外部アプリへの配信</td><td>LINEアプリ外へのリーチ拡大</td></tr>
</table>

<h3>LINE広告のターゲティング</h3>
<ul>
<li><strong>デモグラフィック:</strong> 年齢・性別・地域・OS</li>
<li><strong>オーディエンスセグメント:</strong> 興味関心（18カテゴリ）、行動データ</li>
<li><strong>オーディエンス配信:</strong> 顧客データ（電話番号・メールアドレス）によるマッチング</li>
<li><strong>類似オーディエンス:</strong> 既存顧客に似た属性のユーザーを自動検出</li>
<li><strong>リターゲティング:</strong> サイト訪問者・アプリイベント等</li>
</ul>

<h3>LINE公式アカウント連携</h3>
<div class="info-box success">
<div class="info-box-title">公式アカウント連携のメリット</div>
<ul>
<li>広告をきっかけに<strong>友だち追加</strong>を促進（CPF: Cost Per Friend）</li>
<li>友だちに対して<strong>メッセージ配信</strong>でリピート促進</li>
<li>友だちのデータを<strong>類似オーディエンス</strong>のソースに活用</li>
<li>クーポン・ショップカードなどCRM施策との連携</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "YDA独自の強力なターゲティング手法はどれですか？",
                    options: ["リマーケティング", "サーチキーワードターゲティング", "類似オーディエンス", "プレースメント指定"],
                    answer: 1,
                    explanation: "サーチキーワードターゲティングは、Yahoo!での過去の検索キーワードに基づいてディスプレイ広告を配信するYDA独自の手法です。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "LINEの国内月間アクティブユーザー数はおよそどのくらいですか？",
                    options: ["約3,000万人", "約5,500万人", "約9,700万人", "約1億5,000万人"],
                    answer: 2,
                    explanation: "LINEの国内月間アクティブユーザーは9,700万人以上で、日本の人口の約77%をカバーしています。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "LINE広告で友だち追加を促進する際のコスト指標はどれですか？",
                    options: ["CPC", "CPM", "CPA", "CPF"],
                    answer: 3,
                    explanation: "CPF（Cost Per Friend）は、LINE公式アカウントの友だち追加1件あたりの獲得コストを表す指標です。"
                },
                {
                    id: "q302_4",
                    type: "fill",
                    question: "Yahoo! JAPANの月間アクティブユーザー数は約何万人ですか？（数字4桁で）",
                    answer: "8400",
                    explanation: "Yahoo! JAPANは月間アクティブユーザー約8,400万人を誇る国内最大級のメディアネットワークです。"
                }
            ]
        },
        {
            id: 303,
            title: "Meta広告（Facebook/Instagram）",
            duration: "15分",
            content: `
<h2>ビジネスマネージャの構造</h2>
<p>Meta広告はFacebook・Instagramに配信できる広告プラットフォームです。世界で<strong>月間アクティブユーザー30億人以上</strong>（Facebook単体）を誇り、日本国内でもInstagramが約6,600万人のアクティブユーザーを持つ主要広告媒体です。</p>

<div class="info-box tip">
<div class="info-box-title">Meta広告のアカウント構造</div>
<ul>
<li><strong>ビジネスマネージャ:</strong> 企業単位の管理アカウント。広告アカウント・ページ・ピクセルを一元管理</li>
<li><strong>広告アカウント:</strong> 予算・支払い・権限を管理する単位</li>
<li><strong>キャンペーン:</strong> 目的（認知・検討・コンバージョン）を設定</li>
<li><strong>広告セット:</strong> ターゲティング・配置・予算・スケジュールを設定</li>
<li><strong>広告:</strong> クリエイティブ（画像/動画/テキスト/CTA）を設定</li>
</ul>
</div>

<h2>広告フォーマット</h2>
<p>Meta広告は多彩なクリエイティブフォーマットを提供しています。</p>

<table>
<tr><th>フォーマット</th><th>概要</th><th>適した目的</th><th>推奨スペック</th></tr>
<tr><td>画像広告</td><td>静止画1枚+テキスト</td><td>認知・トラフィック</td><td>1080x1080px（1:1）推奨</td></tr>
<tr><td>動画広告</td><td>動画+テキスト。最大240分</td><td>エンゲージメント・認知</td><td>15秒以内推奨。4:5比率</td></tr>
<tr><td>カルーセル広告</td><td>最大10枚の画像/動画をスワイプ</td><td>商品カタログ・ストーリーテリング</td><td>1080x1080px（1:1）各カード</td></tr>
<tr><td>コレクション広告</td><td>カバー画像/動画+商品カタログ</td><td>EC・商品販売</td><td>カタログ連携必須</td></tr>
<tr><td>リール広告</td><td>Reels面に配信される縦型動画</td><td>若年層リーチ・認知</td><td>9:16縦型、15〜30秒</td></tr>
</table>

<h2>ターゲティング</h2>

<h3>詳細ターゲティング</h3>
<p>ユーザーのプロフィール情報・行動・興味関心に基づくターゲティングです。</p>
<ul>
<li><strong>利用者層:</strong> 学歴、職業、ライフイベント（結婚、引越し等）</li>
<li><strong>興味・関心:</strong> スポーツ、ファッション、テクノロジー等の細かいカテゴリ</li>
<li><strong>行動:</strong> 購買行動、デバイス利用状況、旅行頻度</li>
</ul>

<h3>カスタムオーディエンス</h3>
<p>自社データを活用して既存の顧客や接触者をターゲティングする手法です。</p>
<ul>
<li><strong>顧客リスト:</strong> メールアドレス・電話番号をアップロードしてマッチング</li>
<li><strong>ウェブサイトトラフィック:</strong> Metaピクセルで計測したサイト訪問者</li>
<li><strong>アプリアクティビティ:</strong> アプリ内の特定アクションを実行したユーザー</li>
<li><strong>エンゲージメント:</strong> Facebook/Instagram上で投稿に反応したユーザー</li>
</ul>

<h3>類似オーディエンス（Lookalike）</h3>
<p>カスタムオーディエンスを基に、<strong>似た特徴を持つ新規ユーザー</strong>を自動的に見つけ出す機能です。類似度は1%〜10%で設定でき、1%が最も類似度が高くなります。</p>

<div class="info-box warning">
<div class="info-box-title">類似オーディエンスのコツ</div>
<ul>
<li>ソースオーディエンスは<strong>1,000〜5,000人</strong>程度が推奨</li>
<li>「全顧客」より「高LTV顧客」のような<strong>質の高いソース</strong>が効果的</li>
<li>まず<strong>1%</strong>から始め、リーチが足りなければ徐々に拡大</li>
</ul>
</div>

<h2>Advantage+キャンペーン</h2>
<p>Advantage+はMeta広告のAIによる<strong>自動最適化キャンペーン</strong>です。ターゲティング・クリエイティブ・配置をAIが自動で最適化し、手動設定の手間を大幅に削減します。</p>

<div class="info-box success">
<div class="info-box-title">Advantage+ショッピングキャンペーン（ASC）</div>
<ul>
<li>EC事業者向けの自動最適化キャンペーン</li>
<li>最大<strong>150個</strong>のクリエイティブを同時テスト</li>
<li>新規顧客と既存顧客の<strong>予算配分を自動調整</strong></li>
<li>従来のキャンペーンと比較して<strong>CPA改善12%</strong>の事例あり</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "Meta広告のアカウント構造で、ターゲティングや予算を設定する階層はどれですか？",
                    options: ["キャンペーン", "広告セット", "広告", "ビジネスマネージャ"],
                    answer: 1,
                    explanation: "広告セットでターゲティング・配置・予算・スケジュールを設定します。キャンペーンは目的、広告はクリエイティブの設定階層です。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "Meta広告の類似オーディエンスで、最も類似度が高い設定は何%ですか？",
                    options: ["0.1%", "1%", "5%", "10%"],
                    answer: 1,
                    explanation: "類似オーディエンスの類似度は1%〜10%で設定でき、1%が最も元のオーディエンスに近い（類似度が高い）設定です。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "最大10枚の画像や動画をスワイプで表示できるMeta広告のフォーマットはどれですか？",
                    options: ["コレクション広告", "カルーセル広告", "リール広告", "画像広告"],
                    answer: 1,
                    explanation: "カルーセル広告は最大10枚の画像や動画をスワイプで表示でき、商品カタログやストーリーテリングに適しています。"
                },
                {
                    id: "q303_4",
                    type: "fill",
                    question: "Meta広告のAIによる自動最適化キャンペーンの名称は？（カタカナ+記号で）",
                    answer: "Advantage+",
                    explanation: "Advantage+はMeta広告のAI自動最適化キャンペーンで、ターゲティング・クリエイティブ・配置を自動で最適化します。"
                }
            ]
        },
        {
            id: 304,
            title: "X広告・その他SNS広告",
            duration: "15分",
            content: `
<h2>X（旧Twitter）広告</h2>
<p>X広告は国内月間アクティブユーザー<strong>約6,700万人</strong>を持つXプラットフォームに配信できる広告です。リアルタイム性・拡散力が高く、<strong>話題性のあるプロモーション</strong>に特に効果的です。</p>

<h3>X広告の種類</h3>
<table>
<tr><th>広告種類</th><th>概要</th><th>課金方式</th><th>活用シーン</th></tr>
<tr><td>プロモ広告（旧プロモツイート）</td><td>タイムラインに表示される通常投稿形式の広告</td><td>エンゲージメント課金 / インプレッション課金</td><td>商品告知・キャンペーン</td></tr>
<tr><td>フォロワー獲得広告</td><td>アカウントのフォローを促進</td><td>CPF（フォロー課金）</td><td>フォロワー増加施策</td></tr>
<tr><td>Xテイクオーバー（トレンド）</td><td>トレンド欄に24時間表示</td><td>固定費（数百万〜数千万円/日）</td><td>大型キャンペーン・新商品発売</td></tr>
<tr><td>Xテイクオーバー（タイムライン）</td><td>ユーザーが最初に見る広告枠</td><td>固定費</td><td>最大リーチの確保</td></tr>
<tr><td>X Amplify</td><td>プレミアムコンテンツ前に動画広告を配信</td><td>CPV（動画視聴課金）</td><td>動画プロモーション</td></tr>
<tr><td>Xライブ</td><td>ライブ配信+プロモーション</td><td>固定費</td><td>イベント・製品発表</td></tr>
</table>

<h3>X広告のターゲティング</h3>
<ul>
<li><strong>フォロワーターゲティング:</strong> 特定アカウントのフォロワーに類似したユーザーに配信</li>
<li><strong>キーワードターゲティング:</strong> 特定のキーワードを投稿・検索したユーザー</li>
<li><strong>興味関心ターゲティング:</strong> 25カテゴリ・350以上のサブトピック</li>
<li><strong>会話ターゲティング:</strong> 特定の話題に参加しているユーザー</li>
<li><strong>イベントターゲティング:</strong> スポーツ大会やテレビ番組等のイベント関連ユーザー</li>
</ul>

<h2>Pinterest広告</h2>
<p>Pinterestは<strong>「未来の計画を立てる」目的</strong>で利用されるビジュアルディスカバリープラットフォームです。国内月間アクティブユーザーは約870万人で、<strong>購買意欲が高いユーザー</strong>が多い点が特徴です。</p>
<ul>
<li><strong>主なフォーマット:</strong> スタンダードピン、動画ピン、カルーセルピン、ショッピングピン</li>
<li><strong>強み:</strong> ピンの保存（リピン）による長期的なリーチ。広告でも自然な表示</li>
<li><strong>適した業種:</strong> ファッション、インテリア、料理、美容、旅行、ウェディング</li>
</ul>

<h2>LinkedIn広告</h2>
<p>LinkedInは<strong>BtoB広告に最適</strong>なプラットフォームです。世界で約10億人のビジネスプロフェッショナルが登録しており、日本でも約400万人が利用しています。</p>
<ul>
<li><strong>ターゲティングの強み:</strong> 会社名、職種、役職、業界、スキル、学歴でピンポイント配信</li>
<li><strong>主なフォーマット:</strong> スポンサードコンテンツ、メッセージ広告、テキスト広告、動画広告</li>
<li><strong>平均CPC:</strong> 約300〜800円（他媒体より高いがBtoBリードの質が高い）</li>
</ul>

<h2>SNSプラットフォーム比較</h2>
<table>
<tr><th>プラットフォーム</th><th>国内MAU</th><th>主な年齢層</th><th>強み</th><th>平均CPC目安</th></tr>
<tr><td>LINE</td><td>9,700万人</td><td>全年齢層</td><td>圧倒的リーチ。日常接点</td><td>30〜100円</td></tr>
<tr><td>X（Twitter）</td><td>6,700万人</td><td>20〜40代</td><td>リアルタイム性・拡散力</td><td>20〜80円</td></tr>
<tr><td>Instagram</td><td>6,600万人</td><td>20〜40代女性中心</td><td>ビジュアル訴求・EC連携</td><td>40〜120円</td></tr>
<tr><td>Facebook</td><td>2,600万人</td><td>30〜50代</td><td>実名制・精緻なターゲティング</td><td>80〜200円</td></tr>
<tr><td>TikTok</td><td>2,800万人</td><td>10〜20代中心</td><td>短尺動画・若年層リーチ</td><td>30〜100円</td></tr>
<tr><td>Pinterest</td><td>870万人</td><td>20〜40代女性</td><td>購買意欲が高い・長期リーチ</td><td>50〜150円</td></tr>
<tr><td>LinkedIn</td><td>400万人</td><td>30〜50代ビジネス層</td><td>BtoBターゲティングの精度</td><td>300〜800円</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">プラットフォーム選定のポイント</div>
<ul>
<li><strong>ターゲット層で選ぶ:</strong> 若年層ならTikTok/Instagram、ビジネス層ならLinkedIn/Facebook</li>
<li><strong>目的で選ぶ:</strong> 認知拡大ならLINE/X、ブランディングならInstagram/Pinterest</li>
<li><strong>予算で選ぶ:</strong> 低予算スタートならX/TikTok、BtoBリードならLinkedInに集中投下</li>
<li><strong>クロスプラットフォーム:</strong> 複数媒体を組み合わせて顧客接点を最大化する戦略が主流</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "X広告でトレンド欄に24時間表示される広告メニューはどれですか？",
                    options: ["プロモ広告", "フォロワー獲得広告", "Xテイクオーバー（トレンド）", "X Amplify"],
                    answer: 2,
                    explanation: "Xテイクオーバー（トレンド）は、トレンド欄の最上部に24時間表示される広告メニューで、大型キャンペーンや新商品発売時に活用されます。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "BtoB広告に最も適しているSNSプラットフォームはどれですか？",
                    options: ["TikTok", "Pinterest", "LinkedIn", "LINE"],
                    answer: 2,
                    explanation: "LinkedInは会社名・職種・役職・業界などでピンポイント配信できるため、BtoB広告に最適なプラットフォームです。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "Pinterestの広告プラットフォームとしての特徴として最も適切なものはどれですか？",
                    options: ["リアルタイム性が高い", "購買意欲が高いユーザーが多い", "BtoB向けに最適", "最もMAUが多い"],
                    answer: 1,
                    explanation: "Pinterestは「未来の計画を立てる」目的で利用されるため、購買意欲が高いユーザーが多く、ピンの保存による長期的なリーチも特徴です。"
                },
                {
                    id: "q304_4",
                    type: "fill",
                    question: "X（旧Twitter）の国内月間アクティブユーザー数は約何万人ですか？（数字4桁で）",
                    answer: "6700",
                    explanation: "X（旧Twitter）の国内月間アクティブユーザーは約6,700万人です。"
                }
            ]
        }
    ]
};
