import styles from "./Header.module.css";
import { LinkInternal } from "./LinkInternal";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

export function Header() {
  const links = [
    { name: "ニュース", path: "/news" },
    { name: "どうぶつ", path: "/animals" },
    { name: "ショップ", path: "/shop" },
    { name: "園内マップ", path: "/map" },
    { name: "アクセス", path: "/access" },
    { name: "料金案内", path: "/pricing" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Logo />
        {links.map((x) => (
          <LinkInternal key={x.name} name={x.name} path={x.path} />
        ))}
        <SearchBox />
      </div>
    </div>
  );
}
