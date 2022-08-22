import Head from "../node_modules/next/head";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Fair and Carnival events",
  description: "Find the upcoming fair and family events",
  keywords: "fair, family event, kids fun fair",
};
