import Layout from "@/components/Layout";
import { API_URL } from "config/index";
import qs from "qs";
import { useRouter } from "node_modules/next/router";
import React from "react";
import EventItem from "public/EventItem";
import Link from "node_modules/next/link";

export default function SearchPage({ events }) {
  const router = useRouter();
  console.log(events);
  return (
    <Layout title="Search Results">
      <h1>Search</h1>
      <p>Search results for {router.query.searchTerm}</p>
      <Link href="/events">
        <a>Go back</a>
      </Link>
      {events.length === 0 && <h3>Currently no events</h3>}
      {events.map((event) => (
        <EventItem key={event.id} evt={event.attributes} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { searchTerm } }) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $contains: searchTerm,
            },
          },
          {
            venue: {
              $contains: searchTerm,
            },
          },
          {
            performers: {
              $contains: searchTerm,
            },
          },
          {
            address: {
              $contains: searchTerm,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const res = await fetch(`${API_URL}/api/events?filter=${query}&[populate]=*`);
  console.log(query);
  const events = await res.json();

  return {
    props: { events: events.data },
  };
}
