import Layout from "@/components/Layout";
import { API_URL } from "config/index";
import EventItem from "public/EventItem";

export default function Events({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>Currently no events</h3>}
      {events.map((event) => (
        <EventItem key={event.id} evt={event} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
