import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { Character } from "~/types";

interface CharactersProps {
  characters: Character[];
}

export const useCharacters = routeLoader$(async () => {
  try {
    return await fetchCharacters();
  } catch (error) {
    console.error(
      "Ha ocurrido el siguiente error a la hora de hacer fetch desde el servidor:",
      error
    );
    return [];
  }
});

export default component$(() => {
  // Posibilidad 1
  // const allCharacters = useStore<CharactersProps>({ characters: [] });

  // const onLoadCharacters = $(async () => {
  //   const characters = await fetchCharacters();
  //   allCharacters.characters = characters;
  // });

  // Posibilidad 2
  const { value: characters } = useCharacters();

  return (
    <div>
      <h1>Cómo hacer fetch con Qwik </h1>
      {/* {allCharacters.characters.map((character: Character) => ( */}
      {characters.map((character: Character) => (
        <div key={character.id}>
          <h2>{character.firstName}</h2>
          <p>{character.email}</p>
          <img src={character.image} alt={character.firstName} />
        </div>
      ))}
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

export async function fetchCharacters(): Promise<[]> {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Ha habido un error a la hora de hacer fetch");
  }
  const results = await response.json();

  return results.users;
}
