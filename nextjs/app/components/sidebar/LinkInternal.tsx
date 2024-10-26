"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./LinkInternal.module.css";

interface Props {
  path: string;
  name: string;
}

export function LinkInternal(props: Props) {
  const pathname = usePathname();
  const current = pathname === props.path;

  return (
    <Link
      className={styles.component + (current ? " " + styles.current : "")}
      href={props.path}
    >
      {props.name}
    </Link>
  );
}
