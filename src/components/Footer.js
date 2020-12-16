import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com ❤ por <a href="https://github.com/kyotodevindie">Kyoto</a> |
        Todos os direitos reservados
      </p>
    </footer>
  );
}
