import Link from "../node_modules/next/link";
import styles from "../styles/Footer.module.css";

export default function GlobalFooter() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Fair and Family events</p>
      <Link href="/about">About this project</Link>
    </footer>
  );
}
