import styles from "./Nav.module.scss";
import Link from "next/link";

const MainNav = ({ links, onCloseMenu }) => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        {links &&
          links.map((link) => (
            <li key={link.id} onClick={onCloseMenu}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MainNav;
