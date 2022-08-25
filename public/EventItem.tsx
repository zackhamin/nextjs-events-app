import Link from "node_modules/next/link";
import Image from "node_modules/next/image";
import styles from "../styles/eventItem.module.css";
import defaultImage from "../public/event-default.png";

export default function EventItem({ evt }) {
  console.log(evt.image);
  return (
    <div className={styles.event}>
      <div>
        <Image alt="DJ picture" src={evt.image} width={170} height={100} />
      </div>

      <div className={styles.info}>
        <span>
          {evt.date} @ {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
    </div>
  );
}
