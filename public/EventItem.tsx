import Link from "node_modules/next/link";
import Image from "node_modules/next/image";
import styles from "../styles/eventItem.module.css";
import defaultImage from "../public/event-default.png";

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div>
        <Image
          alt="DJ picture"
          src={evt.image.data.attributes.url}
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-UK")} @ {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">More info</a>
        </Link>
      </div>
    </div>
  );
}
