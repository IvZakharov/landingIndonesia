import styles from "./Header.module.scss";
import Image from "next/image";
import MainNav from "@/components/Nav/MainNav";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={"container"}>
        <div className={"hidden md:block"}>
          <MainNav />
        </div>

        <button className={`block md:hidden ${styles.menuBtn}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
