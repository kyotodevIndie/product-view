import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="contato"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
