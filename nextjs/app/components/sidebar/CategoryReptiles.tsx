import styles from "./CategoryReptiles.module.css";
import { ListItem } from "./ListItem";

export function CategoryReptiles() {
  return (
    <div className={styles.component}>
      <div>爬虫類</div>
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
];
