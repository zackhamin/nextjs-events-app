import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from "../../styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function EventPage({ event }) {
  const evt = event.data[0].attributes;

  const deleteEvent = () => {};

  return (
    <Layout title="My event">
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/api/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt />
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete
          </a>
        </div>

        <span>
          {new Date(evt.date).toLocaleDateString("en-UK")} @ {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.data.attributes.formats.large.url}
              width={900}
              height={600}
              alt="image of party"
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"}Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/events?filters[slug]slug=${slug}&populate=*`
  );
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
}
