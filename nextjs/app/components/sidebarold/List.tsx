import { CategoryBird } from "./CategoryBird";
import { CategoryFish } from "./CategoryFish";
import { CategoryMammal } from "./CategoryMammal";
import { CategoryReptiles } from "./CategoryReptiles";
import styles from "./List.module.css";

export function List() {
  return (
    <div className={styles.component}>
      <CategoryFish />
      <CategoryBird />
      <CategoryMammal />
      <CategoryReptiles />
    </div>
  );
}
