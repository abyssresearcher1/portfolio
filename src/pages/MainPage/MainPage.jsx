import React, { useEffect, useState, useRef } from "react";
import image from "../../assets/img/MYface.jpg";
import Layout from "../../Layouts/Layout";
import styles from "./MainPage.module.css";
import cn from "classnames";
import TagSphere from "../../tests/TagSphere";

const MainPage = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isStackVisible, setIsStackVisible] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const toggleFunction = () => {
    setIsStackVisible(!isStackVisible);
    setIsImageVisible(!isImageVisible);
    setIsBtnClicked(!isBtnClicked);
  };

  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "SASS",
    "SCSS",
    "Git",
    "Github",
    "JavaScript",
    "React",
    "axios",
    "react-router",
    "Redux",
    "ES6",
    "Adaptive layout",
    "Cross-browser-layout",
    "json",
  ];

  const options = {
    radius: 250,
    maxSpeed: 3,
  };

  return (
    <Layout>
      <div className={styles.mainpage}>
        <div className={styles.mainpage_wrapper}>
          <div className={styles.mainpage_info}>
            <div className={styles.info_general}>
              <p className={styles.hello_text}>Здравствуйте! Меня зовут</p>
              <h2>Акылбек</h2>
              <p>и я </p>
              <h1>Front-end developer</h1>
            </div>
            <div className={styles.info_extra}>
              <p>
                Это Сайт-портфолио где вы можете узнать про меня, а так же про
                мой опыт{" "}
              </p>
            </div>
            <div className={styles.mainpage_btn} onClick={toggleFunction}>
              {!isBtnClicked ? (
                <span>Показать стек</span>
              ) : (
                <span>Скрыть стек</span>
              )}
              <i></i>
            </div>
          </div>
          <div
            className={styles.mainpage_img}
            style={{ position: "relative", width: "500px", height: "500px" }}
          >
            <img
              src={image}
              alt="face-image"
              className={cn(styles.face_image, {
                [styles.face_image_hidden]: !isImageVisible,
              })}
            />
            <div
              className={cn(styles.stack_div, {
                [styles.stack_visible]: isStackVisible,
              })}
            >
              {isStackVisible && <TagSphere texts={skills} options={options} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
