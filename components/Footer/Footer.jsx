import styles from "./Footer.module.scss";

const links = [
  { id: 0, href: "/", title: "Главная" },
  { id: 1, href: "#structure", title: "Структура" },
  { id: 2, href: "#advantages", title: "Преимущества" },
  { id: 3, href: "#steps", title: "Процесс открытия" },
  { id: 4, href: "#price", title: "Стоимость" },
  { id: 6, href: "#contacts", title: "Контакты" },
];

const Footer = ({ linkUrl, tel }) => {
  return (
    <footer className={styles.footer} id={"contacts"}>
      <div className={"container"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 xl:gap-24"
          }
        >
          <div className={"mb-12 md:col-span-2 xl:col-span-5"}>
            <h4 className={styles.addressTitle}>Наш адрес</h4>
            <p className={"text text-center md:text-left"}>
              Jalan Sunset Road Nomor 819, Bali <br className={"xl:hidden"} />{" "}
              Ruko Sunset Indah Nomor 10, Kuta, Bali
            </p>
          </div>

          <nav className={`${styles.nav} mb-12 xl:col-span-4`}>
            <ul>
              {links &&
                links.map((obj, idx) => (
                  <li key={idx}>
                    <a href={obj.href}>{obj.title}</a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className={"flex flex-col gap-3 md:gap-4 xl:col-span-3"}>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
