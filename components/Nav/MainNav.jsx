import styles from "./Nav.module.scss";

const links = [
  { id: 0, href: "/", title: "Главаня" },
  { id: 1, href: "#", title: "Структура" },
  { id: 2, href: "#", title: "Преимущества" },
  { id: 3, href: "#", title: "Процесс открытия" },
  { id: 4, href: "#", title: "Стоимость" },
  { id: 5, href: "#", title: "FAQ" },
  { id: 6, href: "#", title: "Контакты" },
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
