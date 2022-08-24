import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function EventPage() {
  const router = useRouter();
  return (
    <Layout title="My event">
      <h1>My event</h1>
    </Layout>
  );
}
