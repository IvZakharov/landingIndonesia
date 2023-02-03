import styles from "./Header.module.scss";
import Image from "next/image";
import MainNav from "@/components/Nav/MainNav";

const Header = ({ onOpenMenu }) => {
  return (
    <header className={`${styles.header}`}>
      <div className={"container"}>
        <div className={"hidden md:block"}>
          <MainNav />
        </div>

        <button
          onClick={onOpenMenu}
          className={`block md:hidden ${styles.menuBtn}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
