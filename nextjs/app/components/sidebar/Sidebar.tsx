import { List } from "./List";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.component}>
      <List />
    </div>
  );
}
