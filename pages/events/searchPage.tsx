import Layout from "@/components/Layout";
import { API_URL } from "config/index";
import EventItem from "public/EventItem";
import qs from "qs";

export default function SearchPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Search</h1>
      {/* {events.length === 0 && <h3>Currently no events</h3>}
      {events.map((event) => (
        <EventItem key={event.id} evt={event.attributes} />
      ))} */}
    </Layout>
  );
}

export async function getServerSideProps({ query: searchTerm }) {
  const query = qs.stringify({
    filters: {
      $or: [
        { name: { $contains: searchTerm } },
        { venue: { $contains: searchTerm } },
        { performers: { $contains: searchTerm } },
        { description: { $contains: searchTerm } },
      ],
    },
  });

  const res = await fetch(`${API_URL}/api/events?filters${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
