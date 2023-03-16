import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Headline from "~/components/headline";

export default component$(() => {
  return (
    <div>
      <Headline text="Este headline me representa" />
      <Headline text="Esto no me gusta" />
      <Headline />
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
