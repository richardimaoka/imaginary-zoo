import styles from "./ListItem.module.css";

interface Props {
  name: string;
  path: string;
}

export function ListItem(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.name}>{props.name}</div>
    </div>
  );
}
