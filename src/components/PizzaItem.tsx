import { FC, useState } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface PizzaItemProps {
  pizza: Pizza;
}

export const PizzaItem: FC<PizzaItemProps> = ({ pizza }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}₽</span>
      <div className="pizza-controls">
        <AiFillEdit />
        <AiFillDelete />
      </div>
    </div>
  );
};
