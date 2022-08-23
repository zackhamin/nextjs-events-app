import React from "react";
import Link from "../node_modules/next/link";
import styles from "@/styles/Header.module.css";

export default function GlobalHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Fair Events</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Upcoming Fairs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
