"use client";

import { usePathname } from "next/navigation";
import styles from "./ListItem.module.css";
import React from "react";
import Link from "next/link";

type ItemProps = {
  name: string;
  path: string;
};

type Props = ItemProps & {
  childItems?: Props[];
  isNested?: boolean;
};

export function ListItem(props: Props) {
  const pathname = usePathname();
  const current = pathname === props.path;

  return (
    <div className={props.isNested ? styles.nested : styles.toplevel}>
      {props.isNested && <div className={styles.line} />}

      <Link
        className={styles.parent + (current ? " " + styles.current : "")}
        href={props.path}
      >
        {props.name}
      </Link>

      {/* If chldItems exist */}
      {props.childItems && props.childItems.length > 0 && (
        <div className={styles.children}>
          {props.childItems.map((c) => (
            <React.Fragment key={c.name}>
              {props.isNested && <div className={styles.line} />}
              <div className={styles.child}>
                <ListItem
                  name={c.name}
                  path={c.path}
                  isNested
                  childItems={c.childItems}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
