import styles from "./CategoryBird.module.css";
import { ListItem } from "./ListItem";

export function CategoryBird() {
  const links = [
    { name: "ニュース", path: "/news" },
    { name: "どうぶつ", path: "/animals" },
    { name: "ショップ", path: "/shop" },
    { name: "園内マップ", path: "/map" },
    { name: "アクセス", path: "/access" },
    { name: "料金案内", path: "/pricing" },
  ];

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
