/* ============================================
   Level 4: 動画広告・その他の広告
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "動画広告・その他の広告",
    icon: "🎬",
    description: "YouTube、TikTok、アフィリエイト、ネイティブ広告を学ぶ",
    modules: [
        {
            id: 401,
            title: "YouTube広告",
            duration: "15分",
            content: `
<h2>YouTube広告の概要</h2>
<p>YouTubeは世界で<strong>月間アクティブユーザー20億人以上</strong>、日本国内でも<strong>月間7,120万人以上</strong>が利用する世界最大の動画プラットフォームです。Google広告の管理画面から出稿でき、Googleのオーディエンスデータを活用した精密なターゲティングが可能です。</p>

<h2>フォーマット一覧</h2>
<table>
<tr><th>フォーマット</th><th>表示位置</th><th>尺</th><th>課金方式</th><th>特徴</th></tr>
<tr><td>スキップ可能なインストリーム</td><td>動画の前後・途中</td><td>制限なし（5秒後スキップ可）</td><td>CPV（30秒視聴 or クリック）</td><td>最も一般的。認知〜コンバージョンまで幅広く活用</td></tr>
<tr><td>スキップ不可のインストリーム</td><td>動画の前後・途中</td><td>15秒以下</td><td>CPM（1,000回表示課金）</td><td>完全視聴が保証。ブランディング向き</td></tr>
<tr><td>バンパー広告</td><td>動画の前後・途中</td><td>6秒以下</td><td>CPM</td><td>短尺で強いインパクト。認知拡大に最適</td></tr>
<tr><td>インフィード動画広告</td><td>検索結果・関連動画欄</td><td>制限なし</td><td>CPC（サムネイルクリック時）</td><td>ユーザーの能動的な視聴。検討段階向き</td></tr>
<tr><td>マストヘッド広告</td><td>YouTubeトップページ最上部</td><td>最大30秒（自動再生）</td><td>固定費（予約制）</td><td>最大リーチ。新商品ローンチ・大型キャンペーン</td></tr>
<tr><td>YouTube Shorts広告</td><td>Shortsフィード内</td><td>60秒以下（縦型）</td><td>CPV / CPM</td><td>若年層リーチ。TikTok対抗の短尺動画面</td></tr>
</table>

<h2>課金方式の詳細</h2>
<div class="info-box tip">
<div class="info-box-title">CPV（Cost Per View）とCPM（Cost Per Mille）</div>
<ul>
<li><strong>CPV:</strong> ユーザーが動画を30秒間（30秒未満の動画は最後まで）視聴するか、広告をクリックした場合に課金。相場は<strong>3〜20円/視聴</strong></li>
<li><strong>CPM:</strong> 広告が1,000回表示されるごとに課金。相場は<strong>300〜700円/1,000回</strong></li>
<li><strong>使い分け:</strong> 認知目的ならCPM（バンパー/スキップ不可）、検討・行動目的ならCPV（スキップ可能）</li>
</ul>
</div>

<h3>ターゲティング</h3>
<p>YouTube広告ではGoogle広告と同じ豊富なターゲティングが利用できます。</p>
<ul>
<li><strong>デモグラフィック:</strong> 年齢・性別・世帯年収・子供の有無</li>
<li><strong>アフィニティ:</strong> 興味関心に基づくカテゴリ</li>
<li><strong>購買意向:</strong> 特定の商品・サービスを検討中のユーザー</li>
<li><strong>カスタムオーディエンス:</strong> キーワード・URL・アプリに基づく独自セグメント</li>
<li><strong>リマーケティング:</strong> チャンネル登録者・動画視聴者・サイト訪問者</li>
<li><strong>コンテンツターゲティング:</strong> 特定チャンネル・動画・トピックへの配信</li>
</ul>

<h2>動画広告ABCD法則</h2>
<p>Googleが提唱する効果的な動画広告制作のフレームワークが<strong>ABCD法則</strong>です。</p>

<div class="info-box formula">
<div class="info-box-title">ABCD法則</div>
<table>
<tr><th>要素</th><th>意味</th><th>ポイント</th></tr>
<tr><td><strong>A - Attract</strong></td><td>注目を集める</td><td>冒頭5秒で引きつける。人物の顔、動き、サプライズ要素</td></tr>
<tr><td><strong>B - Brand</strong></td><td>ブランドを伝える</td><td>早い段階でブランド名・ロゴを表示。音声でも言及</td></tr>
<tr><td><strong>C - Connect</strong></td><td>視聴者と結びつける</td><td>感情に訴える。ストーリーテリング、ユーモア、共感</td></tr>
<tr><td><strong>D - Direct</strong></td><td>行動を促す</td><td>明確なCTA（行動喚起）。「今すぐ」「限定」等の緊急性</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">効果的な動画広告のベストプラクティス</div>
<ul>
<li><strong>冒頭5秒が勝負:</strong> スキップ可能広告では最初の5秒で核心メッセージを伝える</li>
<li><strong>音声OFFも想定:</strong> テロップ・字幕を必ず入れる（ミュート視聴も多い）</li>
<li><strong>モバイルファースト:</strong> スマートフォンの小さな画面で視認性を確保</li>
<li><strong>複数バージョンテスト:</strong> 15秒/30秒/6秒など尺違いを用意してテスト</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "YouTube広告で6秒以下のスキップ不可能な短尺フォーマットはどれですか？",
                    options: ["スキップ可能なインストリーム", "スキップ不可のインストリーム", "バンパー広告", "マストヘッド広告"],
                    answer: 2,
                    explanation: "バンパー広告は6秒以下のスキップ不可能な短尺フォーマットで、CPM課金です。短い尺で強いインパクトを与え、認知拡大に最適です。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "YouTube広告のABCD法則で「B」が意味するものはどれですか？",
                    options: ["Budget（予算）", "Brand（ブランド）", "Behavior（行動）", "Benefit（便益）"],
                    answer: 1,
                    explanation: "ABCD法則のBはBrand（ブランド）で、早い段階でブランド名・ロゴを表示し、音声でもブランドに言及することが推奨されます。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "YouTubeのマストヘッド広告の特徴として正しいものはどれですか？",
                    options: ["CPC課金で低予算から始められる", "6秒以下の短尺動画専用", "トップページ最上部に表示され予約制で固定費", "検索結果にのみ表示される"],
                    answer: 2,
                    explanation: "マストヘッド広告はYouTubeトップページ最上部に表示される予約制の広告で、固定費で最大リーチを確保できます。"
                },
                {
                    id: "q401_4",
                    type: "fill",
                    question: "CPVの課金条件として、ユーザーが動画を何秒間視聴すると課金されますか？（数字のみ）",
                    answer: "30",
                    explanation: "CPV（Cost Per View）ではユーザーが動画を30秒間（30秒未満の動画は最後まで）視聴するか、広告をクリックした場合に課金されます。"
                }
            ]
        },
        {
            id: 402,
            title: "TikTok広告",
            duration: "15分",
            content: `
<h2>TikTok広告の概要</h2>
<p>TikTokは世界で<strong>月間アクティブユーザー10億人以上</strong>、日本国内では<strong>約2,800万人</strong>が利用する短尺動画プラットフォームです。10〜20代の若年層を中心に急成長しており、<strong>平均視聴時間は1日約67分</strong>と非常に高いエンゲージメントを誇ります。</p>

<h2>広告フォーマット</h2>
<table>
<tr><th>フォーマット</th><th>概要</th><th>課金方式</th><th>特徴</th></tr>
<tr><td>インフィード広告</td><td>おすすめフィードに表示される動画広告</td><td>CPM / CPC / CPV</td><td>通常投稿と同じ形式で自然に表示。最も一般的</td></tr>
<tr><td>TopView</td><td>アプリ起動時に最初に表示される全画面動画</td><td>固定費（予約型）</td><td>1日1社限定。最大60秒。圧倒的なインパクト</td></tr>
<tr><td>ブランドテイクオーバー</td><td>起動時に3〜5秒表示される静止画/GIF/動画</td><td>固定費（予約型）</td><td>1日1社限定。即座にLP等へ誘導可能</td></tr>
<tr><td>ブランドエフェクト</td><td>ARエフェクトを活用したユーザー参加型広告</td><td>固定費（予約型）</td><td>UGC（ユーザー生成コンテンツ）促進。拡散力大</td></tr>
<tr><td>Spark Ads</td><td>オーガニック投稿やクリエイター投稿を広告として活用</td><td>CPM / CPC</td><td>自然な広告体験。エンゲージメント率が高い</td></tr>
</table>

<h2>短尺動画制作のポイント</h2>
<p>TikTok広告では<strong>「広告らしくない広告」</strong>が成果を上げる傾向にあります。制作時の重要なポイントを押さえましょう。</p>

<div class="info-box tip">
<div class="info-box-title">制作の3ステップ構成</div>
<ol>
<li><strong>フック（冒頭1〜2秒）:</strong> 視聴者の指を止める。「知ってた？」「○○な人必見」等のテキストフック、意外な映像、問いかけ</li>
<li><strong>ボディ（3〜15秒）:</strong> 商品・サービスの価値を伝える。ビフォーアフター、使用シーン、ユーザーレビュー</li>
<li><strong>CTA（最後の2〜3秒）:</strong> 行動を促す。「リンクはプロフィールから」「今すぐチェック」「コメントで教えて」</li>
</ol>
</div>

<h3>TikTok広告クリエイティブの鉄則</h3>
<ul>
<li><strong>縦型（9:16）必須:</strong> フルスクリーン体験が基本。横型動画は大幅にパフォーマンス低下</li>
<li><strong>UGC風:</strong> プロの映像よりスマホ撮影風の方がCTRが高い傾向（公式データで最大+83%）</li>
<li><strong>音楽・音声重要:</strong> TikTokは音声ONで視聴するユーザーが多い（約88%）</li>
<li><strong>テキストオーバーレイ:</strong> 画面上に太字テキストを配置して内容を補強</li>
<li><strong>トレンド活用:</strong> 流行のBGM・エフェクト・フォーマットを取り入れる</li>
</ul>

<h2>TikTok vs YouTube Shorts vs Reels 比較</h2>
<table>
<tr><th>項目</th><th>TikTok</th><th>YouTube Shorts</th><th>Instagram Reels</th></tr>
<tr><td>最大尺</td><td>10分（推奨15〜60秒）</td><td>60秒</td><td>90秒</td></tr>
<tr><td>国内MAU</td><td>約2,800万人</td><td>約7,120万人（YouTube全体）</td><td>約6,600万人（Instagram全体）</td></tr>
<tr><td>主な年齢層</td><td>10〜20代中心</td><td>10〜30代</td><td>20〜30代女性中心</td></tr>
<tr><td>アルゴリズム</td><td>コンテンツベース（興味関心重視）</td><td>YouTube視聴履歴+コンテンツベース</td><td>フォロー+興味関心</td></tr>
<tr><td>広告出稿</td><td>TikTok Ads Manager</td><td>Google広告</td><td>Meta広告マネージャ</td></tr>
<tr><td>EC連携</td><td>TikTok Shop（一部地域）</td><td>YouTubeショッピング</td><td>Instagramショップ</td></tr>
<tr><td>強み</td><td>バイラル力・発見性</td><td>YouTubeからの流入</td><td>ビジュアルブランディング</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">短尺動画広告の市場トレンド</div>
<ul>
<li>短尺動画広告市場は年間<strong>約30%以上</strong>の成長率</li>
<li>2025年には動画広告費全体の<strong>約40%</strong>が短尺動画に集中と予測</li>
<li>3プラットフォームの<strong>クロス配信</strong>で効率的にリーチを最大化する運用が主流</li>
<li>AIによる動画自動生成ツール（CapCut for Business等）の活用が拡大中</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "TikTok広告でアプリ起動時に1日1社限定で最初に表示される全画面動画フォーマットはどれですか？",
                    options: ["インフィード広告", "TopView", "ブランドテイクオーバー", "Spark Ads"],
                    answer: 1,
                    explanation: "TopViewはアプリ起動時に最初に表示される全画面動画広告で、1日1社限定、最大60秒の圧倒的なインパクトを与えるフォーマットです。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "TikTok広告の短尺動画制作で、冒頭1〜2秒の役割は何ですか？",
                    options: ["ブランドロゴの表示", "商品の詳細説明", "視聴者の指を止めるフック", "CTAの提示"],
                    answer: 2,
                    explanation: "冒頭1〜2秒は「フック」として、視聴者のスクロールを止めることが最も重要です。「知ってた？」等のテキストフックや意外な映像が効果的です。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "TikTok広告でUGC風のクリエイティブが推奨される理由はどれですか？",
                    options: ["制作コストが安いから", "プロの映像よりCTRが高い傾向があるから", "TikTokの規約で義務付けられているから", "動画の尺が長くなるから"],
                    answer: 1,
                    explanation: "TikTok公式データによると、UGC風のスマホ撮影的なクリエイティブはプロの映像よりCTRが最大+83%高い傾向があります。"
                },
                {
                    id: "q402_4",
                    type: "fill",
                    question: "TikTokユーザーの音声ON視聴率は約何%ですか？（数字のみ）",
                    answer: "88",
                    explanation: "TikTokでは約88%のユーザーが音声ONで視聴しており、音楽・音声がクリエイティブの重要な要素となっています。"
                }
            ]
        },
        {
            id: 403,
            title: "アフィリエイト広告",
            duration: "15分",
            content: `
<h2>アフィリエイト広告の仕組み</h2>
<p>アフィリエイト広告は<strong>成果報酬型の広告モデル</strong>で、ユーザーが広告経由で商品購入や会員登録などの成果を達成した場合にのみ広告費が発生します。日本のアフィリエイト市場規模は<strong>約4,000億円</strong>（2024年推計）に達しています。</p>

<div class="info-box formula">
<div class="info-box-title">アフィリエイト広告の4者構造</div>
<table>
<tr><th>プレイヤー</th><th>役割</th><th>具体例</th></tr>
<tr><td><strong>広告主</strong></td><td>商品・サービスを提供し、広告費を支払う</td><td>EC事業者、SaaS企業、金融機関</td></tr>
<tr><td><strong>ASP</strong></td><td>広告主とアフィリエイターを仲介するプラットフォーム</td><td>A8.net、バリューコマース</td></tr>
<tr><td><strong>アフィリエイター</strong></td><td>自サイト・SNSで商品を紹介し、成果報酬を得る</td><td>ブロガー、比較サイト運営者、インフルエンサー</td></tr>
<tr><td><strong>ユーザー</strong></td><td>アフィリエイターの紹介を通じて商品を購入・登録</td><td>一般消費者</td></tr>
</table>
</div>

<h3>成果発生の流れ</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>広告主がASPに広告プログラムを登録</strong>
成果条件・報酬額・クリエイティブ素材を設定
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>アフィリエイターがプログラムに提携申請</strong>
承認後、専用のアフィリエイトリンクを取得
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>アフィリエイターが自メディアに広告を掲載</strong>
記事・レビュー・比較コンテンツ等で紹介
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>ユーザーがリンクをクリックして成果達成</strong>
ASPのトラッキングで成果を計測・承認
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>広告主が成果報酬を支払い</strong>
ASPを通じてアフィリエイターに報酬が支払われる
</div>
</div>
</div>

<h2>主要ASP比較</h2>
<table>
<tr><th>ASP名</th><th>登録サイト数</th><th>特徴</th><th>強い業種</th><th>最低支払額</th></tr>
<tr><td>A8.net</td><td>340万以上</td><td>国内最大手。広告主数・案件数No.1</td><td>全般（EC/サービス/金融）</td><td>1,000円</td></tr>
<tr><td>バリューコマース</td><td>94万以上</td><td>Yahoo!ショッピング連携。大手企業案件が豊富</td><td>EC/旅行/金融</td><td>1,000円</td></tr>
<tr><td>もしもアフィリエイト</td><td>70万以上</td><td>W報酬制度。Amazon/楽天との連携が簡単</td><td>物販/EC</td><td>1,000円</td></tr>
<tr><td>アクセストレード</td><td>85万以上</td><td>金融・通信案件に強い。20年以上の実績</td><td>金融/保険/通信/ゲーム</td><td>1,000円</td></tr>
<tr><td>afb（アフィビー）</td><td>非公開</td><td>報酬+消費税分を支払い。美容・健康に強い</td><td>美容/健康/婚活</td><td>777円</td></tr>
</table>

<h2>成果報酬型の種類</h2>
<div class="info-box tip">
<div class="info-box-title">成果報酬の課金モデル</div>
<table>
<tr><th>課金モデル</th><th>正式名称</th><th>概要</th><th>報酬相場</th></tr>
<tr><td><strong>CPA</strong></td><td>Cost Per Action</td><td>特定アクション（購入・申込等）ごとに課金</td><td>商品価格の5〜30%</td></tr>
<tr><td><strong>CPL</strong></td><td>Cost Per Lead</td><td>リード獲得（資料請求・問合せ等）ごとに課金</td><td>500〜10,000円/件</td></tr>
<tr><td><strong>CPI</strong></td><td>Cost Per Install</td><td>アプリインストールごとに課金</td><td>100〜500円/件</td></tr>
<tr><td><strong>CPS</strong></td><td>Cost Per Sale</td><td>販売金額の一定割合を報酬として支払い</td><td>売上の1〜20%</td></tr>
</table>
</div>

<h2>不正対策</h2>
<p>アフィリエイト広告は成果報酬型であるがゆえに、<strong>不正行為（アドフラウド）</strong>のリスクがあります。</p>

<div class="info-box warning">
<div class="info-box-title">主な不正行為と対策</div>
<ul>
<li><strong>自己購入・自己クリック:</strong> アフィリエイター自身による不正成果 → IP・Cookie監視で検知</li>
<li><strong>リスティング違反:</strong> ブランドキーワードでの出稿禁止を無視 → 定期的な検索結果監視</li>
<li><strong>誇大広告・薬機法違反:</strong> 「絶対に痩せる」等の不当表示 → アフィリエイター教育・掲載面監視</li>
<li><strong>Cookie stuffing:</strong> ユーザーの同意なくCookieを付与 → ASP側のトラッキング精度向上</li>
<li><strong>ITP対応:</strong> AppleのITP（Intelligent Tracking Prevention）によるCookie制限 → サーバーサイド計測への移行</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "アフィリエイト広告の4者構造で、広告主とアフィリエイターを仲介する役割は何ですか？",
                    options: ["DSP", "SSP", "ASP", "DMP"],
                    answer: 2,
                    explanation: "ASP（Affiliate Service Provider）が広告主とアフィリエイターを仲介するプラットフォームの役割を担います。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "日本最大手のASPはどれですか？",
                    options: ["バリューコマース", "A8.net", "もしもアフィリエイト", "afb"],
                    answer: 1,
                    explanation: "A8.netは登録サイト数340万以上を誇る国内最大手のASPで、広告主数・案件数ともにNo.1です。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "アプリインストールごとに課金される成果報酬モデルはどれですか？",
                    options: ["CPA", "CPL", "CPI", "CPS"],
                    answer: 2,
                    explanation: "CPI（Cost Per Install）はアプリインストールごとに課金される成果報酬モデルで、相場は100〜500円/件です。"
                },
                {
                    id: "q403_4",
                    type: "fill",
                    question: "日本のアフィリエイト市場規模は2024年推計で約何億円ですか？（数字4桁で）",
                    answer: "4000",
                    explanation: "日本のアフィリエイト市場規模は2024年推計で約4,000億円に達しています。"
                }
            ]
        },
        {
            id: 404,
            title: "ネイティブ広告・リテールメディア",
            duration: "15分",
            content: `
<h2>ネイティブ広告とは</h2>
<p>ネイティブ広告は、<strong>掲載メディアのコンテンツと同じ形式・デザインで表示</strong>される広告です。ユーザーの閲覧体験を妨げず、自然な形で広告メッセージを届けることができます。日本のネイティブ広告市場は<strong>約5,000億円</strong>規模と推定されています。</p>

<h3>ネイティブ広告の種類</h3>
<table>
<tr><th>種類</th><th>概要</th><th>掲載例</th><th>特徴</th></tr>
<tr><td>インフィード型</td><td>コンテンツフィード内に表示</td><td>Yahoo!ニュース、SmartNews、SNSフィード</td><td>最も一般的。CTRが高い</td></tr>
<tr><td>検索連動型</td><td>検索結果に表示される広告</td><td>Google検索、Yahoo!検索</td><td>リスティング広告もネイティブ広告の一種</td></tr>
<tr><td>レコメンドウィジェット型</td><td>「おすすめ記事」枠に表示</td><td>Outbrain、Taboola</td><td>記事コンテンツへの誘導に適する</td></tr>
<tr><td>プロモートリスティング型</td><td>ECサイトの商品一覧に表示</td><td>Amazon、楽天市場</td><td>購買直前のユーザーにリーチ</td></tr>
<tr><td>記事広告（タイアップ）</td><td>メディアの編集記事風に制作</td><td>新聞社、Webメディア</td><td>信頼性が高く深い理解促進</td></tr>
</table>

<h2>主要ネイティブ広告プラットフォーム</h2>

<h3>Outbrain</h3>
<p>世界最大級のレコメンドウィジェットプラットフォームで、<strong>CNN、BBC、朝日新聞</strong>など大手メディアと提携しています。</p>
<ul>
<li><strong>配信面:</strong> 記事下の「おすすめ記事」「あなたにおすすめ」枠</li>
<li><strong>課金方式:</strong> CPC（クリック課金）</li>
<li><strong>平均CPC:</strong> 約20〜60円</li>
<li><strong>強み:</strong> ブランドセーフティの高さ。プレミアムメディアへの限定配信</li>
</ul>

<h3>Taboola</h3>
<p>Outbrainと並ぶ大手レコメンドプラットフォームで、世界<strong>9,000以上のパブリッシャー</strong>と提携しています。</p>
<ul>
<li><strong>配信面:</strong> 記事下・サイドバーのレコメンド枠</li>
<li><strong>課金方式:</strong> CPC</li>
<li><strong>特徴:</strong> 動画コンテンツの配信にも対応。AI最適化が強力</li>
</ul>

<h3>SmartNews Ads</h3>
<p>月間アクティブユーザー<strong>約2,000万人</strong>を持つSmartNews内のネイティブ広告です。</p>
<ul>
<li><strong>フォーマット:</strong> ニュースフィード内のインフィード広告</li>
<li><strong>ターゲティング:</strong> 興味関心、デモグラフィック、曜日・時間帯</li>
<li><strong>強み:</strong> ニュースを能動的に読むユーザーへのリーチ。信頼性が高い</li>
</ul>

<h2>Amazon広告</h2>
<p>Amazonは<strong>世界第3位のデジタル広告プラットフォーム</strong>（Google、Meta に次ぐ）に成長しています。購買直前のユーザーにリーチできるため、<strong>EC事業者にとって最もROASが高い</strong>広告媒体の一つです。</p>

<table>
<tr><th>広告タイプ</th><th>概要</th><th>課金方式</th><th>表示位置</th></tr>
<tr><td>スポンサープロダクト</td><td>検索結果・商品ページに表示される商品広告</td><td>CPC</td><td>検索結果上部・中部、商品詳細ページ</td></tr>
<tr><td>スポンサーブランド</td><td>ブランドロゴ+複数商品を表示</td><td>CPC</td><td>検索結果最上部</td></tr>
<tr><td>スポンサーディスプレイ</td><td>Amazon内外に配信できるディスプレイ広告</td><td>CPC / CPM</td><td>商品ページ、レビュー下、Amazon外サイト</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">Amazon広告の強み</div>
<ul>
<li><strong>購買データ:</strong> 実際の購買履歴に基づくターゲティングが可能</li>
<li><strong>高いROAS:</strong> 購買意欲の高いユーザーに直接リーチ。平均ROAS 4〜8倍</li>
<li><strong>ファネル下部:</strong> 「買いたい」と思っている瞬間にアプローチできる</li>
<li><strong>成長率:</strong> Amazon広告費は前年比<strong>約20%成長</strong>を維持</li>
</ul>
</div>

<h2>リテールメディアの成長</h2>
<p>リテールメディアとは、<strong>小売企業が自社の顧客データと広告プラットフォームを活用</strong>して広告収入を得るビジネスモデルです。Amazon広告はリテールメディアの代表格ですが、日本でも急速に拡大しています。</p>

<ul>
<li><strong>国内事例:</strong> 楽天広告、Yahoo!ショッピング広告、イオンリテールメディア、セブン&アイの「リテールメディアONE」</li>
<li><strong>成長要因:</strong> サードパーティCookieの廃止に伴い、ファーストパーティデータ（購買データ）の価値が上昇</li>
<li><strong>市場規模:</strong> 世界のリテールメディア広告費は<strong>2025年に約1,600億ドル</strong>に到達と予測</li>
</ul>

<h2>DOOH（デジタル屋外広告）</h2>
<p>DOOH（Digital Out of Home）は、<strong>デジタルサイネージを活用した屋外広告</strong>です。従来の看板広告と異なり、時間帯・天候・位置情報に応じた<strong>動的な広告配信</strong>が可能です。</p>

<div class="info-box success">
<div class="info-box-title">DOOHの最新トレンド</div>
<ul>
<li><strong>プログラマティックDOOH:</strong> DSPから屋外サイネージにリアルタイム入札で配信</li>
<li><strong>主要媒体:</strong> 渋谷スクランブル交差点、新宿アルタビジョン、電車内デジタルサイネージ（トレインチャンネル）</li>
<li><strong>3Dビルボード:</strong> 新宿東口の3D巨大猫など、SNSでバズる立体映像広告</li>
<li><strong>計測進化:</strong> スマートフォン位置情報との連動で来店計測が可能に</li>
<li><strong>市場規模:</strong> 日本のDOOH市場は<strong>約1,200億円</strong>（2024年推計）で前年比+15%成長</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "レコメンドウィジェット型のネイティブ広告プラットフォームとして正しいものはどれですか？",
                    options: ["Google Ads", "Meta広告", "Outbrain", "LINE広告"],
                    answer: 2,
                    explanation: "Outbrainは世界最大級のレコメンドウィジェットプラットフォームで、記事下の「おすすめ記事」枠に広告を配信します。Taboolaと並ぶ代表的なサービスです。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "Amazon広告で検索結果最上部にブランドロゴと複数商品を表示するタイプはどれですか？",
                    options: ["スポンサープロダクト", "スポンサーブランド", "スポンサーディスプレイ", "Amazon DSP"],
                    answer: 1,
                    explanation: "スポンサーブランドは検索結果最上部にブランドロゴと複数商品を表示するCPC課金の広告タイプです。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "リテールメディアの成長を後押ししている要因として最も適切なものはどれですか？",
                    options: ["テレビCMの衰退", "サードパーティCookie廃止によるファーストパーティデータの価値上昇", "スマートフォンの普及率低下", "SNS利用者の減少"],
                    answer: 1,
                    explanation: "サードパーティCookieの廃止に伴い、小売企業が持つ購買データ（ファーストパーティデータ）の価値が大幅に上昇し、リテールメディアの成長を後押ししています。"
                },
                {
                    id: "q404_4",
                    type: "fill",
                    question: "デジタルサイネージを活用した屋外広告の略称は？（アルファベット4文字）",
                    answer: "DOOH",
                    explanation: "DOOH（Digital Out of Home）はデジタルサイネージを活用した屋外広告で、プログラマティック配信や3Dビルボードなど進化が著しい分野です。"
                }
            ]
        }
    ]
};
