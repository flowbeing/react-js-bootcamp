import styled from "styled-components";

import styles from "./Header.module.css";
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className={styles.custom}>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}