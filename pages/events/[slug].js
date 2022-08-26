import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from "../../styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Pic1 from "../../public/sample/event1.jpg";

export default function EventPage({ event }) {
  console.log(event);
  const evt = event[0];

  const deleteEvent = () => {
    console.log("Event deleted");
    console.log(evt);
  };

  return (
    <Layout title="My event">
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
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
          {evt.date} @ {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={Pic1} width={900} height={600} alt="image of party" />
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
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
}
