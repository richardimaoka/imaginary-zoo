import { List } from "../sidebar/List";
import styles from "./Middle.module.css";

interface Props {
  children: React.ReactNode;
}

export function Middle(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <List />
        <div className={styles.main}>{props.children}</div>
      </div>
    </div>
  );
}
