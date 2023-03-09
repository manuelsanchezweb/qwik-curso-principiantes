import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  console.log("SERVIDOR: Cuando me monto, aparezco 🐴");
  return (
    <div>
      <button onClick$={() => console.log("CLIENTE: me cargo on demand 👨‍🍳")}>
        Hazme click
      </button>
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
