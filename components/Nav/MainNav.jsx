import styles from "./Nav.module.scss";
import Link from "next/link";

const links = [
  { id: 0, href: "/", title: "Главная" },
  { id: 1, href: "#structure", title: "Структура" },
  { id: 2, href: "#advantages", title: "Преимущества" },
  { id: 3, href: "#steps", title: "Процесс открытия" },
  { id: 4, href: "#price", title: "Стоимость" },
  { id: 5, href: "#faq", title: "FAQ" },
  { id: 6, href: "#contacts", title: "Контакты" },
];

const MainNav = ({ navLinks, onCloseMenu }) => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        {links.map((link) => (
          <li key={link.id} onClick={onCloseMenu}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
