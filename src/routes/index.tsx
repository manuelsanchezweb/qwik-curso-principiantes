import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const userName = useSignal("manuelsanchezweb");
  const isDinnerDone = useSignal(false);

  const translateBool = (value: boolean) => {
    return value ? "Sí" : "No";
  };

  return (
    <div>
      <h1>useSignal</h1>
      <div>
        <p>
          Nombre de la variable: <strong>{userName.value}</strong>.
        </p>
        <button onClick$={() => (isDinnerDone.value = !isDinnerDone.value)}>
          Cambiar estado de la cena
        </button>
        <button
          onClick$={() =>
            userName.value === "manuelsanchezweb"
              ? (userName.value = "Paco")
              : (userName.value = "manuelsanchezweb")
          }
        >
          Alternar entre Paco y manuelsanchezweb
        </button>
        <p>¿Está la cena hecha?: {isDinnerDone.value.toString()}</p>
        <p>¿Está la cena hecha?: {translateBool(isDinnerDone.value)}</p>
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
