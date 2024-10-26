import { LinkInternal } from "./LinkInternal";
import styles from "./List.module.css";

export function List() {
  // `links` at the bottom, so that long `links` do not require you
  // scrolling down to the bottom of the editor
  const links = [
    {
      name: "サーバル",
      path: "/animals/serval",
    },
    {
      name: "スナドリネコ",
      path: "/animals/ishing-cat",
    },
    {
      name: "スナネコ",
      path: "/animals/sand-cat",
    },
    {
      name: "マヌルネコ",
      path: "/animals/manul-cat",
    },
  ];

  return (
    <div className={styles.component}>
      {links.map((x) => (
        <LinkInternal key={x.name} name={x.name} path={x.path} />
      ))}
    </div>
  );
}
