import { FC } from "react";
import Pizza from "../models/Pizza";
import { PizzaItem } from "./PizzaItem";

interface DisplayPizzasPops {
  pizzasList: Pizza[];
}

export const DisplayPizzas: FC<DisplayPizzasPops> = ({ pizzasList }) => {
  return (
    <div className="conteiner">
      {pizzasList.map((pizza) => {
        return <PizzaItem pizza={pizza} key={pizza.id} />;
      })}
    </div>
  );
};
