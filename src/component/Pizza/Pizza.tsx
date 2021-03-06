import React, { FC, useState } from "react";
import { IData } from "../../types/IData";
import styles from "./Pizza.module.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { addPizzaToCart } from "../../redux/reducers/HandleCart";
interface IProps {
  pizza: IData;
}
const Pizza: FC<IProps> = ({ pizza }) => {
  const dispatch = useDispatch();
  const types = ["thin crust", "fat crust"];
  const sizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index: number) => {
    setActiveType(index);
  };
  const onSelectSize = (index: number) => {
    setActiveSize(index);
  };
  return (
    <div className={styles.pizza}>
      <img src={pizza.imageUrl} alt="pizza" />
      <p>{pizza.name}</p>
      <div className={styles.pizza__info}>
        <div className={styles.pizza__type}>
          {types.map((type, index) => (
            <p
              onClick={() => {
                onSelectType(index);
              }}
              className={classNames({
                [styles.active]: activeType === index,
              })}
            >
              {type}
            </p>
          ))}
        </div>
        <div className={styles.pizza__sizes}>
          {sizes.map((size, index) => (
            <p
              onClick={() => {
                onSelectSize(index);
              }}
              className={classNames({
                [styles.active]: activeSize === index,
              })}
            >
              {size}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.pizza__add}>
        <p>{pizza.price} $</p>
        <button
          className={styles.pizza__button}
          onClick={() =>
            dispatch(
              addPizzaToCart({
                name: pizza.name,
                type: types[activeType],
                size: sizes[activeSize],
                imgUrl: pizza.imageUrl,
                price: pizza.price,
              })
            )
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Pizza;
