import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function EventPage({ event }) {
  console.log(event);
  const evt = event[0];
  return (
    <Layout title="My event">
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
}
