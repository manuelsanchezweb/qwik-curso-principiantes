import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

interface ShoppingListProps {
  fruits: { banana: number; apple: number; oranges: number };
  vegetables: { pepper: number; broccoli: number };
}

const sum = (a: number, b: number) => a + b;

export default component$(() => {
  const shoppingListStore = useStore<ShoppingListProps>(
    {
      fruits: {
        banana: 6,
        apple: 1,
        oranges: 2,
      },
      vegetables: {
        pepper: 4,
        broccoli: 2,
      },
    },
    { deep: true }
  );

  return (
    <div>
      <h1>useStore</h1>
      <p>
        Con useStore podemos almacenar datos de variables más complejas,{" "}
        <strong>como pueden ser objetos anidados</strong>. En este caso, te
        presento mi lista de la compra ahora que estoy a dieta.
      </p>
      <div>
        <h2>Lista de la compra</h2>
        <p>
          Número de plátanos: <strong>{shoppingListStore.fruits.banana}</strong>
          .
        </p>
        <p>
          Número de manzanas: <strong>{shoppingListStore.fruits.apple}</strong>.
        </p>
        <p>
          Número de pimientos:{" "}
          <strong>{shoppingListStore.vegetables.pepper}</strong>.
        </p>
        <p>
          Número de brócolis:{" "}
          <strong>{shoppingListStore.vegetables.broccoli}</strong>.
        </p>
        <p>
          Total de verduras:{" "}
          <strong>
            {sum(
              shoppingListStore.vegetables.pepper,
              shoppingListStore.vegetables.broccoli
            )}
          </strong>
        </p>
        <button onClick$={() => shoppingListStore.vegetables.pepper++}>
          Añade un pimiento
        </button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
