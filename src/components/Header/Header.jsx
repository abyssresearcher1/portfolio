import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <nav className={styles.header_nav}>
          <Link to="/" className={styles.main_link}>Главная</Link>
          <Link to="about" className={styles.about_link}>Обо мне</Link>
          <Link to="projects" className={styles.project_link}>Проекты</Link>
          <Link to="resume" className={styles.resume_link}>Резюме</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
