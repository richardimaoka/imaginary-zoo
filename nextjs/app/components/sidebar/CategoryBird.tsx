import styles from "./CategoryBird.module.css";
import { ListItem } from "./ListItem";

export function CategoryBird() {
  return (
    <div className={styles.component}>
      <div>鳥類</div>
      <div>
        {links.map((x) => (
          <ListItem key={x.name} name={x.name} path={x.path} />
        ))}
      </div>
    </div>
  );
}

const links = [
  // {
  //   name: "アカコンゴウインコ",
  //   path: "/aaa",
  // },
  // {
  //   name: "アカツクシガモ",
  //   path: "/aaa",
  // },
  // {
  //   name: "アフリカクロトキ",
  //   path: "/aaa",
  // },
  // {
  //   name: "アフリカハゲコウ",
  //   path: "/aaa",
  // },
  // {
  //   name: "アフリカヘラサギ",
  //   path: "/aaa",
  // },
  // {
  //   name: "エジプトハゲワシ",
  //   path: "/aaa",
  // },
  // {
  //   name: "オウギバト",
  //   path: "/aaa",
  // },
  // {
  //   name: "オーストラリアガマグチヨタカ",
  //   path: "/aaa",
  // },
  // {
  //   name: "オオバタン",
  //   path: "/aaa",
  // },
  // {
  //   name: "オオフクロウ",
  //   path: "/aaa",
  // },
  {
    name: "オシドリ",
    path: "/aaa",
  },
  {
    name: "オナガハヤブサ",
    path: "/aaa",
  },
  // {
  //   name: "カンムリシャコ",
  //   path: "/aaa",
  // },
  // {
  //   name: "キバタン",
  //   path: "/aaa",
  // },
  // {
  //   name: "クビワコガモ",
  //   path: "/aaa",
  // },
  // {
  //   name: "クロエリセイタカシギ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ケープペンギン",
  //   path: "/aaa",
  // },
  // {
  //   name: "ショウジョウトキ",
  //   path: "/aaa",
  // },
  // {
  //   name: "シロオオタカ",
  //   path: "/aaa",
  // },
  // {
  //   name: "シロクロゲリ",
  //   path: "/aaa",
  // },
  // {
  //   name: "シロトキ",
  //   path: "/aaa",
  // },
  // {
  //   name: "シロムネオオハシ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ツクシガモ",
  //   path: "/aaa",
  // },
  // {
  //   name: "トルクメニアンワシミミズク",
  //   path: "/aaa",
  // },
  // {
  //   name: "ニシムラサキエボシドリ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ハイイロエボシドリ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ハシビロコウ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ハリスホーク",
  //   path: "/aaa",
  // },
  // {
  //   name: "ヒメコンドル",
  //   path: "/aaa",
  // },
  // {
  //   name: "ヒロハシサギ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ベニコンゴウインコ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ベニハチクイ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ベニヘラサギ",
  //   path: "/aaa",
  // },
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
  // {
  //   name: "ヨーロッパフラミンゴ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ラナーハヤブサ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ルリコンゴウインコ",
  //   path: "/aaa",
  // },
  // {
  //   name: "ワシノスリ",
  //   path: "/aaa",
  // },
];
