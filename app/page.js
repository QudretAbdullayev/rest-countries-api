import Image from "next/image";
import styles from "./page.module.scss";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Countries from "./components/Countries/Countries";
import CountryDetail from "./components/CountryDetail/CountryDetail";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* <Search/>
      <Filter/>
      <Countries/> */}
      {/* <CountryDetail/> */}
      <Countries/>
    </main>
  );
}
