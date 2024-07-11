import React, { useEffect, useState } from "react";
import Layout from "../../Layouts/Layout";
import styles from "./AboutPage.module.css";
import { VscFolder } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPrettier } from "react-icons/si";
import { VscFolderOpened } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import cn from "classnames";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  addDays,
} from "date-fns";

const AboutPage = () => {
  const files = "files"; // Дополнительный класс

  const startDate = new Date("2023-02-01");

  const [timePassed, setTimePassed] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
  });

  const calculateTimePassed = (start, end) => {
    const years = differenceInYears(end, start);
    const months = differenceInMonths(end, start) % 12;
    const totalDays = differenceInDays(end, start);
    const weeks = Math.floor(months / 4);
    const days = totalDays % 7;
    return { years, months, weeks, days };
  };

  useEffect(() => {
    const updateTimePassed = () => {
      const now = new Date();
      setTimePassed(calculateTimePassed(startDate, now));
    };

    updateTimePassed();

    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();

    const timer = setTimeout(updateTimePassed, msUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className={styles.AboutPage}>
        <div className={styles.about_wrapper}>
          <div className={styles.about_general}>
            <div className={styles.sidebar}>
              <div className={styles.sidebar_nav}>
                <span>src </span>
                <span>pages </span>
                <span>about</span>
              </div>
              <div className={styles.sidebar_files}>
                <span className={styles.files_home}>
                  <VscFolder />
                  home
                </span>
                <span className={cn(styles.files_about, files)}>
                  <VscFolderOpened />
                  about
                </span>
                <span className={cn(styles.files_projects, files)}>
                  <VscFolder />
                  projects
                </span>
                <span className={cn(styles.files_pret, files)}>
                  <SiPrettier />
                  .prettier
                </span>
                <span className={cn(styles.files_pack, files)}>
                  <FaNodeJs />
                  package.json
                </span>
                <span className={cn(styles.files_git, files)}>
                  <FaGitAlt />
                  .gitignore
                </span>
              </div>
            </div>
            <div className={styles.about_info}>
              <div className={styles.info_head}>
                <span>
                  <FaReact />
                  About.jsx
                </span>
              </div>
              <div className={styles.me}>
                <h3> {"<h2>Обо мне</h2>"}</h3>
                <p>
                  Меня зовут Акылбек, я Front-end разработчик из Кыргызстана,
                  живу в Бишкеке. Мне нравиться работать и разбираться в
                  веб-разработке. Я постоянно изучаю новые технологии и
                  инструменты для веб-разработки, такие как React и другие.
                  Стараюсь следовать лучшим практикам и стандартам в
                  кодировании, чтобы создавать эффективные и поддерживаемые
                  решения. Я открыт для новых предложений и возможностей,
                  стремлюсь работать над интересными и сложными проектами,
                  которые помогут мне расти как профессионал. В свободное время
                  я люблю играть в видеоигры, а так же углубляться в технологии
                </p>
              </div>
              <div className={styles.hard_skills}>
                <h3>{"<h2>hard skills</h2>"}</h3>
                <p>
                  HTML,BEM, CSS, JavaScript, Scss/Sass, Bootstrap, React, git,
                  github, redux, axios, react-router, figma, npm
                </p>
              </div>
              <div className={styles.soft_skills}>
                <h3>{"<h2>Soft skills</h2>"}</h3>
                <p>
                  Быстро нахожу общий язык с людьми, быстро вникаю и обучаюсь
                  чему то новому, усидчивый и терпеливый
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Опыт работы</h3>
          </div>
          <div className={styles.experience}>
            <div className={styles.experience_counter}>
              <p>{timePassed.years} год</p>
              <p> {timePassed.months} месяцев</p>
              <p> {timePassed.weeks} недель</p>
              <p> {timePassed.days} дней</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
