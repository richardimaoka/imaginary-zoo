import { Header } from "./components/header/Header";
import { List } from "./components/sidebar/List";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      page
      {/* <Header />
      <List /> */}
    </div>
  );
}
