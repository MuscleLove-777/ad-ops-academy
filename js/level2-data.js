/* ============================================
   Level 2: リスティング広告・検索広告
   ============================================ */
const LEVEL2_DATA = {
    id: 2,
    title: "リスティング広告・検索広告",
    icon: "🔍",
    description: "Google Ads・Yahoo!広告の検索広告運用を実践的に学ぶ",
    modules: [
        {
            id: 201,
            title: "キーワード戦略",
            duration: "18分",
            content: `
<h2>キーワードとは</h2>
<p>検索広告において、<strong>キーワード</strong>はユーザーが検索するクエリ（検索語句）に対して広告を表示するためのトリガーです。適切なキーワード設計は検索広告の成果を大きく左右します。</p>

<h2>マッチタイプ</h2>
<p>Google Adsでは、キーワードの<strong>マッチタイプ</strong>を設定することで、広告が表示される検索語句の範囲をコントロールします。</p>

<table>
<tr><th>マッチタイプ</th><th>記号</th><th>説明</th><th>表示される検索例</th></tr>
<tr><td><strong>完全一致</strong></td><td>[keyword]</td><td>指定したキーワードと同じ意味・意図の検索語句にのみ表示</td><td>[東京 ホテル] → 「東京 ホテル」「東京のホテル」</td></tr>
<tr><td><strong>フレーズ一致</strong></td><td>"keyword"</td><td>指定したキーワードの意味を含む検索語句に表示</td><td>"東京 ホテル" → 「東京 ホテル 安い」「格安 東京 ホテル 予約」</td></tr>
<tr><td><strong>部分一致</strong></td><td>keyword</td><td>関連する検索語句に幅広く表示（AIが関連性を判断）</td><td>東京 ホテル → 「都内 宿泊施設」「東京 旅行 宿」</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">マッチタイプ選定のポイント</div>
<ul>
<li><strong>完全一致:</strong> コンバージョン率が高い実績のあるキーワードに使用。リーチは狭いが効率が良い</li>
<li><strong>フレーズ一致:</strong> バランス型。ロングテールキーワードの発見にも有効</li>
<li><strong>部分一致:</strong> リーチを広げたいとき。自動入札と組み合わせて使用するのが推奨される</li>
</ul>
初期段階ではフレーズ一致をメインに設定し、検索語句レポートで実際の検索クエリを確認しながら調整するのがベストプラクティスです。
</div>

<div class="info-box warning">
<div class="info-box-title">部分一致の注意点</div>
部分一致はリーチが広い反面、意図しない検索語句にも広告が表示される可能性があります。必ず<strong>検索語句レポート</strong>を定期的に確認し、不要な検索語句を除外キーワードに追加してください。自動入札（目標CPAなど）と組み合わせることで、AIが適切な入札調整を行いムダを抑えられます。
</div>

<h2>除外キーワード</h2>
<p>除外キーワードは、<strong>広告を表示したくない検索語句</strong>を指定する機能です。無駄なクリックを防ぎ、予算を有効に使うために重要です。</p>

<h3>除外キーワードの例</h3>
<table>
<tr><th>ビジネス</th><th>除外すべきキーワード例</th><th>理由</th></tr>
<tr><td>有料サービス</td><td>「無料」「フリー」「タダ」</td><td>無料を求めるユーザーはCV見込みが低い</td></tr>
<tr><td>新品販売</td><td>「中古」「ジャンク」「修理」</td><td>新品購入の意図がない</td></tr>
<tr><td>BtoBサービス</td><td>「とは」「意味」「レポート」</td><td>情報収集目的で購入意図がない</td></tr>
<tr><td>自社ブランド</td><td>競合ブランド名</td><td>ブランドキャンペーンへの混入を防ぐ</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">除外キーワードリストの活用</div>
除外キーワードは<strong>リスト</strong>として作成し、複数のキャンペーンに適用できます。アカウント全体で共通の除外キーワードリスト（例：「無料」「求人」「2ch」など）を作成しておくと効率的です。
</div>

<h2>ロングテールキーワード</h2>
<p>ロングテールキーワードとは、<strong>検索ボリュームは小さいが、より具体的な意図を持つ</strong>複数語句のキーワードです。</p>

<table>
<tr><th>種類</th><th>キーワード例</th><th>検索ボリューム</th><th>CVR傾向</th><th>CPC傾向</th></tr>
<tr><td><strong>ビッグワード</strong></td><td>「ホテル」</td><td>大</td><td>低い</td><td>高い</td></tr>
<tr><td><strong>ミドルワード</strong></td><td>「東京 ホテル」</td><td>中</td><td>中程度</td><td>中程度</td></tr>
<tr><td><strong>ロングテール</strong></td><td>「東京 ホテル 子連れ 朝食付き」</td><td>小</td><td>高い</td><td>低い</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">ロングテール戦略のメリット</div>
<ul>
<li><strong>高CVR:</strong> 検索意図が具体的なため、コンバージョン率が高い</li>
<li><strong>低CPC:</strong> 競合が少ないため、クリック単価が低い</li>
<li><strong>ニッチ需要:</strong> 大手が狙いにくい市場を獲得できる</li>
</ul>
検索全体の約<strong>70%</strong>はロングテールキーワードからのトラフィックと言われています。
</div>

<h2>検索意図（Search Intent）の分類</h2>
<p>ユーザーの検索には4種類の<strong>検索意図</strong>があり、それぞれに適した広告戦略が異なります。</p>

<table>
<tr><th>検索意図</th><th>英語名</th><th>例</th><th>広告戦略</th></tr>
<tr><td><strong>情報探索型</strong></td><td>Informational</td><td>「デジタル広告 とは」</td><td>コンテンツマーケティングとの連携</td></tr>
<tr><td><strong>案内型</strong></td><td>Navigational</td><td>「Google Ads ログイン」</td><td>ブランドワード入札</td></tr>
<tr><td><strong>商業調査型</strong></td><td>Commercial</td><td>「広告代理店 おすすめ 比較」</td><td>比較LP・事例訴求</td></tr>
<tr><td><strong>取引型</strong></td><td>Transactional</td><td>「広告運用 代行 見積もり」</td><td>CTA重視・フォーム直結LP</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">実務でのポイント</div>
検索広告では<strong>商業調査型</strong>と<strong>取引型</strong>のキーワードがCVR・ROASが高くなる傾向があります。情報探索型のキーワードは広告費の割にCVが取りにくいため、コンテンツSEOで対応するか、リターゲティング用のオーディエンス構築に活用するのが効果的です。
</div>
            `,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "Google Adsで「東京 ホテル」をフレーズ一致で登録する場合の記号はどれですか？",
                    options: ["東京 ホテル", "[東京 ホテル]", "\"東京 ホテル\"", "+東京 +ホテル"],
                    answer: 2,
                    explanation: "フレーズ一致は\"keyword\"（ダブルクォーテーション）で囲んで設定します。完全一致は[keyword]、部分一致は記号なしです。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "ロングテールキーワードの特徴として正しいものはどれですか？",
                    options: ["検索ボリュームが大きくCPCが高い", "検索ボリュームが小さくCVRが高い", "検索ボリュームが大きくCVRが低い", "検索ボリュームが小さくCPCが高い"],
                    answer: 1,
                    explanation: "ロングテールキーワードは検索ボリュームは小さいですが、検索意図が具体的なためCVRが高く、競合も少ないためCPCが低い傾向があります。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "「広告運用 代行 見積もり」という検索クエリの検索意図はどれに分類されますか？",
                    options: ["情報探索型（Informational）", "案内型（Navigational）", "商業調査型（Commercial）", "取引型（Transactional）"],
                    answer: 3,
                    explanation: "「見積もり」という語句は購入・契約のアクションに直結するため、取引型（Transactional）に分類されます。"
                },
                {
                    id: "q201_4",
                    type: "fill",
                    question: "広告を表示したくない検索語句を指定する機能を何と呼びますか？（○○キーワード）",
                    answer: "除外キーワード",
                    explanation: "除外キーワードは、無駄なクリックを防ぎ予算効率を向上させるために、広告を表示したくない検索語句を指定する機能です。"
                }
            ]
        },
        {
            id: 202,
            title: "広告文の作成と最適化",
            duration: "18分",
            content: `
<h2>レスポンシブ検索広告（RSA）</h2>
<p>現在のGoogle Adsの検索広告では、<strong>RSA（Responsive Search Ads：レスポンシブ検索広告）</strong>が標準の広告フォーマットです。複数の見出しと説明文を入稿すると、AIが最適な組み合わせを自動的にテストして配信します。</p>

<div class="info-box formula">
<div class="info-box-title">RSAの入稿仕様</div>
<table>
<tr><th>要素</th><th>最大登録数</th><th>表示数</th><th>文字数上限</th></tr>
<tr><td><strong>見出し</strong></td><td>最大15個</td><td>最大3個表示</td><td>半角30文字（全角15文字）</td></tr>
<tr><td><strong>説明文</strong></td><td>最大4個</td><td>最大2個表示</td><td>半角90文字（全角45文字）</td></tr>
<tr><td><strong>表示URL</strong></td><td>パス2つ</td><td>パス2つ表示</td><td>各パス半角15文字</td></tr>
</table>
<p>見出し15個 × 説明文4個を全て登録すると、AIが最適な組み合わせを自動的に見つけ出します。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">RSA入稿のベストプラクティス</div>
<ul>
<li>見出しは<strong>最低8個以上</strong>（可能なら15個全て）登録する</li>
<li>見出し同士が重複しないよう、異なる訴求軸を含める</li>
<li>必ず表示したい見出しは<strong>ピン止め機能</strong>で位置を固定する</li>
<li>説明文は4個全て登録する</li>
<li>キーワードを見出し・説明文に自然に含める</li>
</ul>
</div>

<h2>効果的な広告文テクニック</h2>
<p>限られた文字数で高いCTRを実現するために、以下のテクニックを活用します。</p>

<h3>1. 数字を使う</h3>
<table>
<tr><th>悪い例</th><th>良い例</th></tr>
<tr><td>多くの実績があります</td><td><strong>導入実績3,000社</strong>突破</td></tr>
<tr><td>安い価格でご提供</td><td>月額<strong>980円</strong>から始められる</td></tr>
<tr><td>すぐに届きます</td><td>最短<strong>翌日</strong>お届け</td></tr>
</table>

<h3>2. 限定・緊急性を出す</h3>
<table>
<tr><th>テクニック</th><th>例</th></tr>
<tr><td>期間限定</td><td>「3月末まで30%OFF」</td></tr>
<tr><td>数量限定</td><td>「残り50台限定」</td></tr>
<tr><td>対象限定</td><td>「初めての方限定 無料トライアル」</td></tr>
</table>

<h3>3. 明確なCTA（Call To Action）</h3>
<table>
<tr><th>弱いCTA</th><th>強いCTA</th></tr>
<tr><td>詳しくはこちら</td><td><strong>無料で資料をダウンロード</strong></td></tr>
<tr><td>お問い合わせください</td><td><strong>今すぐ無料見積もりを取得</strong></td></tr>
<tr><td>サイトを見る</td><td><strong>30秒で簡単申し込み</strong></td></tr>
</table>

<h3>4. USP（独自の売り）を打ち出す</h3>
<p>競合と差別化できるポイントを明確に訴求します。</p>
<ul>
<li><strong>価格優位性:</strong> 「業界最安値保証」</li>
<li><strong>実績:</strong> 「顧客満足度98%」</li>
<li><strong>独自性:</strong> 「特許技術を採用」</li>
<li><strong>保証:</strong> 「全額返金保証付き」</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">広告文で避けるべきNG表現</div>
<ul>
<li><strong>最上級表現:</strong> 「日本一」「最高」「No.1」→ 根拠なしの使用はポリシー違反</li>
<li><strong>誇大広告:</strong> 「絶対に痩せる」「必ず儲かる」→ 景品表示法違反の恐れ</li>
<li><strong>記号の乱用:</strong> 「★☆★今だけ★☆★」→ ポリシー違反で不承認</li>
<li><strong>全角英数字の混在:</strong> 「ＡＢＣ」→ 半角に統一する</li>
</ul>
</div>

<h2>広告表示オプション（アセット）</h2>
<p>広告表示オプションは、広告に<strong>追加情報</strong>を付与して表示面積を拡大する機能です。CTR向上に直結するため、可能な限り設定することが推奨されます。</p>

<table>
<tr><th>表示オプション</th><th>概要</th><th>活用例</th></tr>
<tr><td><strong>サイトリンク</strong></td><td>広告の下に追加リンクを表示</td><td>「料金プラン」「導入事例」「よくある質問」</td></tr>
<tr><td><strong>コールアウト</strong></td><td>短いテキストで特徴をアピール</td><td>「送料無料」「24時間対応」「初回割引あり」</td></tr>
<tr><td><strong>構造化スニペット</strong></td><td>カテゴリ別の情報を表示</td><td>サービス: 「コンサル」「運用代行」「レポート」</td></tr>
<tr><td><strong>電話番号</strong></td><td>電話番号を表示・直接発信</td><td>電話問い合わせを促進したい場合</td></tr>
<tr><td><strong>住所</strong></td><td>店舗・事業所の住所を表示</td><td>実店舗への来店促進</td></tr>
<tr><td><strong>価格</strong></td><td>商品・サービスの価格を表示</td><td>「ベーシックプラン 月額980円〜」</td></tr>
<tr><td><strong>プロモーション</strong></td><td>セール・割引情報を表示</td><td>「新春セール 最大50%OFF」</td></tr>
<tr><td><strong>画像</strong></td><td>広告に画像を追加表示</td><td>商品画像、ロゴ</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">広告表示オプションの効果</div>
<ul>
<li>広告の<strong>表示面積が拡大</strong>し、視認性が向上する</li>
<li>追加情報により<strong>CTRが平均10〜15%向上</strong>する</li>
<li>Ad Rankの計算にも<strong>プラスに影響</strong>する</li>
<li>表示オプション自体の<strong>追加費用はかからない</strong>（クリックされた場合のみ課金）</li>
</ul>
全ての広告表示オプションを設定してもすべてが同時に表示されるわけではありません。AIが状況に応じて最適な組み合わせを選んで表示します。
</div>
            `,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "RSA（レスポンシブ検索広告）で登録できる見出しの最大数はいくつですか？",
                    options: ["5個", "10個", "15個", "20個"],
                    answer: 2,
                    explanation: "RSAでは見出しを最大15個、説明文を最大4個登録できます。AIが最適な組み合わせを自動テストします。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "広告表示オプションについて正しい説明はどれですか？",
                    options: ["設定するだけで追加費用がかかる", "CTRに影響せず、見た目だけの効果", "Ad Rankの計算にプラスに影響する", "最大3種類まで設定可能"],
                    answer: 2,
                    explanation: "広告表示オプションはAd Rankの計算にプラスに影響し、追加費用は表示オプションがクリックされた場合のみ発生します。"
                },
                {
                    id: "q202_3",
                    type: "choice",
                    question: "広告文のCTA（Call To Action）として最も効果的なものはどれですか？",
                    options: ["詳しくはこちら", "クリックしてください", "無料で資料をダウンロード", "サイトを見る"],
                    answer: 2,
                    explanation: "「無料で資料をダウンロード」は具体的なアクション（ダウンロード）と動機（無料）が明確で、最も効果的なCTAです。"
                },
                {
                    id: "q202_4",
                    type: "fill",
                    question: "RSAで必ず特定の位置に見出しを表示したいときに使う機能は何ですか？（○○○○機能）",
                    answer: "ピン止め機能",
                    explanation: "ピン止め機能を使うと、特定の見出しを見出し1・見出し2・見出し3の位置に固定して表示させることができます。"
                }
            ]
        },
        {
            id: 203,
            title: "入札戦略と予算管理",
            duration: "18分",
            content: `
<h2>入札戦略の種類と選び方</h2>
<p>Google Adsでは、広告運用の目的に応じてさまざまな<strong>入札戦略（Bidding Strategy）</strong>を選択できます。近年はAIによる<strong>自動入札（スマートビディング）</strong>が主流になっています。</p>

<h3>入札戦略一覧</h3>
<table>
<tr><th>入札戦略</th><th>最適化対象</th><th>目的</th><th>必要条件</th></tr>
<tr><td><strong>手動CPC</strong></td><td>クリック単価</td><td>個別キーワードの入札額を細かく管理</td><td>特になし</td></tr>
<tr><td><strong>拡張CPC（eCPC）</strong></td><td>クリック＋CV</td><td>手動CPCをベースにAIがCV見込みの高い検索で入札を引き上げ</td><td>CV計測設定済み</td></tr>
<tr><td><strong>クリック数最大化</strong></td><td>クリック数</td><td>予算内で最多のクリックを獲得</td><td>特になし</td></tr>
<tr><td><strong>目標インプレッションシェア</strong></td><td>表示シェア</td><td>検索結果の上部など指定位置に一定割合で表示</td><td>特になし</td></tr>
<tr><td><strong>目標CPA（tCPA）</strong></td><td>CPA</td><td>設定したCPA目標でCV数を最大化</td><td>過去30日間にCV 30件以上推奨</td></tr>
<tr><td><strong>コンバージョン数最大化</strong></td><td>CV数</td><td>予算内でCV数を最大化</td><td>CV計測設定済み</td></tr>
<tr><td><strong>目標ROAS（tROAS）</strong></td><td>ROAS</td><td>設定したROAS目標でCV値を最大化</td><td>過去30日間にCV 30件以上 + CV値設定</td></tr>
<tr><td><strong>コンバージョン値最大化</strong></td><td>CV値（売上）</td><td>予算内でCV値（売上合計）を最大化</td><td>CV値設定済み</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">入札戦略の選定フロー</div>
<ol>
<li><strong>データ蓄積期（開始〜2週間）:</strong> 手動CPC or クリック数最大化でデータを蓄積</li>
<li><strong>学習期（2週間〜1ヶ月）:</strong> CV30件以上のデータが溜まったら拡張CPCに移行</li>
<li><strong>最適化期（1ヶ月〜）:</strong> 目標CPA or コンバージョン数最大化に移行</li>
<li><strong>拡大期:</strong> 売上データがあれば目標ROAS or コンバージョン値最大化に移行</li>
</ol>
</div>

<h2>スマートビディング（自動入札）の仕組み</h2>
<p>Google Adsのスマートビディングは、<strong>機械学習</strong>を活用して入札をリアルタイムに最適化します。</p>

<h3>AIが考慮するシグナル</h3>
<table>
<tr><th>シグナル</th><th>説明</th></tr>
<tr><td><strong>デバイス</strong></td><td>PC / スマートフォン / タブレット</td></tr>
<tr><td><strong>地域</strong></td><td>ユーザーの所在地・関心地域</td></tr>
<tr><td><strong>曜日・時間帯</strong></td><td>検索が行われた曜日と時間</td></tr>
<tr><td><strong>検索語句</strong></td><td>実際に入力された検索クエリ</td></tr>
<tr><td><strong>ブラウザ・OS</strong></td><td>Chrome / Safari、iOS / Android 等</td></tr>
<tr><td><strong>リマーケティングリスト</strong></td><td>過去にサイト訪問したことがあるか</td></tr>
<tr><td><strong>広告の特性</strong></td><td>広告文やランディングページの関連性</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">自動入札の学習期間について</div>
自動入札戦略を変更した直後は<strong>学習期間（通常1〜2週間）</strong>が発生します。この間はパフォーマンスが不安定になることがあります。
<ul>
<li>学習期間中に設定を頻繁に変更しない</li>
<li>目標CPAの変更は<strong>一度に20%以内</strong>にする</li>
<li>予算の変更も<strong>一度に20%以内</strong>が推奨</li>
<li>学習期間中のパフォーマンス低下に慌てて手動に戻さない</li>
</ul>
</div>

<h2>入札調整比率</h2>
<p>手動入札やeCPCでは、特定の条件に応じて入札額を<strong>割合で調整</strong>できます。これが<strong>入札調整比率（Bid Adjustment）</strong>です。</p>

<table>
<tr><th>調整対象</th><th>設定範囲</th><th>活用例</th></tr>
<tr><td><strong>デバイス</strong></td><td>-100%〜+900%</td><td>スマホのCVRが高い → スマホ +30%</td></tr>
<tr><td><strong>地域</strong></td><td>-90%〜+900%</td><td>東京のROASが高い → 東京 +50%</td></tr>
<tr><td><strong>時間帯</strong></td><td>-90%〜+900%</td><td>深夜はCVが少ない → 23-6時 -80%</td></tr>
<tr><td><strong>オーディエンス</strong></td><td>-90%〜+900%</td><td>リピーターのCVRが高い → +100%</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">入札調整の計算例</div>
<p>基本入札額: 200円、スマホ入札調整: +30%、東京地域調整: +50%</p>
<p><strong>調整後入札額 = 200円 × (1 + 0.30) × (1 + 0.50) = 200 × 1.30 × 1.50 = 390円</strong></p>
<p>入札調整は<strong>乗算</strong>で適用されるため、複数の調整が重なると大きく変動します。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">注意: スマートビディングでの入札調整</div>
目標CPAやコンバージョン数最大化などのスマートビディングでは、AIが自動で入札を最適化するため、デバイス以外の入札調整は<strong>無視</strong>されます。デバイスの入札調整も-100%（表示しない）のみが有効です。スマートビディング利用時は、入札調整ではなくキャンペーン分割で対応してください。
</div>

<h2>予算管理のポイント</h2>

<h3>日予算とペースキング</h3>
<p>Google Adsでは<strong>日予算</strong>を設定しますが、実際の支出は日によって変動します。</p>
<ul>
<li>1日の支出は日予算の<strong>最大2倍</strong>になることがある</li>
<li>月単位では「日予算 × 30.4日」を超えない</li>
<li>検索量が多い日に多く配信し、少ない日に減らすことで全体を最適化する</li>
</ul>

<h3>予算設計の考え方</h3>
<div class="info-box formula">
<div class="info-box-title">必要予算の逆算式</div>
<p><strong>月間予算 = 目標CV数 × 目標CPA</strong></p>
<p>例：月間50件のCVを、CPA 5,000円で獲得したい場合</p>
<p>月間予算 = 50 × 5,000 = <strong>250,000円</strong></p>
<p>日予算 = 250,000 ÷ 30.4 ≒ <strong>8,200円</strong></p>
</div>

<div class="info-box tip">
<div class="info-box-title">予算管理のベストプラクティス</div>
<ul>
<li>キャンペーンごとに<strong>優先度</strong>をつけて予算配分する</li>
<li>高ROASのキャンペーンに予算を重点配分する</li>
<li>月初に一括で予算を設定し、<strong>月中で進捗確認・調整</strong>する</li>
<li>「インプレッションシェア損失率（予算）」が高い場合は予算不足のサイン</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "Google Adsの自動入札で目標CPA入札を使用する場合に推奨されるコンバージョンデータ量は？",
                    options: ["過去7日間に10件以上", "過去14日間に20件以上", "過去30日間に30件以上", "過去90日間に100件以上"],
                    answer: 2,
                    explanation: "目標CPA入札を効果的に使うには、過去30日間で30件以上のコンバージョンが推奨されています。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "基本入札額100円、デバイス調整+50%、地域調整+100%の場合、調整後の入札額はいくらですか？",
                    options: ["250円", "300円", "350円", "400円"],
                    answer: 1,
                    explanation: "入札調整は乗算で適用されます。100円 × 1.50 × 2.00 = 300円です。"
                },
                {
                    id: "q203_3",
                    type: "choice",
                    question: "Google Adsの日予算について正しい説明はどれですか？",
                    options: ["1日の支出は日予算を絶対に超えない", "1日の支出は日予算の最大2倍になることがある", "1日の支出は日予算の最大3倍になることがある", "日予算は月単位でしか設定できない"],
                    answer: 1,
                    explanation: "Google Adsでは1日の支出が日予算の最大2倍になることがありますが、月単位では「日予算×30.4日」を超えません。"
                },
                {
                    id: "q203_4",
                    type: "fill",
                    question: "自動入札戦略を変更した直後に発生する期間を何と呼びますか？（○○期間）",
                    answer: "学習期間",
                    explanation: "自動入札戦略を変更した直後は学習期間（通常1〜2週間）が発生し、AIがデータを学習してパフォーマンスを最適化します。"
                }
            ]
        },
        {
            id: 204,
            title: "Yahoo!広告と検索広告の運用実践",
            duration: "18分",
            content: `
<h2>Yahoo!検索広告 vs Google Ads</h2>
<p>日本の検索広告市場では、<strong>Google Ads</strong>と<strong>Yahoo!検索広告</strong>が二大プラットフォームです。両者には類似点も多いですが、重要な違いもあります。</p>

<table>
<tr><th>項目</th><th>Google Ads</th><th>Yahoo!検索広告</th></tr>
<tr><td><strong>検索エンジンシェア</strong></td><td>約75%（日本）</td><td>約15%（日本）</td></tr>
<tr><td><strong>ユーザー層</strong></td><td>全年齢、スマホユーザー中心</td><td>30〜50代、PCユーザーが多い</td></tr>
<tr><td><strong>管理画面名称</strong></td><td>Google Ads</td><td>Yahoo!広告 検索広告</td></tr>
<tr><td><strong>ディスプレイネットワーク</strong></td><td>GDN</td><td>YDA</td></tr>
<tr><td><strong>自動入札</strong></td><td>スマートビディング</td><td>自動入札タイプ</td></tr>
<tr><td><strong>広告フォーマット</strong></td><td>RSA（レスポンシブ検索広告）</td><td>レスポンシブ検索広告</td></tr>
<tr><td><strong>マッチタイプ</strong></td><td>完全/フレーズ/部分</td><td>完全/フレーズ/部分（同等）</td></tr>
<tr><td><strong>品質指標</strong></td><td>品質スコア</td><td>品質インデックス</td></tr>
<tr><td><strong>配信先</strong></td><td>Google検索、Google検索パートナー</td><td>Yahoo! JAPAN検索、検索パートナー</td></tr>
<tr><td><strong>最低出稿額</strong></td><td>なし（1円から可能）</td><td>なし（1円から可能）</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">Yahoo!検索広告の活用ポイント</div>
<ul>
<li><strong>シニア層・PCユーザーに強い:</strong> Yahoo! JAPANのユーザー層は30〜50代が中心で、PCからのアクセスが比較的多い</li>
<li><strong>CPCが安い傾向:</strong> Google Adsに比べて競合が少ないため、一般的にCPCが低い</li>
<li><strong>Google Adsと併用:</strong> Google Adsだけではリーチできないユーザー層をカバーできる</li>
<li><strong>入稿ルールの違い:</strong> 記号の使用ルールなどが一部異なるため確認が必要</li>
</ul>
</div>

<h2>検索語句レポートの分析</h2>
<p><strong>検索語句レポート</strong>（検索クエリレポート）は、実際にユーザーが検索したキーワードと、それに対する広告のパフォーマンスを確認するレポートです。検索広告運用で<strong>最も重要な分析業務</strong>の一つです。</p>

<h3>検索語句レポートの確認ポイント</h3>
<table>
<tr><th>チェック項目</th><th>アクション</th></tr>
<tr><td>CVが発生している語句</td><td>完全一致・フレーズ一致で追加し入札強化</td></tr>
<tr><td>クリックが多いがCVがない語句</td><td>除外キーワードに追加を検討</td></tr>
<tr><td>CTRが著しく低い語句</td><td>広告文の訴求がズレていないか確認</td></tr>
<tr><td>想定外の語句での表示</td><td>マッチタイプの見直し or 除外キーワード追加</td></tr>
<tr><td>新しいキーワードの発見</td><td>新規キーワードとして追加を検討</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">検索語句分析のステップ</div>
<ol>
<li><strong>期間を設定:</strong> 直近7日〜30日のデータを確認</li>
<li><strong>表示回数順にソート:</strong> インプレッションが多い語句から優先的にチェック</li>
<li><strong>CVありの語句を確認:</strong> 成果が出ている語句をキーワードとして追加</li>
<li><strong>コスト高・CV無しの語句を確認:</strong> 除外キーワード候補をリストアップ</li>
<li><strong>新しい発見を記録:</strong> 想定していなかった有望な語句を見つける</li>
</ol>
</div>

<div class="info-box tip">
<div class="info-box-title">検索語句レポートの分析頻度</div>
<ul>
<li><strong>運用開始直後:</strong> 毎日確認（意図しない語句への配信を早期発見）</li>
<li><strong>安定運用期:</strong> 週1〜2回確認</li>
<li><strong>部分一致を使用中:</strong> より頻繁に確認（予想外の語句が多い）</li>
</ul>
</div>

<h2>検索広告の運用チェックリスト</h2>
<p>検索広告を効果的に運用するためには、定期的なチェックと改善が不可欠です。以下のチェックリストを参考に運用を行いましょう。</p>

<h3>日次チェック</h3>
<table>
<tr><th>項目</th><th>確認内容</th></tr>
<tr><td>予算消化状況</td><td>日予算に対して適切に消化されているか</td></tr>
<tr><td>広告の審査状況</td><td>不承認・制限付きの広告がないか</td></tr>
<tr><td>異常値の検知</td><td>CPC・CTR・CVRに異常な変動がないか</td></tr>
</table>

<h3>週次チェック</h3>
<table>
<tr><th>項目</th><th>確認内容</th></tr>
<tr><td>検索語句レポート</td><td>除外キーワードの追加、新規キーワードの発見</td></tr>
<tr><td>キーワード別パフォーマンス</td><td>CPA・ROASの良い/悪いキーワードの特定</td></tr>
<tr><td>広告文のパフォーマンス</td><td>広告の有効性スコア、CTR比較</td></tr>
<tr><td>入札調整</td><td>デバイス・地域・時間帯別のパフォーマンス確認</td></tr>
</table>

<h3>月次チェック</h3>
<table>
<tr><th>項目</th><th>確認内容</th></tr>
<tr><td>KPI達成状況</td><td>目標CPA・ROAS・CV数に対する実績</td></tr>
<tr><td>予算配分の見直し</td><td>高ROASキャンペーンへの予算再配分</td></tr>
<tr><td>アカウント構造の見直し</td><td>キャンペーン・広告グループの整理統合</td></tr>
<tr><td>競合分析</td><td>オークション分析レポートで競合状況を確認</td></tr>
<tr><td>LP改善</td><td>CVRが低いLPの改善施策を検討</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">運用で陥りがちなミス</div>
<ul>
<li><strong>分析なしの入札変更:</strong> データの裏付けなく感覚で入札を変更する</li>
<li><strong>除外キーワードの放置:</strong> 検索語句レポートを確認せず無駄なクリックを放置</li>
<li><strong>広告文のテスト不足:</strong> 1つの広告文のまま長期間放置する</li>
<li><strong>コンバージョン設定の不備:</strong> 計測タグの設定漏れや二重計測</li>
<li><strong>過度な変更:</strong> 学習期間中に頻繁に設定を変更してAIの最適化を阻害</li>
</ul>
</div>

<h2>オークション分析レポートの活用</h2>
<p>Google Adsの<strong>オークション分析レポート</strong>を使うと、同じオークションに参加している<strong>競合広告主の状況</strong>を把握できます。</p>

<table>
<tr><th>指標</th><th>意味</th></tr>
<tr><td><strong>インプレッションシェア</strong></td><td>表示機会のうち実際に表示された割合</td></tr>
<tr><td><strong>重複率</strong></td><td>自社と競合が同時に表示された割合</td></tr>
<tr><td><strong>上位掲載率</strong></td><td>競合より上位に表示された割合</td></tr>
<tr><td><strong>ページ上部表示率</strong></td><td>検索結果ページの上部に表示された割合</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">オークション分析の活用方法</div>
<ul>
<li>インプレッションシェアが低い場合 → 予算不足 or 品質スコア/入札額の改善が必要</li>
<li>特定の競合の上位掲載率が高い場合 → 競合の広告文・LPを分析し差別化を図る</li>
<li>新しい競合が参入した場合 → CPC上昇の原因特定に活用</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "Yahoo!検索広告の品質指標は何と呼ばれますか？",
                    options: ["品質スコア", "品質インデックス", "品質ランク", "品質レーティング"],
                    answer: 1,
                    explanation: "Yahoo!検索広告ではGoogle Adsの「品質スコア」に相当する指標を「品質インデックス」と呼びます。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "検索語句レポートで「クリックが多いがCVがない語句」に対するアクションとして適切なのは？",
                    options: ["入札額を大幅に引き上げる", "そのまま放置する", "除外キーワードに追加を検討", "マッチタイプを部分一致に変更"],
                    answer: 2,
                    explanation: "クリックが多いのにCVがない語句は広告費を消化するだけなので、除外キーワードへの追加を検討すべきです。"
                },
                {
                    id: "q204_3",
                    type: "choice",
                    question: "オークション分析レポートの「インプレッションシェア」が低い場合の主な原因は？",
                    options: ["広告文の文字数が少ない", "予算不足 or 品質スコア/入札額が低い", "キーワード数が多すぎる", "広告表示オプションが未設定"],
                    answer: 1,
                    explanation: "インプレッションシェアが低い主な原因は予算不足（予算による損失）、または品質スコアや入札額が低い（ランクによる損失）ことです。"
                },
                {
                    id: "q204_4",
                    type: "fill",
                    question: "Google Adsの検索語句レポートの正式名称は何ですか？（○○語句レポート）",
                    answer: "検索語句レポート",
                    explanation: "検索語句レポート（検索クエリレポート）は、実際にユーザーが検索した語句と広告パフォーマンスを確認できる重要なレポートです。"
                }
            ]
        }
    ]
};
