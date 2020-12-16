import React from "react";
import styles from "./Contact.module.css";
import img from "../img/img.jpg";
import Head from "./Head";

export default function Contact() {
  return (
    <section className={styles.contato}>
      <Head title="contato" description="Entre em contato" />
      <img src={img} alt="Contato" />
      <div>
        <h1>Entre em Contato.</h1>
        <ul className={`${styles.dados} animeLeft`}>
          <li>email@servico.com</li>
          <li>+66 (66) 9 6666-6666</li>
          <li>Av. Sei la onde, 666</li>
        </ul>
      </div>
    </section>
  );
}
