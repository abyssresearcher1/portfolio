import React from "react";
import image from "../../assets/img/MYface.jpg";
import Layout from "../../Layouts/Layout";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const btnState = {
    display: "flex",
  };
  const toggleFunction = () => {};

  return (
    <Layout>
      <div className={styles.mainpage}>
        <div className={styles.mainpage_wrapper}>
          <div className={styles.mainpage_info}>
            <div className={styles.info_general}>
              <p className={styles.hello_text}>Здравствуйте! Меня зовут</p>
              <h2>Акылбек </h2>
              <p>и я начинающий</p>
              <h1>Front-end developer</h1>
            </div>
            <div className={styles.info_extra}>
              <p>
                Это Сайт-портфолио где вы можете узнать про меня, мой опыт, а
                так же ознакомитсья с моим резюме
              </p>
            </div>
            <div className={styles.mainpage_btn}>
              <span>Показать стек</span>
              <i></i>
            </div>
          </div>
          <div className={styles.mainpage_img}>
            <img src={image} alt="face-image" className={styles.face_image} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
