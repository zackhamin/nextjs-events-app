import styles from "../styles/Search.module.css";
import { useState } from "react";
import { useRouter } from "node_modules/next/router";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/searchPage?searchTerm=${searchTerm}`);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for event"
        ></input>
      </form>
    </div>
  );
}
