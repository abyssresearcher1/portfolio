import React from "react";
import Layout from "../../Layouts/Layout";
import styles from "./ProjectsPage.module.css";
import { VscFolder } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPrettier } from "react-icons/si";
import { VscFolderOpened } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import aalam from "../../assets/img/aalam_screen.jpg";
import lens from "../../assets/img/3d-lens.jpg";
import parallax from "../../assets/img/parallax-forest.jpg";
import unistore from "../../assets/img/unistore.jpg";
import redux from "../../assets/img/redux-todolist.jpg";
import pokedex from "../../assets/img/pokedex.jpg";
import weather from "../../assets/img/weather-app.jpg";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Aalam.kg",
      img: aalam,
      description:
      "первая работа и коммерческий опыт",
      link: "adasdasd",
    },
    {
      name: "3d-lens",
      img: lens,
      description:
        "проект для ютуба",
      link: "dasdasdasdas",
    },
    {
      name: "Fairy forest",
      img: parallax,
      description:
        "проект для ютуба",
      link: "asdasdasd",
    },
    {
      name: "Unistore",
      img: unistore,
      description:
        "вторая работа",
      link: "asdasdasda",
    },
  ];

  const petProjects = [
    {
      name: "Redux-todolist",
      img: redux,
      description:
        "Todolist с использованием redux",
      link: "dasdasdasd",
    },
    {
      name: "Pokedex",
      img: pokedex,
      description:
        "pokedex",
      link: "dasdasdasd",
    },
    {
      name: "Weather-app",
      img: weather,
      description:
        "приложение погоды",
      link: "dasdasdasd",
    },
  ];

  return (
    <Layout>
      <div className={styles.prjects}>
        <div className={styles.projects_wrapper}>
          <div className={styles.projects_general}>
            <div className={styles.sidebar}>
              <div className={styles.sidebar_nav}>
                <span>src </span>
                <span>pages </span>
                <span>projects</span>
              </div>
              <div className={styles.sidebar_files}>
                <span className={styles.files_home}>
                  <VscFolder />
                  home
                </span>
                <span className={styles.files_about}>
                  <VscFolder />
                  about
                </span>
                <span className={styles.files_projects}>
                  <VscFolderOpened />
                  projects
                </span>
                <span className={styles.files_pret}>
                  <SiPrettier />
                  .prettier
                </span>
                <span className={styles.files_pack}>
                  <FaNodeJs />
                  package.json
                </span>
                <span className={styles.files_git}>
                  <FaGitAlt />
                  .gitignore
                </span>
              </div>
            </div>
            <div className={styles.projects_info}>
              <div className={styles.info_head}>
                <div className={styles.info_head_tabs}>
                  <div className={styles.info_head_about}>
                    <span>
                      <FaReact />
                      About.jsx
                    </span>
                  </div>
                  <div className={styles.info_head_projects}>
                    <FaReact />
                    Projects.jsx
                  </div>
                </div>
              </div>
              <div className={styles.com_projects_title}>
                <h2>Коммерческие проекты</h2>
              </div>
              <div className={styles.com_projects_cards}>
                <div className={styles.cards}>
                  {projects &&
                    projects.map((item) => {
                      return (
                        <div className={styles.card}>
                          <img src={item.img} alt="images" />
                          <span className={styles.card_name}>{item.name}</span>
                          <p className={styles.cards_description}>
                            {item.description}
                          </p>
                          <button className={styles.card_btn}>
                            <a href={item.link}>сайт</a>
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>{" "}
              <div className={styles.pet_projects_title}>
                <h2>Пет проекты</h2>
              </div>
              <div className={styles.pet_projects_cards}>
                <div className={styles.cards}>
                  {petProjects &&
                    petProjects.map((item) => {
                      return (
                        <div className={styles.card}>
                          <img src={item.img} alt="images" />
                          <span className={styles.card_name}>{item.name}</span>
                          <p className={styles.cards_description}>
                            {item.description}
                          </p>
                          <button className={styles.card_btn}>
                            <a href={item.link}>Проект</a>
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
