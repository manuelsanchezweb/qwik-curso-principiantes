import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Bienvenido al tema de los estilos</h1>
      <p>
        En esta página vamos a cargar una serie de estilos globales que se van a
        aplicar en toda la app. En esta página vamos a tener un botón sin
        estilar, mientras que en la página de <Link href="/style">style</Link>{" "}
        lo vas a tener con styling.
      </p>
      <button>Botón sin estilar</button>
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
