import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import styles from "./MainLayout.module.scss";

const MainLayout = ({children}: any) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.wrapper__main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
