import { LinkInternal } from "./LinkInternal";
import styles from "./List.module.css";

export function List() {
  return (
    <div className={styles.component}>
      {links.map((x) => (
        <LinkInternal key={x.name} name={x.name} path={x.path} />
      ))}
    </div>
  );
}

// `links` at the bottom, so that long `links` do not require you
// scrolling down to the bottom of the editor
const links = [
  {
    name: "サーバル",
    path: "/animals/serval",
  },
  {
    name: "スナドリネコ",
    path: "/animals/fishing-cat",
  },
  {
    name: "スナネコ",
    path: "/animals/sand-cat",
  },
  {
    name: "マヌルネコ",
    path: "/animals/manul-cat",
  },
  {
    name: "ピラルクー",
    path: "/aaa",
  },
  {
    name: "コロソマ",
    path: "/aaa",
  },
  {
    name: "ピラニアナッテリー",
    path: "/aaa",
  },
  {
    name: "フラミンゴシクリッド",
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
    name: "アカコンゴウインコ",
    path: "/aaa",
  },
  {
    name: "オオバタン",
    path: "/aaa",
  },
  {
    name: "キバタン",
    path: "/aaa",
  },
  {
    name: "ヒワコンゴウインコ",
    path: "/aaa",
  },
  {
    name: "ベニコンゴウインコ",
    path: "/aaa",
  },
  {
    name: "ルリコンゴウインコ",
    path: "/aaa",
  },
  {
    name: "アカツクシガモ",
    path: "/aaa",
  },
  {
    name: "オシドリ",
    path: "/aaa",
  },
  {
    name: "クビワコガモ",
    path: "/aaa",
  },
  {
    name: "ツクシガモ",
    path: "/aaa",
  },
  {
    name: "マガモ",
    path: "/aaa",
  },
  {
    name: "カンムリシャコ",
    path: "/aaa",
  },
  {
    name: "シロムネオオハシ",
    path: "/aaa",
  },
  {
    name: "アフリカハゲコウ",
    path: "/aaa",
  },
  {
    name: "エジプトハゲワシ",
    path: "/aaa",
  },
  {
    name: "オーストラリアガマグチヨタカ",
    path: "/aaa",
  },
  {
    name: "シロオオタカ",
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
    name: "ワシノスリ",
    path: "/aaa",
  },
  {
    name: "インカアジサシ",
    path: "/aaa",
  },
  {
    name: "クロエリセイタカシギ",
    path: "/aaa",
  },
  {
    name: "シロクロゲリ",
    path: "/aaa",
  },
  {
    name: "オウギバト",
    path: "/aaa",
  },
  {
    name: "オナガハヤブサ",
    path: "/aaa",
  },
  {
    name: "ラナーハヤブサ",
    path: "/aaa",
  },
  {
    name: "オオフクロウ",
    path: "/aaa",
  },
  {
    name: "クロワシミミズク",
    path: "/aaa",
  },
  {
    name: "トルクメニアンワシミミズク",
    path: "/aaa",
  },
  {
    name: "メンフクロウ",
    path: "/aaa",
  },
  {
    name: "ベニハチクイ",
    path: "/aaa",
  },
  {
    name: "ヨーロッパフラミンゴ",
    path: "/aaa",
  },
  {
    name: "アフリカクロトキ",
    path: "/aaa",
  },
  {
    name: "アフリカヘラサギ",
    path: "/aaa",
  },
  {
    name: "ショウジョウトキ",
    path: "/aaa",
  },
  {
    name: "シロトキ",
    path: "/aaa",
  },
  {
    name: "ハシビロコウ",
    path: "/aaa",
  },
  {
    name: "ヒロハシサギ",
    path: "/aaa",
  },
  {
    name: "ベニヘラサギ",
    path: "/aaa",
  },
  {
    name: "ミゾゴイ",
    path: "/aaa",
  },
  {
    name: "モモイロペリカン",
    path: "/aaa",
  },
  {
    name: "ケープペンギン",
    path: "/aaa",
  },
  {
    name: "アメリカンファジーロップイヤー",
    path: "/aaa",
  },
  {
    name: "イングリッシュアンゴラ",
    path: "/aaa",
  },
  {
    name: "ミニチュアホース",
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
    name: "ケープハイラックス",
    path: "/aaa",
  },
  {
    name: "アメリカバク",
    path: "/aaa",
  },
  {
    name: "ウマ",
    path: "/aaa",
  },
  {
    name: "ポニー",
    path: "/aaa",
  },
  {
    name: "マレーバク",
    path: "/aaa",
  },
  {
    name: "アクシスジカ",
    path: "/aaa",
  },
  {
    name: "アルパカ",
    path: "/aaa",
  },
  {
    name: "クビワペッカリー",
    path: "/aaa",
  },
  {
    name: "コビトカバ",
    path: "/aaa",
  },
  {
    name: "コリデール",
    path: "/aaa",
  },
  {
    name: "プーズー",
    path: "/aaa",
  },
  {
    name: "フタコブラクダ",
    path: "/aaa",
  },
  {
    name: "ミニブタ",
    path: "/aaa",
  },
  {
    name: "アメリカクロクマ",
    path: "/aaa",
  },
  {
    name: "アライグマ",
    path: "/aaa",
  },
  {
    name: "クーガー（ピューマ）",
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
    name: "ゴマフアザラシ",
    path: "/aaa",
  },
  {
    name: "シマスカンク",
    path: "/aaa",
  },
  {
    name: "シンリンオオカミ",
    path: "/aaa",
  },
  {
    name: "スマトラトラ",
    path: "/aaa",
  },
  {
    name: "ニュージーランドハンタウェイ",
    path: "/aaa",
  },
  {
    name: "ビントロング",
    path: "/aaa",
  },
  {
    name: "フェネック",
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
    name: "ミナミアメリカオットセイ",
    path: "/aaa",
  },
  {
    name: "ラブラドールレトリバー",
    path: "/aaa",
  },
  {
    name: "レッサーパンダ",
    path: "/aaa",
  },
  {
    name: "マタコミツオビアルマジロ",
    path: "/aaa",
  },
  {
    name: "アカカンガルー",
    path: "/aaa",
  },
  {
    name: "フタユビナマケモノ",
    path: "/aaa",
  },
  {
    name: "ミナミコアリクイ",
    path: "/aaa",
  },
  {
    name: "コモンマーモセット",
    path: "/aaa",
  },
  {
    name: "ショウガラゴ",
    path: "/aaa",
  },
  {
    name: "ピグミーマーモセット",
    path: "/aaa",
  },
  {
    name: "レッサースローロリス",
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
  {
    name: "アマミトゲネズミ",
    path: "/aaa",
  },
  {
    name: "アメリカビーバー",
    path: "/aaa",
  },
  {
    name: "ウスイロホソオクモネズミ",
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
    name: "ニホンモモンガ",
    path: "/aaa",
  },
  {
    name: "ニホンリス",
    path: "/aaa",
  },
  {
    name: "マーラ",
    path: "/aaa",
  },
  {
    name: "モルモット",
    path: "/aaa",
  },
  {
    name: "アルダブラゾウガメ",
    path: "/aaa",
  },
  {
    name: "スッポンモドキ",
    path: "/aaa",
  },
  {
    name: "ホウシャガメ",
    path: "/aaa",
  },
  {
    name: "ワニガメ",
    path: "/aaa",
  },
  {
    name: "ブラジルカイマン",
    path: "/aaa",
  },
  {
    name: "グリーンイグアナ",
    path: "/aaa",
  },
  {
    name: "ビルマニシキヘビ",
    path: "/aaa",
  },
  {
    name: "ミヤコカナヘビ",
    path: "/aaa",
  },
  {
    name: "サーバル",
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
    name: "マヌルネコ",
    path: "/aaa",
  },
];
