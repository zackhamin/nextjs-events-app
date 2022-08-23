import Link from "../node_modules/next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>This is not the page you are looking for</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
}
