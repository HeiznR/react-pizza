import React, { FC, useState } from "react";
import { IData } from "../../types/IData";
import styles from "./Pizza.module.scss";
import classNames from "classnames";
interface IProps {
  pizza: IData;
}
const Pizza: FC<IProps> = ({ pizza }) => {
  const types = ["thin crust", "fat crust"];
  const sizes = ["26", "30", "40"];
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
        <p>od {pizza.price} zł</p>
        <button className={styles.pizza__button}>Add</button>
      </div>
    </div>
  );
};

export default Pizza;
