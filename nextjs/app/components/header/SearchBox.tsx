import { SearchIcon } from "./SearchIcon";
import styles from "./SearchBox.module.css";

export function SearchBox() {
  return (
    <div className={styles.component}>
      <SearchIcon />
      <input className={styles.input} placeholder="search text" />
    </div>
  );
}
