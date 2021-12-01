import MainLayout from "../layouts/MainLayout";
import fetchData from "../redux/actionCreators/FetchData";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Pizza from "../component/Pizza/Pizza";
import { useEffect } from "react";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const pizzasFromDB = useTypedSelector((state) => state.fetch.pizzas);
  useEffect(() => {
    dispatch(fetchData("db.json"));
  }, [dispatch]);
  return (
    <MainLayout>
      <div className={styles.main}>
        {pizzasFromDB.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </div>
    </MainLayout>
  );
};

export default MainPage;
