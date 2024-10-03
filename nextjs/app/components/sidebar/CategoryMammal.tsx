import styles from "./CategoryMammal.module.css";
import { ListItem } from "./ListItem";

export function CategoryMammal() {
  return (
    <div className={styles.component}>
      <div>哺乳類</div>
      <div>
        {links.map((x) => (
          <ListItem key={x.name} name={x.name} path={x.path} />
        ))}
      </div>
    </div>
  );
}

const links = [
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
];
