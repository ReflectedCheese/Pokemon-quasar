# English

A Quasar Framework app to test the knowledge about Layouts, Pages and Routing.

## Developer information

**Install the dependencies**

```bash
npm install
```

**Start the app in development mode**

```bash
quasar dev
```

## The exercise

- Add a new route to the app. The route should be named `/pokemon` and it should display the following text: `<h1>Pokémon</h1>`. This text is placed in a new page called `Pokemon.vue`.

- Add a new route to the app. The route should be named `/pokemon/:id` and it should display the following text: `<h1>Pokémon: {{id}}</h1>`. The `:id` should be replaced by the id of the pokemon passed in the route. This text is placed in a new page called `PokemonDetails.vue`.

- Add a new layout to the app. The layout should be named `GymLayout.vue`. Use the [layout-builder](https://quasar.dev/layout-builder) to create a layout that is different from the default one. It must include a `footer`.

- The root of this layout should show a new page with the following text: `<h1>Gym</h1>`. The name of this page is `Gym.vue`.

- Add a new route to the new layout. The route should be named `/gym/:id` and it should display the following text: `<h1>Gym: {{id}}</h1>`. The `:id` should be replaced by the id of the gym passed in the route. This text is placed in a new page called `GymDetails.vue`.

### Vue Router

- When on the Gym page, the user should be able to navigate back to `home` (`/`) by clicking on a button in the footer.

- When on a page from the MainLayout, the side bar should include navigation buttons to all pages:
  - Home
  - Pokémon
  - Pokémon details (this will navigate to `/pokemon/25`)
  - Gym
  - Gym details (this will navigate to `/gym/first`)

# Nederlands

Een Quasar Framework app om de kennis omtrent Layouts, Pages en Routing te testen.

## Informatie voor de ontwikkelaar

**Installeer de dependencies**

```bash
npm install
```

**Start de app in ontwikkelingsmodus**

```bash
quasar dev
```

## De opdracht

- Voeg een nieuwe route toe aan de app. De route moet de naam `/pokemon` hebben en het moet de volgende tekst weergeven: `<h1>Pokémon</h1>`. Deze tekst wordt geplaatst op een nieuwe pagina met de naam `Pokemon.vue`.

- Voeg een nieuwe route toe aan de app. De route moet de naam `/pokemon/:id` hebben en het moet de volgende tekst weergeven: `<h1>Pokémon: {{id}}</h1>`. De `:id` moet vervangen worden door de id van de pokemon die in de route staat. Deze tekst wordt geplaatst op een nieuwe pagina met de naam `PokemonDetails.vue`.

- Voeg een nieuwe layout toe aan de app. De layout moet de naam `GymLayout.vue` hebben. Gebruik de [layout-builder](https://quasar.dev/layout-builder) om een layout te maken die anders dan de standaard layout is. Het moet een `footer` bevatten.

- De root van deze layout moet een nieuwe pagina weergeven met de volgende tekst: `<h1>Gym</h1>`. De naam van deze pagina is `Gym.vue`.

- Voeg een nieuwe route toe aan de nieuwe layout. De route moet de naam `/gym/:id` hebben en het moet de volgende tekst weergeven: `<h1>Gym: {{id}}</h1>`. De `:id` moet vervangen worden door de id van de gym die in de route staat. Deze tekst wordt geplaatst op een nieuwe pagina met de naam `GymDetails.vue`.

### Vue Router

- Wanneer de Gym-pagina bezocht wordt, moet de gebruiker in staat zijn om terug te gaan naar `home` (`/`) door op een knop in de footer te klikken.

- Wanneer de pagina van de MainLayout bezocht wordt, moet de zijbalk aan de linkerkant navigatie-knoppen bevatten:
  - Home
  - Pokémon
  - Pokémon details (dit navigeert naar `/pokemon/25`)
  - Gym
  - Gym details (dit navigeert naar `/gym/first`)