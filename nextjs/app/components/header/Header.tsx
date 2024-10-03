import styles from "./Header.module.css";
import { Logo } from "./Logo";

export function Header() {
  return (
    <div className={styles.component}>
      <Logo />
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
      <div>item4</div>
    </div>
  );
}
