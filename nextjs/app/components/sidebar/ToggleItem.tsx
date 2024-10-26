import { RightArrow } from "./icons/RightArrow";
import styles from "./ToggleItem.module.css";

interface Props {
  name: string;
  open?: boolean;
  onClick?: () => void;
}

export function ToggleItem(props: Props) {
  return (
    <button
      className={
        styles.component + " " + (props.open ? styles.open : styles.close)
      }
      onClick={props.onClick}
    >
      <div className={styles.name}>{props.name}</div>
      <RightArrow />
    </button>
  );
}
