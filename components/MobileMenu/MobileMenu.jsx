import styles from "./MobileMenu.module.scss";
import MainNav from "@/components/Nav/MainNav";

const MobileMenu = ({ onCloseMenu, linkUrl, tel, links }) => {
  return (
    <aside className={`pt-6 ${styles.mobileMenu}`}>
      <div className="container flex flex-col md:items-center md:justify-between md:flex-row relative">
        <button className={styles.closeBtn} onClick={onCloseMenu}>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="34.9276"
              height="2.99379"
              transform="matrix(0.708806 -0.705404 0.708806 0.705404 0.121094 24.8882)"
              fill="#121212"
            />
            <rect
              width="34.9276"
              height="2.99379"
              transform="matrix(0.708806 0.705404 -0.708806 0.705404 2.12109 0)"
              fill="#121212"
            />
          </svg>
        </button>

        <div className={"mb-12"}>
          <MainNav onCloseMenu={onCloseMenu} links={links} />
        </div>

        <a
          href={linkUrl}
          target={"_blank"}
          className={`button button--secondary ${styles.button} mb-4`}
        >
          Написать <br /> в WhatsApp
        </a>
        <a href={`tel:${tel}`} className={styles.tel}>
          {tel}
        </a>
      </div>
    </aside>
  );
};

export default MobileMenu;
