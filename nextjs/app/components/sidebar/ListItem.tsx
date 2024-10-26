"use client";

import { usePathname } from "next/navigation";
import styles from "./ListItem.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { ToggleItem } from "./ToggleItem";

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
  const defaultOpen = pathname.includes(props.path);
  console.log(
    "name",
    props.name,
    "path",
    props.path,
    "default open",
    defaultOpen
  );
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={props.isNested ? styles.nested : styles.toplevel}>
      {props.isNested && <div className={styles.line} />}

      {props.childItems && props.childItems.length > 0 ? (
        <ToggleItem
          name={props.name}
          open={open}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <Link className={styles.parent} href={props.path}>
          {props.name}
        </Link>
      )}

      {/* If chldItems exist */}
      {props.childItems && props.childItems.length > 0 && (
        <div
          className={
            styles.children + " " + (open ? styles.open : styles.close)
          }
        >
          {props.childItems.map((c) => (
            <React.Fragment key={c.name}>
              {props.isNested && <div className={styles.line} />}
              <ListItem
                name={c.name}
                path={c.path}
                isNested
                childItems={c.childItems}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
