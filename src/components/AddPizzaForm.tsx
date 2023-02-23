import { FC, useState, ChangeEvent } from "react";
import "./styles.css";

interface NewPizza {
  title: string;
  price: string;
  img: string;
}
const initState = {
  title: "",
  price: "",
  img: "",
};

export const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<NewPizza>(initState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange", e.target);
  };
  return (
    <form>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};
