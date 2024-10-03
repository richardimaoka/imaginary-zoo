import styles from "./CategoryFish.module.css";
import { ListItem } from "./ListItem";

export function CategoryFish() {
  return (
    <div className={styles.component}>
      <div>魚類</div>
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
];
