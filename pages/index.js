import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import EventItem from "../public/EventItem";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>Currently no events</h3>}
      {events.map((event) => (
        <EventItem key={event.id} evt={event.attributes} />
      ))}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View more</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${API_URL}/api/events?_sort=date:ASC&_limit=3&populate=*`
  );
  const events = await res.json();

  return {
    props: { events: events.data },
  };
}
