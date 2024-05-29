import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import tg_icon from "../../assets/svg/telegram.svg";
import li_icon from "../../assets/svg/linkedin.svg";
import git_icon from "../../assets/svg/github.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.contacts}>
          <Link className={styles.tg_link}>
            <img src={tg_icon} alt="" className={styles.tg_icon} />
          </Link>
          <Link className={styles.li_link}>
            <img src={li_icon} alt="" className={styles.li_icon} />
          </Link>
          <Link className={styles.git_link}>
            <img src={git_icon} alt="" />
          </Link>
          <Link className={styles.gmail_link}>akylbekashyraliev@gmail.com</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
