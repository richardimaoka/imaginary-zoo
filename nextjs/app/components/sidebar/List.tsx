import styles from "./List.module.css";
import { ListItem } from "./ListItem";

export function List() {
  return (
    <div className={styles.component}>
      {links.map((x) => (
        <ListItem
          key={x.name}
          name={x.name}
          path={x.path}
          childItems={x.childItems}
        />
      ))}
    </div>
  );
}

// `links` at the bottom, so that long `links` do not require you
// scrolling down to the bottom of the editor
const links = [
  {
    name: "哺乳類",
    path: "/animals/",
    childItems: [
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
    ],
  },
];
