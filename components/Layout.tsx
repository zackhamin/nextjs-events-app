import Head from "../node_modules/next/head";
import { useRouter } from "node_modules/next/router";
import styles from "../styles/Layout.module.css";
import GlobalHeader from "./Header";
import GlobalFooter from "./Footer";
import Showcase from "./showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <GlobalHeader />

      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <GlobalFooter />
    </div>
  );
}

Layout.defaultProps = {
  title: "Fair and Carnival events",
  description: "Find the upcoming fair and family events",
  keywords: "fair, family event, kids fun fair",
};
