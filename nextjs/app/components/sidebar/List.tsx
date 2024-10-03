import styles from "./List.module.css";
import { ListItem } from "./ListItem";

export function List() {
  const links = [
    {
      category: { name: "哺乳類", path: "" },
      animals: [
        {
          name: "アカカンガルー",
          path: "/aaa",
        },
        {
          name: "アクシスジカ",
          path: "/aaa",
        },
        {
          name: "アマミトゲネズミ",
          path: "/aaa",
        },
        {
          name: "アメリカクロクマ",
          path: "/aaa",
        },
        {
          name: "アメリカバク",
          path: "/aaa",
        },
        {
          name: "アメリカビーバー",
          path: "/aaa",
        },
        {
          name: "アメリカンファジーロップイヤー",
          path: "/aaa",
        },
        {
          name: "アライグマ",
          path: "/aaa",
        },
        {
          name: "アルパカ",
          path: "/aaa",
        },
        {
          name: "インカアジサシ",
          path: "/aaa",
        },
        {
          name: "イングリッシュアンゴラ",
          path: "/aaa",
        },
        {
          name: "ウスイロホソオクモネズミ",
          path: "/aaa",
        },
        {
          name: "ウマ",
          path: "/aaa",
        },
        {
          name: "オグロプレーリードッグ",
          path: "/aaa",
        },
        {
          name: "カピバラ",
          path: "/aaa",
        },
        {
          name: "クーガー（ピューマ）",
          path: "/aaa",
        },
        {
          name: "クビワペッカリー",
          path: "/aaa",
        },
        {
          name: "グンディ",
          path: "/aaa",
        },
        {
          name: "ケープハイラックス",
          path: "/aaa",
        },
        {
          name: "ゴールデンレトリバー",
          path: "/aaa",
        },
        {
          name: "コツメカワウソ",
          path: "/aaa",
        },
        {
          name: "コビトカバ",
          path: "/aaa",
        },
        {
          name: "ゴマフアザラシ",
          path: "/aaa",
        },
        {
          name: "コモンマーモセット",
          path: "/aaa",
        },
        {
          name: "コリデール",
          path: "/aaa",
        },
        {
          name: "サーバル",
          path: "/aaa",
        },
        {
          name: "シマスカンク",
          path: "/aaa",
        },
        {
          name: "ショウガラゴ",
          path: "/aaa",
        },
        {
          name: "シンリンオオカミ",
          path: "/aaa",
        },
        {
          name: "スナドリネコ",
          path: "/aaa",
        },
        {
          name: "スナネコ",
          path: "/aaa",
        },
        {
          name: "スマトラトラ",
          path: "/aaa",
        },
        {
          name: "ニホンモモンガ",
          path: "/aaa",
        },
        {
          name: "ニホンリス",
          path: "/aaa",
        },
        {
          name: "ニュージーランドハンタウェイ",
          path: "/aaa",
        },
        {
          name: "ピグミーマーモセット",
          path: "/aaa",
        },
        {
          name: "ビントロング",
          path: "/aaa",
        },
        {
          name: "プーズー",
          path: "/aaa",
        },
        {
          name: "フェネック",
          path: "/aaa",
        },
        {
          name: "フクロシマリス",
          path: "/aaa",
        },
        {
          name: "フクロモモンガ",
          path: "/aaa",
        },
        {
          name: "フタコブラクダ",
          path: "/aaa",
        },
        {
          name: "フタユビナマケモノ",
          path: "/aaa",
        },
        {
          name: "ブッシュドッグ（ヤブイヌ）",
          path: "/aaa",
        },
        {
          name: "ブリタニースパニエル",
          path: "/aaa",
        },
        {
          name: "ボーダーコリー",
          path: "/aaa",
        },
        {
          name: "ポニー",
          path: "/aaa",
        },
        {
          name: "マーラ",
          path: "/aaa",
        },
        {
          name: "マタコミツオビアルマジロ",
          path: "/aaa",
        },
        {
          name: "マヌルネコ",
          path: "/aaa",
        },
        {
          name: "マレーバク",
          path: "/aaa",
        },
        {
          name: "ミナミアメリカオットセイ",
          path: "/aaa",
        },
        {
          name: "ミナミコアリクイ",
          path: "/aaa",
        },
        {
          name: "ミニチュアホース",
          path: "/aaa",
        },
        {
          name: "ミニブタ",
          path: "/aaa",
        },
        {
          name: "モルモット",
          path: "/aaa",
        },
        {
          name: "ラブラドールレトリバー",
          path: "/aaa",
        },
        {
          name: "レッサースローロリス",
          path: "/aaa",
        },
        {
          name: "レッサーパンダ",
          path: "/aaa",
        },
        {
          name: "ワオキツネザル",
          path: "/aaa",
        },
        {
          name: "ワタボウシタマリン",
          path: "/aaa",
        },
      ],
    },
    {
      category: { name: "魚類", path: "" },
      animals: [
        {
          name: "コロソマ",
          path: "/aaa",
        },
        {
          name: "ピラニアナッテリー",
          path: "/aaa",
        },
        {
          name: "ピラルクー",
          path: "/aaa",
        },
        {
          name: "ヒワコンゴウインコ",
          path: "/aaa",
        },
        {
          name: "フラミンゴシクリッド",
          path: "/aaa",
        },
      ],
    },
    {
      category: { name: "鳥類", path: "" },
      animals: [
        {
          name: "アカコンゴウインコ",
          path: "/aaa",
        },
        {
          name: "アカツクシガモ",
          path: "/aaa",
        },
        {
          name: "アフリカクロトキ",
          path: "/aaa",
        },
        {
          name: "アフリカハゲコウ",
          path: "/aaa",
        },
        {
          name: "アフリカヘラサギ",
          path: "/aaa",
        },
        {
          name: "エジプトハゲワシ",
          path: "/aaa",
        },
        {
          name: "オウギバト",
          path: "/aaa",
        },
        {
          name: "オーストラリアガマグチヨタカ",
          path: "/aaa",
        },
        {
          name: "オオバタン",
          path: "/aaa",
        },
        {
          name: "オオフクロウ",
          path: "/aaa",
        },
        {
          name: "オシドリ",
          path: "/aaa",
        },
        {
          name: "オナガハヤブサ",
          path: "/aaa",
        },
        {
          name: "カンムリシャコ",
          path: "/aaa",
        },
        {
          name: "キバタン",
          path: "/aaa",
        },
        {
          name: "クビワコガモ",
          path: "/aaa",
        },
        {
          name: "クロエリセイタカシギ",
          path: "/aaa",
        },
        {
          name: "ケープペンギン",
          path: "/aaa",
        },
        {
          name: "ショウジョウトキ",
          path: "/aaa",
        },
        {
          name: "シロオオタカ",
          path: "/aaa",
        },
        {
          name: "シロクロゲリ",
          path: "/aaa",
        },
        {
          name: "シロトキ",
          path: "/aaa",
        },
        {
          name: "シロムネオオハシ",
          path: "/aaa",
        },
        {
          name: "ツクシガモ",
          path: "/aaa",
        },
        {
          name: "トルクメニアンワシミミズク",
          path: "/aaa",
        },
        {
          name: "ニシムラサキエボシドリ",
          path: "/aaa",
        },
        {
          name: "ハイイロエボシドリ",
          path: "/aaa",
        },
        {
          name: "ハシビロコウ",
          path: "/aaa",
        },
        {
          name: "ハリスホーク",
          path: "/aaa",
        },
        {
          name: "ヒメコンドル",
          path: "/aaa",
        },
        {
          name: "ヒロハシサギ",
          path: "/aaa",
        },
        {
          name: "ベニコンゴウインコ",
          path: "/aaa",
        },
        {
          name: "ベニハチクイ",
          path: "/aaa",
        },
        {
          name: "ベニヘラサギ",
          path: "/aaa",
        },
        {
          name: "マガモ",
          path: "/aaa",
        },
        {
          name: "ミゾゴイ",
          path: "/aaa",
        },
        {
          name: "メンフクロウ",
          path: "/aaa",
        },
        {
          name: "モモイロペリカン",
          path: "/aaa",
        },
        {
          name: "ヨーロッパフラミンゴ",
          path: "/aaa",
        },
        {
          name: "ラナーハヤブサ",
          path: "/aaa",
        },
        {
          name: "ルリコンゴウインコ",
          path: "/aaa",
        },
        {
          name: "ワシノスリ",
          path: "/aaa",
        },
      ],
    },
    {
      category: { name: "爬虫類", path: "" },
      animals: [
        {
          name: "アルダブラゾウガメ",
          path: "/aaa",
        },
        {
          name: "グリーンイグアナ",
          path: "/aaa",
        },
        {
          name: "スッポンモドキ",
          path: "/aaa",
        },
        {
          name: "ビルマニシキヘビ",
          path: "/aaa",
        },
        {
          name: "ブラジルカイマン",
          path: "/aaa",
        },
        {
          name: "ホウシャガメ",
          path: "/aaa",
        },
        {
          name: "ミヤコカナヘビ",
          path: "/aaa",
        },
        {
          name: "ワニガメ",
          path: "/aaa",
        },
      ],
    },
  ];

  return (
    <div className={styles.component}>
      {links.map((y) => (
        <div key={y.category.name}>
          <div>{y.category.name}</div>
          {y.animals.map((x) => (
            <ListItem key={x.name} name={x.name} path={x.path} />
          ))}
        </div>
      ))}
    </div>
  );
}
