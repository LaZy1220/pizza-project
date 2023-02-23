import { FC } from "react";
import Pizza from "../models/Pizza";
import { PizzaItem } from "./PizzaItem";

interface DisplayPizzasPops {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const DisplayPizzas: FC<DisplayPizzasPops> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="conteiner">
      {pizzasList.map((pizza) => {
        return (
          <PizzaItem
            pizza={pizza}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
            key={pizza.id}
          />
        );
      })}
    </div>
  );
};
