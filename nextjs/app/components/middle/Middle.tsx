import styles from "./Middle.module.css";

interface Props {
  children: React.ReactNode;
}

export function Middle(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div />
        <div className={styles.main}>{props.children}</div>
      </div>
    </div>
  );
}
