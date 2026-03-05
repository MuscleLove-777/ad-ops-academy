/* ============================================
   Level 5: 分析・計測・最適化
   ============================================ */
const LEVEL5_DATA = {
    id: 5,
    title: "分析・計測・最適化",
    icon: "📊",
    description: "GA4分析、コンバージョン計測、A/Bテスト、ROAS最適化を学ぶ",
    modules: [
        {
            id: 501,
            title: "GA4とアクセス解析",
            duration: "15分",
            content: `
<h2>GA4（Google Analytics 4）の基本</h2>
<p>GA4はGoogleが提供する最新のアクセス解析ツールです。従来のUA（ユニバーサルアナリティクス）とは異なり、<strong>イベントベースのデータモデル</strong>を採用しています。すべてのユーザー行動が「イベント」として記録されるため、Webサイトとアプリを横断した統合分析が可能です。</p>

<div class="info-box tip">
<div class="info-box-title">GA4 vs UA（ユニバーサルアナリティクス）</div>
<ul>
<li><strong>UA:</strong> ページビュー中心（セッション×ページビュー）のデータモデル</li>
<li><strong>GA4:</strong> イベント中心（すべての行動がイベント）のデータモデル</li>
<li>UAは2023年7月にデータ収集を停止し、GA4への完全移行が完了しています</li>
</ul>
</div>

<h3>GA4のイベントベースモデル</h3>
<p>GA4ではすべてのユーザーインタラクションが<strong>イベント</strong>として記録されます。イベントには4つの種類があります。</p>
<table>
<tr><th>イベント種類</th><th>説明</th><th>例</th></tr>
<tr><td>自動収集イベント</td><td>GA4が自動的に取得するイベント</td><td>page_view, first_visit, session_start</td></tr>
<tr><td>拡張計測イベント</td><td>管理画面でON/OFFするイベント</td><td>scroll, click, file_download, video_start</td></tr>
<tr><td>推奨イベント</td><td>Googleが推奨する命名のイベント</td><td>login, sign_up, purchase, add_to_cart</td></tr>
<tr><td>カスタムイベント</td><td>独自に定義するイベント</td><td>cta_click, form_step2, banner_view</td></tr>
</table>

<h2>GA4の主要指標</h2>
<p>広告運用者が特に注目すべきGA4の指標を理解しましょう。</p>

<table>
<tr><th>指標</th><th>定義</th><th>広告運用での活用</th></tr>
<tr><td>ユーザー数</td><td>サイトに訪問したユニークユーザー数</td><td>広告のリーチ効果の測定</td></tr>
<tr><td>セッション数</td><td>サイト訪問回数（30分間操作がないと新セッション）</td><td>広告経由の流入数の把握</td></tr>
<tr><td>エンゲージメント率</td><td>10秒以上の滞在/CVイベント/2ページ以上閲覧のセッション割合</td><td>広告のトラフィック品質の評価</td></tr>
<tr><td>コンバージョン</td><td>キーイベントとしてマークしたイベント数</td><td>広告の成果測定</td></tr>
<tr><td>イベント数</td><td>全イベントの発生回数</td><td>ユーザー行動の詳細分析</td></tr>
<tr><td>平均エンゲージメント時間</td><td>ユーザーがサイトをアクティブに利用した平均時間</td><td>コンテンツ品質・LP評価</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">注意：「直帰率」の変化</div>
GA4では従来の「直帰率」の定義が変わりました。UAでは「1ページだけ見て離脱した割合」でしたが、GA4では<strong>「エンゲージメントがなかったセッションの割合」</strong>です。つまり、1ページしか見なくても10秒以上滞在すればエンゲージメントありと判定されます。
</div>

<h2>探索レポート</h2>
<p>GA4の<strong>探索レポート</strong>は、標準レポートでは得られない深い分析を行うための機能です。広告運用者にとって特に重要なテンプレートを紹介します。</p>

<h3>主な探索レポートの種類</h3>
<ul>
<li><strong>自由形式:</strong> ディメンションと指標を自由に組み合わせてクロス集計</li>
<li><strong>目標到達プロセス:</strong> CV（コンバージョン）までのステップごとの離脱率を分析</li>
<li><strong>経路データ探索:</strong> ユーザーがどのページ順序でサイトを回遊したか可視化</li>
<li><strong>セグメントの重複:</strong> 複数のユーザーセグメントの共通部分を分析</li>
<li><strong>コホート分析:</strong> 同一期間に流入したユーザー群の長期的な行動を追跡</li>
</ul>

<div class="info-box success">
<div class="info-box-title">探索レポートの活用例</div>
<p><strong>目標到達プロセス</strong>で「広告LP閲覧→フォーム入力開始→確認画面→送信完了」のステップ別離脱率を分析すると、どの段階で改善が必要かが明確になります。例えば、フォーム入力開始から確認画面への遷移率が低ければ、フォームの項目数削減やUI改善が有効です。</p>
</div>

<h2>UTMパラメータによる流入分析</h2>
<p>UTMパラメータは、広告やメール等の<strong>流入元を正確にトラッキング</strong>するためにURLに付与するパラメータです。GA4で広告効果を正しく測定するために必須の仕組みです。</p>

<table>
<tr><th>パラメータ</th><th>役割</th><th>設定例</th></tr>
<tr><td>utm_source</td><td>流入元（どの媒体から来たか）</td><td>google, facebook, newsletter</td></tr>
<tr><td>utm_medium</td><td>メディア種別（どの手段で来たか）</td><td>cpc, display, email, social</td></tr>
<tr><td>utm_campaign</td><td>キャンペーン名</td><td>spring_sale_2026, brand_awareness</td></tr>
<tr><td>utm_term</td><td>検索キーワード（任意）</td><td>running_shoes, diet_supplement</td></tr>
<tr><td>utm_content</td><td>広告バリエーション識別（任意）</td><td>banner_a, text_link</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">UTMパラメータ付きURLの例</div>
<code>https://example.com/lp?utm_source=google&utm_medium=cpc&utm_campaign=spring_sale_2026&utm_content=banner_a</code>
<p>このURLをクリックしたユーザーは、GA4上で「ソース=google / メディア=cpc / キャンペーン=spring_sale_2026」として記録されます。</p>
</div>

<h3>UTMパラメータ命名ルール</h3>
<ul>
<li>小文字で統一する（Google と google が別扱いになるため）</li>
<li>スペースの代わりにアンダースコア（_）を使う</li>
<li>チーム内で命名規則を統一し、ドキュメント化する</li>
<li>Google Adsは自動タグ設定（gclid）があるため、手動UTMと併用に注意</li>
</ul>

<h2>GA4 × Google Ads連携</h2>
<p>GA4とGoogle Adsを連携させることで、広告運用の精度が大幅に向上します。</p>

<h3>連携のメリット</h3>
<ul>
<li><strong>GA4コンバージョンのインポート:</strong> GA4で計測したコンバージョンをGoogle Adsの最適化シグナルとして活用</li>
<li><strong>オーディエンスの共有:</strong> GA4で作成したオーディエンス（例：カート放棄ユーザー）をGoogle Adsのリマーケティングに使用</li>
<li><strong>Google Adsレポートの充実:</strong> GA4上でGoogle Adsキャンペーンごとのサイト内行動を詳細分析</li>
<li><strong>アトリビューション分析:</strong> データドリブンアトリビューションによる正確な貢献度評価</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">実務のポイント</div>
GA4とGoogle Adsの連携は<strong>GA4の管理画面 → プロパティ設定 → Google Adsリンク</strong>から設定します。連携後は、GA4のコンバージョン（キーイベント）をGoogle Adsにインポートし、自動入札の最適化シグナルとして活用しましょう。
</div>
            `,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "GA4のデータモデルの特徴として正しいものはどれですか？",
                    options: ["ページビューベースのモデル", "イベントベースのモデル", "セッションベースのモデル", "クリックベースのモデル"],
                    answer: 1,
                    explanation: "GA4はすべてのユーザー行動を「イベント」として記録するイベントベースのデータモデルを採用しています。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "UTMパラメータのうち、流入元のメディア種別を示すのはどれですか？",
                    options: ["utm_source", "utm_medium", "utm_campaign", "utm_content"],
                    answer: 1,
                    explanation: "utm_mediumはメディア種別（cpc、display、email、socialなど）を示します。utm_sourceは流入元の媒体名です。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "GA4のエンゲージメント率に該当しないセッションの条件はどれですか？",
                    options: ["10秒以上の滞在", "コンバージョンイベントの発生", "2ページ以上の閲覧", "3回以上のクリック"],
                    answer: 3,
                    explanation: "GA4のエンゲージメントセッションの条件は、10秒以上の滞在、CVイベント発生、2ページ以上閲覧のいずれかです。クリック回数は条件に含まれません。"
                },
                {
                    id: "q501_4",
                    type: "fill",
                    question: "GA4とGoogle Adsを連携する際、GA4で計測したコンバージョンをGoogle Adsに取り込むことを何と呼びますか？（カタカナで）",
                    answer: "インポート",
                    explanation: "GA4のコンバージョン（キーイベント）をGoogle Adsにインポートすることで、自動入札の最適化シグナルとして活用できます。"
                }
            ]
        },
        {
            id: 502,
            title: "コンバージョン計測とアトリビューション",
            duration: "18分",
            content: `
<h2>コンバージョン（CV）の種類</h2>
<p>広告運用における<strong>コンバージョン</strong>とは、ユーザーが広告主の望む行動を完了することです。コンバージョンは大きく2種類に分かれます。</p>

<table>
<tr><th>種類</th><th>定義</th><th>具体例</th></tr>
<tr><td>マクロCV</td><td>最終的なビジネスゴール（直接売上に貢献）</td><td>商品購入、有料会員登録、契約申込、来店予約確定</td></tr>
<tr><td>マイクロCV</td><td>マクロCVの前段階となる中間的な行動</td><td>資料請求、メルマガ登録、カート追加、動画視聴完了</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">マイクロCVの重要性</div>
マクロCVの件数が少ない場合（例：月10件未満）、自動入札の学習データが不足します。この場合、マイクロCVを追加のコンバージョンポイントとして設定し、<strong>自動入札の学習データを増やす</strong>ことが有効です。例えば「フォーム到達」や「電話番号クリック」をマイクロCVとして計測します。
</div>

<h2>各プラットフォームのタグ設定</h2>
<p>コンバージョンを正確に計測するためには、各広告プラットフォームの<strong>コンバージョンタグ</strong>をWebサイトに設置する必要があります。</p>

<h3>Google Ads コンバージョンタグ</h3>
<ul>
<li><strong>グローバルサイトタグ（gtag.js）:</strong> サイト全体に設置する基本タグ</li>
<li><strong>コンバージョンリンカー:</strong> ドメイン間のコンバージョン計測を正確に行うタグ</li>
<li><strong>イベントスニペット:</strong> CVページ（サンクスページ等）に設置するタグ</li>
<li>推奨：<strong>Googleタグマネージャー（GTM）</strong>で一元管理</li>
</ul>

<h3>Meta（Facebook/Instagram）ピクセル</h3>
<ul>
<li><strong>Metaピクセル:</strong> サイト全体に設置するJavaScriptコード</li>
<li><strong>標準イベント:</strong> Purchase、Lead、AddToCartなど定義済みイベント</li>
<li><strong>カスタムイベント:</strong> 独自に定義するイベント</li>
<li><strong>コンバージョンAPI（CAPI）:</strong> サーバーサイドでのイベント送信（推奨）</li>
</ul>

<h3>LINE広告タグ</h3>
<ul>
<li><strong>ベースコード:</strong> サイト全体に設置</li>
<li><strong>コンバージョンコード:</strong> CVページに設置</li>
<li><strong>カスタムイベントコード:</strong> 任意の地点に設置</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">GTM（Googleタグマネージャー）の活用を推奨</div>
複数の広告プラットフォームのタグを直接HTMLに埋め込むと管理が煩雑になります。<strong>GTM</strong>を使えば、タグの追加・変更・削除をGUIで一元管理でき、エンジニアへの依頼なく迅速に対応できます。
</div>

<h2>アトリビューションモデル</h2>
<p>ユーザーは複数の広告に接触してからコンバージョンに至ります。<strong>アトリビューション</strong>とは、コンバージョンへの貢献度を各広告接触点にどう配分するかのルールです。</p>

<table>
<tr><th>モデル</th><th>配分ルール</th><th>特徴</th></tr>
<tr><td>ラストクリック</td><td>最後にクリックされた広告に100%</td><td>シンプルだが、認知広告の貢献を見落としやすい</td></tr>
<tr><td>ファーストクリック</td><td>最初にクリックされた広告に100%</td><td>認知の貢献を評価するが、最終的な決め手を無視</td></tr>
<tr><td>線形（リニア）</td><td>全接触点に均等配分</td><td>公平だが、重要な接点と些細な接点を区別しない</td></tr>
<tr><td>減衰（タイムディケイ）</td><td>CVに近い接触点ほど重く配分</td><td>直近の接触を重視し、時間的なCV貢献度を反映</td></tr>
<tr><td>データドリブン</td><td>機械学習で実データから貢献度を算出</td><td>Google推奨。十分なデータ量が必要（目安：月30CV以上）</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">Google Adsの推奨設定</div>
Google Adsは2023年以降、<strong>データドリブンアトリビューション（DDA）</strong>をデフォルトのアトリビューションモデルとしています。DDAは機械学習を使い、各接触点のコンバージョンへの実質的な貢献度を算出します。ラストクリックに比べ、認知やリターゲティングの効果をより正確に評価できます。
</div>

<h2>ビュースルーコンバージョン（VTC）</h2>
<p>ビュースルーコンバージョンとは、広告を<strong>表示したがクリックしなかった</strong>ユーザーが、その後一定期間内にコンバージョンした場合に計測される指標です。</p>

<ul>
<li><strong>クリックスルーCV（CTC）:</strong> 広告をクリック→CV（通常のCV計測）</li>
<li><strong>ビュースルーCV（VTC）:</strong> 広告を表示のみ（クリックせず）→後日CV</li>
</ul>

<p>ディスプレイ広告や動画広告は直接クリックされにくいため、VTCを含めて評価することで、<strong>認知広告の間接的な効果</strong>を正しく評価できます。</p>

<h2>iOS14+のプライバシー規制と計測への影響</h2>
<p>2021年のiOS14.5から導入された<strong>ATT（App Tracking Transparency）</strong>により、iPhoneユーザーのトラッキングにはユーザーの明示的な同意が必要になりました。</p>

<h3>SKAdNetwork（SKAN）</h3>
<ul>
<li>Appleが提供する<strong>プライバシー保護型のアトリビューション</strong>フレームワーク</li>
<li>個人を特定せずに広告効果を測定する仕組み</li>
<li>データの粒度が粗く（キャンペーン単位）、リアルタイム計測ができない</li>
<li>最新のSKAN 4.0では粒度が改善されたものの、依然として制限がある</li>
</ul>

<h2>Cookie規制への対応</h2>
<p>サードパーティCookieの廃止・制限が進む中、広告計測の精度を維持するための対策が重要です。</p>

<h3>主な対応策</h3>
<ul>
<li><strong>サーバーサイドタギング:</strong> GTMサーバーコンテナを使い、サーバー側でタグを処理</li>
<li><strong>コンバージョンAPI（CAPI）:</strong> Meta、TikTokなどが提供するサーバーサイドの計測API</li>
<li><strong>拡張コンバージョン:</strong> Google Adsの機能で、ハッシュ化したファーストパーティデータを送信</li>
<li><strong>同意モード（Consent Mode）:</strong> ユーザーの同意状態に応じてタグの動作を調整</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">今後のトレンド</div>
Cookie規制が進む中、<strong>ファーストパーティデータの活用</strong>と<strong>サーバーサイド計測</strong>が今後の広告計測の主流になります。早めの対応が競合優位性につながります。
</div>
            `,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "マクロCVとマイクロCVの関係として正しいものはどれですか？",
                    options: ["マイクロCVはマクロCVより売上貢献が大きい", "マイクロCVはマクロCVの前段階の中間的な行動", "マクロCVはマイクロCVの前段階の行動", "両者に関連性はない"],
                    answer: 1,
                    explanation: "マイクロCVは最終ゴールであるマクロCV（購入、契約等）に至る前段階の行動（資料請求、カート追加等）です。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "Google Adsが推奨するデフォルトのアトリビューションモデルはどれですか？",
                    options: ["ラストクリック", "ファーストクリック", "線形", "データドリブン"],
                    answer: 3,
                    explanation: "Google Adsは2023年以降、データドリブンアトリビューション（DDA）をデフォルトのモデルとして推奨しています。機械学習で各接触点の貢献度を算出します。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "ビュースルーコンバージョン（VTC）とはどのような指標ですか？",
                    options: ["広告をクリックした後にCVした数", "広告を表示したがクリックせず後日CVした数", "動画広告を最後まで視聴した数", "広告を2回以上見た後にCVした数"],
                    answer: 1,
                    explanation: "ビュースルーCVは、広告を表示されたがクリックしなかったユーザーが、その後一定期間内にコンバージョンした場合に計測される指標です。"
                },
                {
                    id: "q502_4",
                    type: "fill",
                    question: "iOS14.5から導入された、アプリのトラッキングにユーザー同意を求める仕組みの略称は？（アルファベット3文字）",
                    answer: "ATT",
                    explanation: "ATT（App Tracking Transparency）はAppleがiOS14.5で導入したフレームワークで、アプリがユーザーをトラッキングする前に明示的な同意を求めることを義務付けています。"
                }
            ]
        },
        {
            id: 503,
            title: "A/Bテストとクリエイティブ最適化",
            duration: "16分",
            content: `
<h2>A/Bテストの基本</h2>
<p>A/Bテストとは、<strong>2つ以上のバリエーション</strong>（A案・B案）を同時にユーザーに表示し、どちらがより良い成果を生むかをデータで検証する手法です。広告運用における意思決定を「勘」から「データ」に変えるための最も基本的な手法です。</p>

<h3>A/Bテストの設計プロセス</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>仮説立案</strong>
現状の課題を分析し、改善仮説を立てる。例：「CTAボタンの色を赤から緑に変えれば、クリック率が向上するのではないか」
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>実験設計</strong>
テスト対象、期間、サンプルサイズ、KPIを決定。変更する要素は1つに絞る（複数変更すると何が効いたか分からない）。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>実験実行</strong>
トラフィックをランダムに分割し、A案・B案を同時に配信。期間中は外部要因（セール等）の影響に注意。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>分析・判定</strong>
統計的有意差を確認し、勝者を判定。有意差がなければ「差はない」という結果も有益な学び。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>改善・展開</strong>
勝者を本番に適用し、次のテスト仮説を立てる。継続的な改善サイクルを回す。
</div>
</div>
</div>

<h2>統計的有意差の理解</h2>
<p>A/Bテストの結果が「偶然ではなく本当の差である」ことを判断するために、<strong>統計的有意差</strong>の概念を理解する必要があります。</p>

<table>
<tr><th>用語</th><th>説明</th><th>実務での目安</th></tr>
<tr><td>p値（p-value）</td><td>「本当は差がないのに差があるように見える」確率</td><td>p < 0.05（5%未満）で有意と判断するのが一般的</td></tr>
<tr><td>信頼区間</td><td>真の差がこの範囲内にある確率が95%の区間</td><td>95%信頼区間が0をまたがなければ有意</td></tr>
<tr><td>サンプルサイズ</td><td>テストに必要なデータ量</td><td>検出したい最小差分とベースラインCVRから算出</td></tr>
<tr><td>統計的検出力</td><td>本当に差がある時に差を検出できる確率</td><td>80%以上を目標に設定</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">よくある失敗</div>
<ul>
<li><strong>早すぎる判断:</strong> 十分なサンプルサイズが集まる前にテストを終了してしまう</li>
<li><strong>途中で条件変更:</strong> テスト期間中にLP内容を変更してしまう</li>
<li><strong>同時に複数要素を変更:</strong> 見出し・画像・CTAを同時に変えると、何が効いたか不明</li>
<li><strong>曜日・時間帯の偏り:</strong> 平日のみの結果を全期間に一般化してしまう</li>
</ul>
</div>

<div class="info-box formula">
<div class="info-box-title">サンプルサイズの目安</div>
<p>例えば、現在のCVRが3%で、10%の改善（3%→3.3%）を検出したい場合、統計的検出力80%・有意水準5%で必要なサンプルサイズは約<strong>各グループ35,000件</strong>程度です。CVRが低いほど・検出したい差が小さいほど、より多くのサンプルが必要です。</p>
</div>

<h2>LP（ランディングページ）最適化</h2>
<p>広告のクリック後にユーザーが最初に訪れるLP（ランディングページ）の品質は、コンバージョン率に直結します。</p>

<h3>ファーストビューの最適化</h3>
<p>LPを開いて<strong>スクロールせずに見える領域</strong>がファーストビューです。ユーザーの約50%がファーストビューだけでページを離脱するため、最も重要な領域です。</p>
<ul>
<li><strong>キャッチコピー:</strong> ユーザーの悩み・ベネフィットを端的に表現</li>
<li><strong>メインビジュアル:</strong> 商品・サービスの使用シーンを具体的に伝える</li>
<li><strong>CTA:</strong> 「無料で試す」「今すぐ申し込み」等のアクションボタンを設置</li>
<li><strong>信頼性要素:</strong> 実績数、メディア掲載、受賞歴など</li>
</ul>

<h3>CTA（Call To Action）の最適化</h3>
<ul>
<li><strong>テキスト:</strong> 「送信」より「無料で始める」のように具体的なベネフィットを含める</li>
<li><strong>色:</strong> 周囲と対比する色で目立たせる（補色を活用）</li>
<li><strong>サイズ:</strong> タップしやすい大きさ（モバイルは最低44px × 44px）</li>
<li><strong>位置:</strong> ファーストビュー内とページ下部の両方に配置</li>
</ul>

<h3>フォーム最適化（EFO）</h3>
<ul>
<li>入力項目は<strong>必要最小限</strong>に絞る（項目数が1つ増えるごとにCVRが約10%低下するとも言われる）</li>
<li>住所の自動入力（郵便番号連動）</li>
<li>リアルタイムバリデーション（入力中にエラーを表示）</li>
<li>進捗バー（ステップ表示）でフォーム完了までの見通しを示す</li>
</ul>

<h2>ヒートマップツールの活用</h2>
<p>ヒートマップツールは、ユーザーがLPのどの部分を<strong>よく見ているか/クリックしているか/どこまでスクロールしたか</strong>を可視化するツールです。</p>

<table>
<tr><th>ツール</th><th>特徴</th><th>費用</th></tr>
<tr><td>Microsoft Clarity</td><td>無料。ヒートマップ＋セッション録画。GA4連携可能</td><td>完全無料</td></tr>
<tr><td>Hotjar</td><td>ヒートマップ＋録画＋アンケート機能。UIが直感的</td><td>無料プランあり（月間セッション数制限）</td></tr>
</table>

<h3>ヒートマップの種類</h3>
<ul>
<li><strong>クリックマップ:</strong> ユーザーがどこをクリック（タップ）しているかを可視化</li>
<li><strong>スクロールマップ:</strong> ページのどの深さまでスクロールされているかを可視化</li>
<li><strong>アテンションマップ:</strong> ユーザーがどの部分を長時間見ているかを可視化</li>
</ul>

<div class="info-box success">
<div class="info-box-title">Clarityの活用例</div>
<p>Microsoft Clarityのセッション録画を見ると、ユーザーが「フォーム入力中に迷っている動き」や「CTAボタンに気づかずスクロールし続ける動き」が確認できます。これらの行動パターンから、LP改善の具体的な仮説を立てることができます。</p>
</div>
            `,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "A/Bテストで最も重要な設計原則はどれですか？",
                    options: ["同時に多くの要素を変更して効率化する", "変更する要素は1つに絞る", "テスト期間は短いほどよい", "統計的有意差は不要"],
                    answer: 1,
                    explanation: "A/Bテストでは変更する要素を1つに絞ることが重要です。複数の要素を同時に変更すると、どの要素が結果に影響したのか判別できなくなります。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "統計的有意差の判断基準として一般的なp値の閾値はどれですか？",
                    options: ["p < 0.01（1%未満）", "p < 0.05（5%未満）", "p < 0.10（10%未満）", "p < 0.50（50%未満）"],
                    answer: 1,
                    explanation: "一般的にp < 0.05（5%未満）で統計的に有意と判断します。これは「差がないのに偶然差があるように見える確率が5%未満」であることを意味します。"
                },
                {
                    id: "q503_3",
                    type: "choice",
                    question: "LP最適化でファーストビューが重要な理由はどれですか？",
                    options: ["SEO効果が高いから", "約50%のユーザーがファーストビューで離脱するから", "広告費が安くなるから", "表示速度が速くなるから"],
                    answer: 1,
                    explanation: "ユーザーの約50%がファーストビューだけでページを離脱するため、スクロールせずに見える領域でユーザーの関心を捉えることが重要です。"
                },
                {
                    id: "q503_4",
                    type: "fill",
                    question: "Microsoftが提供する無料のヒートマップ＋セッション録画ツールの名称は？（英語で）",
                    answer: "Clarity",
                    explanation: "Microsoft Clarityは完全無料で利用でき、ヒートマップとセッション録画機能を提供します。GA4との連携も可能です。"
                }
            ]
        },
        {
            id: 504,
            title: "ROAS最適化と自動入札活用",
            duration: "16分",
            content: `
<h2>ROASの基本</h2>
<p>ROAS（Return On Ad Spend）は、<strong>広告費に対する売上のリターン</strong>を示す指標で、広告投資の効率を測定する最も重要な指標の一つです。</p>

<div class="info-box formula">
<div class="info-box-title">ROASの計算式</div>
<p><strong>ROAS = 売上 / 広告費 × 100%</strong></p>
<p>例：広告費100万円で売上が500万円の場合</p>
<p>ROAS = 500万円 / 100万円 × 100% = <strong>500%</strong></p>
<p>「広告費1円あたり5円の売上」を生んでいることを意味します。</p>
</div>

<h3>ROAS vs CPA</h3>
<table>
<tr><th>指標</th><th>計算式</th><th>適する業態</th></tr>
<tr><td>ROAS</td><td>売上 / 広告費 × 100%</td><td>EC、高単価商材（商品ごとに売上額が異なる場合）</td></tr>
<tr><td>CPA</td><td>広告費 / CV数</td><td>リード獲得、会員登録（CVの価値が均一の場合）</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">使い分けのポイント</div>
<ul>
<li>ECサイトのように購入金額がユーザーによって異なる場合は<strong>ROAS</strong>が適切</li>
<li>資料請求やお問い合わせのようにCV1件の価値が一律の場合は<strong>CPA</strong>が適切</li>
<li>両方の指標を併用することで、より正確な広告効果判断が可能</li>
</ul>
</div>

<h2>限界CPA / 限界ROASの考え方</h2>
<p>広告費をいくらまでかけて良いかの上限値を<strong>限界CPA</strong>（または<strong>目標CPA</strong>）、<strong>限界ROAS</strong>（または<strong>目標ROAS</strong>）と呼びます。</p>

<div class="info-box formula">
<div class="info-box-title">限界CPAの算出</div>
<p><strong>限界CPA = 平均客単価 × 粗利率 × 許容割合</strong></p>
<p>例：平均客単価10,000円 × 粗利率50% × 許容割合50% = <strong>限界CPA 2,500円</strong></p>
<p>→ 1件のCV獲得に2,500円以上かけると赤字になる</p>
</div>

<div class="info-box formula">
<div class="info-box-title">限界ROASの算出</div>
<p><strong>限界ROAS = 1 / 粗利率 × 100%</strong></p>
<p>例：粗利率50%の場合 → 限界ROAS = 1 / 0.5 × 100% = <strong>200%</strong></p>
<p>→ ROAS 200%以下だと広告費が粗利を超えて赤字になる</p>
</div>

<h3>LTV（顧客生涯価値）を考慮した限界CPA</h3>
<p>サブスクリプションや定期購入モデルでは、初回購入だけでなく<strong>顧客のLTV</strong>を考慮して限界CPAを設定します。</p>
<ul>
<li>例：初回購入3,000円、平均継続期間12ヶ月、月額3,000円の場合</li>
<li>LTV = 3,000円 × 12ヶ月 = 36,000円</li>
<li>限界CPA = 36,000円 × 粗利率50% × 許容割合30% = 5,400円</li>
<li>初回購入3,000円だけで判断すると広告投資が過小になる</li>
</ul>

<h2>自動入札の仕組みと学習期間</h2>
<p>Google Adsをはじめとする広告プラットフォームでは、<strong>機械学習による自動入札</strong>が主流になっています。</p>

<h3>主な自動入札戦略</h3>
<table>
<tr><th>入札戦略</th><th>最適化目標</th><th>適するケース</th></tr>
<tr><td>コンバージョン数の最大化</td><td>予算内でCV数を最大化</td><td>CV数を優先したい場合</td></tr>
<tr><td>目標CPA</td><td>指定CPAを維持しつつCV数を最大化</td><td>CPAの上限が決まっている場合</td></tr>
<tr><td>コンバージョン値の最大化</td><td>予算内でCV値（売上）を最大化</td><td>EC等で売上を優先したい場合</td></tr>
<tr><td>目標ROAS</td><td>指定ROASを維持しつつCV値を最大化</td><td>ROASの下限が決まっている場合</td></tr>
<tr><td>クリック数の最大化</td><td>予算内でクリック数を最大化</td><td>トラフィック獲得が目的の場合</td></tr>
</table>

<h3>自動入札の学習期間</h3>
<p>自動入札は<strong>機械学習</strong>で最適なオークション入札額を決定するため、十分な学習データが必要です。</p>

<div class="info-box warning">
<div class="info-box-title">学習期間の注意点</div>
<ul>
<li>学習期間は通常<strong>2〜3週間</strong>（目安：週15CV以上で安定）</li>
<li>学習期間中はパフォーマンスが不安定になるが、<strong>むやみに設定変更しない</strong>こと</li>
<li>大幅な予算変更（±20%以上）や入札戦略変更を行うと学習がリセットされる</li>
<li>季節変動やセール等のイベント時は自動入札が追随できない場合がある</li>
</ul>
</div>

<h3>自動入札が参照するシグナル</h3>
<p>Google Adsの自動入札はオークションの瞬間に以下のシグナルを参照して入札額を決定します。</p>
<ul>
<li><strong>デバイス:</strong> PC / スマートフォン / タブレット</li>
<li><strong>地域:</strong> ユーザーの所在地</li>
<li><strong>時間帯:</strong> 曜日・時間帯</li>
<li><strong>オーディエンス:</strong> リマーケティングリスト、類似オーディエンス</li>
<li><strong>検索語句:</strong> 実際の検索クエリ</li>
<li><strong>ブラウザ・OS:</strong> ユーザーの利用環境</li>
<li><strong>広告の特性:</strong> 広告クリエイティブ、ランディングページ</li>
</ul>

<h2>マイクロCV活用による学習データの確保</h2>
<p>自動入札が安定的に動作するためには、<strong>十分なコンバージョンデータ</strong>が必要です。目安として週15CV以上が推奨されますが、高単価商材では達成が難しい場合があります。</p>

<h3>マイクロCVの設定例</h3>
<ul>
<li><strong>フォーム到達:</strong> お問い合わせフォームのページ閲覧</li>
<li><strong>電話番号クリック:</strong> 電話番号のタップ（モバイル）</li>
<li><strong>カート追加:</strong> 商品をカートに入れるアクション</li>
<li><strong>ページ滞在時間:</strong> LP上に一定時間以上滞在</li>
</ul>

<div class="info-box success">
<div class="info-box-title">マイクロCVの実践的な設定方法</div>
<p>Google Adsの「コンバージョンアクション」で、マクロCV（購入完了など）を<strong>「メイン」</strong>に、マイクロCV（カート追加など）を<strong>「サブ」</strong>に設定します。「メイン」のコンバージョンのみが入札最適化に使用され、「サブ」は分析用に計測されます。ただし、マクロCVのデータが不足する場合は、マイクロCVを一時的に「メイン」に変更して学習データを増やす手法も有効です。</p>
</div>

<h2>ポートフォリオ入札戦略</h2>
<p>ポートフォリオ入札戦略は、<strong>複数のキャンペーンにまたがって1つの入札戦略を共有</strong>する機能です。</p>

<h3>メリット</h3>
<ul>
<li>複数キャンペーンのCV実績を統合して学習データを増やせる</li>
<li>キャンペーン単体ではCV数が少なくても、ポートフォリオ全体で最適化可能</li>
<li>目標CPA/ROASをポートフォリオ全体で達成する柔軟な運用</li>
</ul>

<h3>活用例</h3>
<ul>
<li>ブランドキーワードと一般キーワードのキャンペーンをポートフォリオ化</li>
<li>地域別に分けたキャンペーンを1つのポートフォリオで統合管理</li>
<li>少額キャンペーンをまとめて学習効率を向上</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">最適化の全体像</div>
ROAS最適化は「計測→分析→改善→再計測」の継続的なサイクルです。正確なコンバージョン計測（Level 5-M502）、A/Bテストによる改善（Level 5-M503）、そして自動入札の適切な活用を組み合わせることで、持続的な広告パフォーマンス向上を実現します。
</div>
            `,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "ROAS 500%とはどういう意味ですか？",
                    options: ["広告費が売上の5倍", "売上が広告費の5倍", "利益が広告費の5倍", "CV数が広告費の5倍"],
                    answer: 1,
                    explanation: "ROAS 500%は「売上が広告費の5倍」を意味します。例えば広告費100万円で売上500万円の場合、ROAS = 500万 / 100万 × 100% = 500%です。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "自動入札の学習期間中に注意すべきことはどれですか？",
                    options: ["毎日目標CPAを変更する", "むやみに設定変更をしない", "予算を大幅に増額する", "キャンペーンを一時停止する"],
                    answer: 1,
                    explanation: "学習期間中（通常2〜3週間）はパフォーマンスが不安定ですが、むやみに設定変更しないことが重要です。大幅な変更は学習をリセットしてしまいます。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "粗利率50%の商品の限界ROAS（最低限必要なROAS）はいくつですか？",
                    options: ["100%", "150%", "200%", "500%"],
                    answer: 2,
                    explanation: "限界ROAS = 1 / 粗利率 × 100%なので、1 / 0.5 × 100% = 200%です。ROAS 200%以下だと広告費が粗利を超えて赤字になります。"
                },
                {
                    id: "q504_4",
                    type: "fill",
                    question: "複数キャンペーンにまたがって1つの入札戦略を共有するGoogle Adsの機能を何と呼びますか？",
                    answer: "ポートフォリオ入札戦略",
                    explanation: "ポートフォリオ入札戦略は複数キャンペーンのCV実績を統合して学習データを増やし、ポートフォリオ全体で目標を達成する入札戦略です。"
                }
            ]
        }
    ]
};
