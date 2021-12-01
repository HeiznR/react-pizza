import MainLayout from "../layouts/MainLayout";
import fetchData from "../redux/actionCreators/FetchData";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Pizza from "../component/Pizza/Pizza";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useDispatch();
  const mass = useTypedSelector((state) => state.fetch.pizzas);
  useEffect(() => {
    dispatch(fetchData("db.json"));
  }, [dispatch]);
  return (
    <MainLayout>
      {mass.map((mas) => {
        return <Pizza key={mas.id} pizza={mas} />;
      })}
    </MainLayout>
  );
};

export default MainPage;
